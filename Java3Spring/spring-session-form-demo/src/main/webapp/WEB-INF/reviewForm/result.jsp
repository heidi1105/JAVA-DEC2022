<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Review Result</h1>
	<p>
		Title :
		<c:out value="${title }"></c:out>
	</p>
	<p>
		Reviewer :
		<c:out value="${reviewer }"></c:out>
	</p>
	<p>
		Rating :
		<c:out value="${rating }"></c:out>
	</p>
	<p>
		Description :
		<c:out value="${description }"></c:out>
	</p>

</body>
</html>