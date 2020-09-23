<%-- 
	<%@page import="java.util.Calendar"%>
<%
		int year = Calendar.getInstance().get(Calendar.YEAR);
	%>

<style>
.footer {
   position: fixed;
   left: 0;
   Z-INDEX: 999;
   bottom: 0;
   width: 100%;
   /* background-color: #B4041B; */
   background-color: black;
   /* color: white; */
   color: orange;
   font-size: 28px;
   text-align: center;
}
</style>
</head>
<body>
<div class="footer" >
  <p><b>Copyright © <%=year%> Embel Technology Pvt. Ltd.<br/><a href="http://www.embel.co.in" style="color: orange;"><p style="font-size: 18px">www.embel.co.in</p></a></b></p>
</div>

</body>
</html>  --%>

	<%@page import="java.util.Calendar"%>
<%
		int year = Calendar.getInstance().get(Calendar.YEAR);
	%>

<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   /* background-color: #B4041B; */
       color: black;
    font-size: 15px;
    text-align: center;
    background: #00aabb;
    z-index:99999;
    margin-top:30px;
    
}
</style>
</head>
<body>
<div class="footer" >
  <p><b>Copyright © <%=year%> Embel Technology Pvt. Ltd.                    <a href="http://www.embel.co.in" style="color: black; size: 15px">www.embel.co.in</a></b></p>
</div>

</body>
</html> 