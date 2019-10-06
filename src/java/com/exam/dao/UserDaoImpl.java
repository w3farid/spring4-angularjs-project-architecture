/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.dao;

import com.exam.model.User;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author farid
 */
@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public User saveUser(User user) {
        sessionFactory.getCurrentSession().save(user);
        return user;
    }

    @Override
    public User getUserByUsername(String username) {
        Query q = sessionFactory.getCurrentSession().createQuery("From User Where username=:username");
        q.setParameter("username", username);
        List<User> userList = q.list();

        if (!userList.isEmpty()) {
            return userList.get(0);
        } else {
            return null;
        }
    }

    @Override
    public List<User> getAll() {
        List<User> userList = (List<User>) sessionFactory.getCurrentSession()
                .createQuery("From User").list();
        return userList;

    }

    @Override
    public User getById(long id) {
        Query q = sessionFactory.getCurrentSession().createQuery("From User where id=:id");
        q.setParameter("id", id);
        User usr = (User) q.list().get(0);
        return usr;
    }

}
