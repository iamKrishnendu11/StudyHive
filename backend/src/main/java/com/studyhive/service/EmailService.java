package com.studyhive.service;

public interface EmailService {
    void sendOtpEmail(String toEmail, String otp, String purpose);
}
