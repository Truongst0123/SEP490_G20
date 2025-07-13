package com.system.restaurant.management.service;

import com.system.restaurant.management.dto.OrderRequestDto;
import com.system.restaurant.management.dto.PaymentRequestDto;
import com.system.restaurant.management.dto.ReservationRequestDto;
import com.system.restaurant.management.entity.*;
import java.util.List;

public interface ReceptionistService {
    Order placeTakeawayOrder(OrderRequestDto dto);
    Invoice generateInvoice(Integer orderId);
    Invoice applyDiscount(Integer orderId, double amount);
    PaymentRecord processPayment(Integer orderId, PaymentRequestDto req);
    byte[] exportInvoicePdf(Integer invoiceId);

    Reservation createReservation(ReservationRequestDto dto);
    void confirmReservation(Integer reservationId);
    void cancelReservation(Integer reservationId);
    List<Reservation> viewReservationCalendar();
    Notification sendReservationReminder(Integer reservationId);
}