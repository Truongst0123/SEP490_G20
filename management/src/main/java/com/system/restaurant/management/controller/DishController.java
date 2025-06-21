package com.system.restaurant.management.controller;

import com.system.restaurant.management.entity.Dish;
import com.system.restaurant.management.service.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dishes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DishController {
    private final DishService dishService;

    /**
     * Lấy tất cả món ăn
     * GET /api/dishes
     */
    @GetMapping
    public ResponseEntity<List<Dish>> getAllDishes() {
        List<Dish> dishes = dishService.findAll();
        return ResponseEntity.ok(dishes);
    }

    /**
     * Lấy món ăn theo ID
     * GET /api/dishes/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Dish> getDishById(@PathVariable Integer id) {
        Dish dish = dishService.findById(id);
        return ResponseEntity.ok(dish);
    }

    /**
     * Tạo mới món ăn
     * POST /api/dishes
     */
    @PostMapping
    public ResponseEntity<Dish> createDish(@RequestBody Dish dish) {
        Dish createdDish = dishService.create(dish);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDish);
    }

    /**
     * Cập nhật món ăn
     * PUT /api/dishes/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Dish> updateDish(@PathVariable Integer id, 
                                          @RequestBody Dish dish) {
        Dish updatedDish = dishService.update(id, dish);
        return ResponseEntity.ok(updatedDish);
    }

    /**
     * Xóa món ăn
     * DELETE /api/dishes/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDish(@PathVariable Integer id) {
        dishService.delete(id);
        return ResponseEntity.noContent().build();
    }

}