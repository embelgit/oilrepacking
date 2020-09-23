<%@page import="com.Fertilizer.dao.shopDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.shopDetailsBean"%>
<%@page import="java.util.List"%>
  	<% boolean isHome=false;%>
	<%@include file="commons/header.jsp"%>
	
	<link href="/Repacking/WebContent/staticContent/css/dataTa.css" rel="stylesheet" type="text/css" media="all" />
	<link href="/Repacking/staticContent/css/dataTables.jqueryui.min.css"  rel="stylesheet" type="text/css" media="all">
	<link rel="stylesheet" href="/Repacking/staticContent/css/tabDemo.css">
 	<link rel="stylesheet" href="/Repacking/staticContent/css/jquery-ui.min.css">
    <link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.min.css">
    
    <script src="/Repacking/staticContent/js/jquery.min.js"></script>
    <script src="/Repacking/staticContent/js/jquery.jqgrid.min.js"></script>
	<script src="/Repacking/staticContent/js/jquery.dataTables.js" type="text/javascript"></script>
	<script type="text/javascript" src="/Repacking/staticContent/js/jqueryUi.js"></script>
	
	
	
	
<html>
	<head>
	
		<title>Container List</title>
		
  		
  		<script type="text/javascript">
  			function Back()
  			{
  				window.location = "shopdetails.jsp" ;
  			}
  			function deleteshop(){
  				window.location = "deleteshop.jsp";
  			}
  		
  		</script>
		

	</head>

	

	<script type="text/javascript"> 
		$(document).ready(function () {
	         var table=$("#list").dataTable();
			 var tableTools = new $.fn.dataTable.TableTools(table, {
				 'sSwfPath':'//cdn.datatables.net/tabletools/2.2.4/swf/copy_csv_xls_pdf.swf',
				 	'aButtons':['copy','print','csv',{
					 'sExtends':'xls',
					 'sFileName':'Data.xls',
					 'sButtonText': 'Save to Excel'
						}
					]
				});
					$(tableTools.fnContainer()).insertBefore('#list_wrapper');
			});
	</script>

<body id="dt_example" style="min-height:300px;">
		
		
		
		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Shop List</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
		</div>
			    
	<%
	shopDetailsDao dao=new shopDetailsDao();
	List list12=dao.getshopList();
	
	%>
	
	<div id="date">
		<label id="demo"></label>
		<script>
			var date = new Date();
			document.getElementById("demo").innerHTML = date.toDateString();
		</script>
	</div>

	<div id="demo_jui">
		<table id="list" class="display" border="1">
			<thead>
				<tr>
					<th>Shop ID</th>
					<th>Shop Name</th>
	               
				</tr>
			</thead>
			
			<tbody>
   				<%
					for(int i=0;i<list12.size();i++){
						shopDetailsBean sr=(shopDetailsBean)list12.get(i);
				%>
				
				<tr>
					<td class="align"><%=sr.getShopId()%></td>
					<td class="align"><%=sr.getShopName()%></td>
				</tr>
	
				<%
					}
				%>
			</tbody>
		</table>
	</div>
	
	<div class="wrapper" align="center">
		<input type="button" value="Back" id="listBtn" style="font-size: 25" class="btn btn-primary" onclick="Back()" /> 
		<input type="button" value="Delete Shop" id="listBtn" style="font-size: 25" class="btn btn-primary" onclick="deleteshop()" />
	</div>
	
</body>

</html>

