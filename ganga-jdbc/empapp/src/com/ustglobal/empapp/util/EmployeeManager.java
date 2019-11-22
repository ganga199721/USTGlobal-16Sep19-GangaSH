package com.ustglobal.empapp.util;

import com.ustglobal.empapp.dao.EmployeeDAO;
import com.ustglobal.empapp.dao.EmployeeDAOImpl;

public class EmployeeManager {

	private EmployeeManager() {}		//constructor//

	public static EmployeeDAO getEmployeeDAO() {
		return new EmployeeDAOImpl();
	}
}
