package com.ustglobal.empspringmvc2.dao;

import com.ustglobal.empspringmvc2.dto.EmployeeBean;

public interface EmployeeDAO {

	public EmployeeBean login(int id, String password);
	public int register(EmployeeBean bean);
	public boolean deleteEmployee(int id);
	public EmployeeBean searchEmployee(int id);
	public boolean updateEmployee(EmployeeBean bean);
	public boolean changePassword(int id,String password);
	
	
}
