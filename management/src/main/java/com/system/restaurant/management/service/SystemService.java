package com.system.restaurant.management.service;

import com.system.restaurant.management.entity.*;

public interface SystemService {
    Invoice generateInvoice(Long orderId);
    Notification sendNotification(Notification notification);
    KitchenTicket triggerKitchenTicket(Long orderId);
    void lockReservationEdit(Long reservationId);
    void lockOrderEdit(Long orderId);
}