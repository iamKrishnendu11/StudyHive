package com.studyhive.service;

import com.studyhive.entity.Otp;
import com.studyhive.entity.OtpPurpose;

public interface OtpService {
    String generateAndSaveOtp(String email, OtpPurpose purpose, String pendingDataJson);
    Otp verifyAndRetrieveOtp(String email, String otpCode, OtpPurpose purpose);
}
