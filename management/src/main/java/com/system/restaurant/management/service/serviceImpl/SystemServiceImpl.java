package com.system.restaurant.management.service.serviceImpl;

import com.system.restaurant.management.entity.Invoice;
import com.system.restaurant.management.entity.KitchenTicket;
import com.system.restaurant.management.entity.Notification;
import com.system.restaurant.management.entity.Order;
import com.system.restaurant.management.repository.InvoiceRepository;
import com.system.restaurant.management.repository.KitchenTicketRepository;
import com.system.restaurant.management.repository.NotificationRepository;
import com.system.restaurant.management.service.SystemService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
@Transactional
public class SystemServiceImpl implements SystemService {

    private final InvoiceRepository invoiceRepo;
    //private final CustomerPointsService pointsSvc;
    private final NotificationRepository notifyRepo;
    private final KitchenTicketRepository ticketRepo;

    public SystemServiceImpl(InvoiceRepository invoiceRepo,
                             //CustomerPointsService pointsSvc,
                             NotificationRepository notifyRepo,
                             KitchenTicketRepository ticketRepo) {
        this.invoiceRepo = invoiceRepo;
        //this.pointsSvc   = pointsSvc;
        this.notifyRepo  = notifyRepo;
        this.ticketRepo  = ticketRepo;
    }

    public Invoice generateInvoice(Long orderId) {
        Order order = new Order();
        order.setOrderId(orderId.intValue());

        Invoice inv = Invoice.builder()
                .order(order)
                .subTotal(BigDecimal.valueOf(0.0))
                .discountAmount(BigDecimal.valueOf(0.0))
                .finalTotal(BigDecimal.valueOf(0.0))
                .issuedBy(null)
                .issuedAt(LocalDateTime.now())
                .build();

        inv = invoiceRepo.save(inv);

        // nếu có tính điểm khách
        //pointsSvc.addPoints(order.getOrderId(), inv.getFinalTotal());

        return inv;
    }

    @Override
    public Notification sendNotification(Notification notification) {
        // ghi lại thời gian
        notification.setSentAt(LocalDateTime.now());
        return notifyRepo.save(notification);
    }

    @Override
    public KitchenTicket triggerKitchenTicket(Long orderId) {
        KitchenTicket kt = KitchenTicket.builder()
                .orderId(orderId.intValue())
                .printedAt(LocalDateTime.now())
                .printedBy(null)
                .build();
        return ticketRepo.save(kt);
    }

    @Override
    public void lockReservationEdit(Long reservationId) {
        // TODO: implement khi có ReservationRepository hoặc Entity
    }

    @Override
    public void lockOrderEdit(Long orderId) {
        // TODO: implement khi có OrderRepository hoặc Entity
    }
}