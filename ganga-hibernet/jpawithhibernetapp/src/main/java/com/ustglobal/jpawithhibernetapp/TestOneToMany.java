package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernet.onetomany.Pencil;
import com.ustglobal.jpawithhibernet.onetomany.PencilBox;

public class TestOneToMany {

	public static void main(String[] args) { 
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		PencilBox peBox = new PencilBox();
		peBox.setBid(8);
		peBox.setBname("Apsara");

		Pencil p = new Pencil();
		p.setPid(6);
		p.setColor("blue");
		p.setPencilBox(peBox);

		try {
			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
			entityManager =entityManagerFactory.createEntityManager();

			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();

			entityManager.persist(p);

			System.out.println("Record saved");

			entityTransaction.commit();
		}catch(Exception e){
			e.printStackTrace();
			entityTransaction.rollback();

		}
	}

}
