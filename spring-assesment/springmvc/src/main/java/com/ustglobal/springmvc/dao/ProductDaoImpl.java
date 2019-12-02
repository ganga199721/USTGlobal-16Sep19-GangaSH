package com.ustglobal.springmvc.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.springmvc.dto.ProductBean;

@Repository
public class ProductDaoImpl implements ProductDAO {

	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public ProductBean login(int id, String password) {
		String jpql = "from Product where id=:id and password=:password";
		EntityManager manager = factory.createEntityManager();
		TypedQuery<ProductBean> query = manager.createQuery(jpql,ProductBean.class);
		query.setParameter("id", id);
		query.setParameter("password", password);
		try {
			ProductBean bean =  query.getSingleResult();
			return bean;
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
	@Override
	public int register(ProductBean bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(bean);
			transaction.commit();
			return bean.getId();
		}catch(Exception e) {
			e.printStackTrace();
			return -1;
		}
	}

	@Override
	public boolean retrieve(int id) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		ProductBean bean = manager.find(ProductBean.class, id);
		manager.remove(bean);
		transaction.commit();
		return false;
	}

	@Override
	public ProductBean searchProduct(int id) {
		EntityManager manager = factory.createEntityManager();
		return manager.find(ProductBean.class, id);

	}

	@Override
	public boolean changePassword(int id, String password) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		ProductBean bean = manager.find(ProductBean.class, id);
		bean.setPassword(password);
		transaction.commit();
		return true;
	

	
	}

}