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
    @DeleteMapping("/{id}")
    public void deleteMetrics(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Metrics updateMetrics(@PathVariable Long id, @RequestBody Metrics metrics) {
        return service.update(metrics, id);
    }
}
