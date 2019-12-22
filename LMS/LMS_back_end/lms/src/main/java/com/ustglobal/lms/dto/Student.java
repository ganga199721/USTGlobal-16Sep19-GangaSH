package com.ustglobal.lms.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "student")
public class Student {
@Id
@Column
private int sid;
@Column
private String sname;
@Column
private String usn;
@Column
private String password;

}
