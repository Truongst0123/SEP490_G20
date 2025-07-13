package com.system.restaurant.management.repository;

import com.system.restaurant.management.entity.KitchenTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KitchenTicketRepository extends JpaRepository<KitchenTicket, Integer> {
    List<KitchenTicket> findByOrderId(Integer orderId);
}