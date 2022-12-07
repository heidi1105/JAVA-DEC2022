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
	<h1>Edit Donation</h1>
	<form:form action="/donations/edit/${id}" method="POST"
		modelAttribute="donation">
		<input type="hidden" name="_method" value="PUT" />
		<p>
			<form:label path="donationName">Donation Name: </form:label>
			<form:input path="donationName" />
			<form:errors path="donationName" />
		</p>
		<p>
			<form:label path="quantity">Quantity: </form:label>
			<form:input type="number" path="quantity" />
			<form:errors path="quantity" />
		</p>
		<p>
			<form:label path="donor">Donor: </form:label>
			<form:input path="donor" />
			<form:errors path="donor" />
		</p>
		<p>
			<form:label path="description">Description: </form:label>
			<form:textarea path="description"></form:textarea>
			<form:errors path="description" />
		</p>
		<button type="submit">Add new donation</button>


	</form:form>
</body>
</html>