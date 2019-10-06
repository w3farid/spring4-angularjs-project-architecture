/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exam.model;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author farid
 */
@Entity
public class ITIssue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int issueId;
    String issueSummery;
    String issueDescription;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "identifiedByUserId")
    User identifiedByUserId;

    @Temporal(TemporalType.TIMESTAMP)
    Date identifiedDate;
    @Temporal(TemporalType.TIMESTAMP)
    Date relatedDate;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "relatedProjectId")
    ItProject project;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "assignedToUserId")
    User assignedToUserId;
    
    String status;
    String priority;
    @Temporal(TemporalType.TIMESTAMP)
    Date targetResolutionDate;
    String progress;
    @Temporal(TemporalType.TIMESTAMP)
    Date actualResolutionDate;
    String resolutionSummery;
    @Temporal(TemporalType.DATE)
    private Date createdOn;
    private String createBy;
    @Temporal(TemporalType.DATE)
    private Date modifiedOn;
    private String modifiedBy;
}
