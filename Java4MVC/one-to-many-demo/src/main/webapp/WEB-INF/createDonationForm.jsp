<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Donations</title>

</head>
<body>
	<h1>New Donation</h1>
	<form:form action="/donations/new" method="POST"
		modelAttribute="newDonation">

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
			<form:label path="description">Description: </form:label>
			<form:textarea path="description"></form:textarea>
			<form:errors path="description" />
		</p>
		<p>
			<form:label path="donor">Donor: </form:label>
			<form:select path="donor">
				<c:forEach var="eachUser" items="${userList }">
					<form:option value="${eachUser.id }">
			${eachUser.userName } (${eachUser.email })</form:option>
				</c:forEach>

			</form:select>
			<form:errors path="donor" />
		</p>

		<button type="submit">Add new donation</button>


	</form:form>
</body>
</html>