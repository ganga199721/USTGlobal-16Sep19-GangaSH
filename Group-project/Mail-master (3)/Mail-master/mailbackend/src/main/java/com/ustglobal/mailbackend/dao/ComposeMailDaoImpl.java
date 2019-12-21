package com.ustglobal.mailbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.mailbackend.dto.MailInfo;
@Repository
public class ComposeMailDaoImpl implements ComposeMailDao {

	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public boolean compose(MailInfo mailbean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
	        manager.persist(mailbean);
	        transaction.commit();
	        return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<MailInfo> sent(int from_id, int to_id, String subject) {
		EntityManager manager = factory.createEntityManager();
		String jpql="from MailInfo where from_id=:from_id ,to_id=:to_id,subject=:subject";
		TypedQuery<MailInfo> query = manager.createQuery(jpql, MailInfo.class);
		query.setParameter("from_id", from_id);
		query.setParameter("to_id", to_id);
		query.setParameter("subject", subject);
		return query.getResultList();
		
	}

}
