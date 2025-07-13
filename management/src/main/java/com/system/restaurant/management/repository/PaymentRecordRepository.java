package com.system.restaurant.management.repository;

import com.system.restaurant.management.entity.PaymentRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRecordRepository extends JpaRepository<PaymentRecord, Integer> {
    List<PaymentRecord> findByInvoice_InvoiceId(Integer invoiceId);
}