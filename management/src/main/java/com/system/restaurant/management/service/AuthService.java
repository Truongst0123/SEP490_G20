package com.system.restaurant.management.service;

import com.system.restaurant.management.entity.User;

public interface AuthService {
    User login(String username, String password);
    boolean validateUser(String username, String password);
}