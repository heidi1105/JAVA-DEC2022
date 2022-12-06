<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1> Donation details</h1>
	<h2> Donation name: <c:out value="${donation.donationName }" /></h2>
	<h2> Donor: <c:out value="${donation.donor }" /></h2>
	<h2> Quantity: <c:out value="${donation.quantity }" /></h2>
	<h2> Description: <c:out value="${donation.description }" /></h2>
</body>
</html>