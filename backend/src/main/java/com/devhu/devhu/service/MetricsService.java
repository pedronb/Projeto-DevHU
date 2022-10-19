package com.devhu.devhu.service;

import com.devhu.devhu.models.Metrics;

import java.util.List;

public interface MetricsService {

    Metrics saveMetric(Metrics metrics);
    List<Metrics> findMetrics();
}
