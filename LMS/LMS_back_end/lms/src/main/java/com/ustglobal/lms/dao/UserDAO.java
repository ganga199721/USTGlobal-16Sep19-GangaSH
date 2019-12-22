package com.ustglobal.lms.dao;


import com.ustglobal.lms.dto.Users;

public interface UserDAO {

	public Users userLogin(int user_id, String user_password);
	
}
