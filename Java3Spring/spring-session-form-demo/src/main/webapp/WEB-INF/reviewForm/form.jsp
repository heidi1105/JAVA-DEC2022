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
	<form action="/review/process" method="POST">
		<p>
			<label> Title : </label> <input type="text" name="title" />
		</p>
		<p>
			<label> Reviewer : </label> <input type="text" name="reviewer" />
		</p>
		<p>
			<label> Rating : </label> <input type="number" name="rating" />
		</p>
		<p>
			<label> Description : </label>
			<textarea name="description"></textarea>
		</p>
		<button type="submit"> Submit</button>
	</form>
</body>
</html>