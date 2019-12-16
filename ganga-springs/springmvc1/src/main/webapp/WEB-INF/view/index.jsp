<%
String s =(String)request.getAttribute("msg");
%>

<html>
<body>
<h2 style="color: blue;">${msg}</h2>	<!-- request Attribute -->
<h2 style="color: green;"><%=s %></h2>	<!-- request Attribute -->

<h3>${name}</h3>		<!-- $ and {} belongs to spring spell to read the attribute-->
<h3>${id}</h3>			<!-- for query string -->

</body>
</html>
