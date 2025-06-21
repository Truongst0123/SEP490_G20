package com.system.restaurant.management.controller;

import com.system.restaurant.management.entity.RestaurantTable;
import com.system.restaurant.management.service.TableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
@RequiredArgsConstructor
public class TableController {
    private final TableService service;

    @GetMapping
    public ResponseEntity<List<RestaurantTable>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTable> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<RestaurantTable> create(@RequestBody RestaurantTable table) {
        return ResponseEntity.ok(service.create(table));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantTable> update(@PathVariable Integer id,
                                                  @RequestBody RestaurantTable table) {
        return ResponseEntity.ok(service.update(id, table));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
