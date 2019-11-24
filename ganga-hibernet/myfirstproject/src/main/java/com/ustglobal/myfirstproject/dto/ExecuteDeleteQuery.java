package com.ustglobal.myfirstproject.dto;

import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.Driver;

public class ExecuteDeleteQuery {
	public static void main(String[] args) {

		Connection conn= null;
		Statement stmt = null;
		try {
			Driver driver = new Driver();
			DriverManager.registerDriver(driver);


			//step2
			String url = "jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();

			//step3
			String sql = "delete from employee_info where id=4";
			stmt = conn.createStatement();
			int count = stmt.executeUpdate(sql);

			System.out.println("rows effected "+count);

		}catch(Exception e) {
			//catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(conn!=null) {
					conn.close();
				}
				if(stmt!=null) {
					stmt.close();
				}

			}catch(SQLException e) {
				e.printStackTrace();
			}
		}

	}
}

