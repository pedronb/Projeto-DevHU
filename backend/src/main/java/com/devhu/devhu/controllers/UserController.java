package com.devhu.devhu.controllers;

import com.devhu.devhu.models.User;
import com.devhu.devhu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public List<User> findUsers() {
        return service.findAll();
    }

    @PostMapping
    public User saveUser(@RequestBody User user) {
        return service.save(user);
    }
}
