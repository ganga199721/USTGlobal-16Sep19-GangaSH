package com.ustglobal.mailbackend.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.mailbackend.dto.UserBean;

@Repository
public class RegistrationDaoImpl implements Register{

	@PersistenceUnit
	EntityManagerFactory factory;
	
	public boolean register(UserBean bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(bean);
			transaction.commit();
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public UserBean login(String email, String password) {
			String jpql = "from UserBean where email=:email and password=:password";
			EntityManager manager = factory.createEntityManager();
			TypedQuery<UserBean> query = manager.createQuery(jpql, UserBean.class);
			query.setParameter("email", email);
			query.setParameter("password", password);
			UserBean beans = query.getSingleResult();
			return beans;
	}
	
}
