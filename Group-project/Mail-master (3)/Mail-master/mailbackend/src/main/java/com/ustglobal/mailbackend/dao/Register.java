package com.ustglobal.mailbackend.dao;

import com.ustglobal.mailbackend.dto.UserBean;


public interface Register {
	

	public boolean register(UserBean bean);
	
	public UserBean login(String email,String password);
}
