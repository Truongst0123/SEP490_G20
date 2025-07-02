package com.system.restaurant.management.controller;

import com.system.restaurant.management.dto.RevenueReportDto;
import com.system.restaurant.management.service.RevenueService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reports/revenue")
@RequiredArgsConstructor
public class RevenueReportController {
    private final RevenueService service;

    @GetMapping("/shifts")
    public ResponseEntity<List<RevenueReportDto>> byShifts(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return ResponseEntity.ok(service.getRevenueByShifts(date));
    }

    @GetMapping("/daily")
    public ResponseEntity<List<RevenueReportDto>> byDays(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        return ResponseEntity.ok(service.getRevenueByDays(from, to));
    }

    @GetMapping("/monthly")
    public ResponseEntity<List<RevenueReportDto>> byMonths(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        return ResponseEntity.ok(service.getRevenueByMonths(from, to));
    }
}