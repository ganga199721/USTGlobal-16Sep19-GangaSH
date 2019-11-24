package com.ustglobal.jpawithhibernetapp;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernetapp.dto.ProductInfo;

public class ReadDemo {
	public static void main(String[] args) {

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
		EntityManager entityManager =entityManagerFactory.createEntityManager();
		ProductInfo productDeatil = entityManager.find(ProductInfo.class,40);
		System.out.println("ID------"+productDeatil.getPid());
		System.out.println("Name------"+productDeatil.getPname());
		System.out.println("Quantity------"+productDeatil.getQuantity());
		entityManager.close();

	}
}
