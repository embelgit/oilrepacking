<%@page import="com.Fertilizer.hibernate.Packing_InfoBean"%>
<%@page import="com.Fertilizer.dao.Packing_InfoDao"%>
<%@page import="com.Fertilizer.bean.StockDetail"%>
<%@page import="com.Fertilizer.hibernate.Stock"%>
<%@page import="com.Fertilizer.hibernate.GodownEntry"%>
<%@page import="com.Fertilizer.dao.GodownEntryDao"%>
<%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
<%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>
<%@page import="java.util.List"%>
<head>
<script src="/Repacking/staticContent/js/stockDetails.js"></script>
<script src="/Repacking/staticContent/js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="/Repacking/staticContent/js/selectjj.js"></script>
<script type="text/javascript" src="/Repacking/staticContent/js/buttom.js"></script>
<script src="/Repacking/staticContent/js/jquery.min.js"></script>
<script src="/Repacking/staticContent/js/jquery.jqgrid.min.js"></script>
<script src="/Repacking/staticContent/js/jquery.dataTables.js" type="text/javascript"></script>
<script type="text/javascript" src="/Repacking/staticContent/js/jqueryUi.js"></script>

<link href="/Repacking/WebContent/staticContent/css/dataTa.css" rel="stylesheet" type="text/css" media="all" />
<link href="/Repacking/staticContent/css/dataTables.jqueryui.min.css" rel="stylesheet" type="text/css" media="all">
<link href="/Repacking/staticContent/css/select.css" rel="stylesheet" type="text/css" media="all">
<link href="/Repacking/staticContent/css/button.css" rel="stylesheet" type="text/css" media="all">
<link rel="stylesheet" href="/Repacking/staticContent/css/jquery-ui.min.css">
<link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.min.css">

<script type="text/javascript" src="/Repacking/staticContent/js/stockDetails.js"></script>

<script type="text/javascript">
function openBilling() {
		 window.location = '/Repacking/jsp/allBilling.jsp';
}

</script>


</head>

<body onload="getProductName()">
<div class="container col-md-offset-1" style="float: left"> 
 		
 		<div class="row">
			<div align="center" style="margin-top: 75px">
				  <h2 class="form-name style_heading">Stock Reports</h2>
			</div>
				 	
			 <div class="row">
				<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color:#c1b1b1;">
				</div>	
			  </div>
		</div>

		<ul class="nav nav-tabs">
	    <li class="active"><a data-toggle="tab" href="#cat"><h4 style="color:blue">Category Wise</h4></a></li>
	    <li><a data-toggle="tab" href="#productName"><h4 style="color:blue">Product Wise</h4></a></li>
	    <li><a data-toggle="tab" href="#companyName"><h4 style="color:blue">Company Wise</h4></a></li>
	    <li><a data-toggle="tab" href="#packed"><h4 style="color:blue">Container Stock</h4></a></li>
	    <li><a data-toggle="tab" href="#packedUnpacked"><h4 style="color:blue">Packed & Unpacked stock</h4></a></li>
 	 </ul>
 
 	<div class="tab-content" style="float: left">
   
    <!-------- Category Wise ---------->
   
    	<div id="cat" class="tab-pane fade in active">
    		<div class="row"></div>
 		
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 control-label" for="fk_cat_id">Product Category<sup>*</sup></label>  
			           			 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
			              				
										<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
										<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
										<%
										   CategoryDetailsDao cdd = new CategoryDetailsDao();
			           						List cList =cdd.getAllMainCat();
										
										%>
										<input list="cat_drop" id="fk_cat_id"  class="form-control">
							<datalist id="cat_drop">
										<%
								           for(int i=0;i<cList.size();i++){
								        	   CategoryDetailsBean cat=(CategoryDetailsBean)cList.get(i);
										%>
					
										<option data-value="<%=cat.getCatId()%>" value="<%=cat.getCategoryName()%>">
										<%
							      			}
							    		%>
						              	
			            			</datalist>
			            			</div>
            					</div> 
			
					  
				     <div class="col-md-3">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="StockDetailsReportAsPerCat()" value="Search"/>
												     									
						</div>
					</div>	
				</div>		
						<table id="stockByCat" class="display">
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Company Name</th>
								<th>Packing</th>
								<th>Quantity</th>
							
							</tr>
						</thead>
						<tfoot>
							<tr>
								  <th colspan="3" style="text-align: right">Total Quantity:</th>
								<th></th> 
							</tr>
						</tfoot>
					</table>
					<div class="row form-group buttons_margin_top ">
								<div align="center">
								<input type="button" id="btn" style="font-size: 18px;height: 45px;width: 160px;" class="btn btn-large btn-success" name="btn" onclick="openBilling()" value="Back To Billing">	
								</div>
					</div>
				</fieldset>
				</form>
    	</div>
    	
    	<!-------- Product Name Wise ---------->
    	
    	<div id="productName" class="tab-pane">
    	<div class="row"></div>
 		
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 control-label" for="fk_godown_id">Select Product<sup>*</sup></label>  
           			 <div class="col-md-6">
						<div class="input-group">
						
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
									<select class="form-control" id='proName'   name="proName"  >
									</select>
            			</div>
            		</div> 
			
					  
				     <div class="col-md-3">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="StockDetailsReportAsPerProductName()" value="Search"/>
												     									
						</div>
					</div>	
				</div>		
						<table id="productTable" class="display">
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Company Name</th>
								<th>Packing</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								  <th colspan="3" style="text-align: right">Total Quantity:</th>
								<th></th> 
							</tr>
						</tfoot>
					</table>
					<div class="row form-group buttons_margin_top ">
								<div align="center">
								<input type="button" id="btn" style="font-size: 18px;height: 45px;width: 160px;" class="btn btn-large btn-success" name="btn" onclick="openBilling()" value="Back To Billing">	
								</div>
					</div>
				</fieldset>
				</form>
    	
    	</div>
    	
    	
    	<!-------- Company Name Wise ---------->
    	
    	<div id="companyName" class="tab-pane">
    	<div class="row"></div>
 		
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 control-label" for="fk_godown_id">Select Company<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
						
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
							<%
							   CategoryDetailsDao cdDAO = new CategoryDetailsDao();
           						List companyName =cdDAO.getCompanyNames();
							
							%>
							<input list="company_drop" id="company_name"  class="form-control" >
				<datalist id="company_drop">
							<%
					           for(int i=0;i<companyName.size();i++){
					        	   Stock com = (Stock)companyName.get(i);
							%>
		
							<option data-value="<%=com.getCompanyName()%>" value="<%=com.getCompanyName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div> 
			
					  
				     <div class="col-md-3">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="StockDetailsReportAsPerCompanyName()" value="Search"/>
												     									
						</div>
					</div>	
				</div>		
						<table id="companyWiseTable" class="display">
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Company Name</th>
								<th>Packing</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								  <th colspan="3" style="text-align: right">Total Quantity:</th>
								<th></th> 
							</tr>
						</tfoot>
					</table>
					<div class="row form-group buttons_margin_top ">
								<div align="center">
								<input type="button" id="btn" style="font-size: 18px;height: 45px;width: 160px;" class="btn btn-large btn-success" name="btn" onclick="openBilling()" value="Back To Billing">	
								</div>
					</div>
				</fieldset>
				</form>
    	
    	</div>
    	
    <!-------- Packed And Unpacked stock ---------->
    	<div id="packedUnpacked" class="tab-pane">
    	<div class="row"></div>
 		
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 control-label" for="fk_godown_id">Item Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							ProductDetailsDao cdd2 = new ProductDetailsDao();
           						List cList2 =cdd2.getAllProduct();
							
							%>
							<input list="product_drop" id="productname"  class="form-control" >
				<datalist id="product_drop">
							<%
					           for(int i=0;i<cList2.size();i++){
					        	   ProductDetailsBean cat=(ProductDetailsBean)cList2.get(i);
							%>
		
							<option data-value1="<%=cat.getProductName()%>" data-value2="<%=cat.getFk_cat_id()%>" data-value3="<%=cat.getFk_subCat_id()%>" value="<%=cat.getProductName()%> , <%=cat.getManufacturingCompany()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div> 
			
					  
				     <div class="col-md-3">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="PackedAndUnpackedStock()" value="Search"/>
												     									
						</div>
					</div>	
				</div>		
						<table id="packedUnpackedstock" class="display">
						<thead>
							<tr>
								<th>product Name</th>
								<th>Manufacturing Company</th>
								<th>Updated Date</th>
								<th>Total stock</th>
								<th>Packed stock</th>
								<th>Unpacked stock</th>
							
							</tr>
						</thead>
						
					</table>
					<div class="row form-group buttons_margin_top ">
								<div align="center">
								<input type="button" id="btn" style="font-size: 18px;height: 45px;width: 160px;" class="btn btn-large btn-success" name="btn" onclick="openBilling()" value="Back To Billing">	
								</div>
					</div>
				</fieldset>
				</form>
    	
    	</div>
    	
    	  <!--------Cotainer  stock ---------->
    	<div id="packed" class="tab-pane">
    	<div class="row"></div>
 		
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 control-label" for="fk_godown_id">Container Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							Packing_InfoDao cdd1 = new Packing_InfoDao();
           						List cList1 =cdd1.getAllPacking();
							
							%>
							<input list="Container_drop" id="containerName"  class="form-control" >
				<datalist id="Container_drop">
							<%
					           for(int i=0;i<cList1.size();i++){
					        	   Packing_InfoBean cat=(Packing_InfoBean)cList1.get(i);
							%>
		
							<option data-value1="<%=cat.getContainerName()%>" data-value2="<%=cat.getPacking_Type()%>" data-value3="<%=cat.getUnit_Id()%>" value="<%=cat.getContainerName()%>,<%=cat.getPacking_Type()%>,<%=cat.getUnit_Id()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div> 
			
					  
				     <div class="col-md-3">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="StockDetailsOfcontainer()" value="Search"/>
												     									
						</div>
					</div>	
				</div>		
						<table id="stockByGodown" class="display">
						<thead>
							<tr>
								<th>Container Name</th>
								<th>Capacity</th>
								<th>Unit</th>
								<th>Purchase Date</th>
								<th>Quantity</th>
							
							</tr>
						</thead>
						
					</table>
					<div class="row form-group buttons_margin_top ">
								<div align="center">
								<input type="button" id="btn" style="font-size: 18px;height: 45px;width: 160px;" class="btn btn-large btn-success" name="btn" onclick="openBilling()" value="Back To Billing">	
								</div>
					</div>
				</fieldset>
				</form>
    	
    	</div>
    	
    </div>
   </div>
   </body>