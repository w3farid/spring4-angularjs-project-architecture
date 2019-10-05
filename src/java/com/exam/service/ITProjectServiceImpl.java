/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.service;

import com.exam.dao.ITProjectDao;
import com.exam.model.ItProject;
import java.util.List;
import javax.persistence.Transient;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author farid
 */
@Service
@Transactional
public class ITProjectServiceImpl implements ITProjectService{
    @Autowired
    ITProjectDao iTProjectDao;
    
    @Override
    public ItProject saveProject(ItProject itProject) {
        return iTProjectDao.saveProject(itProject);
    }

    @Override
    public List<ItProject> getAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ItProject getById(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
