<%@page import="com.Fertilizer.hibernate.shopDetailsBean"%>
<%@page import="com.Fertilizer.dao.shopDetailsDao"%>
<%@page import="com.Fertilizer.hibernate.ExpenseDetailForBillingAndGoodsReceiveBean"%>
<%@page import="com.Fertilizer.dao.ExpenseDetailForBillingAndGoodsReceiveDao"%>
<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>
  <%@page import="com.Fertilizer.dao.CustomerDetailsDao"%>
  <%@page import="com.Fertilizer.dao.FertilizerBillDao"%>
 <%@page import="com.Fertilizer.hibernate.CustomerDetailsBean"%>
  <%@page import="java.util.List"%>
  <%@page import="com.Fertilizer.dao.ProductDetailsDao"%>
 <%@page import="com.Fertilizer.hibernate.ProductDetailsBean"%>
   <%@page import="com.Fertilizer.dao.TaxCreationDao"%>
   <%@page import="com.Fertilizer.hibernate.TaxCreationBean"%>
   <%@page import="com.Fertilizer.bean.CustomerBillBean"%>
   <%@page import= "java.text.DateFormat"%>
<%@page import="java.text.ParseException"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
	<head>
 	 <meta charset="utf-8">
	  <script type="text/javascript" src="/Repacking/staticContent/js/jquery-1.12.3.min.js"></script>
	 <link rel="stylesheet" href="/Repacking/staticContent/css/jquery-ui.min.css">
     <link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.min.css">
     <link rel="stylesheet" href="/Repacking/staticContent/y_css/jquery-ui.css">
     <link rel="stylesheet" href="/Repacking/staticContent/css/ui.jqgrid.css">
     <script type="text/javascript" src="/Repacking/staticContent/js/jquery.min.js"></script>
     <script type="text/javascript" src="/Repacking/staticContent/js/jquery-ui.min.js"></script>
     <script type="text/javascript" src="/Repacking/staticContent/js/jquery-ui.js"></script>
     <script type="text/javascript" src="/Repacking/staticContent/js/jqueryUi.js"></script>
     <script type="text/javascript" src="/Repacking/staticContent/js/jquery.jqgrid.min.js"></script>

	 
	  	<script type="text/javascript" src="/Repacking/staticContent/js/fertilizerBill.js"></script>
	  	
	  	<%
			FertilizerBillDao fdao = new FertilizerBillDao();
		
			Long billNumber = fdao.getCurrentBillNumber();
			if(billNumber == null)
			{
				billNumber = 0l;
			}
			else
			{
				billNumber+=1;
			}
		
			System.out.println("CUSTOMER BILL NUMBER JSP =====>  "+billNumber);
		%>
	  	
	  	<script type="text/javascript">
	  	function openStockReport() {
	  		 window.location = '/Repacking/jsp/stockReport.jsp';
		}
	  	</script>
	  	
	  	<script>
		<% 
		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		Date date = new Date();
		String todayDate = simpleDateFormat.format(date);

		System.out.println("today's date -  "+todayDate);
		%>
		</script>
	  	
	  	<script>
	 /*  	Calculations for cash */
	 
		function GrossTotalWithoutExpenseForCash(){
			/* var transExpence = document.getElementById("transExpence2").value; */
			var hamaliExpence = document.getElementById("hamaliExpence2").value;
			var totalWithExpense = document.getElementById("totalWithExpense").value;

			if(hamaliExpence == "0" ){
				document.getElementById("grossTotal").value = totalWithExpense;
				}

			}	 
		/* function discountCalculationForCash(){
			var total = document.getElementById("totalWithExpense").value;
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
		} */
		
		function discountCalculationForCash() {
			var total = document.getElementById("totalWithExpense").value;
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
				 document.getElementById("hamaliExpence2").value = 0;
			
				var totalnew = document.getElementById("totalWithExpense").value;
		 		var hamaliExpence = document.getElementById("hamaliExpence2").value;
				var hamali = document.getElementById("hamaliExpence").value;
				document.getElementById("discountAmount").value = 0; 
				document.getElementById("hamaliExpence2").value = 0;
				 
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
				 
				
				
				
				var hamaliExpence = document.getElementById("hamaliExpence2").value;
				var hamali = document.getElementById("hamaliExpence").value;
				 
					 var Dis= hamaliExpence +  hamali;
					 
				var discountAmount = ((discount / 100) * Number(total));
				var totalminusDiscount = Number(total + Dis  ) - discountAmount;
				var FinalTotal = +totalminusDiscount + +hamaliExpence;
				document.getElementById("discountAmount").value = (discountAmount).toFixed(2);;
				document.getElementById("grossTotal").value = (FinalTotal).toFixed(2);
			}
		}
		
	 
		function transExpenseAddingToGrossTotalForCash(){
			
			var transExpence = document.getElementById("transExpence2").value;
			var hamaliExpence = document.getElementById("hamaliExpence2").value;
			
	
		if(transExpence != "0"){
				var total = document.getElementById("totalWithExpense").value;
				var perc = document.getElementById("gstForExpense").value;
				var teg=(transExpence*(perc/100));
				document.getElementById("transExpence").value = teg;
				var totalWithExpense = Number(total) + Number(teg)+ Number(transExpence);
				document.getElementById("grossTotal").value = totalWithExpense;
			}	
		
			if(transExpence == "0"){
				var total = document.getElementById("totalWithExpense").value;
				var hamaliTotal = Number(total) + Number(hamaliExpence);
				var totalWithExpense = Number(transExpence) + Number(hamaliTotal);
				document.getElementById("grossTotal").value = totalWithExpense;
			}	
	
	
		}

		
		function hamaliExpenseAddingToGrossForCash(){
			
			var hamaliExpence = document.getElementById("hamaliExpence2").value;
			var hamali = document.getElementById("hamaliExpence").value;
			//Gross total calculation
			var discount = $('#discount').val();
			var discamnt = document.getElementById("discountAmount").value;
			
			/* if(discount == ""){ */
				
				if(hamaliExpence != "0"){
					var total = document.getElementById("grossTotal").value;
					var perc = document.getElementById("gstForExpense").value;
					var teg=(hamaliExpence*(perc/100));
					document.getElementById("hamaliExpence").value = teg;
					var totalWithExpense = Number(total) + Number(teg) + Number(hamaliExpence);
					document.getElementById("grossTotal").value = totalWithExpense;
				}	
				if(hamaliExpence == ""){
					var total = document.getElementById("totalWithExpense").value;
					var hamali = document.getElementById("hamaliExpence").value;
					var totalWithExpense = Number(total) - Number(discamnt);
					var totalWithExpense1 = Number(totalWithExpense) + Number(hamali);
					document.getElementById("grossTotal").value = totalWithExpense1;
				}
			}
	
		
			function changeDisAndHamaliCash()
		    {
					document.getElementById("discount").value = 0;
					document.getElementById("discountAmount").value = 0;
					document.getElementById("hamaliExpence2").value = 0;
					document.getElementById("hamaliExpence").value = 0;

				var total = document.getElementById("totalWithExpense").value;
				document.getElementById("grossTotal").value = total;				
			}
			
			
			
			
	/* 	Calculations for Credit */
			function GrossTotalWithoutExpenseForCredit(){
				/* var transExpence1 = document.getElementById("transExpence3").value; */
				var hamaliExpence1 = document.getElementById("hamaliExpence3").value;
				var totalWithExpense1 = document.getElementById("totalWithExpense1").value;

				if(hamaliExpence1 == "0" ){
					document.getElementById("grossTotal1").value = totalWithExpense1;
					}

				}	

			/* function discountCalculationForCredit(){
				var total = document.getElementById("totalWithExpense1").value;
				var discountAmount = document.getElementById("discountAmount1").value;
				var discount = $('#discount1').val();
				
				if(discount == ""){
					var totalminusDiscount = Number(total) - discountAmount;
					document.getElementById("grossTotal1").value = totalminusDiscount;
					}
				if(discount != ""){
				var discountAmount = ((discount/100)*Number(total));
				var totalminusDiscount = Number(total) - discountAmount;
				document.getElementById("discountAmount1").value = discountAmount;
				document.getElementById("grossTotal1").value = totalminusDiscount;
				}
			} */
			
			function discountCalculationForCredit() {
				var total = document.getElementById("totalWithExpense1").value;
				var discountAmount = document.getElementById("discountAmount1").value;

				var discount = $('#discount1').val();
				
				if(discount >= 100)
				{
					alert("Please Enter Discount less than 100");
					document.getElementById("discount1").value = 0; 
					return false;
				}

				if (discount == "" )
				{
					

					
					
					
					document.getElementById("discountAmount1").value = 0; 
					 document.getElementById("hamaliExpence3").value = 0;
				
					var totalnew = document.getElementById("totalWithExpense1").value;
			 		var hamaliExpence = document.getElementById("hamaliExpence3").value;
					var hamali = document.getElementById("hamaliExpence1").value;
					document.getElementById("discountAmount1").value = 0; 
					document.getElementById("hamaliExpence3").value = 0;
					 
					if(hamaliExpence == "0" || hamaliExpence == "")
					{	
						document.getElementById("grossTotal1").value = totalnew;	
					}
					else
					{
						var Dis= hamaliExpence + hamali; 
						
						var totalminusDiscount = Number(total + Dis) - discountAmount;
						
						document.getElementById("grossTotal1").value = (totalminusDiscount).toFixed(2);			
					}			
					
				}
				if (discount != "") {
					 
					
					
					
					var hamaliExpence = document.getElementById("hamaliExpence3").value;
					var hamali = document.getElementById("hamaliExpence1").value;
					 
						 var Dis= hamaliExpence +  hamali;
						 
					var discountAmount = ((discount / 100) * Number(total));
					var totalminusDiscount = Number(total + Dis  ) - discountAmount;
					var FinalTotal = +totalminusDiscount + +hamaliExpence;
					document.getElementById("discountAmount1").value = (discountAmount).toFixed(2);;
					document.getElementById("grossTotal1").value = (FinalTotal).toFixed(2);
				}
			}
	
			function transExpenseAddingToGrossTotalForCredit(){
			
			var transExpence = document.getElementById("transExpence3").value;
			var hamaliExpence = document.getElementById("hamaliExpence3").value;

			if(transExpence != "0"){
				var total = document.getElementById("totalWithExpense1").value;
				var perc = document.getElementById("gstForExpense1").value;
				var teg=(transExpence*(perc/100));
				document.getElementById("transExpence1").value = teg;
				var totalWithExpense = Number(total) + Number(teg)+ Number(transExpence);
				document.getElementById("grossTotal1").value = totalWithExpense;
			}	
		
			if(transExpence == "0"){
				var total = document.getElementById("totalWithExpense1").value;
				var hamaliTotal = Number(total) + Number(hamaliExpence);
				var totalWithExpense = Number(transExpence) + Number(hamaliTotal);
				document.getElementById("grossTotal1").value = totalWithExpense;
			}	
	
	
		}

	/* 	function hamaliExpenseAddingToGrossForCredit(){
			var hamaliExpence = document.getElementById("hamaliExpence3").value;
			/* var transExpence = document.getElementById("transExpence3").value; */
		
			/* if(hamaliExpence !="0"){
				var total = document.getElementById("totalWithExpense1").value;
				var perc = document.getElementById("gstForExpense1").value;
				var teg=(hamaliExpence*(perc/100));
				document.getElementById("hamaliExpence1").value = teg;
				var totalWithExpense = Number(total) + Number(teg) + Number(hamaliExpence);
				document.getElementById("grossTotal1").value = totalWithExpense;
			}
			if(hamaliExpence == "0"){
				var total = document.getElementById("totalWithExpense1").value;
				var totalWithExpense = Number(total) + Number(hamaliExpence);
				var totalWithExpense1 = Number(transExpence) + Number(totalWithExpense);
				document.getElementById("grossTotal1").value = totalWithExpense1;
			}
	
		} */

            function hamaliExpenseAddingToGrossForCredit(){
			var hamaliExpence = document.getElementById("hamaliExpence3").value;
			var hamali = document.getElementById("hamaliExpence1").value;
			//Gross total calculation
			var discount = $('#discount1').val();
			var discamnt = document.getElementById("discountAmount1").value;
			
			/* if(discount == ""){ */
				
				if(hamaliExpence != "0"){
					var total = document.getElementById("grossTotal1").value;
					var perc = document.getElementById("gstForExpense1").value;
					var teg=(hamaliExpence*(perc/100));
					document.getElementById("hamaliExpence1").value = teg;
					var totalWithExpense = Number(total) + Number(teg) + Number(hamaliExpence);
					document.getElementById("grossTotal1").value = totalWithExpense;
				}	
				if(hamaliExpence == ""){
					var total = document.getElementById("totalWithExpense1").value;
					var hamali = document.getElementById("hamaliExpence1").value;
					var totalWithExpense = Number(total) - Number(discamnt);
					var totalWithExpense1 = Number(totalWithExpense) + Number(hamali);
					document.getElementById("grossTotal1").value = totalWithExpense1;
				}
			}
			
			function changeDisAndHamaliCredit()
		    {
				document.getElementById("discount1").value = 0;
				document.getElementById("discountAmount1").value = 0;
				document.getElementById("hamaliExpence3").value = 0;
				document.getElementById("hamaliExpence1").value = 0;

				var total = document.getElementById("totalWithExpense1").value;
				document.getElementById("grossTotal1").value = total;
				
			}
			

</script>
<script type="text/javascript">
function pageLoad(){
	$("#CreditCustDetail").show();
	$("#CashCustDetail").hide(); 
}
function openCashCustomerBilling() {
	$("#CashCustDetail").show();
	$("#CreditCustDetail").hide();
	
}
function openCreditCustomerBilling() {
	$("#CreditCustDetail").show();
	$("#CashCustDetail").hide();
	location.reload();
}
</script>
	</head>

	
	
<body onload="pageLoad();getProductName();getProductNameForCredit();">
	<div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading">Billing</h2>
			  	</div>
			  	
			  	
       
    </div>
    
    <p align="right"  style="font-size: 20px; font-weight: bold; padding-right: 150px" >Bill Number : <%=billNumber%></p>
    <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
    
     <!-- <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div> -->

	

				
	<div class="container col-sm-offset-1 "  >
		
	
	     <div class="row form-group">
         		<div class="col-md-3 control-label">
         		<label  for="customertype" style="float:right">Customer Type<sup>*</sup></label>
         		</div>	
         			<div class="col-md-3">
         			<div class="col-xs-6  ">	
							<label class="radio-inline">						
								<input  type="radio" name="customertype" id="customertype" checked="checked" onclick="openCreditCustomerBilling()" >Credit
							</label>
						</div>	
						<div class="col-xs-6 col-md-ffset-1">
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="customertype"  onclick="openCashCustomerBilling()"  >Cash
							</label>
						</div>	
      					
              		</div> 
              		
              		 
           </div>
              	
		<!------------------			Code for Cash customers ------------------>
  
     <div id="CashCustDetail">
  
     <form class="form-horizontal" method="post" action="" name="fertiBill">
			<fieldset>
			 <!--  <div class="row form-group">
         		<label class="col-md-3 control-label" for="billType">Bill Type<sup>*</sup></label>
         			<div class="col-md-3">
						<div class="col-xs-6 ">	
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="retail" checked="checked" onchange="hidePercentageBox()" >Retail
							</label>
						</div>	
      					<div class="col-xs-6 col-md-ffset-1 ">	
							<label class="radio-inline">						
								<input type="radio" name="customertype" id="vat" onchange="showPercentageBox()" >Vat
							</label>
						</div>	
              		</div> 
              </div> -->
         <div class="row form-group">
			<label class="col-md-3 control-label" for="customerName">Customer Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						<%-- 	<%
							CustomerDetailsDao dao1 = new CustomerDetailsDao();
           						List unitList =dao1.getAllCustomer();
							%> --%>
           		 			  <input id="customerName" name="customerName" placeholder="Customer Name" class="form-control input-md" type="text" onchange="getGstNo()" >
           		 		<%-- <datalist id="firstName_drop">
							<%
					           for(int i=0;i<unitList.size();i++){
					        	   CustomerDetailsBean bean1 =(CustomerDetailsBean)unitList.get(i);
							%>
		
							<option data-value="<%=bean1.getCustId()%>" value="<%=bean1.getFirstName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist> --%>
           		 		</div>
					</div>

           	 <label class="col-md-3 control-label" for="village">Village/City </label>
           	 	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
						
         	   			  <input id="village" name="village" placeholder="Village" class="form-control input-md ac_district"  type="text">
          		  	</div>
				</div>
          </div>
	  
	  
	  <div class="row form-group">
			<label class="col-md-3 control-label" for="creditCustomerName"> Shop Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
			
										
							<!-- Following code is to get customers from "customer_details" table of "fertilizer" DB -->
							<!-- getAllCustomer() is implemented in  CustomerDetailsDao with return type List-->
						
							<%
							shopDetailsDao dao2 = new shopDetailsDao();
           						List shop =dao2.getAllShop();
							
							%>
							
							<input type="text" id="shopName" list="shop_drop1" class="form-control" >
				<datalist id="shop_drop1">
							
							<%
					           for(int i=0;i<shop.size();i++){
					        	   shopDetailsBean bean =(shopDetailsBean)shop.get(i);
							%>
							<option data-value="<%=bean.getShopId()%>" value="<%=bean.getShopName() %>" >
							<%
				      			}
				    		%>
						</datalist>
						</div>
					</div>

           	 <label class="col-md-3 control-label" for="GstNO">GST No</label>
           	 	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
         	   			  <input id="gstNo" name="gstNo"  placeholder="GST No" class="form-control input-md ac_district"  type="text">
          		  	</div>
				</div>
         </div>
         
	      <div class="row form-group">
			<label class="col-md-3 control-label" for="contactNo">Contact No. </label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-earphone"></i>
							</span>
              				<input id="contactNo" name="contactNo" placeholder="Contact No." class="form-control input-md" type="text" >
            			</div>
            		</div>
			<label class="col-md-3 control-label" for="saleDate">Sale Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	              					  <input type="date"  id="saleDate" name="saleDate" value="<%=todayDate%>" placeholder="sale Date" class="form-control input-md"">
								
								</div>
							</div>
			<!-- <label class="col-md-2 control-label" for="aadharNo">Aadhar No.<sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-earphone"></i>
							</span>
              				<input id="aadharNo" name="aadharNo" placeholder="Aadhar No." class="form-control input-md" type="text" >
            			</div>
            		</div> -->
			</div>
        	 <div class="row form-group">
              	<label class="col-md-3 control-label" for="productName">Product Name</label>  

            			<div class="col-md-9">
							<div class="input-group" >
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
            						<select class="form-control" id='proName'   name="proName" onclick="getProductDetailsByProductName()" >
									</select>
            				</div>
            			</div>
        	  </div>  
        	 <!--  <div class="row form-group">
        	   <label class="col-md-3 control-label" for="barcode">Barcode no.</label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No.
							</span>
           		 			  <input id="key" name="key" placeholder="Barcode" class="form-control input-md" type="text" onchange ="getitemData()" >
           		 		</div>
					</div>
        	  </div> -->
          <!-- 	<div style='position:absolute; top:440px; left:108px; '> -->
          <div class="table-responsive	row">
				<table id="list4" ></table>
				<div id="jqGridPager"></div>
			<!-- </div> -->
		  </div>
		
		 
          <div class="row form-group" >
          
          </div>
          
          	<!-- <div class="row form-group" >
					<div class="col-md-3 control-label">
	           				<label for="paymentMode"> Payment Mode</label>  
	           		</div>
	           		
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentMode">
									<option value="selected">-Select Type--</option> 
										<option value="cash">Cash</option>
										<option value="cheque">Cheque</option>
										<option value="card">Card</option>
										<option value="neft">NEFT</option>
								</select>	
	           				</div>
						</div>
			
            	
	 <script>
		
		$(document).ready(function(){
	  		 $("#paymentMode").change(function(){
	       	$(this).find("option:selected").each(function(){
	           	if($(this).attr("value")=="cheque"){
	           	
	           	$("#cheque_no").show(); 
	           	
	           	$("#neft_acc_no").hide(); 
	           	$("#card_no").hide();
	           	}
	          	 else if($(this).attr("value")=="card"){
	           	
	          		$("#card_no").show(); 	
	          		
	          		$("#neft_acc_no").hide(); 
	        		$("#cheque_no").hide();
	           }
	          	 else if($(this).attr("value")=="neft"){
	                	
	           		$("#neft_acc_no").show(); 	
	           		
	           		$("#card_no").hide(); 
	        		$("#cheque_no").hide();
	            }
	          	 else if($(this).attr("value")=="cash"){
	             	
	            		$("#neft_acc_no").hide(); 
	            		$("#cheque_no").hide();
	            		$("#card_no").hide(); 
	             }
	           	
	          	else if($(this).attr("value")=="selected"){
	             	
	        		$("#neft_acc_no").hide(); 
	        		$("#cheque_no").hide();
	        		$("#card_no").hide(); 
	         }
	          
	       });
	   }).change();
		});	
		</script>
          	
					
					</div> -->
          
          	<!-- <div class="row form-group" >

            					<div id="cheque_no" >
            						<div class="col-md-1">										
										<label class="control-label">Cheque No.:</label>
									</div>
										
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="chequeNum" id="chequeNum" placeholder="Cheque No." />  
									</div>
								
									<div class="col-md-1">
										<label class="control-label">Date:</label>
									</div>
									<div class="col-md-3 first">	
										<input class="form-control" type="text" name="cdate" id="chequedate" placeholder="yyyy-mm-dd" />  
									</div>
									<div class="col-md-1">
										<label class="control-label">Name:</label>
									</div>
									<div class="col-md-3 col-md-offset-2 first">	
										<input class="form-control" type="text" name="nameOnCheck" id="nameOnCheck" placeholder="Name On check" />  
									</div>
								</div>
											
											<div id="card_no" class="form-group">
												<div class="col-md-2">
													<label class="control-label">Card No:</label>
												</div>
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="cardNum" id="cardNum" placeholder="Card No." />  
												</div>
												
											</div>
											
											<div id="neft_acc_no" class="form-group">
												<div class="col-md-2 ">
													<label class="control-label">Account No:</label>
												</div>
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="accNum" id="accNum" placeholder="Account No." />  
												</div>
												<div class="col-md-1 ">
													<label class="control-label">Bank Name</label>
												</div>
												<div class="col-md-3 col-md-offset-2 first">	
													<input class="form-control" type="text" name="bankName" id="bankName" placeholder="Name Of Bank" />  
												</div>
												</div>
											</div> -->
          
         <div class="row form-group">
         <label class="col-md-3 control-label"  for="gstForExpence" ><b>GST For Expense :</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
								<select class="form-control" id="gstForExpense" onchange="changeDisAndHamaliCash()">
										<option value="0">-Select Type--</option>
										<option value="5">5 %</option>
										<option value="12">12 %</option>
										<option value="18">18 %</option>
										<option value="28">28 %</option>
								</select>
	            			</div>
	            		</div>
          	    <label class="col-md-3 control-label"  for="total" ><b>Total</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="totalWithExpense" class="form-control input-md" type="text" readonly="readonly" ondragover="GrossTotalWithoutExpenseForCash()">
	              				<!-- <input id="totalWithExpense" readonly="readonly" class="form-control input-md" type="text" > -->
	            			</div>
	            		</div>
          	</div>
          	
          		<!-- <div class="row form-group" >
          		<label class="col-md-1 col-md-offset-8 control-label"  for="gstForExpence" ><b>Transport Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" >
								<span class="input-group-addon">
									Rs
								</span>
								<input id="transExpence2" name="transExpence2" style=" width: 80;" placeholder="Transportation Expenses" class="form-control input-md" type="text" value="0" onchange="transExpenseAddingToGrossTotal()">
	            			</div>
	            		</div>
				<label class="col-md-1" for="transExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence" name="transExpence" placeholder="With GST" class="form-control input-md" type="text">
	            			</div>
	            		</div>
					</div> -->
					<div class="row form-group">
				 <label class="col-md-1 col-md-offset-8 control-label" for="discount" ><b>Discount</b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input id="discount" name="discount" placeholder="Discount" style=" width: 80;" class="form-control input-md" type="text" onchange="discountCalculationForCash()">
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-1 control-label" for="discount" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input  id="discountAmount" name="discountAmount" placeholder="Discount Amt"  class="form-control input-md" type="text" onchange="discountCalculationForCash()">
	            			</div>
	            		</div>
	            	</div>
					<div class="row form-group" >
					<label class="col-md-1 col-md-offset-8 control-label"  for="hamaliExpence" ><b>Hamali Expenses</b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" > 
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence2" name="hamaliExpence2" style=" width: 80;" placeholder="Hamali Expenses" class="form-control input-md" type="text" value="0" onchange="hamaliExpenseAddingToGrossForCash()">
	            			</div>
	            		</div>
	            		<label  class="col-md-1" for="hamaliExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence" name="hamaliExpence" placeholder=" With GST" class="form-control input-md" type="text">
	            			</div>
	            		</div>
					</div>
        
<%--         <div class="row form-group">
         <label class="col-md-3 control-label" for="expensesDescription">Expenses Description</label>  
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
           		</div>
        			
        
        	<!--  <label class="col-md-3 control-label"  for="expenseDescription" ><b>Expenses Description</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									<i class="	glyphicon glyphicon-hand-right"></i>
								</span>
	              				<input id="expenseDescription" name="expenseDescription" placeholder="Expense description" class="form-control input-md" type="text">
	            			</div>
	            		</div> -->
        
          	<label class=" col-md-2 control-label"  for="expenses" ><b>Other Expenses</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="extraExpence" name="expenses" placeholder="Other Expenses" class="form-control input-md" type="text" onkeyup="expenseAddingToGrossInCash()" >
	            			</div>
	            		</div>
	            		
	           		
          	</div> --%>
         
        <!-- 	 To show and hide percentage Box -->
			<!-- <script >
			function taxPercentageBox1(){
				$("#vatId1").hide();
			}
			
			function hidePercentageBox(){
				$("#vatId1").hide();
			}
			
			function showPercentageBox(){
				$("#vatId1").show();
			}
			</script> -->
         
          	
          	<%-- <div id="vatId1" class="row form-group" >
					<label class="col-md-3 control-label"  for="grossTotal"><b>Vat %</b></label>  
			           	 
							<%
							TaxCreationDao taxdao1 = new TaxCreationDao();
		           						List taxlist1 =taxdao1.getAllMainTax();
						
					           for(int i=0;i<taxlist1.size();i++){
					        	   TaxCreationBean taxBean1 =(TaxCreationBean)taxlist1.get(i);
							%>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input type="text" value="<%=taxBean1.getTaxPercentage()%>" id="taxPercentage" style="height:30;width: 175px">
							<%
				      			}
				    		%>
			          
	            			</div>
	            		</div>
	            	
	            	 <label class=" col-md-2 control-label"  for="taxAmount" ><b>Tax Amount</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="taxAmount" readonly="readonly" class="form-control input-md" type="text">
	            			</div>
	            		</div>
	            		
            	</div> --%>
          	
          		<div class="row form-group">
					<label class="col-md-offset-6 col-md-3 control-label"  for="grossTotal"><h4><b>Gross Total</b></h4></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="grossTotal" name="grossTotal" placeholder="Gross Total" class="form-control input-md" type="text" style="font-size: 25px;  height: 55px;">
	              				<!-- <input readonly="readonly" id="grossTotal1" name="grossTotal1" placeholder="Gross Total" class="form-control input-md"  type="text" style="font-size: 25px;  height: 55px;" > -->
	            			</div>
	            		</div>
            	</div>
     	
       				<div class="row form-group buttons_margin_top ">
								<div align="center">
								  
								<input type="button" id="btn" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="save" onclick="fertilizerBill()" value="Print Bill">
		           				<input type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" name="btn"  onclick="window.location.reload()" value="Cancel" onclick="reset()">
								 <input type="button" id="btn" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="btn" onclick="openStockReport()" value="Stock Report">	
									
								</div>
					</div>	
				</fieldset>
				</form>
       </div>
           
           
 <!--         For credit Customer   -->
           
       <div id="CreditCustDetail">
       	<form class="form-horizontal" method="post" action="" name="creditFertiBill1">
			<fieldset>
			   <div class="row form-group">
			<label class="col-md-3 control-label" for="creditCustomerName"> Customer ID<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
			
										
							<!-- Following code is to get customers from "customer_details" table of "fertilizer" DB -->
							<!-- getAllCustomer() is implemented in  CustomerDetailsDao with return type List-->
						
							<%
							CustomerDetailsDao dao = new CustomerDetailsDao();
           						List cust =dao.getAllCustomer();
							
							%>
							
							<input type="text" id="creditCustomer" list="cust_drop1" class="form-control" onchange="custDetail.getVillageName();custDetail.getContactNo();custDetail.getName();custDetail.gstNo();getCustName()" >
				<datalist id="cust_drop1">
							
							<%
					           for(int i=0;i<cust.size();i++){
					        	   CustomerDetailsBean bean =(CustomerDetailsBean)cust.get(i);
							%>
							<option data-value="<%=bean.getCustId()%>"><%=bean.getIdNo() %> </option>
							<%
				      			}
				    		%>
						</datalist>
						</div>
					</div>
           </div>
	 	 <div class="row form-group">
			<label class="col-md-3 control-label" for="creditCustomerName"> Customer Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
								<input type="text" id="custName" name="custName" class="form-control" readonly="readonly">
						</div>
					</div>

           	 <label class="col-md-3 control-label" for="village1">Village/City </label>
           	 	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
         	   			  <input id="village1" name="village1"  class="form-control input-md ac_district"  type="text">
          		  	</div>
				</div>
         </div>
         
         <div class="row form-group">
			<label class="col-md-3 control-label" for="creditCustomerName"> Shop Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
			
										
							<!-- Following code is to get customers from "customer_details" table of "fertilizer" DB -->
							<!-- getAllCustomer() is implemented in  CustomerDetailsDao with return type List-->
						
							<%
							shopDetailsDao dao3 = new shopDetailsDao();
           						List shop1 =dao3.getAllShop();
							
							%>
							
							<input type="text" id="shopName2" list="shop_drop2" class="form-control" >
				<datalist id="shop_drop2">
							
							<%
					           for(int i=0;i<shop1.size();i++){
					        	   shopDetailsBean bean =(shopDetailsBean)shop1.get(i);
							%>
							<option data-value="<%=bean.getShopId()%>" value="<%=bean.getShopName() %>" >
							<%
				      			}
				    		%>
						</datalist>
						</div>
					</div>

           	 <label class="col-md-3 control-label" for="village1">GST No</label>
           	 	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
         	   			  <input id="gstNo2" name="gstNo2"  placeholder="GST No" class="form-control input-md ac_district"  type="text">
          		  	</div>
				</div>
         </div>
         
         
            <div class="row form-group">
			<label class="col-md-3 control-label" for="contactNo1">Contact No.</label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-earphone"></i>
							</span>
              				<input id="contactNo1" name="contactNo1"  class="form-control input-md" type="text" >
            			</div>
            		</div>
            		<label class="col-md-3 control-label" for="saleDate">Sale Date<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
	              					  <input type="date"  id="saleDate2" name="saleDate" value="<%=todayDate%>" placeholder="sale Date" class="form-control input-md"">
								
								</div>
							</div>
            	<!-- <label class="col-md-2 control-label" for="aadharNo1">Aadhar No.<sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No.
							</span>
              				<input id="aadharNo1" name="aadharNo1" placeholder="Aadhar No." class="form-control input-md" type="text" >
            			</div>
            		</div> -->
          
	 	</div>
	 	
	 	<div class="row form-group">
              	<label class="col-md-3 control-label" for="productName">Product Name </label>  
           			<div class="col-md-9">
							<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
            						<select class="form-control" id='proName1'   name="proName1" onclick="getProductDetailsByProductNameForCredit()" >
									</select>
            				</div>
            			</div>
            		
        	  </div> 
           			
    <!--        			
  	<div class="row form-group">
            		<label class="col-md-3 control-label" for="barcode1">Barcode no.</label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No.
							</span>
           		 			  <input id="barcode1" name="barcode1" placeholder="Barcode" class="form-control input-md" type="text" onchange ="getProDetailsAsPerBarcode()" >
           		 		</div>
					</div>
        	  </div>   -->
         
          
      
          
          
          <!-- 	<div style='position:absolute; top:440px; left:108px; '> -->
          <div class="table-responsive	row">
				<table id="credit" ></table>
				<div id="jqGridPager1"></div>
			<!-- </div> -->
		</div>
		
		 
          <div class="row form-group" >
          
          </div>
          
          
          	<div class="row form-group" >
					<div class="col-md-3 control-label">
	           				<label for="paymentMode2"> Payment Mode</label>  
	           		</div>
	           		
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentMode2">
								<option value="selected2">-Select Type--</option> 
										<option value="cash2">Cash</option>
										<option value="cheque2">Cheque</option>
										<option value="card2">Card</option>
										<option value="neft2">NEFT</option>
								</select>	
	           				</div>
						</div>
						
					<label class="col-md-3 control-label" for="contactNo1">Initial Payment</label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								Rs
							</span>
              				<input readonly="readonly" input id="initialPayment" name="initialPayment"  class="form-control input-md" type="text" >
            			</div>
            		</div>
            	
	 <script>
		
		$(document).ready(function(){
	  		 $("#paymentMode2").change(function(){
	       	$(this).find("option:selected").each(function(){
	           	if($(this).attr("value")=="cheque2"){
	           	
	           	$("#cheque_no2").show(); 
	           	
	           	$("#neft_acc_no2").hide(); 
	           	$("#card_no2").hide();
	           	}
	          	 else if($(this).attr("value")=="card2"){
	           	
	          		$("#card_no2").show(); 	
	          		
	          		$("#neft_acc_no2").hide(); 
	        		$("#cheque_no2").hide();
	           }
	          	 else if($(this).attr("value")=="neft2"){
	                	
	           		$("#neft_acc_no2").show(); 	
	           		
	           		$("#card_no2").hide(); 
	        		$("#cheque_no2").hide();
	            }
	          	 else if($(this).attr("value")=="cash2"){
	             	
	            		$("#neft_acc_no2").hide(); 
	            		$("#cheque_no2").hide();
	            		$("#card_no2").hide(); 
	             }
	           	
	          	else if($(this).attr("value")=="selected2"){
	             	
	        		$("#neft_acc_no2").hide(); 
	        		$("#cheque_no2").hide();
	        		$("#card_no2").hide(); 
	         }
	          
	       });
	   }).change();
		});	
		</script>
          	
					
					</div>
          
          	<div class="row form-group" >

            					<div id="cheque_no2" >
            						<!-- <div class="col-md-1">										
										<label class="control-label">Cheque No.:</label>
									</div> -->
										
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="chequeNum" id="chequeNum2" placeholder="Cheque No." />  
									</div>
								
									<!-- <div class="col-md-1">
										<label class="control-label">Date:</label>
									</div>
									<div class="col-md-3 first">	
										<input class="form-control" type="text" name="cdate" id="chequedate" placeholder="yyyy-mm-dd" />  
									</div> -->
									<!-- <div class="col-md-1">
										<label class="control-label">Name:</label>
									</div> -->
									<div class="col-md-3 col-md-offset-2 first">	
										<input class="form-control" type="text" name="nameOnCheck" id="nameOnCheck2" placeholder="Name On check" />  
									</div>
								</div>
											
											<div id="card_no2" class="form-group">
												<!-- <div class="col-md-2">
													<label class="control-label">Card No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="cardNum" id="cardNum2" placeholder="Card No." />  
												</div>
												
											</div>
											
											<div id="neft_acc_no2" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Account No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="accNum" id="accNum2" placeholder="Account No." />  
												</div>
												<!-- <div class="col-md-1 ">
													<label class="control-label">Bank Name</label>
												</div> -->
												<div class="col-md-3 col-md-offset-2 first">	
													<input class="form-control" type="text" name="bankName" id="bankName2" placeholder="Name Of Bank" />  
												</div>
												</div>
											</div>
       
         <div class="row form-group"><label class="col-md-3  control-label"  for="gstForExpence" ><b>GST For Expense :</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
								<select class="form-control" id="gstForExpense1" onchange="changeDisAndHamaliCredit()" >
										<option value="0">-Select Type--</option>
										<option value="5">5 %</option>
										<option value="12">12 %</option>
										<option value="18">18 %</option>
										<option value="28">28 %</option>
								</select>
	            			</div>
	            		</div>
         	<!-- 
         	     	Customer first name is hidden	 -->
         
            <label class="col-md-3 control-label" style="display:none" for="customerNameHidden">Customer Name</label>  
           	 		<div class="col-md-3" style="display:none">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
              				<input  id="customerNameHidden" name="customerNameHidden"  class="form-control input-md" type="text" >
            			</div>
            		</div>  
         
          	   <label class="col-md-3  control-label"  for="total" ><b>Total</b></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="totalWithExpense1" class="form-control input-md" type="text" readonly="readonly" ondragover="GrossTotalWithoutExpenseForCredit()">
	            			</div>
	            		</div>
          	</div>
          	
          	
        <%-- <div class="row form-group">
        
        	 <label class="col-md-3 control-label" for="expensesDescription">Expenses Description</label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
						
							<%
							ExpenseDetailForBillingAndGoodsReceiveDao expenseDao = new ExpenseDetailForBillingAndGoodsReceiveDao();
           						List expList1 =expenseDao.getAllExpenses();
							
							%>
							
							<input list="exp_drop1" id="fkExpenseDescriptionId1"  class="form-control">
				<datalist id="exp_drop1">
							
							<%
					           for(int i=0;i<expList1.size();i++){
					        	   ExpenseDetailForBillingAndGoodsReceiveBean expenseBilling =(ExpenseDetailForBillingAndGoodsReceiveBean)expList1.get(i);
							%>
		
							<option data-value="<%=expenseBilling.getPkExpenseForBillingId()%>" value="<%=expenseBilling.getExpenseName()%>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
        
        
        	 <!-- <label class="col-md-3 control-label"  for="expenseDescription1" ><b>Expenses Description</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									<i class="	glyphicon glyphicon-hand-right"></i>
								</span>
	              				<input id="expenseDescription1" name="expenseDescription1" placeholder="Expense description" class="form-control input-md" type="text">
	            			</div>
	            		</div> -->
        
          	<label class=" col-md-2  control-label"  for="expenses1" ><b>Other Expenses</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="extraExpence1" name="expenses" placeholder="Other Expenses" class="form-control input-md" type="text" onkeyup="expenseAddingToGrossInCredit()">
	            			</div>
	            		</div>
	            		
	            	
          	</div> --%>
          		
    <%--       
          	   <!-- 	 To show and hide percentage Box -->
			<script >
			function taxPercentageBox(){
				$("#vatId2").hide();
			}
			
			function hidePercentageBox1(){
				$("#vatId2").hide();
			}
			
			function showPercentageBox1(){
				$("#vatId2").show();
			}
			</script>
         
          	
          	<div id="vatId2" class="row form-group" >
					<label class=" col-md-3 control-label"  for="grossTotal"><b>Vat %</b></label>  
			           	 
							<%
							TaxCreationDao taxdao2 = new TaxCreationDao();
		           						List taxlist2 =taxdao2.getAllMainTax();
						
					           for(int i=0;i<taxlist2.size();i++){
					        	   TaxCreationBean taxBean2 =(TaxCreationBean)taxlist2.get(i);
							%>
						<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input type="text" value="<%=taxBean2.getTaxPercentage()%>" id="taxPercentage1" style="height:30;width: 175px">
							<%
				      			}
				    		%>
			          
	            			</div>
	            		</div>
	            		
	            <label class=" col-md-2 control-label"  for="taxAmount" ><b>Tax Amount</b><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="taxAmount1" readonly="readonly" class="form-control input-md" type="text">
	            			</div>
	            		</div>
	            		
            	</div> --%>
          	    <!--  <div class="row form-group" >
          	     <label class="col-md-1 col-md-offset-8 control-label"  for="transExpence" ><b>Transport Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence3" name="transExpence" value="0" placeholder="Transportation Expenses" style=" width: 80;" class="form-control input-md" type="text" onchange="transExpenseAddingToGrossTotalForCredit()" >
	            			</div>
	            		</div>
          	     
				<label class="col-md-1  control-label"  for="transExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="transExpence1" name="transExpence" placeholder="With GST" class="form-control input-md" type="text"  >
	            			</div>
	            		</div>
					</div> -->
					<div class="row form-group">
				 <label class="col-md-1 col-md-offset-8 control-label" for="discount" ><b>Discount</b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									%
								</span>
	              				<input id="discount1" name="discount" placeholder="Discount" style=" width: 80;" class="form-control input-md" type="text" onchange="discountCalculationForCredit()">
	            			</div>
	            		</div>
	            		
	            		<label class="col-md-1 control-label" for="discount" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input  id="discountAmount1" name="discountAmount" placeholder="Discount Amt"  class="form-control input-md" type="text" onchange="discountCalculationForCredit()">
	            			</div>
	            		</div>
	            	</div>
	            	
					 <div class="row form-group" >
					 <label class="col-md-1 col-md-offset-8 control-label"  for="hamaliExpence" ><b>Hamali Expenses </b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence3" name="hamaliExpence" value="0" placeholder="Hamali Expenses" style=" width: 80;" class="form-control input-md" type="text"  onchange="hamaliExpenseAddingToGrossForCredit()">
	            			</div>
	            		</div>
					<label class="col-md-1  control-label"  for="hamaliExpence" ><b></b></label>  
			           	 <div class="col-sm-1">
							<div class="input-group" style="margin-left: -70;">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input id="hamaliExpence1" name="hamaliExpence" placeholder="With GST" class="form-control input-md" type="text">
	            			</div>
	            		</div>
					</div>
          	
          		<div class="row form-group">
					<label class="col-md-offset-6 col-md-3 control-label"  for="grossTotal1"><h4><b>Gross Total</b></h4></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									Rs
								</span>
	              				<input readonly="readonly" id="grossTotal1" name="grossTotal1" placeholder="Gross Total" class="form-control input-md"  type="text" style="font-size: 25px;  height: 55px;" >
	              				
	            			</div>
	            		</div>
            	</div>
	 	
	 	
	 		<div class="row form-group buttons_margin_top ">
				<div align="center">
					
					<input type="button" id="btn" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="btn2" onclick="fertilizerBillForCreditCustomer()" value="Print Bill">
		           	<input type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" value="Cancel" onclick="window.location.reload()">	
					<input type="button" id="btn" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="btn" onclick="openStockReport()" value="Stock Report">		  
					<!-- <button id="btn" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="creditCustFertilizerBill()"><h4> Submit</h4></button>
              		<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button>
								   -->
								 
				</div>
			</div>	
	 		</fieldset>
	 	</form>
	 </div>
	 	
	</div>
</body>

<%@include file="commons/newFooter.jsp" %> 

