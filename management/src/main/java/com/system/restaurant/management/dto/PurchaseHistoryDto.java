package com.system.restaurant.management.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
public class PurchaseHistoryDto {
    private Integer orderId;
    private LocalDateTime orderDate;
    private String customerName;
    private String phone;
    private String orderType;
    private BigDecimal subTotal;
    private BigDecimal discountAmount;
    private BigDecimal finalTotal;
    private String paymentMethod;
    private Boolean isRefunded;
}
