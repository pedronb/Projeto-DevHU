package com.devhu.devhu.repository;

import com.devhu.devhu.models.Metrics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MetricsRepository extends JpaRepository<Metrics, Long> {

    @Query("SELECT obj FROM Metrics obj WHERE obj.user.id = :id")
    List<Metrics> findMetricsByUser(Long id);
}
