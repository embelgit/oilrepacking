<%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
<%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
<%boolean isHome = false;
%>
<%@include file="commons/header.jsp"%>
 
<head>
<!-- <link rel="stylesheet" href="/Fertilizer/staticContent/css/bootstrap.min.css"> -->
<meta charset="utf-8">
<script type="text/javascript" src="/Repacking/staticContent/js/shopdetails.js"></script>

<script type="text/javascript">
	function list1(){ 
	window.location = "shoplist.jsp";
	}
	
	function edit(){
		window.location = "editshop.jsp";
	}
</script>

</head>
		 	<div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("categoryDetails") %> <%}%> <%if(abc.equals("english")){%>Shop Details<%}%> </h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
    
	<%-- <div class="container col-sm-offset-2" >
         <!-- Value of 'name' attribute is used in categoryDetails.js  -->
			<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
			</div> --%>
			<!-- -- tabs by RK  -->
		<!-- <ul class="nav nav-tabs" style="background-color: white;">
	    <li class="active"><a data-toggle="tab" href="#Category1"><h4 style="color:blue">Category</h4></a></li>
	     <li><a data-toggle="tab" href="#subCategory1"><h4 style="color:blue">Sub Category</h4></a></li>
	    
 	 </ul> -->
 	<!--  <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>
		     </div>
 	 <div class="tab-content" style="float: left"> -->
 	 
 	 <!-- ----- Shop by RK -->
 	 <div id="shopDetail">
 	 <form class="form-horizontal" method="post" action="" name="catd">
			 <div class="row form-group" >
           		<label class="col-md-3 control-label" for="categoryName" style="margin-left: 250px;"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("catName") %> <%}%> <%if(abc.equals("english")){%>Shop Name<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<!-- <span class="input-group-addon">
								<i class="glyphicon glyphicon-list-alt"></i>
							</span> -->
								<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
              					<input id="shopName" name="shopName" placeholder=" Enter Shop Name" class="form-control input-md" type="text" >
            			</div>
           		 	</div>
				</div>
				
				<div class="form-group row">
		            <div class="col-md-10 text-center">
		           <!--  "catDetails()" function is implemented in categoryDetails.js -->
		           	
		           	<input style=" height: 65px; width: 180; font-size: 25; margin-left: 255px;" type="button" id="btn" style="font-size: 25;" class="btn btn-large btn-success button-height-width" name="btn" onclick="shopDetails()" value="Submit">
		            <input style=" height: 65px; width: 180; font-size: 25" type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" value="Cancel" onclick="reset()">

   <input style=" height: 65px; width: 180; font-size: 25" type="reset" style="font-size: 25" class="btn btn-primary" id="list" name="btn" onclick="list1()" value="ShopList">
      <input style=" height: 65px; width: 180; font-size: 25" type="reset" style="font-size: 25" class="btn btn-primary" id="save" name="btn" value="Edit" onclick="edit()">		     

		       <%--  <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="catDetails()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("submit") %> <%}%> <%if(abc.equals("english")){%>Submit<%}%></h4></button>
              	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("cancel") %> <%}%> <%if(abc.equals("english")){%>Cancel<%}%> </h4> </button>
 --%>

		   </div>
         </div>
         </form>
         </div>
       
     </div>
     </div>
     <%@include file="commons/newFooter.jsp" %>
     
<%-- <%@include file="commons/footer.jsp" %> --%>
	