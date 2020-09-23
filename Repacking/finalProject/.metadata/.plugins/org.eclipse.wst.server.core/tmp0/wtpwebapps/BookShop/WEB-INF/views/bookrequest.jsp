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
<h3>Hello..... ${sessionScope.currentUser.memberName}</h3>
 ${message}
<form:form modelAttribute="bookrequest123" method="post">
		<table>
		
			 <tr>
				<td>Book Name</td>
				<td><p>${requestScope.bookrequest.bookName}</p></td>
			</tr>
		     <tr>
				<td>Book  Id</td>
				<td><p>${requestScope.bookrequest.bookId}</p></td>
			</tr>
			
			<tr>
				<td>Book Category</td>
				<td><p>${requestScope.bookrequest.category.category}</p></td>
			</tr>
		     <tr>
				<td>Author Name</td>
				<td><p>${requestScope.bookrequest.author.authorName}</p></td>
			</tr> 
			  <tr>
				<td>Member</td>
				<td><p>${sessionScope.currentUser.memberId}</p></td>
			</tr> 
             <tr>
				<td>book Id</td>
				<td><form:input type="text" path="book.bookId"/></td>
			</tr>
			
 
              <tr>
				<td>Member id</td>
				<td><form:input type="text" path="member.memberId"/></td>
			</tr>
 
               <tr>
				<td>Request Date(dd-mon-yyyy)</td>
				<td><form:input type="text" path="requestDate"/></td>
			</tr>
			
			<tr>
				<td>issue date(dd-mon-yyyy)</td>
				<td><form:input type="text" path="issueDate"/></td>
			</tr>
			
			<tr>
				<td>return date(dd-mon-yyyy)</td>
				<td><form:input type="text" path="returnDate"/></td>
			</tr>
			
				<tr>
				<td>Book status</td>
				<td><form:input type="text" path="status"/></td>
			</tr>
			
			
			
			<tr>
				<td><input type="submit" value="book" /></td>
			</tr>
		</table>
	</form:form>



</body>
</html>