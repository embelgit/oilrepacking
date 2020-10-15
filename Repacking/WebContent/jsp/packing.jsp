
<%@page import="com.Fertilizer.hibernate.containerStock"%>
<%@page import="com.Fertilizer.dao.PackingDao"%>
<%@page import="com.Fertilizer.hibernate.MeasuringUnitsBean"%>
<%@page import="com.Fertilizer.dao.MeasuringUnitsDao"%>
<%@page import="com.Fertilizer.hibernate.CotainerGoodsReceiveBean" %>
<%@page import="com.Fertilizer.hibernate.Packing_InfoBean"%>
<%@page import="com.Fertilizer.dao.Packing_InfoDao"%>
<%boolean isHome = false;
%>
<%@include file="commons/header.jsp"%>

<head>
<meta charset="utf-8">

<%-- 
<script type="text/javascript">
function checkQuantityEntry(){
          		
	document.pk.btn.disabled =true;
	<%
          			PackingDao dao = new PackingDao();
          			List list = dao.checkQuantity();
          			%>
          			
          			<%
          			
          			for(int z=0;z<list.size();z++){
          				containerStock bean1 = (containerStock)list.get(z);
          				
          			%>
          			var db_id="<%=bean1.getPkContainerStockId() %>";
          			var db_container_name="<%=bean1.getContainerName() %>";
          			var db_quantity="<%=bean1.getQuantity() %>";
          			
          			
          			
          			
          		//var quantity =	document.getElementById("quantity").value;
          		var	ui_container = document.getElementById("container").value;
          		var ui_container_name1=document.getElementById("containerName").value;
          		
          	//	var container=$('container').val;
          		
          			if(db_container_name==ui_container_name1 ){
          				
          			
          			if(db_quantity < ui_container)
          			{
          				packValidation();
          				
          			
          			}
          			else{
          				
          				alert("container quantity is not available");
          				location.reload();
          				return false;
          				
          			}
          			
          			}
          			
          			<%
          			}
          			%>
          			
          			
      				
          			
          			
          			}

</script>--%>
<script type="text/javascript" src="/Repacking/staticContent/js/packing.js"></script>
</head>

<body onload="getProductName();">
<div class="row header_margin_top">
	<div align="center">
		<h2 class="form-name style_heading">Packing</h2>
	</div>

</div>
<div class="row">
	<div class="col-sm-offset-1 col-md-10">
		<hr style="border-top-color: #c1b1b1;">
	</div>
</div>
<div class="container col-sm-offset-2" 	style ="padding-right: 128px"  >
	<form class="form-horizontal" method="post" action="" name="pk">
		<fieldset>
			<div class="row form-group">
				<div class="col-md-6">
					<%@include file="commons/clock.jsp"%>
				</div>
			</div>
			
			
 	       <div class="row form-group">
              	<label class="col-md-2 control-label" for="productName">Product Name<sup>*</sup></label>  

            			<div class="col-md-9">
							<div class="input-group" >
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
            						<select class="form-control" id='proName'   name="proName" >
									</select>
            				</div>
            			</div>
        	  </div> 

		 <div class="row form-group">
		       	<label class="col-md-2 control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("packingtype") %> <%}%> <%if(abc.equals("english")){%>Container Name<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							 <%
							PackingDao pid1 = new PackingDao();
           						List pack1 =pid1.getAllContainer();
							%>
							 
							<input type="text" id="containerName" list="pack_drop2" class="form-control" placeholder="Container Name" onchange="getunit()">
				      <datalist id="pack_drop2">
							<%
					           for(int i=0;i<pack1.size();i++){
					        	   containerStock pib1 =(containerStock)pack1.get(i);
							%>
							<option data-value="<%=pib1.getPkContainerStockId() %>" value="<%=pib1.getContainerName()%>">
							<%
				      			}
				    		%>
						</datalist> 
            			</div>
           </div>
              	   	<label class="col-md-2 control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("packingtype") %> <%}%> <%if(abc.equals("english")){%>Unit<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
						<%-- <%
								MeasuringUnitsDao dao2 = new MeasuringUnitsDao();
           						List shop =dao2.getAllUnits();
							
							%> --%>
						<input readonly="readonly" type="text" id="unitName" placeholder="Unit Name" class="form-control"> 	
				<!-- 			<input type="text" id="unitName" placeholder="Unit Name" " class="form-control" > -->
				<%-- <datalist id="unit_drop1">
							list="unit_drop1
							<%
					           for(int i=0;i<shop.size();i++){
					        	   MeasuringUnitsBean bean =(MeasuringUnitsBean)shop.get(i);
							%>
							<option data-value="<%=bean.getPkUnitId()%>" value="<%=bean.getUnitName() %>" >
							<%
				      			}
				    		%>
						</datalist> --%>
            			</div>
           </div>
              	
          </div>
          
          <div class="row form-group">
		 		 <label class="col-md-2 control-label" for="container"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("container") %> <%}%> <%if(abc.equals("english")){%>No. Packing/Quantity<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
						<input type="text" id="packingQuantity" placeholder="Quantity to pack" class="form-control" onchange="getCapacity()">
				 	
               		</div>
              	</div>
              	
              		<label class="col-md-2 control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("packingtype") %> <%}%> <%if(abc.equals("english")){%>Container's Capacity<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
				<%--			<select class="form-control" id='capacity'   name="capacity" onchange="getContainerByPacking();return false();checkQuantityEntry();checkForDuplipackingEntry();" >--%>
							<select class="form-control" id='capacity'   name="capacity" onchange="quantity();return false()">
									</select>
            			</div>
           </div>
           </div>
              	
           <div class="row form-group">
           <label class="col-md-2 control-label" for="container"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("container") %> <%}%> <%if(abc.equals("english")){%>No Of Container<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
						<input readonly="readonly" type="text" id="container" placeholder="No of container" class="form-control" <%--onchange="checkQuantityEntry()"--%>>
				 	
               		</div>
              	</div>
          </div>
        
           <div class="row form-group" style="display: none;">
           <label class="col-md-2 control-label" for="container"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("Stock") %> <%}%> <%if(abc.equals("english")){%>Container Quantity<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
						<input readonly="readonly" type="text" id="stock" placeholder="No of container" class="form-control" >
				 	
               		</div>
              	</div>
          </div>
           			
				<div class="form-group row">
					<div class="col-md-10 text-center">
						<input type="button" id="save" name="btn" style="font-size: 25px; width: 180px; height: 65px; padding-top: 0px;"
							class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"
							onclick="packValidation()" value="Submit"> 
							
						<input id="save"name="btn" style="font-size: 25px;width: 180px;height: 60px; padding-top: 0px;"
							class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width"
							type="reset" onclick="reset()" value="Cancel">
					</div>
				</div>
		
		
		</fieldset>
	</form>
</div>
</body>

<%@include file="commons/newFooter.jsp"%>