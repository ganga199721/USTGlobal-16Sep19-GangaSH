package com.ustglobal.mailbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ustglobal.mailbackend.dao.ChangepasswDAO;

@Service
public class ChangeServiceImpl implements ChangePassService{
	
	@Autowired
	private  ChangepasswDAO dao;
		
	

	@Override
	public boolean changePassword(String email, String password) {
		// TODO Auto-generated method stub
		return dao.changePassword(email, password);
	}
	

}
