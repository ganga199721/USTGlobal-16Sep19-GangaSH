package com.ustglobal.lms.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "librarian")
public class Librarian {
	@Id
	@Column
	@GeneratedValue
	private int lid;
	@Column
	private String librarian_name;
	@Column
	private String phone;
	@Column
	private String email;
	@Column
	private String password;	

}
