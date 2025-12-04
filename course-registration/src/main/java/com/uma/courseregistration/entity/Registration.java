package com.uma.courseregistration.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "registrations")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    private String email;
    private String phone;
    private String courseName;
    private String experienceLevel;
    private String preferredBatchDate;
    private String comments;
}