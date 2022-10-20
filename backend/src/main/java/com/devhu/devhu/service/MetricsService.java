package com.devhu.devhu.service;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.repository.MetricsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MetricsService {

    @Autowired
    private MetricsRepository repository;

    public List<Metrics> findMetrics() {
        return repository.findAll();
    }

    public Metrics findById(Long id) {
        return repository.findById(id).get();
    }

    public Metrics save(Metrics metrics) {
        return repository.save(metrics);
    }

    public Metrics update(Metrics metrics, Long id) {
        Optional<Metrics> m = repository.findById(id);
        if (m.isPresent()) {
            Metrics obj = m.get();
            obj.setDate(metrics.getDate());
            obj.setMoment(metrics.getMoment());
            obj.setBpm(metrics.getBpm());
            obj.setSystolicPressure(metrics.getSystolicPressure());
            obj.setDiastolicPressure(metrics.getDiastolicPressure());

            return repository.save(obj);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Metrics> findMetricsByUser(Long id) {
        return repository.findMetricsByUser(id);
    }
}
