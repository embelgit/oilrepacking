<%@page import="com.Fertilizer.dao.shopDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.shopDetailsBean"%>
<%@page import="java.util.List"%>

<%boolean isHome = false;%>
<%@include file="commons/header.jsp"%>
<head>
<meta charset="utf-8">
<title>Tax Creation</title>
<%-- <script type="text/javascript">
          		function checkForDuplicateProductEntry(){
          			<%
          			TaxCreationDao dao = new TaxCreationDao();
          			List list = dao.getTaxCreation();
          			%>
          			
          			<%
          			int z = 0;
          			for(z=0;z<list.size();z++){
          			TaxCreationBean bean = ( TaxCreationBean)list.get(z);
          			%>
          			var pro = "<%=bean.getProduct()%>";
          			var cat = "<%=bean.getCatName()%>";
          			var subCat = "<%=bean.getSubCatName()%>";
          			
          			
          			productId = $('#subCat').val();
    				
    				$("#subCat option:selected").each(function() {
    					   selectedVal = $(this).text();
    					});
    				
    				var splitText = selectedVal.split(",");
    				
    				var subCatName = splitText[0];
          			
          			if(document.getElementById("productName").value ==pro && document.getElementById("fk_cat_id").value ==cat && subCatName ==subCat ){
          				alert("product already exist...Duplicate Not allowed");
          				location.reload();
          				return false;
          			}
          			<%
          			}
          			%>
          			
          			}
          		
          		</script> --%>
<script type="text/javascript" src="/Repacking/staticContent/js/shopdetails.js"></script>

<script type="text/javascript">
				function ChooseContact(data)
					{
						
						document.getElementById("taxPercentage").value=(data.options[data.selectedIndex].getAttribute("myid"));
					}
				function Back(){
					window.location ="shopdetails.jsp";
				}
</script> 

</head>
 <div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading">Edit Shop</h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
<div class="container col-sm-offset-2" >
        <form class="form-horizontal" method="post" action="" name="txc"><!-- Value of 'name' attribute is used in  taxCreation.js  -->
          <fieldset>
          		<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
				</div>
				 <div class="row form-group">
           				<label class="col-md-2 control-label">Select Shop<sup>*</sup></label>  
		           	 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-hand-right"></i>
							</span>
							<%
							shopDetailsDao cdd = new shopDetailsDao();
           						List cList =cdd.getAllshop();
							
							%>
							<input list="shop_drop1" id="shop1"  class="form-control" onchange="getshopname()">
				<datalist id="shop_drop1">
							<%
					           for(int i=0;i<cList.size();i++){
					        	   shopDetailsBean cat=(shopDetailsBean)cList.get(i);
							%>
		
							<option data-value="<%=cat.getShopId()%>" value="<%=cat.getShopName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div>
					<label class="col-md-2 control-label" for="taxType">New Shop Name<sup>*</sup></label>  
		           	 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-hand-right"></i>
							</span>
							 <input id="shopName" name="shopName" placeholder="New Shop Name" class="form-control input-md" type="text" >
            			</div>
            		</div>
            	
				</div>
				 
				<div class="form-group row">
           			<div class="col-md-10 text-center">
           		

					<input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" name="btn" value="Update" class="btn btn-large btn-success button-height-width" onclick="updateshop()" /> 
             	<input style=" height: 65px; width: 180; font-size: 25" class="btn btn-large btn-danger  button-height-width" type="reset" id="save" name="btn" value="Cancel" onclick="reset()" />
					<input type="button" style="height: 65px; width: 180; font-size: 25"" value="Back" id="listBtn" class="btn btn-primary" onclick="Back()" /> 


            		</div>
          		</div>
			</fieldset>
		</form>
	</div>
	
	<%@include file="commons/newFooter.jsp" %>
	
<%-- <%@include file="commons/footer.jsp" %> --%>