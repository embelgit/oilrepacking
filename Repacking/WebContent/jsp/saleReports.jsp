<%@page import="com.Fertilizer.hibernate.CustomerDetailsBean"%>
<%@page import="com.Fertilizer.dao.CustomerDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.shopDetailsBean"%>
<%@page import="com.Fertilizer.dao.shopDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.SupplierDetailsBean"%>
<%@page import="com.Fertilizer.dao.SupplierDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
<%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
<%@page import="com.Fertilizer.dao.FertilizerBillDao"%>
<%@page import="com.Fertilizer.hibernate.FertilizerBillBean"%>
<% boolean isHome=false;%> 
<%@include file="commons/header.jsp"%>
<head>


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

<!-- For datatable to pdf,print,excel etc conversion -->
<script type="text/javascript" src="//code.jquery.com/jquery-1.12.4.js"></script> 
 <script type="text/javascript" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script type="text/javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>

<script type="text/javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css"> 
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css">

<script src="/Repacking/staticContent/js/saleReports.js"></script>
</head>
<div class="row" style="min-height:300px;">
    <div  class="col-md-12">
        <h3>Left Tabs</h3>
        <hr/>
        <div class="col-md-2">
            <ul class="nav nav-tabs tabs-left">
                <li class="active"><a href="#home" data-toggle="tab">Category Wise Sale Reports</a></li>
                <li><a href="#profile" data-toggle="tab">Product Name Wise Sale Reports</a></li>
                 <li><a href="#payment" data-toggle="tab">Payment Mode Wise Sale Reports</a></li>
                 <li><a href="#shopWise" data-toggle="tab">Shop Wise Sale Reports</a></li>
                <li><a href="#GSTWise" data-toggle="tab">GST Wise Reports</a></li>
                <li><a href="#IDWise" data-toggle="tab">Customer ID Wise Reports</a></li>
                <li><a href="#saleReturn" data-toggle="tab">Sale Return Reports</a></li>
                <li><a href="#billNoWsiswe" data-toggle="tab">Bill No Wise Reports</a></li>
            </ul>
        </div>
     
  <div class="col-xs-9">
            <!-- Tab panes -->
    <div class="tab-content">
    	
    <!---------- 	CategoryWise Sale reports -------------->
    
    <div class="tab-pane active" id="home">
       		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Category Wise Sale Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
		<ul class="nav nav-tabs">
		    <li class="active"><a data-toggle="tab" href="#supplierSingleDate"><h4 style="color:blue">Datewise</h4></a></li>
		    <li><a data-toggle="tab" href="#supplierBetweenTwoDate"><h4 style="color:blue">Range</h4></a></li>
		   
	 	</ul>
         	 
   <div class="tab-content" style="float: left"> 
    
	<div id="supplierSingleDate" class="tab-pane active">
		        <div class="row">
					<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color: #c1b1b1;">
					</div>
				</div>
		 	<form class="form-horizontal" method="post" action="" name="saleReportForm">
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
										<input list="cat_drop6" id="fk_cat_id6"  class="form-control">
							<datalist id="cat_drop6">
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
					
						<label class="col-md-3 control-label" for="">
							Enter Date:<sup>*</sup>
						</label>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon"> <i
									class="glyphicon glyphicon-user"></i>
								</span> <input type="date" id="fDate" placeholder="Start Date"
									class="form-control input-md" type="text">
							</div>
						</div>
			</div>
					<div class="row form-group">
						<div class="col-md-3 col-md-offset-3">
							<div class="input-group">
							<div align="center">
								<input type="button" id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right"
								onclick="saleReportForSingleDateAsPerCategory()" value="Search" style="margin-left: 180px;"/>
							</div>
							</div>
							</div>
						</div>
					
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="sale1" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Tax Percentage</th>
								<th>Tax Amount</th>
								<th>Discount Amount</th>
								<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							 <tr>
								<th colspan="8" style="text-align: right">Total Rs:</th>
								<th></th>
							</tr> 
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
       </div>
        	
        <!------ 	Between Two Dates  ----->
        	  <div id="supplierBetweenTwoDate" class="tab-pane fade">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div>
				
				
				<form class="form-horizontal" method="post" action="" name="saleReportFormRange">
				<fieldset>
				<div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2  control-label" for="fk_cat_id_for_payment_mode_two">Product Category<sup>*</sup></label>
					 <div class="col-md-3">
					 <div class="input-group ">
					 
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao paymentModecatdao2 = new CategoryDetailsDao();
           						List catListPayment2 =paymentModecatdao2.getAllMainCat();
							
							%>
							<input list="cat_drop_For_payment_mode_two1" id="fk_cat_id_for_payment_mode_two1"  class="form-control" >
				<datalist id="cat_drop_For_payment_mode_two1">
							<%
					           for(int i=0;i<catListPayment2.size();i++){
					        	   CategoryDetailsBean catPaymentbean1 =(CategoryDetailsBean)catListPayment2.get(i);
							%>
		
							<option data-value="<%=catPaymentbean1.getCatId()%>" value="<%=catPaymentbean1.getCategoryName()%>">
							<%
				      			}
				    		%>
            			</datalist>
            			</div>
					 </div>
					</div>
					<div class="row form-group">
						<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="endDate">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
			
			<div class="row form-group">
						<div class="col-md-3 col-md-offset-3">
							<div class="input-group">
								<input type="button" id="btn" name="save"
									class="btn btn-lg btn-success btn-md button_hw button_margin_right"
									onclick="saleReportBetweenTwoDatesAsPerCategory()" value="Search" style="margin-left: 190px;"/>
							</div>
						</div>
				</div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="saleBetTwoDates" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Tax Percentage</th>
								<th>Tax Amount</th>
								<th>Discount Amount</th>
								<th>Total Amount</th>
							</tr>
							
						</thead>
						
						<tfoot>
							  <tr>
								<th colspan="8" style="text-align: right">Total Rs:</th>
								<th></th>
							</tr>  
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
        	  </div>
        </div>	 
         	 
	</div>

         
           <!---------   product name Wise Reports--------->
                
     <div class="tab-pane" id="profile">
	         	<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Product Name Wise Sale Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
         	 
	  <ul class="nav nav-tabs">
		    <li class="active"><a data-toggle="tab" href="#customerSingleDate"><h4 style="color:blue">Datewise</h4></a></li>
		    <li><a data-toggle="tab" href="#customerBetweenTwoDate"><h4 style="color:blue">Range</h4></a></li>
		  
	  </ul>
         	 
   <div class="tab-content" style="float: left"> 

    <!--    for single date -->
	<div id="customerSingleDate" class="tab-pane active">
		        <div class="row">
					<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color: #c1b1b1;">
					</div>
				</div>
		 		<form class="form-horizontal" method="post" action="" name="saleReportFormItem">
				<fieldset>
						<div class="row form-group" style="margin-top: 20px">
								<label class="col-md-2 col-md-offset-1 control-label" for="fk_cat_id">Product Category<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao cdd9 = new CategoryDetailsDao();
           						List cList9 =cdd9.getAllMainCat();
							
							%>
							<input list="cat_drop" id="fk_cat_id"  class="form-control" onchange="getAllProduct()">
				<datalist id="cat_drop">
							<%
					           for(int i=0;i<cList9.size();i++){
					        	   CategoryDetailsBean cat9=(CategoryDetailsBean)cList9.get(i);
							%>
		
							<option data-value="<%=cat9.getCatId()%>" value="<%=cat9.getCategoryName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div>
					
					<label class="col-md-2 control-label" for="product">Product Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									<select class="form-control" id='proName'  name="proName"  >
									</select>
										
								</div>
							</div>
					  </div>
					  <div class="row form-group">
						<label class="col-md-3 control-label">
							Enter Date:<sup>*</sup>
						</label>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon"> <i
									class="glyphicon glyphicon-user"></i>
								</span> <input type="date" id="fDate1" placeholder="Start Date"
									class="form-control input-md" type="text">
							</div>
						</div>
			
			<!-- <div class="row form-group buttons_margin_top ">
												<div align="center">
						<div class="col-md-3 col-md-offset-1">
							<div class="input-group">
								<input type="button" id="btn" name="save"
									class="btn btn-lg btn-success btn-md button_hw button_margin_right"
									onclick="saleReportforSingleDateAsPerProName()" value="Search" style="margin-left: 100px;"/>
							</div>
						</div>
					</div> -->
	<div class="row form-group buttons_margin_top ">
	<div align="center">
												  
 <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right"onclick="saleReportforSingleDateAsPerProName()" value="Search" style="margin-right: 415px; margin-top: 35px;"/>
												     									
	</div>
		</div>				
					
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="sale3" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
								<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Discount Amount</th>
								<th>Tax Amount</th>
								<th>Tax Percentage</th>
								<th>Igst Percentage</th>
								<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="9" style="text-align: right">Total Rs:</th>
								<th></th>
							
			
			
							</tr>
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
         
       </div>
       
       
       
        	
        <!------ 	Between Two Dates  ----->
        	  <div id="customerBetweenTwoDate" class="tab-pane fade">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div>
				
				<form class="form-horizontal" method="post" action="" name="saleReportTwoDates">
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
							   CategoryDetailsDao cdao = new CategoryDetailsDao();
           						List catList =cdao.getAllMainCat();
							
							%>
							<input list="cat_drop_For_sale" id="fk_cat_id_for_sale"  class="form-control" onchange="getAllProductForSale()">
				<datalist id="cat_drop_For_sale">
							<%
					           for(int i=0;i<catList.size();i++){
					        	   CategoryDetailsBean catB =(CategoryDetailsBean)catList.get(i);
							%>
		
							<option data-value="<%=catB.getCatId()%>" value="<%=catB.getCategoryName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div>
					
					<label class="col-md-2 control-label" for="product">Product Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									<select class="form-control" id='proName1'  name="proName1"  >
									</select>
										
								</div>
							</div>
					  </div>
				         <div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDateForSale" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDateForSale" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					  
				       <div class="row form-group buttons_margin_top ">
												<div align="center">
												  
												    <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right"onclick="saleReportforBetweenTwoAsPerProName()" value="Search"/>
												     									
												</div>
									</div>	
						<table class= "table table-bordered table-striped table-condensed cf" id="sale4" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Tax Percentage</th>
								<th>Tax Amount</th>
								<th>Discount Amount</th>
								<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="8" style="text-align: right">Total Rs:</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</fieldset>
				</form>
        	  </div>
        </div>	 
	</div>
	
	<!-- Payment Mode Wise -->
 	    <div class="tab-pane" id="payment">
	         	<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Payment Mode Wise Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
         	 
	  <ul class="nav nav-tabs">
		    <li class="active"><a data-toggle="tab" href="#catWisePaymentMode"><h4 style="color:blue">Category Wise</h4></a></li>
		    <li><a data-toggle="tab" href="#dateWisePaymentMode"><h4 style="color:blue">DateWise</h4></a></li>
		  	<li><a data-toggle="tab" href="#rangeWisePaymentMode"><h4 style="color:blue">Range</h4></a></li>
	  </ul>
         	 
   <div class="tab-content" style="float: left"> 
  <!--  Category Wise -->
  <div id="catWisePaymentMode" class="tab-pane active">
		 		<form class="form-horizontal" method="post" action="" name="pay">
				<fieldset>
				  <div class="row form-group" style="margin-top: 20px">
					 <label class="col-md-2  control-label" for="fk_cat_id_for_payment">Product Category<sup>*</sup></label>
					 <div class="col-md-3">
					 <div class="input-group ">
					 
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao catdao = new CategoryDetailsDao();
           						List catListPay =catdao.getAllMainCat();
							
							%>
							<input list="cat_drop_For_payment" id="fk_cat_id_for_payment"  class="form-control" >
				<datalist id="cat_drop_For_payment">
							<%
					           for(int i=0;i<catListPay.size();i++){
					        	   CategoryDetailsBean catPaybean =(CategoryDetailsBean)catListPay.get(i);
							%>
		
							<option data-value="<%=catPaybean.getCatId()%>" value="<%=catPaybean.getCategoryName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
					 </div>
					  <div class="col-md-2 control-label">
	           				<label for="paymentMode"> Payment Mode<sup>*</sup></label>  
	           		</div>
	           		
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentModeId">
										<option value="selected">-Select Type--</option>
										<option value="cash">Cash</option>
										<option value="cheque">Cheque</option>
										<option value="card">Card</option>
										<option value="neft">NEFT</option>
								</select>	
	           				</div>
						</div>
						</div>	
					<div class="row form-group">
				     <div class="col-md-3 Col-md-offset-1">
						<div class="input-group">
												  
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="paymentModeReport()" value="Search" style="margin-left: 385px; margin-top: 15px;"/>
												     									
						</div>
					</div>	
					</div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="paymentModeSelect" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
								<tr>
								<th>Customer Bill No</th>
								<th>Customer Name</th>
								<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="2" style="text-align: right">Total Rs:</th>
								<th></th>
			
							</tr>
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
			</div>
		
		<!-- Date wise -->	
		<div id="dateWisePaymentMode" class="tab-pane">
			<form class="form-horizontal" method="post" action="" name="datepaymentMode">
					<fieldset>
					<div class="row form-group" style="margin-top: 20px">
	           		<label class="col-md-3 control-label">
							Enter Date:<sup>*</sup>
						</label>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon"> <i
									class="glyphicon glyphicon-user"></i>
								</span> <input type="date" id="fDateForPaymentMode" placeholder="Start Date"
									class="form-control input-md" type="text">
							</div>
						</div>
						
						<label class="col-md-2  control-label" for="fk_cat_id_for_payment_mode">Product Category<sup>*</sup></label>
					 <div class="col-md-3">
					 <div class="input-group ">
					 
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao paymentModecatdao = new CategoryDetailsDao();
           						List catListPayment =paymentModecatdao.getAllMainCat();
							
							%>
							<input list="cat_drop_For_payment_mode" id="fk_cat_id_for_payment_mode"  class="form-control" >
				<datalist id="cat_drop_For_payment_mode">
							<%
					           for(int i=0;i<catListPayment.size();i++){
					        	   CategoryDetailsBean catPaymentbean =(CategoryDetailsBean)catListPayment.get(i);
							%>
		
							<option data-value="<%=catPaymentbean.getCatId()%>" value="<%=catPaymentbean.getCategoryName()%>">
							<%
				      			}
				    		%>
            			</datalist>
            			</div>
					 </div>
					</div>
					<div class="row form-group">
				     <div class="col-md-3 Col-md-offset-1">
						<div class="input-group">
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="paymentModeReportAsPerSingleDate()" value="Search" style="margin-left: 400px; margin-top: 15px;"/>
						</div>
					</div>	
					</div>
				<div class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="SinglePayment" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
								<tr>
								<th>Customer Bill No</th>
								<th>Cash Payment Amount</th>
								<th>Cheque Payment Amount</th>
								<th>NEFT Payment Amount</th>
								<th>Card Payment Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="1" style="text-align: right">Total Rs:</th>
								<th></th><th></th><th></th><th></th>
			
							</tr>
						</tfoot>
					</table>
				</div>
		</fieldset>
		</form>
		</div>
		
		<!-- Range -->
		<div id="rangeWisePaymentMode" class="tab-pane">
			<form class="form-horizontal" method="post" action="" name="twoDatepaymentMode">
					<fieldset>
					<div class="row form-group" style="margin-top: 20px">
	           		 
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDateForPay" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDateForPay" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					<div class="row form-group" >
						<label class="col-md-2  control-label" for="fk_cat_id_for_payment_mode_two">Product Category<sup>*</sup></label>
					 <div class="col-md-3">
					 <div class="input-group ">
					 
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao paymentModecatdao1 = new CategoryDetailsDao();
           						List catListPayment1 =paymentModecatdao1.getAllMainCat();
							
							%>
							<input list="cat_drop_For_payment_mode_two" id="fk_cat_id_for_payment_mode_two"  class="form-control" >
				<datalist id="cat_drop_For_payment_mode_two">
							<%
					           for(int i=0;i<catListPayment1.size();i++){
					        	   CategoryDetailsBean catPaymentbean1 =(CategoryDetailsBean)catListPayment1.get(i);
							%>
		
							<option data-value="<%=catPaymentbean1.getCatId()%>" value="<%=catPaymentbean1.getCategoryName()%>">
							<%
				      			}
				    		%>
            			</datalist>
            			</div>
					 </div>
					
				     <div class="col-md-3 Col-md-offset-1">
						<div class="input-group">
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="paymentModeReportForTwoDates()" value="Search" style="margin-left: 95px;"/>
						</div>
					</div>	
					</div>
				<div class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="TwoPayment" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
								<tr>
								<th>Customer Bill No</th>
								<th>Cash Payment Amount</th>
								<th>Cheque Payment Amount</th>
								<th>NEFT Payment Amount</th>
								<th>Card Payment Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="1" style="text-align: right">Total Rs:</th>
								<th></th><th></th><th></th><th></th>
			
							</tr>
						</tfoot>
					</table>
				</div>
		
		</fieldset>
		</form>
		</div>
		
	</div>
  </div> 
  
      <!---------- 	ShopWise Sale reports -------------->
    
    <div class="tab-pane" id="shopWise">
       		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">ShopWise Sale Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
		<ul class="nav nav-tabs">
		   <!-- < li class="active"><a data-toggle="tab" href="#supplierSingleDate"><h4 style="color:blue">Datewise</h4></a></li> -->
		    <li class="active"><a data-toggle="tab" href="#shopBetweenTwoDate"><h4 style="color:blue">Range</h4></a></li>
		   
	 	</ul>
         	 
   <div class="tab-content" style="float: left"> 
    
    <!--    for single date -->
      <!-- <script type="text/javascript"> 
		$(document).ready(function () {
	         var table=$("#sale1").dataTable();
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
	 </script> -->
<!-- 	 <script type="text/javascript">
	 $(document).ready(function() {
		    $('#sale1').DataTable( {
		        dom: 'Bfrtip',
		        buttons: [
		            'copy', 'csv', 'excel', 'pdf', 'print'
		        ]
		    } );
		} );</script> --> 
<%-- 	<div id="supplierSingleDate" class="tab-pane active">
		        <div class="row">
					<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color: #c1b1b1;">
					</div>
				</div>
		 	<form class="form-horizontal" method="post" action="" name="saleReportForm">
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
										<input list="cat_drop6" id="fk_cat_id6"  class="form-control">
							<datalist id="cat_drop6">
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
					
						<label class="col-md-3 control-label" for="">
							Enter Date:<sup>*</sup>
						</label>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon"> <i
									class="glyphicon glyphicon-user"></i>
								</span> <input type="date" id="fDate" placeholder="Start Date"
									class="form-control input-md" type="text">
							</div>
						</div>
			</div>
					<div class="row form-group">
						<div class="col-md-3 col-md-offset-3">
							<div class="input-group">
							<div align="center">
								<input type="button" id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right"
								onclick="saleReportForSingleDateAsPerCategory()" value="Search" />
							</div>
							</div>
							</div>
						</div>
					
					<div	class="table-responsive">
					<table id="sale1" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Transport Expenses</th>
								<th>Hamali Expenses</th>
								<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							 <tr>
								<th colspan="7" style="text-align: right">Total Rs:</th>
								<th></th>
							</tr> 
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
       </div> --%>
        	
        <!------ 	Between Two Dates  ----->
        	  <div id="#shopBetweenTwoDate" class="tab-pane active">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div>
				
				
				<form class="form-horizontal" method="post" action="" name="saleReportForm1">
				<fieldset>
				<div class="row form-group" style="margin-top: 20px">
				<label class="col-md-2 control-label" for="fk_shop_id">Shop Name<sup>*</sup></label>  
			           			 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
			              				
										<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
										<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
										<%
									shopDetailsDao shdd = new shopDetailsDao();
		           						List spList =shdd.getAllShops();
									
									%>
									
									<input list="shp_drop" id="fkShopId"  class="form-control">
						<datalist id="shp_drop">
									
									<%
							           for(int i=0;i<spList.size();i++){
							        	   shopDetailsBean shp =(shopDetailsBean)spList.get(i);
									%>
				
									<option data-value="<%=shp.getShopId()%>" value="<%=shp.getShopName() %>">
									<%
						      			}
						    		%>
						              	
			            			</datalist>
			            			</div>
            					</div> 
					</div>
					<div class="row form-group">
						<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate1" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="endDate">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate1" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
			
			<div class="row form-group">
						<div class="col-md-3 col-md-offset-3">
							<div class="input-group">
								<input type="button" id="btn2" name="save"
									class="btn btn-lg btn-success btn-md button_hw button_margin_right"
									onclick="saleReportBetweenTwoDatesAsPerShop()" value="Search" style="margin-left: 185px; margin-top: 15px;"/>
							</div>
						</div>
				</div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="saleBetTwoDates1" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Tax Percentage</th>
								<th>Tax Amount</th>
								<th>Discount Amount</th>
								<th>Total Amount</th>
							</tr>
							
						</thead>
						
						<tfoot>
							  <tr>
								<th colspan="8" style="text-align: right">Total</th>
								<th></th>
							</tr>  
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
        	  </div>
        </div>	 
         	 
	</div>
  
  
 <!--  GST wise -->
  <div class="tab-pane" id="GSTWise">
	         	<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">GST Wise Sale Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
			    <form class="form-horizontal" method="post" action="" name="gst">
					<fieldset>
					
					<div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for=""> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="gstFisDate" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="gstEndDate" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					
					
					<div class="row form-group" style="margin-top: 20px">
					<label class="col-md-2  control-label" for="fk_cat_id_for_payment_mode">Product Category<sup>*</sup></label>
					 <div class="col-md-3">
					 <div class="input-group ">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   CategoryDetailsDao GSTcatdao = new CategoryDetailsDao();
           						List catListGST =GSTcatdao.getAllMainCat();
							
							%>
							<input list="cat_drop_For_GST" id="fk_cat_id_for_GST"  class="form-control" >
				<datalist id="cat_drop_For_GST">
							<%
					           for(int i=0;i<catListGST.size();i++){
					        	   CategoryDetailsBean catGSTbean =(CategoryDetailsBean)catListGST.get(i);
							%>
		
							<option data-value="<%=catGSTbean.getCatId()%>" value="<%=catGSTbean.getCategoryName()%>">
							<%
				      			}
				    		%>
			              	
			              	
            			</datalist>
            			</div>
					 </div>
					
				     <div class="col-md-3 Col-md-offset-1">
						<div class="input-group">
								<input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="gstWiseSaleReport()" value="Search"/>
						</div>
					</div>	
					</div>
				<div class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="gstSale" class="display table table-boardered"" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
								<tr>
								<th>Sr No</th>
								<th>date</th>
								<th>Name Of Customer</th>
								<th>Bill No.</th>
								<th>GST No</th>
								<th>HSN No</th>
								<th>Item Description</th>
								<th>Item Rate</th>
								<th>Quantity</th>
								<th>Amount</th>
								<th >GST& SGST 5% Amount</th>
								<th >GST& SGST 12% Amount</th>
								<th >GST& SGST 18% Amount</th>
								<th >GST& SGST 28% Amount</th>
								<th >IGST 5% Amount</th>
								<th >IGST 12% Amount</th>
								<th >IGST 18% Amount</th>
								<th >IGST 28% Amount</th>
								<th>Total Tax Amount</th>
								<th>Total Amount including Tax</th>
								
							</tr>
						</thead>
						 <tfoot>
							<tr>
								<th colspan="7" style="text-align: right">Total Rs:</th>
								<th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
							</tr>
						</tfoot> 
					</table>
				</div>
		</fieldset>
		</form>
	</div>


<!------ 	Between Two ID  ----->
<div class="tab-pane" id="IDWise">
       		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Customer ID Wise Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
			    
        	  <!-- <div id="#saleBtwnTwoId" class="tab-pane active">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div> -->
				
				
				<form class="form-horizontal" method="post" action="" name="custIdReport">
				<fieldset>
				<div class="row form-group" style="margin-top: 20px">
				<label class="col-md-2 control-label" for="fk_shop_id">Customer Id From <sup>*</sup></label>  
			           			 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
			              				
										<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
										<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
										<%
										CustomerDetailsDao cdd1 = new CustomerDetailsDao();
		           						List cddList1 =cdd1.getAllCustomer();
									
									%>
									
									<input list="cddd_drop" id="custIdNo"  class="form-control">
						<datalist id="cddd_drop">
									
									<%
							           for(int i=0;i<cddList1.size();i++){
							        	   CustomerDetailsBean cddd =(CustomerDetailsBean)cddList1.get(i);
									%>
				
									<option data-value="<%=cddd.getCustId()%>" value="<%=cddd.getIdNo() %>">
									<%
						      			}
						    		%>
						              	
			            			</datalist>
			            			</div>
            					</div> 
					
				<label class="col-md-2 control-label" for="fk_shop_id"> To 	<sup>*</sup></label>  
			           			 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
			              				
										<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
										<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
										<%
										CustomerDetailsDao cdd2 = new CustomerDetailsDao();
		           						List cddList2 =cdd2.getAllCustomer();
									
									%>
									
									<input list="cddd_drop" id="custIdNo1"  class="form-control">
						<datalist id="cddd_drop">
									
									<%
							           for(int i=0;i<cddList2.size();i++){
							        	   CustomerDetailsBean cddd =(CustomerDetailsBean)cddList2.get(i);
									%>
				
									<option data-value="<%=cddd.getCustId()%>" value="<%=cddd.getIdNo() %>">
									<%
						      			}
						    		%>
						              	
			            			</datalist>
			            			</div>
            					</div> 
					</div>
			
			<div class="row form-group">
						<div class="col-md-3 col-md-offset-3">
							<div class="input-group">
								<input type="button" id="btn2" name="save"
									class="btn btn-lg btn-success btn-md button_hw button_margin_right"
									onclick="saleReportBetweenToId()" value="Search" style="margin-left: 195px; margin-top: 10px;"/>
							</div>
						</div>
				</div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="saleBetTwoId" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Customer Name</th>
								<th>Total Amount</th>
								<th>Initial Payment</th>
								<th>After Initial Payment</th>
								<th>Balance</th>
							</tr>
							
						</thead>
						
						<tfoot>
							  <tr>
								<th colspan="4" style="text-align: right">Total</th>
								<th></th>
							</tr>  
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
        	  </div>
<!-- 
</div>
</div> -->
  <!------ 	Sale return ----->

<div class="tab-pane" id="saleReturn">
       		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Sale Return Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
		<ul class="nav nav-tabs">
		   <!-- < li class="active"><a data-toggle="tab" href="#supplierSingleDate"><h4 style="color:blue">Datewise</h4></a></li> -->
		    <li class="active"><a data-toggle="tab" href="#saleReturn"><h4 style="color:blue">Bill Wise</h4></a></li>
		   
	 	</ul>
         	 
   <div class="tab-content" style="float: left"> 
    
        	
        <!------ 	Between Two Dates  ----->
        	  <div id="saleReturn" class="tab-pane active">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div>
				
				
				<form class="form-horizontal" method="post" action="" name="saleReturnForm1">
				<fieldset>
				  <div class="row form-group">
           			 <label class="col-md-2 control-label" for="billNo">Bill No<sup>*</sup></label>  
            			<div class="col-md-3">
							<div class="input-group " ">
								<span class="input-group-addon">
									<i class="glyphicon glyphicon-hand-right"></i>
								</span>
								
								<%
								  FertilizerBillDao sdd = new FertilizerBillDao();
           			              List pList = sdd.getAllBillNoOnSaleReturn();
							
				                 %>
              					<input  list="bill_no_drop"  id="bill_no" class="form-control"  >
				                <datalist id="bill_no_drop" style="overflow-x: hidden; overflow: scroll; width: 100%; height:500px">
							
							   <%
					               for(int i=0;i<pList.size();i++){
					            	FertilizerBillBean sup =(FertilizerBillBean)pList.get(i);
							    %>
		
							      <option data-value="<%=sup.getBillNo()%>" value="<%=sup.getBillNo() %> " >
							    <%
				      			  }
				    		     %>
						</datalist> 
            				</div>
            			</div>
         		 </div> 
           		<div class="form-group row">
            		<div class="col-md-10 text-center">
              			<!-- <button id="save" name="save" class="btn btn-large btn-success" onclick="saleReturn()"> Submit</button>
              			<button class="btn btn-large btn-danger" type="reset"> Cancel </button>
              			 -->
              			<input type="button" id="save" name="save"  class="btn btn-lg btn-success btn-md button_hw button_margin_right"  onclick="saleReturnReportAsPerBill()" value="Submit" style="margin-left: 380px;  margin-top: -50px;">
          	  		</div>
         		 </div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="salereturn" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Bill No</th>
								<th>Product Name</th>
								<th>Sold Date</th>
								<th>Sale Price</th>
								<th>Quantity</th>
								<th>Return Date</th>
								<th>Return Amount</th>
								<th>Return Quantity</th>
								<th>Total Amount</th>
							</tr>
							
						</thead>
						
						<tfoot>
							  <tr>
								<th colspan="8" style="text-align: right">Total</th>
								<th></th>
							</tr>  
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
        	  </div>
        </div>	 
         	 
	</div>
	
	
	  <!------ 	Bill no wisw Report by Kishor ----->

<div class="tab-pane" id="billNoWsiswe">
       		<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Bill No Wise Reports</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			    </div>
			    
		<ul class="nav nav-tabs">
		   <!-- < li class="active"><a data-toggle="tab" href="#supplierSingleDate"><h4 style="color:blue">Datewise</h4></a></li> -->
		    <li class="active"><a data-toggle="tab" href="billNoWsiswe"><h4 style="color:blue">Bill No Wise</h4></a></li>
		   
	 	</ul>
         	 
   <div class="tab-content" style="float: left"> 
    
        	
        <!------ 	Between Two Dates  ----->
        	  <div id="billNoWsiswe" class="tab-pane active">
				
				     <div class="row">
						     <div class="col-sm-offset-1 col-md-10">
								  		<hr style="border-top-color:#c1b1b1;">
						     </div>	
				    </div>
				
				
				<form class="form-horizontal" method="post" action="" name="saleReturnForm1">
				<fieldset>
				  <div class="row form-group">
           			 <label class="col-md-2 control-label" for="billNo">Bill No<sup>*</sup></label>  
            			<div class="col-md-3">
							<div class="input-group " ">
								<span class="input-group-addon">
									<i class="glyphicon glyphicon-hand-right"></i>
								</span>
								
								<%
								  FertilizerBillDao sdd1 = new FertilizerBillDao();
           			              List pList1 = sdd.getAllBillNoOnSaleReturn();
							
				                 %>
              					<input  list="bill_no_drop"  id="bill_no1" class="form-control"  >
				                <datalist id="bill_no_drop" style="overflow-x: hidden; overflow: scroll; width: 100%; height:500px">
							
							   <%
					               for(int i=0;i<pList.size();i++){
					            	FertilizerBillBean sup =(FertilizerBillBean)pList.get(i);
							    %>
		
							      <option data-value="<%=sup.getBillNo()%>" value="<%=sup.getBillNo() %> " >
							    <%
				      			  }
				    		     %>
						</datalist> 
            				</div>
            			</div>
         		 </div> 
           		<div class="form-group row">
            		<div class="col-md-10 text-center">
              			<!-- <button id="save" name="save" class="btn btn-large btn-success" onclick="saleReturn()"> Submit</button>
              			<button class="btn btn-large btn-danger" type="reset"> Cancel </button>
              			 -->
              			<input type="button" id="save" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right"  onclick="billnowiseReportAsPerBill()" value="Submit" style="margin-left: 350px; margin-top: -50px;">
          	  		</div>
         		 </div>
					<div	class="table-responsive">
					<table class= "table table-bordered table-striped table-condensed cf" id="Billreturn" class="display" style=" border: 2px solid black;border-collapse: collapse;">
						<thead>
							<tr>
								<th>Bill No</th>
								<th>Total Amount</th>
							</tr>
							</thead>
						
						<tfoot>
							  <tr>
								<th colspan="1" style="text-align: right">Total</th>
								<th></th>
							</tr>  
						</tfoot>
					</table>
				</div>
				</fieldset>
			</form>
        	  </div>
        </div>	 
         	 
	</div>
</div>
</div> 

<%@include file="commons/newFooter.jsp" %>
