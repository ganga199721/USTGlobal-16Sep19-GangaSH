package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernetapp.dto.ProductInfo;

public class ReattachingDemo {
	public static void main(String[] args) {

		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		try {

			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );

			entityManager =entityManagerFactory.createEntityManager();
			entityTransaction = entityManager.getTransaction();
			entityTransaction.begin();
			ProductInfo productInfo=entityManager.find(ProductInfo.class, 40);
			System.out.println(entityManager.contains(productInfo));
			entityManager.detach(productInfo);
			System.out.println(entityManager.contains(productInfo));
			ProductInfo productInfo1 = entityManager.merge(productInfo); 
			productInfo1.setPname("cell");
			System.out.println("Update Record");
			entityTransaction.commit();
		}catch(Exception e){
			e.printStackTrace();
			//entityManager.clear();
			entityTransaction.rollback();
		}
	}
}
