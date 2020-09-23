<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>

<script src="/Repacking/staticContent/js/customerbillreport.js"></script>

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



 <div class="container" style="float: left"> 
 		
 		<div class="row">
			<div align="center" style="margin-top: 75px">
				  <h2 class="form-name style_heading">All Credit/Debit Reports</h2>
			</div>
				 	
			 <div class="row">
				<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color:#c1b1b1;">
				</div>	
			  </div>
		</div>
		
		<ul class="nav nav-tabs">
		    <li class="active"><a data-toggle="tab" href="#credit"><h4 style="color:blue">All Credit Amount</h4></a></li>
		    <li><a data-toggle="tab" href="#debit"><h4 style="color:blue">All Debit Amount</h4></a></li>
		     <!-- <li><a data-toggle="tab" href="#twoYears"><h4 style="color:blue">Between Two Years</h4></a></li> -->
 		 </ul>
 		 
 <div class="tab-content" style="float: left;margin-top:12px;">
	
    <div id="credit" class="tab-pane fade in active"> 		
		
 	 <ul class="nav nav-tabs">
	    <li class="active"><a data-toggle="tab" href="#home"><h4 style="color:blue">Credit By Credit Customer</h4></a></li>
	    <li><a data-toggle="tab" href="#twoDates"><h4 style="color:blue">Credit By Billing</h4></a></li>
	     <!-- <li><a data-toggle="tab" href="#twoYears"><h4 style="color:blue">Between Two Years</h4></a></li> -->
 	 </ul>
 
 	<div class="tab-content" style="float: left;margin-top: 12px;">
   
    <!-------- Credit Amount By credit customer ---------->
   
    	<div id="home" class="tab-pane fade in active">
    	<div class="row"></div>
 			<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					  
				       <div class="row form-group buttons_margin_top ">
												<div align="center">
												  
												    <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="getCreditAmountByCreditCust()" value="Search"/>
												     									
												</div>
									</div>	
						<table id="example1" class="display">
						<thead>
							<tr>
									<th>Payment date</th>
									<th>Customer Bill No</th>
									<th>Customer Name</th>
									<th>Total Paid Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="3" style="text-align: right">Total:</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</fieldset>
				</form>
 		</div>
 		
 <!-- ---	Credit Amount By custome Normal Custoomer billing	---->
 	<div id="twoDates" class="tab-pane ">
 		<div class="row"></div>
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					  
				       <div class="row form-group buttons_margin_top ">
												<div align="center">
												  
												    <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="getCreditAmountByBilling()" value="Search"/>
												     									
												</div>
									</div>	
						<table id="example" class="display">
						<thead>
							<tr>
									<th>Sold Date</th>
									<th>Customer Bill</th>
									<th>Customer Name</th>
									<th>Payment Mode</th>
									<th>Total Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="4" style="text-align: right">Total:</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</fieldset>
				</form>
 		</div>
	
 	</div>
 	
 	</div> <!-- credit div -->
 	
 		<div id="debit" class="tab-pane"> 
 			
 			 <ul class="nav nav-tabs">
	   			 <li class="active"><a data-toggle="tab" href="#supp"><h4 style="color:blue">Paid Amount To Supplier</h4></a></li>
	   			 <li><a data-toggle="tab" href="#emp"><h4 style="color:blue">Paid Amount To Employee</h4></a></li>
 			 </ul>
 			 
 			 <!-- ooo -->
 			 
 			 <div class="tab-content" style="float: left;margin-top: 12px;">
   
    <!-------- Paid Amout ot supplier Report ---------->
   
    	<div id="supp" class="tab-pane fade in active">
    	<div class="row"></div>
 			<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					  
				       <div class="row form-group buttons_margin_top ">
												<div align="center">
												  
												    <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="getPaidAmountToSupplier()" value="Search"/>
												     									
												</div>
									</div>	
						<table id="example3" class="display">
						<thead>
							<tr>
									<th>Payment date</th>
									<th>Supplier Bill No</th>
									<th>Account Holder Name</th>
									<th>Total Paid Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="3" style="text-align: right">Total:</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</fieldset>
				</form>
 		</div>
 		
 <!-- ---	Paid Amout ot emp Report	---->
 	<div id="emp" class="tab-pane ">
 		<div class="row"></div>
 				<form class="form-horizontal" method="post" action="" name="fertiBill">
					<fieldset>
				         <div class="row form-group" style="margin-top: 20px">
							<label class="col-md-2 control-label" for="customerName"> Start Date:<sup>*</sup></label>  
				           			 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
				           		 			  <input type="date" id="fisDate1" placeholder="Start Date" class="form-control input-md" type="text" >
				           		 		</div>
									</div>
				
				           	 <label class="col-md-2 control-label" for="village">End Date:<sup>*</sup></label>
				           	 	<div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-map-marker"></i>
										</span>
				         	   			  <input type="date" id="endDate2" placeholder="End Date" class="form-control input-md ac_district"  type="text">
				          		  	</div>
								</div>
				          </div>
					  
				       <div class="row form-group buttons_margin_top ">
												<div align="center">
												  
												    <input type="button"  id="btn" name="save" class="btn btn-lg btn-success btn-md button_hw button_margin_right" onclick="getPaidAmountToEmployee()" value="Search"/>
												     									
												</div>
									</div>	
						<table id="example4" class="display">
						<thead>
							<tr>
									<th>Payment Date</th>
									<th>Employee Name</th>
									<th>Payment Reason</th>
									<th>Paind Amount</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th colspan="3" style="text-align: right">Total:</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</fieldset>
				</form>
 		</div>
	
 	</div>
 			 
 			 <!-- ooo -->
 				
 			
 		</div>
 	
 	</div> <!-- credit tab content div -->
 	
	
 	
 </div>
 
 <%@include file="commons/newFooter.jsp"%>
 <%-- <%@include file="commons/footer.jsp" %> --%>