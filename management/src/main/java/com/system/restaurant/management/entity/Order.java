package com.system.restaurant.management.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderID")
    private Integer orderId;

    @Column(name = "OrderType", nullable = false, length = 20)
    private String orderType;

    @Column(name = "CustomerName", length = 200)
    private String customerName;

    @Column(name = "Phone", length = 20)
    private String phone;

    @Column(name = "SubTotal", nullable = false, precision = 10, scale = 2)
    private BigDecimal subTotal;

    @Column(name = "DiscountAmount", nullable = false, precision = 10, scale = 2)
    private BigDecimal discountAmount = BigDecimal.ZERO;

    @Column(name = "FinalTotal", nullable = false, precision = 10, scale = 2)
    private BigDecimal finalTotal;

    @Column(name = "TableID")
    private Integer tableId;

    @Column(name = "CreatedAt", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "StatusID", nullable = false)
    private Integer statusId;

    @Column(name = "IsRefunded", nullable = false)
    private Integer isRefunded = 0;

    @Column(name = "Notes", length = 255)
    private String notes;
}