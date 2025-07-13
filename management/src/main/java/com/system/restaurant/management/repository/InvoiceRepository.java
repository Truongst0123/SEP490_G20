package com.system.restaurant.management.repository;

import com.system.restaurant.management.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
    List<Invoice> findByIssuedBy(Integer issuedBy);
    Optional<Invoice> findByOrder_OrderId(Integer orderId);
}