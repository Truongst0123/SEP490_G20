package com.system.restaurant.management.controller;

import com.system.restaurant.management.dto.ReservationRequestDto;
import com.system.restaurant.management.entity.Reservation;
import com.system.restaurant.management.entity.Notification;
import com.system.restaurant.management.service.ReceptionistService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receptionist/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final ReceptionistService receptionistService;

    @PostMapping("/reservations")
    public Reservation createReservation(@RequestBody ReservationRequestDto dto) {
        return receptionistService.createReservation(dto);
    }

    @PostMapping("/confirm/{id}")
    public void confirmReservation(@PathVariable Integer id) {
        receptionistService.confirmReservation(id);
    }

    @PostMapping("/cancel/{id}")
    public void cancelReservation(@PathVariable Integer id) {
        receptionistService.cancelReservation(id);
    }

    @GetMapping("/calendar")
    public List<Reservation> viewReservationCalendar() {
        return receptionistService.viewReservationCalendar();
    }

    @PostMapping("/remind/{id}")
    public Notification sendReminder(@PathVariable Integer id) {
        return receptionistService.sendReservationReminder(id);
    }
}
