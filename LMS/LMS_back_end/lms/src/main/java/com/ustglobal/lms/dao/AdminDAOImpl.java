package com.ustglobal.lms.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.lms.dto.Admin;
import com.ustglobal.lms.dto.Librarian;
import com.ustglobal.lms.dto.Student;
import com.ustglobal.lms.dto.Users;
@Repository
public class AdminDAOImpl implements AdminDAO{
	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public Admin adminLogin(int admin_id,String admin_password) {
		String jpql = "from Admin where admin_id=:admin_id and admin_password=:admin_password";
		EntityManager manager = factory.createEntityManager();
		//Query query = manager.createQuery(jpql);
		TypedQuery<Admin> query = manager.createQuery(jpql,Admin.class);//to avoid downcasting
		query.setParameter("admin_id", admin_id);
		query.setParameter("admin_password", admin_password);
		try {
			Admin bean = query.getSingleResult();
			return bean;
		}
		catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public boolean addUser(Users bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(bean);
			transaction.commit();
			return true;
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public List<Users> viewStudent(int userType) {
		String jpql = "from Users where userType=:userType";
		EntityManager manager = factory.createEntityManager();
		//Query query = manager.createQuery(jpql);
		TypedQuery<Users> query = manager.createQuery(jpql,Users.class);//to avoid downcasting
		query.setParameter("userType",userType);
		
		try {
			List<Users> bean = query.getResultList();
			return bean;
		}
		catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public boolean deleteUser(int user_id) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		Users bean = manager.find(Users.class, user_id);
		if(bean!=null) {
			manager.remove(bean);
			transaction.commit();
			return true;
		}else {

			return false;
		}
	}
	

	@Override
	public List<Users> viewAllUsers() {
		String jpql = "from Users";
		EntityManager manager = factory.createEntityManager();
		//Query query = manager.createQuery(jpql);
		TypedQuery<Users> query = manager.createQuery(jpql,Users.class);//to avoid downcasting
		try {
			List<Users> bean = query.getResultList();
			return bean;
		}
		catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public boolean updateUser(Users bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			Users userBean = manager.find(Users.class, bean.getUser_id());
			userBean.setUser_name(bean.getUser_name());
			userBean.setUserType(bean.getUserType());
			userBean.setUser_password(bean.getUser_password());
			transaction.commit();
			return true;
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
