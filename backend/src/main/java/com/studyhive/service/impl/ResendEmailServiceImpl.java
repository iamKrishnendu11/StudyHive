package com.studyhive.service.impl;

import com.studyhive.service.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ResendEmailServiceImpl implements EmailService {

    @Value("${app.resend.api-key:}")
    private String resendApiKey;

    @Value("${app.resend.from:StudyHive <onboarding@resend.dev>}")
    private String fromEmail;

    private final RestClient restClient = RestClient.builder().build();

    @Override
    public void sendOtpEmail(String toEmail, String otp, String purpose) {
        log.info("==================================================================");
        log.info("[STUDYHIVE OTP CODE] Email: {} | Purpose: {} | Code: {}", toEmail, purpose, otp);
        log.info("==================================================================");

        if (resendApiKey == null || resendApiKey.isBlank() || resendApiKey.contains("your_resend_api_key")) {
            log.warn("RESEND_API_KEY is not configured. OTP code logged above for local testing.");
            return;
        }

        String cleanFrom = fromEmail != null ? fromEmail.replace("RESEND_FROM=", "").trim() : "StudyHive <onboarding@resend.dev>";
        String subject = "Your StudyHive Verification Code";
        String htmlContent = buildOtpHtmlTemplate(otp, purpose);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("from", cleanFrom);
        requestBody.put("to", Collections.singletonList(toEmail));
        requestBody.put("subject", subject);
        requestBody.put("html", htmlContent);

        try {
            restClient.post()
                    .uri("https://api.resend.com/emails")
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + resendApiKey.trim())
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .toBodilessEntity();

            log.info("Successfully dispatched OTP email via Resend API to: {}", toEmail);
        } catch (Exception e) {
            log.error("Failed to send email via Resend API to {}: {}", toEmail, e.getMessage());
            log.warn("Falling back to logged OTP code. Use code [{}] to verify account.", otp);
        }
    }

    private String buildOtpHtmlTemplate(String otp, String purpose) {
        String purposeTitle = "SIGNUP".equalsIgnoreCase(purpose) || "Account Registration".equalsIgnoreCase(purpose)
                ? "Account Verification"
                : "Password Reset";

        return """
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>StudyHive Verification Code</title>
                  <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #070b14; color: #f8fafc; margin: 0; padding: 0; }
                    .container { max-width: 560px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 36px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                    .logo { font-size: 24px; font-weight: 800; color: #ffffff; text-decoration: none; display: inline-block; margin-bottom: 24px; }
                    .logo span { color: #6366f1; }
                    .badge { display: inline-block; padding: 4px 12px; background-color: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
                    h2 { color: #ffffff; font-size: 22px; margin-top: 0; margin-bottom: 12px; font-weight: 700; }
                    p { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
                    .otp-box { background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(124, 58, 237, 0.2)); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 12px; font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #38bdf8; text-align: center; padding: 18px; margin: 24px 0; font-family: monospace; }
                    .footer { border-top: 1px solid #1e293b; padding-top: 20px; margin-top: 28px; font-size: 12px; color: #64748b; text-align: center; }
                  </style>
                </head>
                <body>
                  <div className="container" style="max-width: 560px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 36px;">
                    <div className="logo" style="font-size: 24px; font-weight: 800; color: #ffffff; margin-bottom: 20px;">Study<span style="color: #6366f1;">Hive</span></div>
                    <div className="badge" style="display: inline-block; padding: 4px 12px; background-color: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 9999px; font-size: 12px; font-weight: 600;">%s</div>
                    <h2 style="color: #ffffff; font-size: 20px; margin-bottom: 10px;">Welcome to StudyHive!</h2>
                    <p style="color: #94a3b8; font-size: 14px; line-height: 1.6;">Your 6-digit verification code is:</p>
                    <div className="otp-box" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(124, 58, 237, 0.2)); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 12px; font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #38bdf8; text-align: center; padding: 18px; margin: 20px 0; font-family: monospace;">%s</div>
                    <p style="color: #94a3b8; font-size: 13px; line-height: 1.6;">This code expires in <strong>5 minutes</strong>. If you didn't request this code, you can safely ignore this email.</p>
                    <div className="footer" style="border-top: 1px solid #1e293b; padding-top: 18px; margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
                      Learn Together. Grow Together.<br>
                      <strong>StudyHive Team</strong>
                    </div>
                  </div>
                </body>
                </html>
                """.formatted(purposeTitle, otp);
    }
}
