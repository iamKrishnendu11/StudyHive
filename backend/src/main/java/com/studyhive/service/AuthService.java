package com.studyhive.service;

import com.studyhive.dto.request.*;
import com.studyhive.dto.response.ApiResponse;
import com.studyhive.dto.response.AuthResponse;
import com.studyhive.dto.response.TokenResponse;

public interface AuthService {
    ApiResponse initiateSignup(SignupRequest request);
    AuthResponse verifySignupOtp(VerifyOtpRequest request);
    AuthResponse login(LoginRequest request);
    AuthResponse googleAuth(GoogleAuthRequest request);
    ApiResponse initiateForgotPassword(ForgotPasswordRequest request);
    ApiResponse resetPassword(ResetPasswordRequest request);
    TokenResponse refreshToken(RefreshTokenRequest request);
    ApiResponse logout(String refreshToken);
}
