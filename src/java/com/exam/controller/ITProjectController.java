/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.controller;

import com.exam.model.ItProject;
import com.exam.model.User;
import com.exam.service.ITProjectService;
import java.util.List;
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
@RequestMapping(value = "/api/projects")
public class ITProjectController {
    @Autowired
    ITProjectService iTProjectService;
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ItProject saveProject(@RequestBody ItProject itProject){
        return iTProjectService.saveProject(itProject);
    }
    
    @RequestMapping(value = "/showAll", method = RequestMethod.GET)
    public List<ItProject> showAll(){
        return iTProjectService.getAll();
    }
}
