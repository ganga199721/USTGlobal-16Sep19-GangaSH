package com.ustglobal.jpawithhibernet.manytomany;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="Student")
public class Student {
	@Id
	@Column
	private int sid;
	@Column
	private String sname;

	@ManyToMany(cascade=CascadeType.ALL)		//unidirectional
	@JoinTable(name="Student_course", joinColumns=@JoinColumn(name="sid"),inverseJoinColumns=@JoinColumn(name="cid"))	//unidirectional

	private List<Course> courses;	//unidirectional
}
