package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernetapp.dto.ProductInfo;

public class GetReference {
	public static void main(String[] args) {

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
		EntityManager entityManager =entityManagerFactory.createEntityManager();
		ProductInfo productInfo = entityManager.getReference(ProductInfo.class,40);
		//ProductInfo productInfo1 = entityManager.find(ProductInfo.class,101);

		System.out.println(productInfo.getClass());

		//	System.out.println(productInfo.getPid());
		//	System.out.println(productInfo.getPname());
		//	System.out.println(productInfo.getQuantity());
	}
}

