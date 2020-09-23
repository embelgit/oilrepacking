<%@page import="com.Fertilizer.hibernate.SupplierDetailsBean"%>
<%@page import="com.Fertilizer.dao.SupplierDetailsDao"%>
<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>
<head>
 <meta charset="utf-8">
 <script type="text/javascript" src="/Repacking/staticContent/js/supplierDetails.js"></script>
 
 
<script type="text/javascript">
function checkForDuplicateProductEntry(){
		<%
		SupplierDetailsDao dao = new SupplierDetailsDao();
		List list = dao.getAllSupplier();
		%>
		
		<%
		int z = 0;
		for(z=0;z<list.size();z++){
			SupplierDetailsBean bean = (SupplierDetailsBean)list.get(z);
		%>
		var supId = "<%=bean.getIdNo()%>";
		var  dealer = "<%=bean.getDealerName()%>";
		
		
		
		dealerId = $('#IdNo').val();
	
	$("#IdNo option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	/*  var splitText = selectedVal.split(",");  
	
	var supId = splitText[0];*/
		
		if(document.getElementById("dealerName").value ==dealer && supId != dealer ){
			alert("Supplier already exist...Duplicate Not allowed");
			location.reload();
			return false;
		}
		<%
		}
		%>
		
		}
	
</script>
 <!-- <script type="text/javascript" src="/Repacking/staticContent/js/supplierDetails.js"></script>
  -->
  <script type="text/javascript">
          		 function supplierlist()
          		 {
          		 window.location = "supplierList.jsp";
          		 }
          		 function editSupplier() {
          			 window.location = "editSupplierDetails.jsp";
				}
          		 
          		</script>         		
          		<%-- function checkForDuplicateSupplierIdEntry(){
          			<%
          			SupplierDetailsDao dao4 = new SupplierDetailsDao();
          			List list = dao4.getAllSupplier();
          			%>
          			
          			<%
          			int z = 0;
          			for(z=0;z<list.size();z++){
          				SupplierDetailsBean bean = (SupplierDetailsBean)list.get(z);
          			%>
          			var supId = "<%=bean.getIdNo()%>";
          	
          			if(document.getElementById("IdNo").value ==supId ){
          				alert("Supplier ID already exist...Duplicate Not allowed");
          				location.reload();
          				return false;
          			}
          			<%
          			}
          			%>
          			
          			} --%>
          		
</head>
   <div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("supplierdetails") %> <%}%> <%if(abc.equals("english")){%>Supplier  Details<%}%></h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
      <div class="container col-sm-offset-1" >
        <form class="form-horizontal" method="post" action="" name="spld"><!-- Value of 'name' attribute is used in  supplierDetails.js  -->
          <fieldset>
       			<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
				</div>
				
				<div class="row form-group">
				 <label class="col-md-2 control-label" for="emailId"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("email") %> <%}%> <%if(abc.equals("english")){%>ID No<%}%><sup>*<sup></label>  
            	<div class="col-md-3 ">
					<div class="input-group">
						<span class="input-group-addon">
							No
						</span>
             				 <input id="IdNo" name="IdNo " placeholder="Identity Number" class="form-control input-md" type="text" onchange="checkForDuplicateSupplierIdEntry()">
            		</div>
				</div>
				
			</div>
        	<div class="row form-group">
            	<label class="col-md-2 control-label" for="dealerName"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("dealerName") %> <%}%> <%if(abc.equals("english")){%>Supplier Name<%}%><sup>*</sup></label>  
            		<div class="col-md-3">
            				<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
              				
							<%-- <%
							SupplierDetailsDao productdao1 = new SupplierDetailsDao();
           						List productList1 =productdao1.getAllSupplier();
							
							%> --%>
							<input list="dealerName_drop" id="dealerName" placeholder="Enter Supplier name" class="form-control" onchange="checkForDuplicateProductEntry()" style="text-transform: uppercase">
				<datalist id="dealerName_drop">
							<%-- <%
					           for(int i=0;i<productList1.size();i++){
					        	   SupplierDetailsBean productbean1 =(SupplierDetailsBean)productList1.get(i);
							%> --%>
		
						<%--	<option data-value="<%=productbean1.getSupId()%>" value="<%=productbean1.getDealerName()%>">
							 <%
				      			}
				    		%> --%>
			              	
            			</datalist>
            			</div>
            		</div>

            <label class="col-md-2 control-label" for="personName"> Person Name<sup>*</sup></label>  
            	<div class="col-md-3">
           		 	<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
              				
							<%
							SupplierDetailsDao persondao1 = new SupplierDetailsDao();
           						List personList1 =persondao1.getAllSupplier();
							
							%>
							<input list="personName_drop" id="personName" placeholder="Enter Person name" class="form-control">
				<datalist id="personName_drop">
							<%-- <%
					           for(int i=0;i<personList1.size();i++){
					        	   SupplierDetailsBean personBean =(SupplierDetailsBean)personList1.get(i);
							%>
		
							<option data-value="<%=personBean.getSupId()%>" value="<%=personBean.getPersonName()%>">
							<%
				      			}
				    		%> --%>
			              	
            			</datalist>
            			</div>
				</div>
          </div>
         
          <div class="row form-group">
            	<label class="col-md-2 control-label" for="contactNo"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("contactNumber") %> <%}%> <%if(abc.equals("english")){%>Contact Number<%}%><sup>*</sup></label>
            		<div class="col-md-3">
    					<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-phone"></i>
							</span>
             				 <input id="contactNo" maxlength="10" name="contactNo" maxlength="10" placeholder="Contact Number" class="form-control input-md " type="text"  >
           				</div>
					</div>
            
              	<label class="col-md-2 control-label" for="landline"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("landlineNumber") %> <%}%> <%if(abc.equals("english")){%>LandLine Number<%}%></label>
            		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-earphone"></i>
							</span>
              				<input id="landline" name="landline" placeholder="LandLine No" class="form-control input-md " type="text"  >
            			</div> 
            		</div>
          	</div>

        
          <div class="row form-group">
            <label class="col-md-2 control-label" for="emailId"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("email") %> <%}%> <%if(abc.equals("english")){%>E-mail Id<%}%></label>
            	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-envelope"></i>
						</span>
              			<input id="emailId" name="emailId" placeholder="Email ID" class="form-control input-md " type="text">
            		</div>
            	</div>

           <label class="col-md-2 control-label" for="city"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("city") %> <%}%> <%if(abc.equals("english")){%>City<%}%><sup>*</sup></label>
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
 			            <input id="city" name="city" placeholder="city" class="form-control input-md " type="text">
            		</div>
				</div>
          </div>

			<div class="row form-group">
            	<label class="col-md-2 control-label" for="tinNo"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("tin") %> <%}%> <%if(abc.equals("english")){%>GST No<%}%><sup>*</sup></label>
            		<div class="col-md-3">
		  				<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-font"></i>
							</span>
              				<input id="tinNo" name="tinNo" placeholder="GST No" class="form-control input-md "  type="text">
           				</div>
           			 </div>
           			 <label class="col-md-2 control-label" for="address"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("address") %> <%}%> <%if(abc.equals("english")){%>Address<%}%></label>
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-map-marker"></i>
						</span>
 			            <input id="address" name="address" placeholder="Address" class="form-control input-md " type="text">
            		</div>
				</div>
          	</div>
          	
          	

          <div class="form-group row">
            <div class="col-md-11 text-center">
       <!--  supplierDetail() function is implemented in  supplierDetails.js -->
       <!-- <input style=" height: 65px; width: 180; font-size: 25" type="button" value="Submit" id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width" onclick="supplierDetail()" /> 
       <input style=" height: 65px; width: 180; font-size: 25" type="button" value="Cancel" id="save" name="btn" class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" onclick="reset()" /> --> 
       <input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" name="btn" value="Submit" class="btn btn-large btn-success button-height-width" onclick="supplierDetail()" /> 
       <input style=" height: 65px; width: 180; font-size: 25" class="btn btn-large btn-danger  button-height-width" type="reset" id="save" name="btn" value="Cancel" onclick="reset()" />
              	<%-- <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="supplierDetail()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("submit") %> <%}%> <%if(abc.equals("english")){%>Submit<%}%> </h4></button>
              	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("cancel") %> <%}%> <%if(abc.equals("english")){%>Cancel<%}%> </h4> </button> --%>
            	<input style=" height: 65px; width: 180; font-size: 25" type="button" value="Supplier List" id="listBtn" class="btn btn-primary" onclick="supplierlist()" /> 
              	<input style=" height: 65px; width: 180; font-size: 25" type="button" value="Edit" id="listBtn" class="btn btn-primary" onclick="editSupplier()" /> 
            </div>
          </div>
         </fieldset>
       </form>
    </div>
    
    <%@include file="commons/newFooter.jsp" %>
    
<%-- <%@include file="commons/footer.jsp" %> --%>
