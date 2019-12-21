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
public class DraftMailDaoImpl implements DraftMailDao{

	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public List<MailInfo> draft(int from_id, String status) {
		EntityManager manager = factory.createEntityManager();
		String jpql="from MailInfo where from_id=:from_id and status=:status";
		TypedQuery<MailInfo> query = manager.createQuery(jpql, MailInfo.class);
		query.setParameter("from_id", from_id);
		query.setParameter("status", status);
		List<MailInfo> bean = query.getResultList();
		return bean;
		
	}

}
