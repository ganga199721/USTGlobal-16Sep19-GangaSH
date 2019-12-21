package com.ustglobal.mailbackend.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;

import com.ustglobal.mailbackend.dto.MailInfo;
@Repository
public class DeleteMailDaoImpl implements DeleteMailDAO {
	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public boolean deletemail(int from_id) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			
			MailInfo mail = manager.find(MailInfo.class, from_id);
			manager.remove(mail);
			transaction.commit();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	

}
