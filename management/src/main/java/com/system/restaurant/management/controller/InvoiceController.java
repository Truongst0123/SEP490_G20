package com.system.restaurant.management.controller;

import com.system.restaurant.management.dto.PaymentRequestDto;
import com.system.restaurant.management.entity.Invoice;
import com.system.restaurant.management.entity.PaymentRecord;
import com.system.restaurant.management.service.ReceptionistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/receptionist/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final ReceptionistService receptionistService;

    @PostMapping("/generate/{orderId}")
    public Invoice generateInvoice(@PathVariable Integer orderId) {
        return receptionistService.generateInvoice(orderId);
    }

    @PostMapping("/discount/{orderId}")
    public Invoice applyDiscount(@PathVariable Integer orderId, @RequestParam double amount) {
        return receptionistService.applyDiscount(orderId, amount);
    }

    @PostMapping("/invoices/{orderId}/payment")
    public PaymentRecord processPayment(@PathVariable Integer orderId, @RequestBody PaymentRequestDto req) {
        return receptionistService.processPayment(orderId, req);
    }

    @GetMapping(value = "/export/{invoiceId}", produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] exportInvoicePdf(@PathVariable Integer invoiceId) {
        return receptionistService.exportInvoicePdf(invoiceId);
    }
}
