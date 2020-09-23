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

<form:form modelAttribute="userChangePassword" method="post">
   <table>
   		<tr>
   		    <td>Old Password</td>
   		    <td><input type="password" name="oldpassword"/><br/></td>
   		</tr>
   		<tr>
   			<td>New Password</td>
   			<td><form:input type="password" path="password"/></td>
   		</tr>
   		<tr>
   			<td>Confirm New Password</td>
   			<td><form:input type="password" path="cpassword"/></td>
   		</tr>
   		<tr>
				<td><input type="submit" value="Change Password" /></td>
		</tr>
   		
   </table>
   <a href="user">back_to_HomePage</a>
</form:form>
</body>
</html>