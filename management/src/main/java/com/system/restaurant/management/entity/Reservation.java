package com.system.restaurant.management.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Reservations")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ReservationID")
    private Integer reservationId;

    @Column(name = "CustomerID")
    private Integer customerId;

    @Column(name = "CustomerName", length = 255)
    private String customerName;

    @Column(name = "Phone", nullable = false, length = 20)
    private String phone;

    @Column(name = "Email", length = 100)
    private String email;

    @Column(name = "TableID", nullable = false)
    private Integer tableId;

    @Column(name = "ReservationAt", nullable = false)
    private LocalDateTime reservationAt;

    @Column(name = "StatusID", nullable = false)
    private Integer statusId;

    @Column(name = "CreatedAt", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "Notes", length = 255)
    private String notes;
}