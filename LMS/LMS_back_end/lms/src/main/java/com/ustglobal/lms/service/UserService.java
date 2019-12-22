package com.ustglobal.lms.service;

import com.ustglobal.lms.dto.Users;

public interface UserService {
	public Users userLogin(int user_id, String user_password);
}
