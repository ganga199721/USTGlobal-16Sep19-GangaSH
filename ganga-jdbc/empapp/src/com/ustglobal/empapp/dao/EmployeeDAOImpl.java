package com.ustglobal.empapp.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.ustglobal.empapp.dto.EmployeeBean;

public class EmployeeDAOImpl implements EmployeeDAO{

	public List<EmployeeBean> getAllEmployeeData() {

		String url = "jdbc:mysql://localhost:3306/ust_ty_db";
		String sql = "select * from employee_info";

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection(url,"root","root");
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);


			ArrayList<EmployeeBean> result = new ArrayList<EmployeeBean>();
			while(rs.next()) {
				EmployeeBean bean = new EmployeeBean();
				int id = rs.getInt("id");
				bean.setId(id);

				String name = rs.getString("name");
				bean.setName(name);

				int sal = rs.getInt("salary");
				bean.setSal(sal);

				String gender = rs.getString("salary");
				bean.setGender(gender);


				result.add(bean);

			}
			return result;
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(conn!=null) {
					conn.close();
				}
				if(stmt!=null) {
					stmt.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	public EmployeeBean searchEmployeeData(int id) {
		String url = "jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
		String sql = "select * from employee_info where id =?";

		Connection conn = null;
		PreparedStatement pstmt  = null;
		ResultSet rs = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection(url);

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1,id);
			rs = pstmt.executeQuery();

			if(rs.next()) {
				EmployeeBean bean = new EmployeeBean();
				bean.setId(rs.getInt("Id"));
				bean.setName(rs.getString("Name"));
				bean.setSal(rs.getInt("Sal"));
				bean.setGender(rs.getString("gender"));
				return bean;
			}else {
				return null;
			}
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}finally {
			try {
				if(conn!=null) {
					conn.close();
				}
				if(pstmt!=null) {
					pstmt.close();
				}
				if(rs!=null) {
					rs.close();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
	@Override
	public int insertEmployeeData(EmployeeBean bean) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int updateEmloyeeData(EmployeeBean bean) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int deleteEmployeeData(int id) {
		// TODO Auto-generated method stub
		return 0;
	}
}

