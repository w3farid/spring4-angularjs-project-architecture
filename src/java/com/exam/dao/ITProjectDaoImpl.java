/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.dao;

import com.exam.model.ItProject;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author farid
 */
@Repository
public class ITProjectDaoImpl implements ITProjectDao {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public ItProject saveProject(ItProject itProject) {
        sessionFactory.getCurrentSession()
                .save(itProject);
        return itProject;
    }

    @Override
    public List<ItProject> getAll() {
        List<ItProject> projectList = sessionFactory.getCurrentSession()
                .createQuery("FROM ItProject").list();
        return projectList;
    }

    @Override
    public ItProject getById(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
