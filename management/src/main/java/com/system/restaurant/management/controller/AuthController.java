package com.system.restaurant.management.controller;

import com.system.restaurant.management.dto.LoginRequest;
import com.system.restaurant.management.dto.LoginResponse;
import com.system.restaurant.management.dto.RegisterRequest;
import com.system.restaurant.management.entity.Role;
import com.system.restaurant.management.entity.User;
import com.system.restaurant.management.service.AuthService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("register/employee")
    public ResponseEntity<RegisterRequest> registerEmployee(
            @Valid @RequestBody RegisterRequest req
    ) {
        authService.registerEmployee(req);
        return ResponseEntity.ok(req);
    }

    @PostMapping("register/customer")
    public ResponseEntity<RegisterRequest> registerCustomer(
            @Valid @RequestBody RegisterRequest req
    ) {
        authService.registerCustomer(req);
        return ResponseEntity.ok(req);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request, HttpSession session) {
        User user = authService.validateLogin(request);
        String role = user.getRoles().iterator().next().getRoleName();
        session.setAttribute("userId", user.getId());
        session.setAttribute("role", role); // giả sử 1 role

        return ResponseEntity.ok(new LoginResponse("Đăng nhập thành công", role));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // xóa session
        return ResponseEntity.ok("Đăng xuất thành công");
    }

    @GetMapping("/check-session")
    public ResponseEntity<String> checkLogin(HttpSession session) {
        Object userId = session.getAttribute("userId");
        Object role = session.getAttribute("role");

        if (userId != null) {
            return ResponseEntity.ok("Đã đăng nhập với role: " + role);
        } else {
            return ResponseEntity.status(401).body("Chưa đăng nhập");
        }
    }

}