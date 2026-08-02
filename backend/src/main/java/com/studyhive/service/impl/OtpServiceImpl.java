package com.studyhive.service.impl;

import com.studyhive.entity.Otp;
import com.studyhive.entity.OtpPurpose;
import com.studyhive.exception.BadRequestException;
import com.studyhive.repository.OtpRepository;
import com.studyhive.service.OtpService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class OtpServiceImpl implements OtpService {

    private final OtpRepository otpRepository;
    private final SecureRandom random = new SecureRandom();

    @Value("${app.otp.expiration-minutes:5}")
    private int expirationMinutes;

    @Value("${app.otp.max-attempts:3}")
    private int maxAttempts;

    @Override
    @Transactional
    public String generateAndSaveOtp(String email, OtpPurpose purpose, String pendingDataJson) {
        // Clean up previous OTPs for email and purpose
        otpRepository.deleteByEmailAndPurpose(email, purpose);

        String otpCode = String.format("%06d", random.nextInt(1000000));
        LocalDateTime expiryTime = LocalDateTime.now().plusMinutes(expirationMinutes);

        Otp otp = Otp.builder()
                .email(email)
                .otp(otpCode)
                .purpose(purpose)
                .expiryTime(expiryTime)
                .pendingDataJson(pendingDataJson)
                .used(false)
                .attempts(0)
                .build();

        otpRepository.save(otp);
        return otpCode;
    }

    @Override
    @Transactional
    public Otp verifyAndRetrieveOtp(String email, String otpCode, OtpPurpose purpose) {
        Otp otp = otpRepository.findTopByEmailAndPurposeAndUsedIsFalseOrderByCreatedAtDesc(email, purpose)
                .orElseThrow(() -> new BadRequestException("No active verification code found for this email"));

        if (otp.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new BadRequestException("Verification code has expired. Please request a new code.");
        }

        if (otp.getAttempts() >= maxAttempts) {
            throw new BadRequestException("Maximum OTP verification attempts exceeded. Please request a new code.");
        }

        if (!otp.getOtp().equals(otpCode)) {
            otp.setAttempts(otp.getAttempts() + 1);
            otpRepository.save(otp);
            throw new BadRequestException("Invalid verification code. Attempts remaining: " + (maxAttempts - otp.getAttempts()));
        }

        otp.setUsed(true);
        otpRepository.save(otp);
        return otp;
    }
}
