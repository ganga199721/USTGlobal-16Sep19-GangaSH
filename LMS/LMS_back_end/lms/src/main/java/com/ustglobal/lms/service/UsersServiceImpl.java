package com.ustglobal.lms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.lms.dao.UserDAO;
import com.ustglobal.lms.dto.Users;
@Service
public class UsersServiceImpl implements UserService{
	@Autowired
	private UserDAO dao;
	@Override
	public Users userLogin(int user_id, String user_password) {
		// TODO Auto-generated method stub
		return dao.userLogin(user_id, user_password);
	}

}
