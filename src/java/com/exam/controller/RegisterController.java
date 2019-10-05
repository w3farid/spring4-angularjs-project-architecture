/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.controller;

import com.exam.model.User;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author farid
 */
@RestController
@RequestMapping(value = "/api/users")
public class RegisterController {
    @Autowired
    UserService userService;
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public User userSave(@RequestBody User user){
        return userService.saveUser(user);
    }
}
