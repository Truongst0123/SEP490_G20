package com.system.restaurant.management.controller;

import com.system.restaurant.management.dto.RegisterRequest;
import com.system.restaurant.management.service.AuthService;
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
}