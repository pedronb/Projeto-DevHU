package com.devhu.devhu.util;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.models.User;
import com.devhu.devhu.repository.MetricsRepository;
import com.devhu.devhu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Component
public class DummyData {

    @Autowired
    UserRepository userRepository;
    @Autowired
    MetricsRepository metricsRepository;

    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

    @PostConstruct
    public void saveUserMetrics() throws ParseException {

        User user1 = new User("Pedro", sdf.parse("05/03/1991"));

        List<Metrics> metrics = new ArrayList<>();

        Metrics metrics1 = new Metrics(sdf.parse("13/10/2022"),6,85,120,80,user1);
        Metrics metrics2 = new Metrics(sdf.parse("13/10/2022"),12,85,120,80,user1);
        Metrics metrics3 = new Metrics(sdf.parse("13/10/2022"),18,85,120,80,user1);

        metrics.add(metrics1);
        metrics.add(metrics2);
        metrics.add(metrics3);

        user1.setMetrics(metrics);

        userRepository.save(user1);
    }
}
