package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernetapp.onetoone.Person;
import com.ustglobal.jpawithhibernetapp.onetoone.VoterCard;

public class TestOneToOne {
	public static void main(String[] args) { 
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		VoterCard vc = new VoterCard();
		vc.setVid(10);
		vc.setVname("ganga");
		Person p = new Person();
		p.setId(40);
		p.setName("ganga");
		p.setVoterCard(vc);


		try {
			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
			entityManager =entityManagerFactory.createEntityManager();
			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();

			VoterCard vCard=entityManager.find(VoterCard.class,10);
			System.out.println(vCard.getPerson().getId());  			//for onetoone


			//	entityManager.persist(p); //for onetoone
			System.out.println("Record saved");
			entityTransaction.commit();
		}catch(Exception e){
			e.printStackTrace();
			//entityManager.clear();       
			entityTransaction.rollback();
		}
	}
}
