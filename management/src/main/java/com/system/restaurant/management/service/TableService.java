package com.system.restaurant.management.service;

import com.system.restaurant.management.entity.RestaurantTable;
import com.system.restaurant.management.entity.TableGroup;

import java.util.List;

public interface TableService {
    RestaurantTable create(RestaurantTable table);
    RestaurantTable findById(Integer id);
    List<RestaurantTable> findAll();
    RestaurantTable update(Integer id, RestaurantTable table);
    void delete(Integer id);

    //waiter
    RestaurantTable updateTableStatus(Integer tableId, String status);
    TableGroup splitTable(List<Integer> tableIds, Integer createdBy, String notes);
    TableGroup mergeTable(List<Integer> tableIds, Integer createdBy, String notes);
    List<RestaurantTable> getAvailableTables();
    List<RestaurantTable> getTablesByStatus(String status);
    List<RestaurantTable> getTablesByArea(Integer areaId);
}

