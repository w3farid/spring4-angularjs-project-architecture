package com.exam.service;

import com.exam.model.ItProject;
import java.util.List;

public interface ITProjectService{
    public ItProject saveProject(ItProject itProject);
    public List<ItProject> getAll();
    public ItProject getById(int id);
}