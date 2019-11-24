package com.ustglobal.jpawithhibernetapp.onetoone;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="votercard")
public class VoterCard {
	@Id
	@Column
	private int vid;
	@Column
	private String vname;

	@OneToOne(mappedBy="voterCard")	      //oneToone
	private Person person;				  //onetoone
}

