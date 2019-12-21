package com.ustglobal.mailbackend.service;

import com.ustglobal.mailbackend.dto.UserBean;

public interface RegistrationService {
	
	public boolean register(UserBean bean);
	public UserBean login(String email, String password);
}
