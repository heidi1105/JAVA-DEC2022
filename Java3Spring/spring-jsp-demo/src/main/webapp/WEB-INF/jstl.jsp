<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>JSTL Demo</h1>
	<h3>
		Name:
		<c:out value="${ jspName}" />
	</h3>
	<h3>Happiness: ${happiness}</h3>
	<h3>
		Script:
		<c:out value="${scriptText }"></c:out>
	</h3>
	<h3>Hungry? ${isHungry }</h3>

	<h2>If-conditions</h2>

	<c:if test="${happiness>5 }">
		<h3>I am happy</h3>
	</c:if>

	<h2>If-else statement</h2>
	<c:choose>
		<c:when test="${isHungry }">
			<h3>I am hungry</h3>
		</c:when>
		<c:otherwise>
			<h3>I am not hungry</h3>
		</c:otherwise>
	</c:choose>
	<h2> for-loop</h2>
	<ul>
	<c:forEach var="eachSkill" items="${skillList }">
		<li>  <c:out value="${eachSkill }"></c:out> </li>
	</c:forEach>
	</ul>
	
	

</body>
</html>










