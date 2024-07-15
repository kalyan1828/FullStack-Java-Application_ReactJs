package com.fullStackApplication.fullStack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullStackApplication.fullStack.model.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
