package com.studyhive.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.studyhive.dto.request.*;
import com.studyhive.dto.response.ApiResponse;
import com.studyhive.dto.response.AuthResponse;
import com.studyhive.dto.response.TokenResponse;
import com.studyhive.dto.response.UserDto;
import com.studyhive.entity.*;
import com.studyhive.exception.BadRequestException;
import com.studyhive.exception.ResourceNotFoundException;
import com.studyhive.exception.UnauthorizedException;
import com.studyhive.repository.OtpRepository;
import com.studyhive.repository.RefreshTokenRepository;
import com.studyhive.repository.UserRepository;
import com.studyhive.security.JwtUtils;
import com.studyhive.service.AuthService;
import com.studyhive.service.EmailService;
import com.studyhive.service.OtpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final OtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final OtpService otpService;
    private final EmailService emailService;
    private final ObjectMapper objectMapper;

    @Value("${app.jwt.refresh-expiration-ms:604800000}")
    private long refreshExpirationMs;

    @Override
    public ApiResponse initiateSignup(SignupRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email address is already registered: " + request.getEmail());
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new BadRequestException("Username is already taken: " + request.getUsername());
        }

        try {
            String pendingDataJson = objectMapper.writeValueAsString(request);
            String otpCode = otpService.generateAndSaveOtp(request.getEmail(), OtpPurpose.SIGNUP, pendingDataJson);
            emailService.sendOtpEmail(request.getEmail(), otpCode, "Account Registration");

            return ApiResponse.builder()
                    .success(true)
                    .message("Verification OTP sent to " + request.getEmail() + ". Please verify to complete registration.")
                    .build();
        } catch (Exception e) {
            log.error("Error initiating signup for {}: {}", request.getEmail(), e.getMessage());
            throw new BadRequestException("Failed to process registration request", e);
        }
    }

    @Override
    @Transactional
    public AuthResponse verifySignupOtp(VerifyOtpRequest request) {
        Otp otp = otpService.verifyAndRetrieveOtp(request.getEmail(), request.getOtp(), OtpPurpose.SIGNUP);

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Account already verified and created for this email");
        }

        try {
            SignupRequest pendingData = objectMapper.readValue(otp.getPendingDataJson(), SignupRequest.class);

            Role userRole = Role.STUDENT;
            if (pendingData.getRole() != null) {
                try {
                    userRole = Role.valueOf(pendingData.getRole().toUpperCase());
                } catch (IllegalArgumentException ignored) {}
            }

            User user = User.builder()
                    .name(pendingData.getName())
                    .username(pendingData.getUsername())
                    .email(pendingData.getEmail())
                    .password(passwordEncoder.encode(pendingData.getPassword()))
                    .authProvider(AuthProvider.EMAIL)
                    .role(userRole)
                    .university(pendingData.getUniversity())
                    .build();

            User savedUser = userRepository.save(user);

            String accessToken = jwtUtils.generateTokenFromEmail(savedUser.getEmail());
            RefreshToken refreshToken = createRefreshToken(savedUser);

            return AuthResponse.builder()
                    .success(true)
                    .message("Account registered and verified successfully")
                    .accessToken(accessToken)
                    .refreshToken(refreshToken.getToken())
                    .user(mapToUserDto(savedUser))
                    .build();
        } catch (Exception e) {
            log.error("Failed to create user after OTP verification: {}", e.getMessage());
            throw new BadRequestException("Failed to complete account registration", e);
        }
    }

    @Override
    @Transactional
    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        String accessToken = jwtUtils.generateAccessToken(authentication);
        RefreshToken refreshToken = createRefreshToken(user);

        return AuthResponse.builder()
                .success(true)
                .message("User logged in successfully")
                .accessToken(accessToken)
                .refreshToken(refreshToken.getToken())
                .user(mapToUserDto(user))
                .build();
    }

    @Override
    @Transactional
    public AuthResponse googleAuth(GoogleAuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseGet(() -> {
                    String baseUsername = request.getEmail().split("@")[0];
                    String uniqueUsername = baseUsername;
                    int count = 1;
                    while (userRepository.existsByUsername(uniqueUsername)) {
                        uniqueUsername = baseUsername + count++;
                    }

                    User newUser = User.builder()
                            .name(request.getName())
                            .username(uniqueUsername)
                            .email(request.getEmail())
                            .authProvider(AuthProvider.GOOGLE)
                            .role(Role.STUDENT)
                            .profileImage(request.getProfileImage())
                            .build();

                    return userRepository.save(newUser);
                });

        String accessToken = jwtUtils.generateTokenFromEmail(user.getEmail());
        RefreshToken refreshToken = createRefreshToken(user);

        return AuthResponse.builder()
                .success(true)
                .message("Google authentication successful")
                .accessToken(accessToken)
                .refreshToken(refreshToken.getToken())
                .user(mapToUserDto(user))
                .build();
    }

    @Override
    public ApiResponse initiateForgotPassword(ForgotPasswordRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + request.getEmail()));

        String otpCode = otpService.generateAndSaveOtp(user.getEmail(), OtpPurpose.FORGOT_PASSWORD, null);
        emailService.sendOtpEmail(user.getEmail(), otpCode, "Password Reset");

        return ApiResponse.builder()
                .success(true)
                .message("Password reset OTP code sent to " + request.getEmail())
                .build();
    }

    @Override
    @Transactional
    public ApiResponse resetPassword(ResetPasswordRequest request) {
        otpService.verifyAndRetrieveOtp(request.getEmail(), request.getOtp(), OtpPurpose.FORGOT_PASSWORD);

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        // Invalidate previous refresh tokens
        refreshTokenRepository.deleteByUser(user);

        return ApiResponse.builder()
                .success(true)
                .message("Password reset successfully. You can now login with your new password.")
                .build();
    }

    @Override
    @Transactional
    public TokenResponse refreshToken(RefreshTokenRequest request) {
        RefreshToken refreshToken = refreshTokenRepository.findByToken(request.getRefreshToken())
                .orElseThrow(() -> new UnauthorizedException("Invalid refresh token"));

        if (refreshToken.getExpiryDate().isBefore(Instant.now())) {
            refreshTokenRepository.delete(refreshToken);
            throw new UnauthorizedException("Refresh token has expired. Please log in again.");
        }

        User user = refreshToken.getUser();
        String newAccessToken = jwtUtils.generateTokenFromEmail(user.getEmail());

        return TokenResponse.builder()
                .accessToken(newAccessToken)
                .refreshToken(refreshToken.getToken())
                .expiresInMs(refreshExpirationMs)
                .build();
    }

    @Override
    @Transactional
    public ApiResponse logout(String refreshToken) {
        if (refreshToken != null) {
            refreshTokenRepository.deleteByToken(refreshToken);
        }
        return ApiResponse.builder()
                .success(true)
                .message("Logged out successfully")
                .build();
    }

    private RefreshToken createRefreshToken(User user) {
        refreshTokenRepository.deleteByUser(user);

        RefreshToken token = RefreshToken.builder()
                .user(user)
                .token(UUID.randomUUID().toString())
                .expiryDate(Instant.now().plusMillis(refreshExpirationMs))
                .build();

        return refreshTokenRepository.save(token);
    }

    private UserDto mapToUserDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .username(user.getUsername())
                .email(user.getEmail())
                .authProvider(user.getAuthProvider())
                .role(user.getRole())
                .profileImage(user.getProfileImage())
                .university(user.getUniversity())
                .createdAt(user.getCreatedAt())
                .build();
    }
}
