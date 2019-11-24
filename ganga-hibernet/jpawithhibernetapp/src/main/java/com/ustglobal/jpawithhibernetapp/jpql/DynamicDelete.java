package com.ustglobal.jpawithhibernetapp.jpql;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.hibernate.annotations.Where;

public class DynamicDelete {
	public static void main(String[] args) {
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;

		try {
			EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TestPersistence" );
			entityManager =entityManagerFactory.createEntityManager();
			entityTransaction= entityManager.getTransaction();
			entityTransaction.begin();
			String jpql = "delete from ProductInfo where pid= :id";
			Query query = entityManager.createQuery(jpql);

			query.setParameter("id", 20);

			int result = query.executeUpdate();
			System.out.println(result);
			entityTransaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
		}finally {
			entityManager.close();
		}
	}
}

