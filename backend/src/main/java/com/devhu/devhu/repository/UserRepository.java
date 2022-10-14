package com.devhu.devhu.repository;

import com.devhu.devhu.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
