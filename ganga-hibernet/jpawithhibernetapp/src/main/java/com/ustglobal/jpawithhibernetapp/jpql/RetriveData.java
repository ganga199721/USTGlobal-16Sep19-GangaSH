package com.ustglobal.jpawithhibernetapp.jpql;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.ustglobal.jpawithhibernetapp.dto.ProductInfo;

public class RetriveData {
	public static void main(String[] args) {

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
		EntityManager  entityManager =entityManagerFactory.createEntityManager();
		String jpql="from ProductInfo";

		Query query =	entityManager.createQuery(jpql);
		query.getResultList();

		List<ProductInfo> productInfos = query.getResultList();
		for(ProductInfo productInfo :productInfos) {
			System.out.println(productInfo.getPid());
			System.out.println(productInfo.getPname());
			System.out.println(productInfo.getQuantity());
		}
		entityManager.close();

	}
}
