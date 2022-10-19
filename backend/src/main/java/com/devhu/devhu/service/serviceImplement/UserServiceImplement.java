package com.devhu.devhu.service.serviceImplement;

import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.models.User;
import com.devhu.devhu.repository.UserRepository;
import com.devhu.devhu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplement implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<Metrics> findAll(User user) {
        return user.getMetrics();
    }
}
