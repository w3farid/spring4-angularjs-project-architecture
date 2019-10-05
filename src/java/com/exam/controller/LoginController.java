/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.controller;
import com.exam.model.User;
import com.exam.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author farid
 */
@RestController
@RequestMapping(value = "/api/users")
public class LoginController {
    @Autowired
    UserService userService;
    
    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public User userSave(@PathVariable String username){
        System.out.println(userService.getUserByUsername(username));
        return userService.getUserByUsername(username);
    }
    
    @RequestMapping(value = "/showAll", method = RequestMethod.GET)
    public List<User> showAll(){
        return userService.getAll();
    }
    
    @RequestMapping(value = "/one/{id}", method = RequestMethod.GET)
    public User getById(@PathVariable long id){
        return userService.getById(id);
    }
    
    
}
