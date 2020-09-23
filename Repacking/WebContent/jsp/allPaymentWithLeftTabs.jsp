
<%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
<%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
<%@page import="java.util.List"%>
<%@page import="com.Fertilizer.hibernate.SupplierDetailsBean"%>
<%@page import="com.Fertilizer.dao.SupplierDetailsDao"%>
<%@page import="com.Fertilizer.dao.CustomerDetailsDao" %>
 <%@page import="com.Fertilizer.hibernate.SupplierDetailsBean" %>
 <%@page import="com.Fertilizer.hibernate.CustomerDetailsBean" %>
  <%@page import="com.Fertilizer.dao.EmployeeDetailsDao" %>
 <%@page import="com.Fertilizer.hibernate.EmployeeDetailsBean" %>
<%@page import="com.Fertilizer.dao.ExpenditureDetailsDao" %>
 <%@page import="com.Fertilizer.hibernate.ExpenditureDetailsBean" %>
 <%@page import="com.Fertilizer.dao.SupplierPaymentDao" %>
 <%@page import="com.Fertilizer.hibernate.SupplierPaymentBean" %>
 <%@page import="com.Fertilizer.dao.CustomerPaymentDao"%>
 <%@page import="com.Fertilizer.hibernate.CustomerPaymentBean" %>
<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>
<script>
<% 
	Long TransID1 = 1l;
%>
<%
		SupplierPaymentDao data = new SupplierPaymentDao();
		List stkList  = data.gettransID();
		
		for(int i=0; i<stkList.size(); i++){
			
			SupplierPaymentBean st = (SupplierPaymentBean)stkList.get(i);
			TransID1 = st.getTransId();
			
			TransID1++;
			
			}
			
 %>
 </script> 

<script>
<% 
	Long TransID2 = 1l;
%>
<%
		CustomerPaymentDao dataa = new CustomerPaymentDao();
		List stkListt  = dataa.gettransID();
		
		for(int i=0; i<stkListt.size(); i++){
			
			CustomerPaymentBean st = (CustomerPaymentBean)stkListt.get(i);
			TransID2 = st.getTransacid();
			
			TransID2++;
			
			}
			
 %>
 </script> 
	    <link rel="stylesheet" href="/Repacking/staticContent/css/tabDemo.css">
	    <script src="/Repacking/staticContent/js/cashbankbook.js"></script>


<div class="row" style="min-height:300px;">
    <div  class="col-md-12">
        <h3>Left Tabs</h3>
        <hr/>
        <div class="col-md-2">
            <!-- required for floating -->
            <!-- Nav tabs -->
            <ul class="nav nav-tabs tabs-left">
                <li class="active"><a href="#home" data-toggle="tab">Supplier Payment</a></li>
                <li><a href="#profile" data-toggle="tab">Customer Payment</a></li>
                <li><a href="#messages" data-toggle="tab">Employee Payment</a></li>
                <li><a href="#settings" data-toggle="tab">Expenditure Payment</a></li>
            </ul>
        </div>
        <div class="col-xs-9">
            <!-- Tab panes -->
    <div class="tab-content">
    	
    	
    	<!--     supp payment    -->


    	<div class="tab-pane active" id="home">
    	
    					
    					<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Supplier Payment</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			   		<div align="right">
				  		<h2 class="form-name style_heading">Transaction ID :
				  		<%
				  			out.println(TransID1);
				  		%>
				  		</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div> 
			   		 
			   		 
			    </div>
			    
		<ul class="nav nav-tabs">
		    <li class="active"><a data-toggle="tab" href="#oil"><h4 style="color:blue">Oil Payment</h4></a></li>
		    <li><a data-toggle="tab" href="#container"><h4 style="color:blue">Container Payment</h4></a></li>
		   
	 	</ul>
         	 
   <div class="tab-content" style="float: left"> 
    
    <!-- oil   ----------------------------  -->

	<div id="oil" class="tab-pane active">
		        <div class="row">
					<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color: #c1b1b1;">
					</div>
				</div>
    	
    	
       		<form class="form-horizontal" method="post" action="" name="spmt">
       		
       		
         		<div class="row">
			    	<div align="center">
			  			<h2 class="form-name style_heading">Oil Payment</h2>
			  		</div>
			 	
		     <div class="row">
				     <div class="col-sm-offset-1 col-mxl-12">
						  		<hr style="border-top-color:#c1b1b1;">
				     </div>	
		   		 </div>
		    </div>
		    
		    
		    
        	       <div class="row -group">
           				 <label class="col-md-3 control-label" for="supplier">Supplier Name<sup>*</sup></label>  
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
							
							<input list="sup_drop" id="supplier" onchange="bill.getAllBills();" class="form-control">
				<datalist id="sup_drop">
							
							<%
					           for(int i=0;i<sList.size();i++){
					        	   SupplierDetailsBean sup =(SupplierDetailsBean)sList.get(i);
							%>
		
							<option data-value="<%=sup.getSupId()%>" value="<%=sup.getDealerName() %>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
            
           				    <label class="col-md-2 control-label" for="bill_no"> Bill No<sup>*</sup> </label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										No
									</span>
           		 					
           		 					<select class="form-control input-md" id='billNo'  name="billNo" onchange="bill.getTotalAmtByBills()">
									</select>
           						 </div>
							</div>
						  </div><br> 
					
					<div class="row form-group">
           				<label class="col-md-2 col-md-offset-6 control-label" for="totalAmt"> Total Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="totalAmount" name="totalAmount" class="form-control" placeholder="Total Amount">
           							 </div>
								</div>
            					
            					
           				 	 
							  </div>
						  
				<div class="row form-group">
						 <label class="col-md-3 control-label" for="personname">Accountant Name </label>  
			           		 <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-user"></i>
									</span>
			           		   <input id="personname" name="personname" placeholder="Accountant Name" class="form-control input-md" type="text" >
			           		 </div>
						</div>
				
			
          					<label class="col-md-2 control-label" for="balanceAmt"> Balance Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="balanceAmount" name="balanceAmount" class="form-control" placeholder="Balance Amount">
           							 </div>
								</div>
		  						
	</div>
      	  
						  
	 <div class="row form-group">
				
				<label class="col-md-3 control-label" for="paymentMode"> Payment Mode<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentMode">
										<!-- <option value="selected">-Select Type--</option> -->
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
				
							<!-- <label class="col-md-3 control-label" for="credit">Credit<sup>*</sup></label>  
           						 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									   <input id="credit" name="credit" placeholder="Credit Amount" class="form-control input-md" type="text" onchange="" >
           							 </div>
								</div>	 -->
						
			          </div>  
			          
			     <div class="row form-group">
				
				  <label class="col-md-3 control-label" for="paymentMode"> Payment Type<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentType">
										<!-- <option value="selected">-Select Type--</option> -->
										<option value="credit">Credit</option>
										<option value="debit">Debit</option>
										
								</select>	
	           				</div>
						</div>
						
						
						<div class="col-md-5">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input  id="supPay" name="supPay" class="form-control" placeholder="Enter Amount">
           							 </div>
						</div>
		  						
			     
			     </div>
			     
			     
			          
		    	<div class="row form-group" >

            					<div id="cheque_no" >
            						<!-- <div class="col-md-2">										
										<label class="control-label" style="align:">Cheque No.:</label>
									</div> -->
										
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="chequeNum" id="chequeNum" placeholder="Cheque No." />  
									</div>
								
									<!-- <div class="col-md-1">
										<label class="control-label">Date:</label>
									</div>
									<div class="col-md-3 first">	
										<input class="form-control" type="text" name="cdate" id="chequedate" placeholder="yyyy-mm-dd" />  
									</div> -->
									<!-- <div class="col-md-2">
										<label class="control-label">Name:</label>
									</div> -->
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="nameOnCheck" id="nameOnCheck" placeholder="Name On check" />  
									</div>
								</div>
											
											<div id="card_no" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Card No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="cardNum" id="cardNum" placeholder="Card No." />  
												</div>
												
											</div>
											
											<div id="neft_acc_no" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Account No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="accNum" id="accNum" placeholder="Account No." />  
												</div>
												<!-- <div class="col-md-2 ">
													<label class="control-label">Bank Name</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="bankName" id="bankName" placeholder="Name Of Bank" />  
												</div>
												</div>
								</div>
			          
			<div class="form-group row">
			  <div class="col-md-10 text-center">
			   		<!-- <button id="btn1" name="btn1" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="supplierPayment(); return false;"><h4> Submit</h4></button>
              		<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
			  
			  		<input type="button" id="save" name="btn1" style="font-size: 25" class="btn btn-large btn-success button-height-width"  onclick="supplierPayment(); return false;" value="Submit">
		            <input type="reset" id="btn1" style="font-size: 25" class="btn btn-large btn-danger   button-height-width" name="btn1" value="Cancel">
			  
			   </div>
	 		</div>       	    
	</form>
  </div>
  
  <!--    container --------------------------------- -->
  
  			<div id="container" class="tab-pane">
		        <div class="row">
					<div class="col-sm-offset-1 col-md-10">
						<hr style="border-top-color: #c1b1b1;">
					</div>
				</div>
    	
    	
       		<form class="form-horizontal" method="post" action="" name="spmt1">
       		
       		
         		<div class="row">
			    	<div align="center">
			  			<h2 class="form-name style_heading">Container Payment</h2>
			  		</div>
			 	
		     <div class="row">
				     <div class="col-sm-offset-1 col-mxl-12">
						  		<hr style="border-top-color:#c1b1b1;">
				     </div>	
		   		 </div>
		    </div>
		    
		    
		    
        	       <div class="row -group">
           				 <label class="col-md-3 control-label" for="supplier">Supplier Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
							
										
							<!-- Following code is to get Supplier from "supplier_details" table of "fertilizer" DB -->
							<!-- getAllSupllier() is implemented in  SupplierDetailsDao with return type List-->
						
							 <%
								
								SupplierDetailsDao sddd = new SupplierDetailsDao();
           						List sListt =sddd.getAllSupplier();
							
							%> 
							
							<input list="sup_dropp" id="supplierr" onchange="billl.getAllBillss();" class="form-control">
				<datalist id="sup_dropp">
							
							<%
					           for(int i=0;i<sList.size();i++){
					        	   SupplierDetailsBean sup =(SupplierDetailsBean)sListt.get(i);
							%>
		
							<option data-value="<%=sup.getSupId()%>" value="<%=sup.getDealerName() %>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
            
           				    <label class="col-md-2 control-label" for="bill_noo"> Bill No<sup>*</sup> </label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										No
									</span>
           		 					
           		 					<select class="form-control input-md" id='billNoo'  name="billNoo" onchange="billl.getTotalAmtByBillss()">
									</select>
           						 </div>
							</div>
						  </div><br> 
					
					<div class="row form-group">
           				<label class="col-md-2 col-md-offset-6 control-label" for="totalAmt"> Total Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="totalAmountt" name="totalAmountt" class="form-control" placeholder="Total Amount">
           							 </div>
								</div>
            					
            					
           				 	 
							  </div>
						  
				<div class="row form-group">
						 <label class="col-md-3 control-label" for="personname">Accountant Name </label>  
			           		 <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-user"></i>
									</span>
			           		   <input id="personnamee" name="personnamee" placeholder="Accountant Name" class="form-control input-md" type="text" >
			           		 </div>
						</div>
				
			
          					<label class="col-md-2 control-label" for="balanceAmt"> Balance Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="balanceAmountt" name="balanceAmountt" class="form-control" placeholder="Balance Amount">
           							 </div>
								</div>
		  						
	</div>
      	  
						  
	 <div class="row form-group">
				
				<label class="col-md-3 control-label" for="paymentModee"> Payment Mode<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentModee">
										<!-- <option value="selected">-Select Type--</option> -->
										<option value="cashh">Cash</option>
										<option value="chequee">Cheque</option>
										<option value="cardd">Card</option>
										<option value="neftt">NEFT</option>
								</select>	
	           				</div>
						</div>
	
	<script>
		
		$(document).ready(function(){
	  		 $("#paymentModee").change(function(){
	       	$(this).find("option:selected").each(function(){
	           	if($(this).attr("value")=="chequee"){
	           	
	           	$("#cheque_noo").show(); 
	           	
	           	$("#neft_acc_noo").hide(); 
	           	$("#card_noo").hide();
	           	}
	          	 else if($(this).attr("value")=="cardd"){
	           	
	          		$("#card_noo").show(); 	
	          		
	          		$("#neft_acc_noo").hide(); 
	        		$("#cheque_noo").hide();
	           }
	          	 else if($(this).attr("value")=="neftt"){
	                	
	           		$("#neft_acc_noo").show(); 	
	           		
	           		$("#card_noo").hide(); 
	        		$("#cheque_noo").hide();
	            }
	          	 else if($(this).attr("value")=="cashh"){
	             	
	            		$("#neft_acc_noo").hide(); 
	            		$("#cheque_noo").hide();
	            		$("#card_noo").hide(); 
	             }
	           	
	          	else if($(this).attr("value")=="selected"){
	             	
	        		$("#neft_acc_noo").hide(); 
	        		$("#cheque_noo").hide();
	        		$("#card_noo").hide(); 
	         }
	          
	       });
	   }).change();
		});	
		</script>
				
							<!-- <label class="col-md-3 control-label" for="credit">Credit<sup>*</sup></label>  
           						 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									   <input id="credit" name="credit" placeholder="Credit Amount" class="form-control input-md" type="text" onchange="" >
           							 </div>
								</div>	 -->
						
			          </div>  
			          
			     <div class="row form-group">
				
				  <label class="col-md-3 control-label" for="paymentModee"> Payment Type<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentTypee">
										<!-- <option value="selected">-Select Type--</option> -->
										<option value="credit">Credit</option>
										<option value="debit">Debit</option>
										
								</select>	
	           				</div>
						</div>
						
						
						<div class="col-md-5">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input  id="supPayy" name="supPayy" class="form-control" placeholder="Enter Amount">
           							 </div>
						</div>
		  						
			     
			     </div>
			     
			     
			          
		    	<div class="row form-group" >

            					<div id="cheque_noo" >
            						<!-- <div class="col-md-2">										
										<label class="control-label" style="align:">Cheque No.:</label>
									</div> -->
										
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="chequeNumm" id="chequeNumm" placeholder="Cheque No." />  
									</div>
								
									<!-- <div class="col-md-1">
										<label class="control-label">Date:</label>
									</div>
									<div class="col-md-3 first">	
										<input class="form-control" type="text" name="cdate" id="chequedate" placeholder="yyyy-mm-dd" />  
									</div> -->
									<!-- <div class="col-md-2">
										<label class="control-label">Name:</label>
									</div> -->
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="nameOnCheckk" id="nameOnCheckk" placeholder="Name On check" />  
									</div>
								</div>
											
											<div id="card_noo" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Card No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="cardNumm" id="cardNumm" placeholder="Card No." />  
												</div>
												
											</div>
											
											<div id="neft_acc_noo" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Account No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="accNumm" id="accNumm" placeholder="Account No." />  
												</div>
												<!-- <div class="col-md-2 ">
													<label class="control-label">Bank Name</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="bankNamee" id="bankNamee" placeholder="Name Of Bank" />  
												</div>
												</div>
								</div>
			          
			<div class="form-group row">
			  <div class="col-md-10 text-center">
			   		<!-- <button id="btn1" name="btn1" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="supplierPayment(); return false;"><h4> Submit</h4></button>
              		<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
			  
			  		<input type="button" id="savee" name="btn1" style="font-size: 25" class="btn btn-large btn-success button-height-width"  onclick="supplierPaymentoil(); return false;" value="Submit">
		            <input type="reset" id="btn1" style="font-size: 25" class="btn btn-large btn-danger   button-height-width" name="btn1" value="Cancel">
			  
			   </div>
	 		</div>       	    
	</form>
  </div>
  </div>
  </div>
  
  <!-- ------------------------------------------------------------------------------------------------------------------------------------ -->
         
           <!---------Customer Payment --------->
                
     <div class="tab-pane" id="profile">
			<form class="form-horizontal" method="post" action="" name="cust">
	         	<div class="row">
				    <div align="center">
				  		<h2 class="form-name style_heading">Credit Customer Payment</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div>
			   		 <div align="right">
				  		<h2 class="form-name style_heading">Transaction ID :
				  		<%
				  			out.println(TransID2);
				  		%>
				  		</h2>
				  	</div>
				 	
			     <div class="row">
					     <div class="col-sm-offset-1 col-md-10">
							  		<hr style="border-top-color:#c1b1b1;">
					     </div>	
			   		 </div> 
			   		 
			   		 
			    </div>
         	       <div class="row form-group">
           				 <label class="col-md-3 control-label" for="customerName">Customer Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-user"></i>
									</span>
						
							<%
								CustomerDetailsDao cdd = new CustomerDetailsDao();
           						List cList =cdd.getAllCustomer();
							
							%>
									<input list="cust_drop" id="creditCustomer"  class="form-control" onchange="gettTotalAmountByBill(); return false">
				<datalist id="cust_drop">
							
							<%
					           for(int i=0;i<cList.size();i++){
					        	   CustomerDetailsBean cust =(CustomerDetailsBean)cList.get(i);
							%>
		
						<option data-value="<%=cust.getCustId()%>"><%=cust.getFirstName() %> <%=cust.getLastName() %> </option>
							<%
				      			}
				    		%>
						</datalist> 
				</div>
       </div>
            
           	 <label class="col-md-2 control-label" for="fk_cat_id0"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("productCat") %> <%}%> <%if(abc.equals("english")){%>Bill No<%}%><sup>*</sup></label>  
           			 <!-- <label class="col-md-3 control-label" for="fk_cat_id0">Bill No<sup>*</sup></label> -->  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							<!-- Following code is to get categories from "categories" table of "fertilizer" DB -->
							<!-- getAllMainCat() is implemented in  CategoryDetailsDao with return type List-->
							<%-- <%
							   CategoryDetailsDao cdd0 = new CategoryDetailsDao();
           						List cList0 =cdd0.getAllMainCat();
							
							%> --%>
							<!-- <input list="cat_drop0" id="fk_cat_id0"  class="form-control" onchange="balaceAmountbyBillNoForCreditPayment()">
				<datalist id="cat_drop0"> -->
					<select class="form-control input-md" id='cbillno'  name="cbillno" onchange="gettotalnbalanceAmt(); return false">
					</select>
				
							<%-- <%
					           for(int i=0;i<cList0.size();i++){
					        	   CategoryDetailsBean cat0=(CategoryDetailsBean)cList0.get(i);
							%>
		
							<option data-value="<%=cat0.getCatId()%>" value="<%=cat0.getCategoryName()%>">
							<%
				      			}
				    		%> --%>
			              	
            			</datalist>
            			</div>
            		</div>
						  </div> 
						  
					 <div class="row form-group">
					<!--  <label class="col-md-3 control-label" for="bill_no"> Bill No<sup>*</sup> </label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										No
									</span>
           		 					
           		 					<select class="form-control input-md" id='billNo1'  name="billNo" >
									</select>
           						 </div>
							</div> -->
           				<label class="col-md-2 col-md-offset-6 control-label" for="totalAmt"> Total Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="totalAmount1" name="totalAmount" class="form-control" placeholder="Total Amount">
           							 </div>
								</div>
            					
					 </div>
						  
		<div class="row form-group">
						<label class="col-md-3 control-label" for="paymentMode"> Payment Mode<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentMode1">
				<!-- 						<option value="selected1">-Select Type--</option> -->
										<option value="cash1">Cash</option>
										<option value="cheque1">Cheque</option>
										<option value="card1">Card</option>
										<option value="neft1">NEFT</option>
								</select>	
	           				</div>
						</div>
		

          	
          			<label class="col-md-2 control-label" for="balanceAmt"> Balance Amount</label>  
           							 <div class="col-md-3">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input readonly="readonly" id="balanceAmount1" name="balanceAmount" class="form-control" placeholder="Balance Amount">
           							 </div>
								</div>
          	
					
	
				
				
	 <script>
		
		$(document).ready(function(){
	  		 $("#paymentMode1").change(function(){
	       	$(this).find("option:selected").each(function(){
	           	if($(this).attr("value")=="cheque1"){
	           	
	           	$("#cheque_no1").show(); 
	           	
	           	$("#neft_acc_no1").hide(); 
	           	$("#card_no1").hide();
	           	}
	          	 else if($(this).attr("value")=="card1"){
	           	
	          		$("#card_no1").show(); 	
	          		
	          		$("#neft_acc_no1").hide(); 
	        		$("#cheque_no1").hide();
	           }
	          	 else if($(this).attr("value")=="neft1"){
	                	
	           		$("#neft_acc_no1").show(); 	
	           		
	           		$("#card_no1").hide(); 
	        		$("#cheque_no1").hide();
	            }
	          	 else if($(this).attr("value")=="cash1"){
	             	
	            		$("#neft_acc_no1").hide(); 
	            		$("#cheque_no1").hide();
	            		$("#card_no1").hide(); 
	             }
	           	
	          	else if($(this).attr("value")=="selected1"){
	             	
	        		$("#neft_acc_no1").hide(); 
	        		$("#cheque_no1").hide();
	        		$("#card_no1").hide(); 
	         }
	          
	       });
	   }).change();
		});	
		</script>
						
		</div>	          
			   <div class="row form-group">
				
				  <label class="col-md-3 control-label" for="paymentMode"> Payment Type<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentType1">
										<!-- <option value="selected">-Select Type--</option> -->
										<option value="credit">Credit</option>
										<option value="debit">Debit</option>
										
								</select>	
	           				</div>
						</div>
						
						
						<div class="col-md-5">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input  id="custPay" name="custPay" class="form-control" placeholder="Enter Amount">
           							 </div>
						</div>
			     </div> 
			 <div class="row form-group" >

            					<div id="cheque_no1" >
            						<!-- <div class="col-md-2">										
										<label class="control-label" style="align:">Cheque No.:</label>
									</div> -->
										
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="chequeNum" id="chequeNum1" placeholder="Cheque No." />  
									</div>
								
									
									<!-- <div class="col-md-2">
										<label class="control-label">Name:</label>
									</div> -->
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="nameOnCheck" id="nameOnCheck1" placeholder="Name On check" />  
									</div>
								</div>
											<div id="card_no1" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Card No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="cardNum" id="cardNum1" placeholder="Card No." />  
												</div>
												
											</div>
											
											<div id="neft_acc_no1" class="form-group">
												<!-- <div class="col-md-2 ">
													<label class="control-label">Account No:</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="accNum" id="accNum1" placeholder="Account No." />  
												</div>
												<!-- <div class="col-md-2 ">
													<label class="control-label">Bank Name</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="bankName" id="bankName1" placeholder="Name Of Bank" />  
												</div>
												</div>
								</div>
			          
			          
			     <div class="form-group row">
			            <div class="col-md-10 text-center">
			           	 	<!-- <button id="btn2" name="btn2" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="customerPaymentValidation(); return false;"><h4> Submit</h4></button>
              				<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
			            
			            <input type="button" id="btn2" name="btn2" style="font-size: 25" class="btn btn-large btn-success button-height-width"  onclick="customerPayment(); return false;" value="Submit">
		            	<input type="reset" id="btn2" style="font-size: 25" class="btn btn-large btn-danger   button-height-width" name="btn2" value="Cancel">
			            </div>
			      </div>       	    
			 </form>
	</div>
	
	<!------------ Employee Payment ---------->
	
           <div class="tab-pane" id="messages">
           		<form class="form-horizontal" method="post" action="" name="emp">
   	    	 <div class="row">
			    <div align="center">
			  		<h2 class="form-name style_heading">Employee Payment</h2>
			  	</div>
			 	
		     <div class="row">
				     <div class="col-sm-offset-1 col-md-10">
						  		<hr style="border-top-color:#c1b1b1;">
				     </div>	
		   		 </div>
		    </div>
    	     	 <div class="row form-group">
    	     	
           				 <label class="col-md-3 control-label" for="employeename">Employee Name<sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="glyphicon glyphicon-user"></i>
									</span>
							
							 <%
								EmployeeDetailsDao eedd = new EmployeeDetailsDao();
           						List mList =eedd.getAllMainEmployee();
							
							%>
						<input list="emp_drop" id="employee"  class="form-control">
				<datalist id="emp_drop">
							
							<%
					           for(int i=0;i<mList.size();i++){
					        	   EmployeeDetailsBean detailsBean =(EmployeeDetailsBean)mList.get(i);
							%>
		
						<option data-value="<%=detailsBean.getEmpId()%>" ><%=detailsBean.getFirstName()%> <%=detailsBean.getLastName()%></option>
							<%
				      			}
				    		%>
						</datalist> 
								</div>
           					 </div>
            
           				 <label class="col-md-2 control-label" for="personName">Accountant Name <sup>*</sup></label>  
	          					  <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-user"></i>
										</span>
	           		 						  <input id="personName2" name="personName" placeholder="Accountant Name" class="form-control input-md" type="text">
	           						 </div>
								</div>
           				 
				 </div>
         	 
         	  	<div class="row form-group">
	           				  
								
								<label class="col-md-3 control-label" for="reason2">Reason<sup>*</sup></label>  
	          					  <div class="col-md-3">
									<div class="input-group">
										<span class="input-group-addon">
											<i class="glyphicon glyphicon-user"></i>
										</span>
	           		 						  <input id="reason2" name="reason2" placeholder="Reason" class="form-control input-md" type="text">
	           						 </div>
								</div>
								
								
					<label class="col-md-2 control-label" for="paymentMode"> Payment Mode<sup>*</sup></label>  
	           		       <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentMode2">
										<!-- <option value="selected2">-Select Type--</option> -->
										<option value="cash2">Cash</option>
										<option value="cheque2">Cheque</option>
										<option value="card2">Card</option>
										<option value="neft2">NEFT</option>
								</select>	
	           				</div>
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
          	
					
	
           					
	  
		<div class="row form-group">
				
				  <label class="col-md-3 control-label" for="paymentMode"> Payment Type<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentType2">
										<!-- <option value="selected">-Select Type--</option> -->
										<option value="credit">Credit</option>
										<option value="debit">Debit</option>
										
								</select>	
	           				</div>
						</div>
						
						
						<div class="col-md-5">
										<div class="input-group">
											<span class="input-group-addon">
												Rs
											</span>
           									  <input  id="empPay" name="empPay" class="form-control" placeholder="Enter Amount">
           							 </div>
						</div>
		  						
			     
			     </div> 				  

          
          	<div class="row form-group" >

            					<div id="cheque_no2" >
            						<!-- <div class="col-md-2">										
										<label class="control-label" style="align:">Cheque No.:</label>
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
									<!-- <div class="col-md-2">
										<label class="control-label">Name:</label>
									</div> -->
									<div class="col-md-3 col-md-offset-3 first">	
										<input class="form-control" type="text" name="nameOnCheck" id="nameOnCheck2" placeholder="Name On check" />  
									</div>
								</div>
											
											<div id="card_no2" class="form-group">
												<!-- <div class="col-md-2 ">
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
												<!-- <div class="col-md-2 ">
													<label class="control-label">Bank Name</label>
												</div> -->
												<div class="col-md-3 col-md-offset-3 first">	
													<input class="form-control" type="text" name="bankName" id="bankName2" placeholder="Name Of Bank" />  
												</div>
												</div>
								</div>
         
        
         
         <div class="form-group row">
            <div class="col-md-10 text-center">
              	<!-- <button id="btn3" name="btn3" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="EmployeeValidation(); return false;"><h4> Submit</h4></button>
              	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
            
            <input type="button" id="btn3" name="btn3" style="font-size: 25" class="btn btn-large btn-success button-height-width"  onclick="EmployeeValidation(); return false;" value="Submit">
		    <input type="reset" id="btn2" style="font-size: 25" class="btn btn-large btn-danger   button-height-width" name="btn2" value="Cancel">
            </div>
          </div>       	    
 	 </form> 
 </div>
           
           
         <!------------------   Expenditure Payment ------------>
                
       <div class="tab-pane" id="settings">
		<form method="post" action="" name="exp">
			<div class="row">
			    <div align="center">
			  		<h2 class="form-name style_heading">Expenditure Payment</h2>
			  	</div>
			 	
		     <div class="row">
				     <div class="col-sm-offset-1 col-md-10">
						  		<hr style="border-top-color:#c1b1b1;">
				     </div>	
		   		 </div>
		    </div>
			 <div class="row form-group">
           		<label class="col-md-3 control-label" for="expenditureName">Expenditure Name<sup>*</sup></label>  
           	 	      		 <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
										
							<!-- Following code is to get expense name from "expenditure_details" table of "fertilizer" DB -->
							<!-- getAllExpenseName() is implemented in  SupplierDetailsDao with return type List-->
						
							<%
							ExpenditureDetailsDao exdd = new ExpenditureDetailsDao();
           						List exList =exdd.getAllExpenseName();
							
							%>
							
							<input list="exp_drop" id="expenseName" class="form-control">
				<datalist id="exp_drop">
							
							<%
					           for(int i=0;i<exList.size();i++){
					        	   ExpenditureDetailsBean expbean =(ExpenditureDetailsBean)exList.get(i);
							%>
		
							<option data-value="<%=expbean.getPkExpenseDetailsId()%>" value="<%=expbean.getExpenseName()%>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
           	 	<label class="col-md-3 control-label" for="contactNumber">Contact Number<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-earphone"></i>
							</span>
             					 <input id="contactNumber" name="contactNumber" placeholder="Contact Number" class="form-control input-md" type="text" >
           				 </div>
					</div>
			</div>
			
			<div class="row form-group">
					<label class="col-md-3 control-label" for="personName">Accountant Name<sup>*</sup> </label>  
	          		 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
	           		 			<input id="accountantName" name="personName" placeholder="Accountant Name" class="form-control input-md" type="text">
	           			</div>
					</div>
					
					
					 <label class="col-md-3 control-label" for="paymentMode4"> Payment Type<sup>*</sup></label>  
	           		<div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
										<i class="glyphicon glyphicon-usd"></i>
								</span>
	           					<select class="form-control" id="paymentType3">
										<!-- <option value="selected4">-Select Type--</option> -->
										<option value="credit4">Credit</option>  
										<option value="debit4">Debit</option>
										
								</select>	
	           				</div>
						</div>
					</div>
				
				
				<script>
		
		$(document).ready(function(){
	  		 $("#paymentType3").change(function(){
	       	$(this).find("option:selected").each(function(){
	           	if($(this).attr("value")=="credit4"){
	           	
	           	$("#credit").show(); 
	           	
	           	$("#debit").hide(); 
	           	}
	          	 else if($(this).attr("value")=="debit4"){
	           	
	          		$("#credit").hide(); 
		           	
		           	$("#debit").show();
	           }
	          	 else if($(this).attr("value")=="selected4"){
	          		$("#credit").hide(); 
		           	
		           	$("#debit").hide();
	            }
	          	/*  else if($(this).attr("value")=="cash3"){
	             	
	            		$("#neft_acc_no3").hide(); 
	            		$("#cheque_no3").hide();
	            		$("#card_no3").hide(); 
	             }
	           	
	          	else if($(this).attr("value")=="selected3"){
	             	
	        		$("#neft_acc_no3").hide(); 
	        		$("#cheque_no3").hide();
	        		$("#card_no3").hide(); 
	         } */
	          
	       });
	   }).change();
		});	
		</script>	
					
					
				<div id="credit" class="row form-group">	
				<label class="col-md-3 control-label" for="expCredit">Credit Amount<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								Rs
							</span>
             					 <input id="expCredit" name="expCredit" placeholder="Credit Amount" class="form-control input-md" type="text" >
           				 </div>
					</div>
				</div>
				
				<div id="debit" class="row form-group">	
					<label class="col-md-3 control-label" for="expDebit">Debit Amount<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								Rs
							</span>
             					 <input id="expDebit" name="expDebit" placeholder="Debit Amount" class="form-control input-md" type="text" >
           				 </div>
					</div>
			
			</div>	
					
				
		<div class="form-group row">
            <div class="col-md-10 text-center">
             	<!-- <button id="save" name="btn4" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="expensePaymentValidation(); return false;"><h4> Submit</h4></button>
              	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
            
            <input type="button" id="save" name="btn4" style="font-size: 25" class="btn btn-large btn-success button-height-width"  onclick="expensePaymentValidation(); return false;" value="Submit">
		    <input type="reset" id="btn2" style="font-size: 25" class="btn btn-large btn-danger   button-height-width" name="btn4" value="Cancel">
            </div>
        </div> 
			
     </form>
	</div>
           
  </div>
  </div>
 </div>
</div>
<%@include file="commons/newFooter.jsp" %>

<%-- <%@include file="commons/footer.jsp" %> --%>