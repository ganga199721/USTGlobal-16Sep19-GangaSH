package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;import com.ustglobal.jpawithhibernetapp.dto.ProductInfo;

public class UpdateDemo {
	public static void main(String[] args) {
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		try {
			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );

			entityManager =entityManagerFactory.createEntityManager();

			//EntityManager entityManager =entityManagerFactory.createEntityManager();
			//EntityTransaction entityTransaction=entityManager.getTransaction();

			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();
			ProductInfo productInfo=entityManager.find(ProductInfo.class, 101);
			productInfo.setPname("ujhggs");
			System.out.println("Record saved");
			entityTransaction.commit();
		}catch(Exception e){
			e.printStackTrace();
			//entityManager.clear();
			entityTransaction.rollback();
		}
	}
}

