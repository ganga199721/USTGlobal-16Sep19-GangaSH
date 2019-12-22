package com.ustglobal.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.lms.dao.AdminDAO;
import com.ustglobal.lms.dto.Admin;
import com.ustglobal.lms.dto.Librarian;
import com.ustglobal.lms.dto.Student;
import com.ustglobal.lms.dto.Users;
@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDAO dao;
	@Override
	public boolean addUser(Users bean) {
//		if(bean.getSname()==null || bean.getPassword()==null)
//		{
//			return false;
//		}
		return dao.addUser(bean);
	}
	@Override
	public Admin adminLogin(int id, String password) {
		return dao.adminLogin(id, password);
		

	}
	@Override
	public List<Users> viewStudent(int userType) {
		// TODO Auto-generated method stub
		return dao.viewStudent(userType);
	}
	@Override
	public boolean deleteUser(int users_id) {
		return dao.deleteUser(users_id);
	}
	
	@Override
	public List<Users> viewAllUsers() {
		
		return dao.viewAllUsers();
	}
	@Override
	public boolean updateUser(Users bean) {
		// TODO Auto-generated method stub
		return dao.updateUser(bean);
	}



}
