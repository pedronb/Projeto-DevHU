package com.devhu.devhu.controllers;

import com.devhu.devhu.models.User;
import com.devhu.devhu.service.serviceImplement.UserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserServiceImplement service;

    @GetMapping
    public User saveUser() {
        return null;
    }
}
