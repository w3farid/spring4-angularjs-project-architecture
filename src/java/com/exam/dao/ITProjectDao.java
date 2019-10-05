/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.dao;

import com.exam.model.ItProject;
import com.exam.model.User;
import java.util.List;

/**
 *
 * @author farid
 */
public interface ITProjectDao {
    public ItProject saveProject(ItProject itProject);
    public List<ItProject> getAll();
    public ItProject getById(int id);
}
