package com.system.restaurant.management.service.serviceImpl;

import com.system.restaurant.management.entity.RestaurantTable;
import com.system.restaurant.management.exception.ResourceNotFoundException;
import com.system.restaurant.management.repository.TableRepository;
import com.system.restaurant.management.service.TableService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TableServiceImpl implements TableService {
    private final TableRepository repo;

    @Override
    public RestaurantTable create(RestaurantTable table) {
        table.setCreatedAt(LocalDateTime.now());
        return repo.save(table);
    }

    @Override
    @Transactional(readOnly = true)
    public RestaurantTable findById(Integer id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("RestaurantTable", "id", id));
    }

    @Override
    @Transactional(readOnly = true)
    public List<RestaurantTable> findAll() {
        return repo.findAll();
    }

    @Override
    public RestaurantTable update(Integer id, RestaurantTable table) {
        RestaurantTable existing = findById(id);
        existing.setTableName(table.getTableName());
        existing.setAreaId(table.getAreaId());
        existing.setTableType(table.getTableType());
        existing.setStatus(table.getStatus());
        existing.setIsWindow(table.getIsWindow());
        existing.setNotes(table.getNotes());
        return repo.save(existing);
    }

    @Override
    public void delete(Integer id) {
        RestaurantTable existing = findById(id);
        repo.delete(existing);
    }

    @Override
    @Transactional(readOnly = true)
    public List<String> getAllTableTypes() {
        return repo.findDistinctTableTypes();
    }

    @Override
    @Transactional(readOnly = true)
    public List<RestaurantTable> getByTableType(String tableType) {
        return repo.findByTableType(tableType);
    }
}

