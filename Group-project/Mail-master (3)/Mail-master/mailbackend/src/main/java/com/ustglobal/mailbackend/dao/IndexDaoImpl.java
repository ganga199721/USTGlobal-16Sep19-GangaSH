package com.ustglobal.mailbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import com.ustglobal.mailbackend.dto.MailInfo;


@Repository
public class IndexDaoImpl implements IndexDAO{

	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Override
	public List<MailInfo> displayMail() {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from MailInfo ";
		try{
			TypedQuery<MailInfo> query = manager .createQuery(jpql,MailInfo.class);
	    	
			List<MailInfo> info = query.getResultList();
	    	return info;	
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
		
		
		
	
	}

}
