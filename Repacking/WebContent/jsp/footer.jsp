
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
</html> 