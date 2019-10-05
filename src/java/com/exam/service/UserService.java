package com.exam.service;

import com.exam.model.User;
import java.util.List;

public interface UserService{
    public User saveUser(User user);
    public User getUserByUsername(String username);
    public List<User> getAll();
    public User getById(long id);
}