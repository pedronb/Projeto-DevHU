package com.devhu.devhu.service;


import com.devhu.devhu.models.Metrics;
import com.devhu.devhu.models.User;
import java.util.List;


public interface UserService {

    User saveUser(User user);
    List<Metrics> findAll(User user);
}
