<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>


<jsp:useBean id="msg" class="java.lang.String" scope="request" ></jsp:useBean>


<body>
<a href="./home" class="float-left">Home</a>
<a href="./logout" class="float-right">Logout</a>

<h4><%=msg %></h4>

<fieldset  aligh="center">
<legend>Changepassword</legend>
<form action="./changepassword" method="post">
		New password:<input name="password" type="password"><br>
		Confirm password:<input name="confirmpassword" type="password"><br>
		<input type="reset" value="Reset"><br>
		<input type="submit" value="change password">
		
</fieldset>
</form>
</body>
</html>