package com.system.restaurant.management.service;

import com.system.restaurant.management.entity.RestaurantTable;
import java.util.List;

public interface ManageTableService {
    RestaurantTable create(RestaurantTable table);
    RestaurantTable findById(Integer id);
    List<RestaurantTable> findAll();
    RestaurantTable update(Integer id, RestaurantTable table);
    void delete(Integer id);
    List<String> getAllTableTypes();
    List<RestaurantTable> getByTableType(String tableType);
}

