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

    @GetMapping("/getAll")
    public ResponseEntity<List<RestaurantTable>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("getById/{id}")
    public ResponseEntity<RestaurantTable> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<RestaurantTable> create(@RequestBody RestaurantTable table) {
        return ResponseEntity.ok(service.create(table));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RestaurantTable> update(@PathVariable Integer id,
                                                  @RequestBody RestaurantTable table) {
        return ResponseEntity.ok(service.update(id, table));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("getAllTypes")
    public ResponseEntity<List<String>> getAllTypes() {
        return ResponseEntity.ok(service.getAllTableTypes());
    }

    @GetMapping("/getByTableType/{type}")
    public ResponseEntity<List<RestaurantTable>> getByType(@PathVariable String type) {
        return ResponseEntity.ok(service.getByTableType(type));
    }
}
