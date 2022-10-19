package com.devhu.devhu.controllers;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.service.MetricsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/metrics")
public class metricsController {

    @Autowired
    private MetricsService service;

    @GetMapping
    public List<Metrics> findMetrics() {
        return service.findMetrics();
    }

    @PostMapping
    public Metrics saveMetrics(@RequestBody Metrics metrics) {
        return service.save(metrics);
    }
}
