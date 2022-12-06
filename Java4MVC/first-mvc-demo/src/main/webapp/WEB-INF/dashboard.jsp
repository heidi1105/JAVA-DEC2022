<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
   <div>
		<h1> Donation Dashboard</h1>
   		<table>
   			<thead>
   				<tr>
   					<th> Donation </th>
   					<th> Quantity </th>
   					<th> Donor </th>
   				</tr>
   			</thead>
   			<tbody>
   				<c:forEach var="eachDonation" items="${ donationList}">
   					<tr>
   						<td> <a href="/donations/${eachDonation.id }" ><c:out value="${eachDonation.donationName }" /></a></td>
   						<td> <c:out value="${eachDonation.quantity }" /></td>
   						<td> <c:out value="${eachDonation.donor }" /></td>
   					</tr>
   				</c:forEach>
   			
   			</tbody>
   		
   		
   		</table>
   </div>
</body>
</html>