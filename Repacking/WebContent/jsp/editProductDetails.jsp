. <%@page import="com.Fertilizer.hibernate.shopDetailsBean"%>
<%@page import="com.Fertilizer.dao.shopDetailsDao"%>
<%@page import="com.Fertilizer.dao.TaxCreationDao"%>
<%@page import="com.Fertilizer.hibernate.TaxCreationBean"%>
<%@page import="com.Fertilizer.dao.ProductDetailsDao"%>
 <%@page import="com.Fertilizer.dao.CategoryDetailsDao"%>
 <%@page import="com.Fertilizer.dao.SupplierDetailsDao"%>
 <%@page import="com.Fertilizer.hibernate.SupplierDetailsBean"%>
 <%@page import="com.Fertilizer.hibernate.CategoryDetailsBean"%>
 <%@page import="com.Fertilizer.hibernate.ProductDetailsBean"%>
 <%@page import="com.Fertilizer.dao.MeasuringUnitsDao"%>
 <%@page import="com.Fertilizer.hibernate.MeasuringUnitsBean"%>
<%@page import="java.util.List"%>

 

<%boolean isHome = false;%>
<%@include file="commons/header.jsp"%>
<head>
<script src="/Repacking/staticContent/js/vatpercentage.js" type="text/javascript"></script>
<script type="text/javascript" src="/Repacking/staticContent/js/productDetail.js"></script>
  <script type="text/javascript">
  			function Back()
  			{
  				window.location = "product_detail.jsp" ;
  			}
  		</script>
</head>
 <div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("productDetails") %> <%}%> <%if(abc.equals("english")){%>Product Details<%}%></h2>
			  	</div>
			 
    </div>
 
 	 <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
 	<div class="container col-sm-offset-1">
        <form class="form-horizontal" method="post" action="" name="prd1"><!-- Value of 'name' attribute is used in  productDetail.js  -->
          <fieldset>
			 	
			 <div class="row form-group">
			 
			     <label class="col-md-2 control-label" for="fk_product_id">Product Name<sup>*</sup></label>  
           			 <div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              				
							
							<%
							ProductDetailsDao cdd = new ProductDetailsDao();
           						List cList =cdd.getAllProductForEdit();
							
							%>
							<input list="pro_drop" id="fk_product_id"  class="form-control" onchange="getAllProductDetails()">
				<datalist id="pro_drop">
							<%
					           for(int i=0;i<cList.size();i++){
					        	   ProductDetailsBean cat=(ProductDetailsBean)cList.get(i);
							%>
		
							<option data-value="<%=cat.getProdctId()%>" value="<%=cat.getProductName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist>
            			</div>
            		</div>
            		
            		<label class="col-md-2 control-label" for="productName">New Product Name</label>
						<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
	             			 <input id="productName" name="productName" placeholder="New Product Name" class="form-control input-md" type="text" >
	            		</div>
	            		</div>
            		</div>
						 <div class="row form-group">
						 <label class="col-md-2 control-label" for="manufacturingCompany"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("company") %> <%}%> <%if(abc.equals("english")){%>Manufacturing company<%}%><sup>*</sup></label>  
			           	 <div class="col-md-3">
							<div class="input-group">
								<span class="input-group-addon">
									<i class="	glyphicon glyphicon-font"></i>
								</span>
			              		<input id="manufacturingCompany" name="manufacturingCompany" placeholder="Manufacturing company" class="form-control input-md" type="text" >
			            	</div>
			            </div>
			            </div>
			            
			            
			            <div class="row form-group">
		<label class="col-md-2 control-label" for="hsn"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("unit") %> <%}%> <%if(abc.equals("english")){%>Unit<%}%></label>  
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
						<i class="	glyphicon glyphicon-hand-right"></i>
						</span>
						<%-- <%
							MeasuringUnitsDao mdao = new MeasuringUnitsDao();
           						List uList = mdao.getAllUnits();
							%> --%>
							
							<!-- <input list="unit_drop" id="fk_unit_id"  class="form-control"> -->
							<input id="existedUnit" name="existedUnit" placeholder="Unit Name" class="form-control input-md" type="text" >
				<%-- <datalist id="unit_drop">
							
							<%
					           for(int i=0;i<uList.size();i++){
					        	   MeasuringUnitsBean bean =(MeasuringUnitsBean)uList.get(i);
							%>
		
							<option data-value="<%=bean.getPkUnitId()%>" value="<%=bean.getUnitName() %>">
							<%
				      			}
				    		%>
              			</datalist>   --%>
            		</div>
				</div>
		
		<label class="col-md-2 control-label" for="unitName"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("salePrice") %> <%}%> <%if(abc.equals("english")){%>New Unit<%}%></label>  
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
						No
						</span>
              			<input id="unitName" name="unitName" placeholder="New Unit" class="form-control input-md" type="text">
            		</div>
				</div>
		</div>
			            
			 			<%--  <label class="col-md-2 control-label" for="productName"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("productName") %> <%}%> <%if(abc.equals("english")){%>Product Name<%}%> <sup>*</sup></label>  
          					  <div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									<select class="form-control" id='productName'  name="productName" onchange="" >
									</select>
										
								</div>
							</div>  --%> 
							
						<!-- </div> -->
           
        
	
		<%-- <div class="row form-group">
            <label class="col-md-2 control-label" for="weight"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("weight") %> <%}%> <%if(abc.equals("english")){%>Weight<%}%><sup>*</sup></label>  
            	<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							No
						</span>
             			 <input id="weight" name="weight" placeholder="Weight" class="form-control input-md" type="text" >
            		</div>
				</div>
				
				<label class="col-md-2 control-label" for="Unit"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("unit") %> <%}%> <%if(abc.equals("english")){%>Unit<%}%><sup>*</sup></label>  
            				<div class="col-md-3">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="	glyphicon glyphicon-hand-right"></i>
									</span>
									
							
										
							<!-- Following code is to get all measuring units from "sold_units" table of "fertilizer" DB -->
							<!-- getAllUnits() is implemented in  MeasuringUnitsDao with return type List-->
						
							<%
							MeasuringUnitsDao dao = new MeasuringUnitsDao();
           						List uList = dao.getAllUnits();
							%>
							
							<input list="unit_drop" id="fk_unit_id"  class="form-control">
				<datalist id="unit_drop">
							
							<%
					           for(int i=0;i<uList.size();i++){
					        	   MeasuringUnitsBean bean =(MeasuringUnitsBean)uList.get(i);
							%>
		
							<option data-value="<%=bean.getPkUnitId()%>" value="<%=bean.getUnitName() %>">
							<%
				      			}
				    		%>
						</datalist>           	
					</div>
           		</div>
			</div> --%>
			
			<div class="row form-group">
				 <label class="col-md-2 control-label" for="existedTax">Existing Tax Type</label>  
	            	<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No
							</span>
	             			 <input readonly="readonly" id="existedTax" name="existedTax"  class="form-control input-md" type="text" >
	            		</div>
					</div>
					
					<label class="col-md-2 control-label" for="existedTaxPercentage">Existing Tax Percentage</label>
						<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								%
							</span>
	             			 <input readonly="readonly" id="existedTaxPercentage" name="existedTaxPercentage"  class="form-control input-md" type="text" >
	            		</div>
	            		</div>
			</div>
			
		
			
			<!-- Following code is used to show tax percentage in % field with the help of  "myid" and "taxPercentage"-->
			<script type="text/javascript">
				function ChooseContact(data)
					{
						
						document.getElementById("taxPercentage").value=(data.options[data.selectedIndex].getAttribute("myid"));
					}
			</script> 
			
		
			
		<div class="row form-group">
         	<label class="col-md-2 control-label" for="fk_tax_id">New Tax Type<sup>*</sup></label>
         		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
							<i class="	glyphicon glyphicon-hand-right"></i>
						</span>
						
						<!-- Following code is to get Supplier from "supplier_details" table of "fertilizer" DB -->
							<!-- getAllMainTax() is implemented in  TaxCreationDao with return type List-->
					
					
						<%
							TaxCreationDao tcd = new TaxCreationDao();
							List tList = tcd.getAllMainTax();
		            	%>
              			<select class="form-control input-md" autofocus name="fk_tax_id" id="fk_tax_id" onChange="ChooseContact(this)" >
			              	<option value="selected">--Select Tax--</option>
							<%
					           for(int i=0;i<tList.size();i++){
					        	   TaxCreationBean tax=(TaxCreationBean)tList.get(i);
							%>
		
						<option value="<%=tax.getTxId()%>" myid="<%=tax.getTaxPercentage()%>"><%=tax.getTaxType() %> </option>
							<%
				      			}
				    		%>
			              	
            			</select> 
            		</div>
            	</div>   
         		
         	 <div class="col-md-offset-2 col-md-3" >
				<div class="input-group">
						<span class="input-group-addon">
							%
						</span>
           		 	<input id="taxPercentage" name="taxPercentage" placeholder="Tax Percentage" class="form-control input-md" type="text" >
           		</div>
			</div>
		</div> 
		
		<div class="row form-group">
				 <label class="col-md-2 control-label" for="existedTax">Existed HSN</label>  
	            	<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No
							</span>
	             			 <input readonly="readonly" id="existedHsn" name="existedHsn"  class="form-control input-md" type="text" >
	            		</div>
					</div>
					
					<label class="col-md-2 control-label" for="existedTaxPercentage">New HSN</label>
						<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								No
							</span>
	             			 <input id="newHsn" name="newHsn" placeholder="New HSN No" class="form-control input-md" type="text" >
	            		</div>
	            		</div>
			</div>
			<div class="row form-group">
			<label class="col-md-2 control-label" for="creditSalePrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("shopName") %> <%}%> <%if(abc.equals("english")){%>Shop Name<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3 ">
           	 		<div class="input-group">
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-hand-right"></i>
						</span>
              				<!-- <input id="shopName" name="shopName" placeholder="shopName" class="form-control input-md" type="text" onchange="getAllShopName()"> -->
              				<%
							shopDetailsDao dao3 = new shopDetailsDao();
           						List shop1 =dao3.getAllShop();
							
							%>
							
							<input type="text" id=shopName list="shop_drop2" class="form-control" >
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
				</div>
					
		<%-- <div class="row form-group">
			<label class="col-md-2 control-label" for="buyPrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("buyPrice") %> <%}%> <%if(abc.equals("english")){%>Buy Price<%}%><sup>*</sup></label>  
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
						Rs
						</span>
              			<input id="buyPrice" name="buyPrice" placeholder="Buy Price" class="form-control input-md" type="text" >
            		</div>
				</div>
            	
            	<label class="col-md-2 control-label" for="mrp"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("") %> <%}%> <%if(abc.equals("english")){%>M.R.P<%}%><sup>*</sup></label>  
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
						Rs
						</span>
              			<input id="mrp" name="mrp" placeholder="MRP" class="form-control input-md" type="text" >
            		</div>
				</div>
            	
		</div>
		<div class="row form-group">
		<label class="col-md-2 control-label" for="salePrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("salePrice") %> <%}%> <%if(abc.equals("english")){%>Sale Price<%}%><sup>*</sup></label>  
           		<div class="col-md-3">
					<div class="input-group">
						<span class="input-group-addon">
						Rs
						</span>
              			<input id="salePrice" name="salePrice" placeholder="Sale Price" class="form-control input-md" type="text" onkeyup="salePriceCompaireWithMRP()">
            		</div>
				</div>
			<label class="col-md-3 control-label" for="creditSalePrice"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("creditSalePrice") %> <%}%> <%if(abc.equals("english")){%>Sale Price for Credit Customer<%}%><sup>*</sup></label>  
           		<div class="col-md-2">
					<div class="input-group">
						<span class="input-group-addon">
						Rs
						</span>
              			<input id="creditSalePrice" name="creditSalePrice" placeholder="credit Sale Price" class="form-control input-md" type="text" >
            		</div>
				</div>
			</div> --%>
	
		
		<div class="form-group row">
            <div class="col-md-10 text-center">
            <!--  "productDetails()" function is implemented in productDetail.js  -->
         <!--    <input type="button" id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="prdctDetails()"  value="Submit"> -->
             	<%-- <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="updateProductDetails()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("") %> <%}%> <%if(abc.equals("english")){%>Update<%}%></h4></button>
            	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("cancel") %> <%}%> <%if(abc.equals("english")){%>Cancel<%}%> </h4> </button> --%>
           		<!-- <input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" name="btn" value="Update" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="updateProductDetails()" /> 
             	<input style=" height: 65px; width: 180; font-size: 25" class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset" id="save" name="btn" value="Cancel"  onclick="reset()" /> 
           		<input style=" height: 65px; width: 180; font-size: 25" type="button" value="Back" id="listBtn" class="btn btn-primary" onclick="Back()" /> --> 
           		<input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" name="btn" value="Update" class="btn btn-large btn-success button-height-width" onclick="updateProductDetails()" /> 
             	<input style=" height: 65px; width: 180; font-size: 25" class="btn btn-large btn-danger  button-height-width" type="reset" id="save" name="btn" value="Cancel" onclick="reset()" />
					<input type="button" style="height: 65px; width: 180; font-size: 25"" value="Back" id="listBtn" class="btn btn-primary" onclick="Back()" />
           		
            </div>
          </div>
		</fieldset>
       </form>
     </div>
 
 	<%@include file="commons/newFooter.jsp" %>
 
 <%-- <%@include file="commons/footer.jsp" %> --%>