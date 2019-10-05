/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.service;
import com.exam.dao.UserDao;
import com.exam.model.User;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author farid
 */
@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    UserDao userDao;
    
    @Override
    public User saveUser(User user) {
        return userDao.saveUser(user);
    }

    @Override
    public User getUserByUsername(String username) {
       return userDao.getUserByUsername(username);
    }

    @Override
    public List<User> getAll() {
        return userDao.getAll();
    }

    @Override
    public User getById(long id) {
        return userDao.getById(id);
    }

  

    
}
