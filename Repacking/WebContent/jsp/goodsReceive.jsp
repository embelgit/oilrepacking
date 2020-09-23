<%@page import="com.Fertilizer.hibernate.ExpenseDetailForBillingAndGoodsReceiveBean"%>
<%@page import="com.Fertilizer.dao.ExpenseDetailForBillingAndGoodsReceiveDao"%>
<%@page import="com.Fertilizer.hibernate.GodownEntry"%>
<%@page import="com.Fertilizer.dao.GodownEntryDao"%>
<%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
<%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
<% boolean isHome=false;%>
 <%@page import="com.Fertilizer.dao.SupplierDetailsDao"%>
 <%@page import="com.Fertilizer.hibernate.SupplierDetailsBean"%>
 <%@page import="java.util.List" %>
  <%@page import="com.Fertilizer.dao.TaxCreationDao"%>
   <%@page import="com.Fertilizer.hibernate.TaxCreationBean"%>
<%@include file="commons/header.jsp"%>
<head>
 <meta charset="utf-8">
  	  <script type="text/javascript" src="/Repacking/staticContent/js/jquery-1.12.3.min.js"></script>
     <script type="text/javascript" src="/Repacking/staticContent/js/bootbox.min.js"> </script>
  
	 <link rel="stylesheet" href="/Repacking/staticContent/css/jquery-ui.min.css">
     <link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.min.css">
     <!-- <link rel="stylesheet" href="/Fertilizer/staticContent/css/ui.jqgrid.css"> -->
     
     <link rel="stylesheet" href="/Repacking/staticContent/y_css/jquery-ui.css">
  <!--  -->   <link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.css">
  <!--  -->    <script type="text/javascript" src="/Repacking/staticContent/js/jquery.min.js"></script>
    <script type="text/javascript" src="/Repacking/staticContent/js/jquery-ui-min.js"></script>
    <script type="text/javascript" src="/Repacking/staticContent/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/Repacking/aticContent/js/jqueryUi.js"></script>
    <script type="text/javascript" src="/Repacking/staticContent/js/jquery.jqgrid.min.js"></script>
    <script type="text/javascript" src="/Repacking/staticContent/js/goodsreceiveFetchProduct.js"></script>
      <script type="text/javascript" src="/Repacking/staticContent/js/goodsReceive.js"></script>
       <script type="text/javascript" src="/Repacking/staticContent/js/containerPurschase.js"></script>
<!-- <script type="text/javascript">
function myOnLoadFunction()
{
	$("#CreditCustDetail").hide();
	
}

function ShowAdvanceBookingDetails(){
	$("#CreditCustDetail").show();
	$("#ShowCashCustDetail").hide();
	}

function ShowWithoutBookingDeatils() {
	$("#ShowCashCustDetail").show();
	$("#CreditCustDetail").hide();
	location.reload(true)
	}	
</script> -->

<script>

function GrossTotalWithoutExpense(){
	var transExpence = document.getElementById("transExpence3").value;
	var hamaliExpence = document.getElementById("hamaliExpence3").value;
	var totalWithExpense = document.getElementById("total").value;

	if(hamaliExpence == "0" && transExpence == "0"){
		document.getElementById("grossTotal").value = totalWithExpense;
		}

	}	  
	
function transExpenseAddingToGrossTotal(){
	var transExpence = document.getElementById("transExpence3").value;
	var hamaliExpence = document.getElementById("hamaliExpence3").value;
	var trans = document.getElementById("transExpence").value;
	var discamnt = document.getElementById("discountAmount").value;
	var discount = $('#discount').val();
	
	/* if(discount == ""){ */
		if(transExpence != "0"){
		var total = document.getElementById("grossTotal").value;
		var perc = document.getElementById("gstForExpense2").value;
		var teg=(transExpence*(perc/100));
		document.getElementById("transExpence").value = parseFloat(teg).toFixed(2);
		var totalWithExpense = Number(total) + Number(teg) + Number(transExpence);
		document.getElementById("grossTotal").value = totalWithExpense;
		}	
		
		if(transExpence == ""){
			var total = document.getElementById("total").value;
			var hamali = document.getElementById("hamaliExpence").value;
			var trans = document.getElementById("transExpence").value;
			var hamaliTotal = Number(total) - Number(discamnt);
			var totalWithExpense =Number(hamaliTotal) + Number(hamali) + Number(hamaliExpence) ;
			document.getElementById("grossTotal").value = totalWithExpense;
		}	
	}
	
	
	/* if(discount != ""){
		if(hamaliExpence != "0"){
			var total = document.getElementById("total").value;
			var perc = document.getElementById("gstForExpense").value;
			var teg=(hamaliExp*(perc/100));
			document.getElementById("hamaliExpence").value = teg;
			var totalWithExpense = Number(total) + Number(teg);
			document.getElementById("grossTotal").value = totalWithExpense;
		}	
		if(hamaliExpence == "0"){
			var total = document.getElementById("total").value;
			var totalWithExpense = Number(total) + Number(hamaliExp);
			var totalWithExpense1 = Number(transExpence) + Number(totalWithExpense);
			document.getElementById("grossTotal").value = totalWithExpense1;
		}
	
	} */
	



  function discountCalculation(){
	var total = document.getElementById("total").value;
	var discountAmount = document.getElementById("discountAmount").value;
	var discount = $('#discount').val();
	
	if(discount == ""){
		var totalminusDiscount = Number(total) - discountAmount;
		document.getElementById("grossTotal").value = totalminusDiscount;
		}
	if(discount != ""){
	var discountAmount = ((discount/100)*Number(total));
	var totalminusDiscount = Number(total) - discountAmount;
	document.getElementById("discountAmount").value = discountAmount;
	document.getElementById("grossTotal").value = totalminusDiscount;
	}
} 



/* 	function discountCalculation() {
		var total = document.getElementById("total").value;
		var discountAmount = document.getElementById("discountAmount").value;

		var discount = $('#discount').val();
		
		if(discount >= 100)
		{
			alert("Please Enter Discount less than 100");
			document.getElementById("discount").value = 0; 
			return false;
		}

		if (discount == "" )
		{
			

			
			
			
			document.getElementById("discountAmount").value = 0; 
			 document.getElementById("hamaliExpence3").value = 0;
		
			var totalnew = document.getElementById("total").value;
	 		var hamaliExpence = document.getElementById("hamaliExpence3").value;
			var hamali = document.getElementById("hamaliExpence").value;
			document.getElementById("discountAmount").value = 0; 
			document.getElementById("hamaliExpence3").value = 0;
			 
			if(hamaliExpence == "0" || hamaliExpence == "")
			{	
				document.getElementById("grossTotal").value = totalnew;	
			}
			else
			{
				var Dis= hamaliExpence + hamali; 
				
				var totalminusDiscount = Number(total + Dis) - discountAmount;
				
				document.getElementById("grossTotal").value = (totalminusDiscount).toFixed(2);			
			}			
			
		}
		if (discount != "") {
			 
			
			
			
			var hamaliExpence = document.getElementById("hamaliExpence3").value;
			var hamali = document.getElementById("hamaliExpence").value;
			 
				 var Dis= hamaliExpence +  hamali;
				 
			var discountAmount = ((discount / 100) * Number(total));
			var totalminusDiscount = Number(total + Dis  ) - discountAmount;
			var FinalTotal = +totalminusDiscount + +hamaliExpence;
			document.getElementById("discountAmount").value = (discountAmount).toFixed(2);;
			document.getElementById("grossTotal").value = (FinalTotal).toFixed(2);
		}
	} */



function hamaliExpenseAddingToGross(){
	
	var hamaliExpence = document.getElementById("hamaliExpence3").value;
	var hamali = document.getElementById("hamaliExpence").value;
	//Gross total calculation
	var discount = $('#discount').val();
	var discamnt = document.getElementById("discountAmount").value;
	var transExpence = document.getElementById("transExpence3").value;
	
	/* if(discount == ""){ */
		
		if(hamaliExpence != "0"){
			var total = document.getElementById("grossTotal").value;
			var perc = document.getElementById("gstForExpense2").value;
			var teg=(hamaliExpence*(perc/100));
			document.getElementById("hamaliExpence").value = parseFloat(teg).toFixed(2);
			var totalWithExpense = Number(total) + Number(teg) + Number(hamaliExpence);
			document.getElementById("grossTotal").value = totalWithExpense;
		}	
		if(hamaliExpence == ""){
			var total = document.getElementById("total").value;
			var trans = document.getElementById("transExpence").value;
			var hamali = document.getElementById("hamaliExpence").value;
			var totalWithExpense = Number(total) - Number(discamnt);
			var totalWithExpense1 = Number(totalWithExpense) + Number(hamali);
			//var totalWithExpense1 = Number(totalWithExpense)-Number(trans) + Number(transExpence);
			document.getElementById("grossTotal").value = totalWithExpense1;
		}
	}
	
	/* if(discount != ""){
		var transExpence = document.getElementById("transExpence").value;
		if(transExpence == ""){
			var total = document.getElementById("total").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - Number(discountAmount);
			var totalWithExpense = Number(totalminusDiscount) + Number(hamaliExpence);
			document.getElementById("grossTotal").value = totalWithExpense;
		}
		if(transExpence != ""){
			var total = document.getElementById("total").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - discountAmount;
			var totalwithTrans = Number(totalminusDiscount) + Number(transExpence);
			var totalWithExpense = Number(totalwithTrans) + Number(hamaliExpence);
			document.getElementById("grossTotal").value = totalWithExpense;
		} */
	
		function changeExtraValuesDisTransHamaliToZero()
		{
			document.getElementById("discount").value = "";
			document.getElementById("discountAmount").value = "";
			document.getElementById("transExpence3").value = "";
			document.getElementById("hamaliExpence3").value = "";
			document.getElementById("transExpence").value = "";
			document.getElementById("hamaliExpence").value = "";
			var total = document.getElementById("total").value;
			document.getElementById("grossTotal").value = Number(total).toFixed(2);	
		}


</script>
<script type="text/javascript">


function Cancel(){
	
	//$("#containerPurchase").show();
	//window.location ="goodsReceive.jsp";
	$("#containerPurchase").show();
	//$("#oilPurchase").hide();
	location.reload();
}
function CancelOil()
{
	$("#oilPurchase").show();
	//$("#goodsReceiveForm").show();
	location.reload();
	}

</script>

</head>
<body onload="getContainerName();">
<div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading">Goods Receive</h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
  
  
  		<ul class="nav nav-tabs">
	    <li class="active"><a data-toggle="tab" href="#oilPurchase"><h4 style="color:blue">Oil Purchase</h4></a></li>
	    <li><a data-toggle="tab" href="#containerPurchase"><h4 style="color:blue">Container Purchase</h4></a></li>
 	 </ul>
        
<div class="tab-content" style="float: left">

 <!-- <div class="container col-sm-offset-1" >
    <div class="row form-group">
         		<div class="col-md-2 ">
         		<label class="control-label" for="customertype">Type<sup>*</sup></label>
         		</div>	
         			<div class="col-md-7">
						<div class="col-md-4 col-xs-6 ">
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="customertype" checked="checked" onchange="ShowWithoutBookingDeatils()">Without Booking
							</label>
						</div>	
      					<div class="col-md-6 col-xs-6 col-md-ffset-1 ">	
							<label class="radio-inline">						
								<input  type="radio" name="customertype" id="customertype" onchange="ShowAdvanceBookingDetails()" >With Advance Booking
							</label>
						</div>	
              		</div> 
           </div>-->
	  <div id="oilPurchase" class="tab-pane fade in active"> 
        <form class="form-horizontal" method="post" action="" name="goodsReceiveForm"><!-- Value of 'name' attribute is used in  supplierDetails.js  -->
          <fieldset>
       			<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
				</div>
				
				<div class="row form-group">
        	        <label class="col-md-2 control-label" for="supplier">Supplier ID<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
							
										
							<!-- Following code is to get Supplier from "supplier_details" table of "fertilizer" DB -->
							<!-- getAllSupllier() is implemented in  SupplierDetailsDao with return type List-->
						
							<%
								SupplierDetailsDao sdd = new SupplierDetailsDao();
           						List sList =sdd.getAllSupplier();
							
							%>
							
							<input list="sup_drop" id="supplier"  class="form-control" onchange="getSupName()">
				            <datalist id="sup_drop">
							
							<%
					           for(int i=0;i<sList.size();i++){
					        	   SupplierDetailsBean sup =(SupplierDetailsBean)sList.get(i);
							%>
		
							<option data-value="<%=sup.getSupId()%>" value="<%=sup.getIdNo() %>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
			</div>
				
        	       <div class="row form-group">
        	        <label class="col-md-2 control-label" for="supplier">Supplier Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
							<input type="text" id="supplierName" name="supplierName" class="form-control" readonly="readonly">
					</div>
           		</div>
		
        	      <label class="col-md-2 control-label" for="billNum" ><b>Bill Number<sup>*</sup></b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									No
								</span>
	              				<input id="billNum" name="billNum" placeholder="Enter Bill Number" class="form-control input-md" type="text">
	            			</div>
	            		</div>
				</div>
		
		<div class="row form-group">
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
							<input list="cat_drop" id="fk_cat_id"  class="form-control" onchange="getAllSubCat()">
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
		
		        <label class="col-md-2 control-label" for="subCat"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("productCat") %> <%}%> <%if(abc.equals("english")){%>Product Subcategory<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
					<select class="form-control input-md" id='subCat'  name="subCat" onchange="getProductName()">
					</select>
               		</div>
              	</div>
         		<!-- <!-- <label class="col-md-2 control-label" for="billType">Bill Type<sup>*</sup></label>
         			<div class="col-md-3">
						<div class="col-xs-6 ">	
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="retail" checked="checked"  >Retail
							</label>
						</div>	
      					<div class="col-xs-6 col-md-ffset-1 ">	
							<label class="radio-inline">						
								<input  type="radio" name="customertype" id="vat"  >GST
							</label>
						</div>	
						
              		</div> --> 
           </div>
		
			
		 	
			<!-- <script >
			function hideGridWithVat(){
				$("#vatId").hide();
			}
			
			function showGridWithVat(){
				$("#vatId").hide();
			}
		
			</script> -->
						
					
					<div class="row form-group">
					<label class="col-md-2 control-label" for="proName">Product Name<sup>*</sup></label>  
          					  <div class="col-md-8">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									<select class="form-control" id='proName'  name="proName" onclick="productDetailInGrid(); return false">
									</select>
										
								</div>
							</div>
					
				
					</div>	
					<div class="row form-group">
				  			
				<!-- 	<label class="col-md-2 control-label" for="dcNum" ><b>Shortage <sup>*</sup></b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									No
								</span>
	              				<input id="dcNum" name="dcNum" placeholder="Shortage in Kg" class="form-control input-md" type="text" >
	            			</div>
	            		</div> -->
						<label class="col-md-2 control-label" for="purchaseDate">Purchase  Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	              					  <input type="date"  id="purchaseDate" name="purchaseDate" placeholder="Purchase Date" class="form-control input-md" onchange="getAllShopName()">
								
								</div>
							</div>
							<label class="col-md-2 control-label" for="creditSalePrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("shopName") %> <%}%> <%if(abc.equals("english")){%>Shop Name<%}%><sup>*</sup></label>  
           						 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
              								<select class="form-control input-md" id='shopName'  name="shopName">
											</select>
            						</div>
								</div>
								  <%-- <label class="col-md-2 control-label" for="fk_godown_id">Select Godown<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   GodownEntryDao cdd1 = new GodownEntryDao();
           						List cList1 =cdd1.getAllGodown();
							
							%>
							<input list="godown_drop" id="fk_godown_id"  class="form-control" onchange="getAllShopName()">
				<datalist id="godown_drop">
							<%
					           for(int i=0;i<cList1.size();i++){
					        	   GodownEntry cat=(GodownEntry)cList1.get(i);
							%>
		
							<option data-value="<%=cat.getPkGodownId()%>" value="<%=cat.getGodownName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div> --%>
							
					</div>	
					
			<!-- <div class="row form-group">
			     
			</div> -->
						
		<!-- 	<div style='position:absolute; top:440px; left:108px; '> -->
		<div class="table-responsive 	row" style="margin-left: 106px;">
				<table id="jqGrid" ></table>
				<div id="jqGridPager"></div>
			</div>
					<!-- dont delet following row --> 
			<div class="row row form-group">
			
			</div>
			
				
				<div class="row form-group">
				<label class="col-md-2  control-label"  for="gstForExpence" ><b>GST for expense :</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
								<select class="form-control" id="gstForExpense2" onchange="changeExtraValuesDisTransHamaliToZero()" >
										<option value="0">-Select Type--</option>
										<option value="5">5 %</option>
										<option value="12">12 %</option>
										<option value="18">18 %</option>
										<option value="28">28 %</option>
								</select>
	            			</div>
	            		</div>
	            	
				<label class="col-md-2 control-label"  for="total" ><b>Total</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="total" name="total"  class="form-control input-md" type="text" >
	              				<input readonly="readonly" id="duptotal" name="total"  class="form-control input-md" type="hidden" >
	            			</div>
	            		</div>
					</div>
			
			
				
				<%--  <label class="col-md-2 control-label" for="expensesDescription">Expenses Description</label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
						
							<%
							ExpenseDetailForBillingAndGoodsReceiveDao expd = new ExpenseDetailForBillingAndGoodsReceiveDao();
           						List expList =expd.getAllExpenses();
							
							%>
							
							<input list="exp_drop" id="fkExpenseDescriptionId"  class="form-control">
				<datalist id="exp_drop">
							
							<%
					           for(int i=0;i<expList.size();i++){
					        	   ExpenseDetailForBillingAndGoodsReceiveBean expense =(ExpenseDetailForBillingAndGoodsReceiveBean)expList.get(i);
							%>
		
							<option data-value="<%=expense.getPkExpenseForBillingId()%>" value="<%=expense.getExpenseName()%>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div> --%>
				<!-- <label class="col-md-2 control-label"  for="expensesDescription" ><b>Expenses Description</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="expensesDescription" name="expensesDescription" placeholder="Extra Expenses" class="form-control input-md" type="text" >
	            			</div>
	            		</div> -->
				
				
				<div class="row form-group">
				<label class="col-md-1 col-md-offset-6 control-label" for="discount" ><b>Discount</b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input id="discount" name="discount" placeholder="Discount" style=" width: 120;" class="form-control input-md" type="text" onchange="discountCalculation()">
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-1 control-label" for="discount" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input  id="discountAmount" name="discountAmount" placeholder="Discount Amt" class="form-control input-md" type="text" onchange="discountCalculation()">
	            			</div>
	            		</div>
	            		
				</div>
				<div class="row form-group ">
				
				<label class="col-md-1 col-md-offset-6 control-label"  for="transExpence" ><b>Transport Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence3" name="transExpence3" value="0" placeholder="Transportation Expenses" style=" width: 120;" class="form-control input-md" type="text" onchange="transExpenseAddingToGrossTotal()" >
	            			</div>
	            		</div>

				<label class="col-md-1 control-label"  for="transExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence" name="transExpence" placeholder="With GST" class="form-control input-md"  type="text" ><!-- onblur="transExpenseAddingToGrossTotal()"> -->
	            			</div>
	            		</div>
					</div>
					<div class="row form-group ">
					<label class="col-md-1 col-md-offset-6 control-label"  for="hamaliExpence" ><b>Hamali Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence3" name="hamaliExpence3" value="0" placeholder="Hamali Expenses" style=" width: 120;" class="form-control input-md" type="text"  onchange="hamaliExpenseAddingToGross()">
	            			</div>
	            		</div>
					<label class="col-md-1  control-label"  for="hamaliExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence" name="hamaliExpence" placeholder="With GST" class="form-control input-md"  type="text"> <!-- onblur="hamaliExpenseAddingToGross()"> -->
	            			</div>
	            		</div>
					</div>
			<%-- 	<div id="vatId" class="row form-group" >
					<label class=" col-md-2 control-label"  for="grossTotal"><b>Vat %</b></label>  
			           	 
							<%
							TaxCreationDao taxdao = new TaxCreationDao();
		           						List taxlist =taxdao.getAllMainTax();
						
					           for(int i=0;i<taxlist.size();i++){
					        	   TaxCreationBean taxBean =(TaxCreationBean)taxlist.get(i);
							%>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input type="text" value="<%=taxBean.getTaxPercentage()%>" id="taxPercentage" style="height:30; width:225">
							<%
				      			}
				    		%>
			          
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-2 control-label"  for="taxAmount" ><b>Tax Amount</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="taxAmount" name="taxAmount" placeholder="" class="form-control input-md" type="text" >
	            			</div>
	            		</div>
            	</div> --%>
            	
            	
					
					<div class="row form-group" >
					<!-- <label class="col-md-2 control-label" for="dueDate">Payment Due Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	                					<input type="date"  id="dueDate" name="dueDate" placeholder="Due Date" class="form-control input-md"">
								
								</div>
							</div>  -->
					<label class=" col-md-2 col-md-offset-5 control-label"  for="grossTotal"><h4><b>Gross Total</b></h4></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="grossTotal" name="grossTotal" placeholder="Gross Total" class="form-control input-md" type="text" style="font-size: 25px;  height: 55px;">
	            			</div>
	            		</div>
            	</div>
		
			<div class="form-group row" >
		            <div class="col-md-10 text-center">
		            
		             <input type="button" id="btn" style=" height: 65px; width: 180; font-size: 25;margin-left: 200px; margin-top: 50px;margin-bottom: 20px;" class="btn btn-large btn-success button-height-width" name="btn" onclick=" addingGoodsReceive()" value="Submit"> 
		            <!-- <input type="button" id="btn" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="btn" onclick=" validation()" value="Submit"> -->
		            <!-- <input type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" onclick="resetGrid()"  value="Cancel"> -->
		             <input type="reset" style=" height: 65px; width: 180; font-size: 25;margin-left: 10px;margin-top: 29px;" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" value="Cancel" onclick="CancelOil()">
		               <!-- <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="addGoodsRecieve()"><h4> Submit</h4></button>
              			<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
		            </div>
		         </div> 
		</fieldset>
	</form>
	</div>
	
	<!-- addingGoodsReceive() -->
<!-- 	Container goods receive  -->
	
<div  id="containerPurchase" class="tab-pane " class="table-responsive"> 
        <form class="form-horizontal" method="post" action="" name="containerPurchaseForm"><!-- Value of 'name' attribute is used in  supplierDetails.js  -->
          <fieldset>
       			<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
				</div>
				
				<div class="row form-group">
        	        <label class="col-md-2 control-label" for="supplier">Supplier ID<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
							
										
							<!-- Following code is to get Supplier from "supplier_details" table of "fertilizer" DB -->
							<!-- getAllSupllier() is implemented in  SupplierDetailsDao with return type List-->
						
							<%
								SupplierDetailsDao sdd1 = new SupplierDetailsDao();
           						List sList1 =sdd1.getAllSupplier();
							
							%>
							
							<input list="sup_drop1" id="supplier1"  class="form-control" onchange="getSupName1()">
				            <datalist id="sup_drop1">
							
							<%
					           for(int i=0;i<sList.size();i++){
					        	   SupplierDetailsBean sup =(SupplierDetailsBean)sList.get(i);
							%>
		
							<option data-value="<%=sup.getSupId()%>" value="<%=sup.getIdNo() %>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
           		
           		<label class="col-md-2 control-label" for="purchaseDate">Purchase  Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	              					  <input type="date"  id="purchaseDate1" name="purchaseDate" placeholder="Purchase Date" class="form-control input-md" onchange="getAllShopName()">
								
								</div>
							</div>
           		
			</div>
				
        	       <div class="row form-group">
        	        <label class="col-md-2 control-label" for="supplier1">Supplier Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
							<input type="text" id="supplierName1" name="supplierName" class="form-control" readonly="readonly">
					</div>
           		</div>
		
        	      <label class="col-md-2 control-label" for="billNum" ><b>Bill Number<sup>*</sup></b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									No
								</span>
	              				<input id="billNum1" name="billNum" placeholder="Enter Bill Number" class="form-control input-md" type="text">
	            			</div>
	            		</div>
				</div>
		
	<%-- 	<div class="row form-group">
		 <label class="col-md-2 control-label" for="fk_cat_id">Product Category<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							
							
							   CategoryDetailsDao cdd1 = new CategoryDetailsDao();
           						List cList1 =cdd1.getAllMainCat();
							
							%>
							<input list="cat_drop1" id="fk_cat_id"  class="form-control" onchange="getAllSubCat()">
				<datalist id="cat_drop1">
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
		
		        <label class="col-md-2 control-label" for="subCat"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("productCat") %> <%}%> <%if(abc.equals("english")){%>Product Subcategory<%}%><sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
							
					<select class="form-control input-md" id='subCat1'  name="subCat" onchange="getProductName()">
					</select>
               		</div>
              	</div> --%>
         		<!-- <!-- <label class="col-md-2 control-label" for="billType">Bill Type<sup>*</sup></label>
         			<div class="col-md-3">
						<div class="col-xs-6 ">	
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="retail" checked="checked"  >Retail
							</label>
						</div>	
      					<div class="col-xs-6 col-md-ffset-1 ">	
							<label class="radio-inline">						
								<input  type="radio" name="customertype" id="vat"  >GST
							</label>
						</div>	
						
              		</div> --> 
		
			
		 	
			<!-- <script >
			function hideGridWithVat(){
				$("#vatId").hide();
			}
			
			function showGridWithVat(){
				$("#vatId").hide();
			}
		
			</script> -->
					<div class="row form-group">
					<label class="col-md-2 control-label" for="proName">Container Name<sup>*</sup></label>  
          					  <div class="col-md-8">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									<select class="form-control" id='containerName'  name="containerName" onclick="productDetailInGridForContainer()">
									</select>
										
								</div>
							</div>
					
				
					</div>	
				  			
				<!-- 	<label class="col-md-2 control-label" for="dcNum" ><b>Shortage <sup>*</sup></b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									No
								</span>
	              				<input id="dcNum" name="dcNum" placeholder="Shortage in Kg" class="form-control input-md" type="text" >
	            			</div>
	            		</div> -->
						
							<%-- <label class="col-md-2 control-label" for="creditSalePrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("shopName") %> <%}%> <%if(abc.equals("english")){%>Shop Name<%}%><sup>*</sup></label>  
           						 <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="	glyphicon glyphicon-hand-right"></i>
										</span>
              								<select class="form-control input-md" id='shopName1'  name="shopName">
											</select>
            						</div> --%>
								
								  <%-- <label class="col-md-2 control-label" for="fk_godown_id">Select Godown<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%
							   GodownEntryDao cdd1 = new GodownEntryDao();
           						List cList1 =cdd1.getAllGodown();
							
							%>
							<input list="godown_drop" id="fk_godown_id"  class="form-control" onchange="getAllShopName()">
				<datalist id="godown_drop">
							<%
					           for(int i=0;i<cList1.size();i++){
					        	   GodownEntry cat=(GodownEntry)cList1.get(i);
							%>
		
							<option data-value="<%=cat.getPkGodownId()%>" value="<%=cat.getGodownName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div> --%>
							
					
			<!-- <div class="row form-group">
			     
			</div> -->
						
		<!-- 	<div style='position:absolute; top:440px; left:108px; '> -->
		<div class="col-sm-10 col-sm-offset-1">
		<div class="table-responsive	row" style="margin-left: 106px;">
				<table id="jqGrid2" ></table>
				<div id="jqGridPager2"></div>
		</div>
			</div>
					<!-- dont delet following row --> 
			<div class="row row form-group">
			
			</div>
			
				
				 <div class="row form-group">
			<!--	<label class="col-md-2  control-label"  for="gstForExpence" ><b>GST for expense :</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
								<select class="form-control" id="gstForExpense2" >
										<option value="0">-Select Type--</option>
										<option value="5">5 %</option>
										<option value="12">12 %</option>
										<option value="18">18 %</option>
										<option value="28">28 %</option>
								</select>
	            			</div>
	            		</div> -->
	            	
				<label class="col-md-2 col-md-offset-5 control-label"  for="total" ><b>Total</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="total1" name="total"  class="form-control input-md" type="text" >
	              				<input readonly="readonly" id="duptotal" name="total"  class="form-control input-md" type="hidden" >
	            			</div>
	            		</div>
					</div>
			
				<%-- <div class="row form-group">
				<label class="col-md-1 col-md-offset-6 control-label" for="discount" ><b>Discount</b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input id="discount" name="discount" placeholder="Discount" style=" width: 120;" class="form-control input-md" type="text" onchange="discountCalculation()">
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-1 control-label" for="discount" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input  id="discountAmount" name="discountAmount" placeholder="Discount Amt" class="form-control input-md" type="text" onchange="discountCalculation()">
	            			</div>
	            		</div>
	            		
				</div>
				<div class="row form-group ">
				
				<label class="col-md-1 col-md-offset-6 control-label"  for="transExpence" ><b>Transport Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence3" name="transExpence3" value="0" placeholder="Transportation Expenses" style=" width: 120;" class="form-control input-md" type="text" onchange="transExpenseAddingToGrossTotal()" >
	            			</div>
	            		</div>

				<label class="col-md-1 control-label"  for="transExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence" name="transExpence" placeholder="With GST" class="form-control input-md"  type="text" ><!-- onblur="transExpenseAddingToGrossTotal()"> -->
	            			</div>
	            		</div>
					</div>
					<div class="row form-group ">
					<label class="col-md-1 col-md-offset-6 control-label"  for="hamaliExpence" ><b>Hamali Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence3" name="hamaliExpence3" value="0" placeholder="Hamali Expenses" style=" width: 120;" class="form-control input-md" type="text"  onchange="hamaliExpenseAddingToGross()">
	            			</div>
	            		</div>
					<label class="col-md-1  control-label"  for="hamaliExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -90;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence" name="hamaliExpence" placeholder="With GST" class="form-control input-md"  type="text"> <!-- onblur="hamaliExpenseAddingToGross()"> -->
	            			</div>
	            		</div>
					</div>
				<div id="vatId" class="row form-group" >
					<label class=" col-md-2 control-label"  for="grossTotal"><b>Vat %</b></label>  
			           	 
							<%
							TaxCreationDao taxdao = new TaxCreationDao();
		           						List taxlist =taxdao.getAllMainTax();
						
					           for(int i=0;i<taxlist.size();i++){
					        	   TaxCreationBean taxBean =(TaxCreationBean)taxlist.get(i);
							%>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input type="text" value="<%=taxBean.getTaxPercentage()%>" id="taxPercentage" style="height:30; width:225">
							<%
				      			}
				    		%>
			          
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-2 control-label"  for="taxAmount" ><b>Tax Amount</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="taxAmount" name="taxAmount" placeholder="" class="form-control input-md" type="text" >
	            			</div>
	            		</div>
            	</div> --%>
            	
            	
					
					<div class="row form-group" >
					<!-- <label class="col-md-2 control-label" for="dueDate">Payment Due Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	                					<input type="date"  id="dueDate" name="dueDate" placeholder="Due Date" class="form-control input-md"">
								
								</div>
							</div>  -->
					<label class=" col-md-2 col-md-offset-5 control-label"  for="grossTotal"><h4><b>Gross Total</b></h4></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="grossTotal1" name="grossTotal" placeholder="Gross Total" class="form-control input-md" type="text" style="font-size: 25px;  height: 55px;">
	            			</div>
	            		</div>
            	</div>
		
			<div class="form-group row" >
		            <div class="col-md-10 text-center">
		            
		            <input type="button" id="btn" style=" height: 65px; width: 180; font-size: 25;margin-left: 195px;margin-top: 30px;margin-bottom: 20px;" class="btn btn-large btn-success button-height-width" name="btn2" onclick=" addingContainerGoodsReceiveValidation()" value="Submit">
		           <!--  <input type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" onclick="resetGrid()" name="btn" value="Cancel"> -->
		           	<input type="reset" style=" height: 65px; width: 180; font-size: 25;margin-left: 15px;margin-top: 9px;" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" value="Cancel" onclick="location.reload()">
		          
		               <!-- <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="addGoodsRecieve()"><h4> Submit</h4></button>
              			<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
		            </div>
		         </div> 
		</fieldset>
	</form>
	</div>
</div>
<%@include file="commons/newFooter.jsp" %>

</body>			
