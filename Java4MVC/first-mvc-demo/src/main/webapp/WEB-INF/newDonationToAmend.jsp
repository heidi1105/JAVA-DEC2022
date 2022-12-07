<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>New Donation</h1>
	<form action="/donations2/new" method="POST">
		<div>
			<label> Donation name: </label> <input type="text"
				name="donationName" />
		</div>
		<div>
			<label> Quantity: </label> <input type="number"
				name="quantity" />
		</div>
		<div>
			<label> Donor: </label> <input type="text"
				name="donor" />
		</div>
		<div>
			<label> Description: </label> 
			<textarea name="description"></textarea>
		</div>
		<button type="submit"> Add a new donation</button>
	</form>

</body>
</html>