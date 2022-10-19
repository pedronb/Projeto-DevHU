package com.devhu.devhu.service;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.repository.MetricsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetricsService {

    @Autowired
    private MetricsRepository repository;

    public List<Metrics> findMetrics() {
        return repository.findAll();
    }
}
