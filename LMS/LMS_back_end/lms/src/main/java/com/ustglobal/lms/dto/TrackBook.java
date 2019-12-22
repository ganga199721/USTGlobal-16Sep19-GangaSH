package com.ustglobal.lms.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JoinFormula;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
@Data
@Entity

@Table(name="tracebook")
public class TrackBook {
	@Id
	@GeneratedValue
	@Column
	private int tid;
	@Column
	private int status=0;

	@Column
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate issue_date;

	@Column
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate return_date;

	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "bid")
	 *///passing foreign key private
	@Column
	private int bid;
	
	

//	@ManyToOne
//	@JoinColumn(name = "student_id" ,referencedColumnName = "user_id" , nullable = false)//passing foreign key private
	@Column
	private int student_id;
	
	


}
