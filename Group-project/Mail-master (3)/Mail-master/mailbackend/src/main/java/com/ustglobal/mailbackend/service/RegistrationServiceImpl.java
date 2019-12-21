package com.ustglobal.mailbackend.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.ustglobal.mailbackend.dao.Register;
import com.ustglobal.mailbackend.dto.UserBean;

@Service
public class RegistrationServiceImpl implements RegistrationService{

	@Autowired
	private Register dao;

	@Override
	public boolean register(UserBean bean) {
		return dao.register(bean);
	}

	@Override
	public UserBean login(String email, String password) {
		return dao.login(email,password);
	}
	
}
