<%@page import="com.ustglobal.springmvc.dto.ProductBean"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<a href="./changepassword">Change Password</a>
<a href="./delete">Delete Profile</a>
<a href="./logout" style="float:right;">Logout</a>

<fieldset>
<legend>Search Employee</legend>
<form action="./search">
<table>

<tr>
<td>ID:</td>
<td><input type="number" name="id"></td>
<td><input type="submit" value="search"></td>
</tr>

</table>
</form>
</fieldset>
