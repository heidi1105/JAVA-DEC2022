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
   <h1> User details</h1>
   <h2> Username: <c:out value="${user.userName }" /></h2>
    <h2> Email: <c:out value="${user.email }" /></h2>
		<table>
			<thead>
				<tr>
					<th>Donation</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="eachDonation" items="${ user.donatedItems}">
					<tr>
						<td><a href="/donations/${eachDonation.id }"><c:out
									value="${eachDonation.donationName }" /></a></td>
						<td><c:out value="${eachDonation.quantity }" /></td>

					</tr>
				</c:forEach>
			</tbody>
		</table>    
    	<a href="/"> Go back</a>
    
    
</body>
</html>