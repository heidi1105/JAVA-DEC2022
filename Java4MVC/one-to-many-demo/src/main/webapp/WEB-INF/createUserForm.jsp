<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Donations</title>

</head>
<body>
   <h1> Create user</h1>
	<form:form action="/users/new" method="POST"
		modelAttribute="newUser">

		<p>
			<form:label path="userName">Username: </form:label>
			<form:input path="userName" />
			<form:errors path="userName" />
		</p>

		<p>
			<form:label path="email">Email: </form:label>
			<form:input path="email" />
			<form:errors path="email" />
		</p>

		<button type="submit">Add new user</button>
	</form:form>   
   
</body>
</html>