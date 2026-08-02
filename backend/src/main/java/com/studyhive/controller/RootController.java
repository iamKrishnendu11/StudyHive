package com.studyhive.controller;

import com.studyhive.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/")
    public ResponseEntity<ApiResponse> rootWelcome() {
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("StudyHive API Backend Gateway is RUNNING")
                .build());
    }
}
