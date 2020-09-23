<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<form:form modelAttribute="book123" method="post">
		<table>
			
			<tr>
				<td>ISBN</td>
				<td><form:input  type="text" path="ISBN" /></td>
				<%-- <td><form:errors path="ISBN" cssClass="error" /></td> --%>
			</tr>
			<tr>
				<td>book Name</td>
				<td><form:input type="text"  path="bookName"/></td>
				<%-- <td><form:errors path="bookName" cssClass="error" /></td> --%>
			</tr>
			
			<tr>
				<td>no Of Copies</td>
				<td><form:input type="text"  path="noOfCoppies"/></td>
				<%-- <td><form:errors path="noOfCoppies" cssClass="error" /></td> --%>
			</tr>
				<tr>
				<td>type</td>
				<td><form:input type="text"  path="type"/></td>
				<%-- <td><form:errors path="noOfCoppies" cssClass="error" /></td> --%>
			</tr>
			<%-- <tr>
				<td>category Id</td>
				<td><form:input type="text"  path="categoryId"/></td>
				<td><form:errors path="categoryId" cssClass="error" /></td>
			</tr> --%>
			<tr>
			<td>category</td>
			<td><form:select path="category.categoryId" items="${requestScope.category}" itemLabel="category" itemValue="categoryId"/> </td>
			
			</tr>
			<tr>
			<td>Author</td>
			<td><form:select path="author.authorId" items="${requestScope.author}" itemLabel="authorName" itemValue="authorId"/> </td>
			
			</tr>
			<tr>
			<td>publisher</td>
			<td><form:select path="publisher.publisherId" items="${requestScope.publisher}" itemLabel="publisherName" itemValue="publisherId"/> </td>
			
			</tr>
			
		
			
			<tr>
				<td><input type="submit" value="Add Book" /></td>
			</tr>

		</table>
		
	</form:form>
  	
   <a href="Admin">back_to_admin</a>
</body>
</html>