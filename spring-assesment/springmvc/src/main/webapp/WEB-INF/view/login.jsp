<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h3>${msg}</h3>
<fieldset>
<legend>Login</legend>
<form action="./login" method="post">
<table>

<tr>
<td>Id:</tr>
<td><input type="number" name="id"></td>
</tr>

<tr>
<td>Password:</tr>
<td><input type="password" name="password"></td>
</tr>

<tr>
<td><input type="reset" name="Reset"></tr>
<td><input type="submit" name="Login"></tr>
</tr>

</table>
</form>
</fieldset>
<a href="./register">Click here to register</a>
</body>
</html>
</body>
</html>