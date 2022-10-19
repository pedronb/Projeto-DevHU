package com.devhu.devhu.controllers;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.service.serviceImplement.MetricsServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/metrics")
public class metricsController {

    @Autowired
    private MetricsServiceImplement service;

    @GetMapping
    public List<Metrics> findMetrics() {
        return service.findMetrics();
    }
}
