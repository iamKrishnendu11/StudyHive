package com.studyhive.dto.response;

import com.studyhive.entity.AuthProvider;
import com.studyhive.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private String id;
    private String name;
    private String username;
    private String email;
    private AuthProvider authProvider;
    private Role role;
    private String profileImage;
    private String university;
    private LocalDateTime createdAt;
}
