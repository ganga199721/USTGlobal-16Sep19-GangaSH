package com.ustglobal.empwebapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/login.html")
public class LoginPageServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();

		String id = "";
		Cookie[] cookies = req.getCookies();
		if(cookies !=null) {
			for(Cookie cookie : cookies) {
				if(cookie.getName().equals("alwaysRemember")) {
					id=cookie.getValue();
				}
			}
		}
		out.println("<html>");
		out.println("<fieldset aligh='center'>");
		out.println("<legend>login</legend>");
		out.println("<form action='./login' method='post'>");
		out.println("id:<input name='id' type='number' value='"+id+"'><br>");
		out.println("Password:<input name='password' type='password'><br> ");
		out.println("<input	type='submit' name='login' class='button-float-right' value='login'><br>");
		out.println("<input type='button' name='reset' class='button-float-right' value='reset'><br>");
		out.println("<input type='checkbox' name='rememberme' value='check'>RememberMe<br>");

		out.println("</form>");
		out.println("</fieldset>");
		out.println("</html>");





	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	}
}
