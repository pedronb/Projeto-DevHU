package com.devhu.devhu.service.serviceImplement;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.repository.MetricsRepository;
import com.devhu.devhu.service.MetricsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetricsServiceImplement implements MetricsService {

    @Autowired
    MetricsRepository metricsRepository;

    @Override
    public Metrics saveMetric(Metrics metrics) {
        return null;
    }

    @Override
    public List<Metrics> findMetrics() {
        return metricsRepository.findAll();
    }
}
