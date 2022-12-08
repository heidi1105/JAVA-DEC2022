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
	<div>
		<h1>Donation Dashboard</h1>
		<p>
			<a href="/users/new"> New User</a>
		</p>
		<p>
			<a href="/donations/new"> New Donation</a>
		</p>
		<table>
			<thead>
				<tr>
					<th>Donation</th>
					<th>Quantity</th>
					<th>Donor</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="eachDonation" items="${ donationList}">
					<tr>
						<td><a href="/donations/${eachDonation.id }"><c:out
									value="${eachDonation.donationName }" /></a></td>
						<td><c:out value="${eachDonation.quantity }" /></td>
						<td><c:out value="${eachDonation.donor.userName }" /></td>
						<td><a href="/donations/edit/${eachDonation.id }">Edit</a></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

	<div>
		<h1>User Dashboard</h1>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Username</th>
					<th>Email</th>
					<th>Number of donations</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="eachUser" items="${ userList}">
					<tr>
						<td><a href="/users/${eachUser.id }"> <c:out
									value="${eachUser.id }" /></a></td>

						<td><c:out value="${eachUser.userName }" /></td>
						<td><c:out value="${eachUser.email}" /></td>
						<td>${eachUser.donatedItems.size()}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>


</body>
</html>