package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.Driver;

public class DynamicDeleteQuery {
	public static void main(String[] args) {

		Connection conn= null;
		PreparedStatement pstmt = null;
		try {
			Driver driver = new Driver();
			DriverManager.registerDriver(driver);

			//step2
			String url = "jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn = DriverManager.getConnection(url);


			//step3
			String sql = "delete from employee_info where id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1,Integer.parseInt(args[0]));

			int count = pstmt.executeUpdate();
			System.out.println("rows effected "+count);

		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(conn!=null) {
					conn.close();
				}
				if(pstmt!=null) {
					pstmt.close();
				}

			}catch(SQLException e) {
				e.printStackTrace();
			}
		}

	}
}

