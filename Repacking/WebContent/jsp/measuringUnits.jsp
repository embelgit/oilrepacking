<%@page import="com.Fertilizer.hibernate.MeasuringUnitsBean"%>
<%@page import="com.Fertilizer.dao.MeasuringUnitsDao"%>
<%boolean isHome = false;
%>
<%@include file="commons/header.jsp"%>
 <script src="/Repacking/staticContent/js/units.js" type="text/javascript"></script>
 
 addMeasuringUnit
<head>
<meta charset="utf-8">
<script type="text/javascript">
          		function checkForDuplicateUnitEntry(){
          			<%
          			MeasuringUnitsDao dao2 = new MeasuringUnitsDao();
          			List list = dao2.getAllUnits();
          			%>
          			
          			<%
          			int z = 0;
          			for(z=0;z<list.size();z++){
          				MeasuringUnitsBean bean = (MeasuringUnitsBean)list.get(z);
          			%>
          			var Unit = "<%=bean.getUnitName()%>";
          	
          			if(document.getElementById("unitName").value ==Unit ){
          				alert("unit Name already exist...Duplicate Not allowed");
          				location.reload();
          				return false;
          			}
          			<%
          			}
          			%>
          			
          			}
          		
          		</script>
          		
<script type="text/javascript">
function measuringList()
	 {
	 window.location = "measuringList.jsp";
	 }
	 

</script>          		

</head>
<div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading">Measuring Units</h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
	<div class="container col-sm-offset-2" >
        <form class="form-horizontal" method="post" action="" name="munits"><!-- Value of 'name' attribute is used in customerDetails.js  -->
          <fieldset>
			<div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
			</div>
			 <div class="row form-group">
           		<label class="col-md-2 control-label" for="unitName">SI Unit<sup>*</sup></label>  
           	 		<div class="col-md-3">
            			<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              						<input id="unitName" name="unitName" placeholder="Unit Name" class="form-control input-md" type="text" onchange="checkForDuplicateUnitEntry()" style="text-transform: lowercase;">
						<%-- 	<%
							MeasuringUnitsDao dao = new MeasuringUnitsDao();
           						List taxPerList =dao.getAllUnits();
							
							%>
							<input list="unitName_drop" id="unitName" name="unitName"  class="form-control" onchange="checkForDuplicateUnitEntry()" style="text-transform: lowercase;">
				<datalist id="unitName_drop">
							<%
					           for(int i=0;i<taxPerList.size();i++){
					        	   MeasuringUnitsBean bean =(MeasuringUnitsBean)taxPerList.get(i);
							%>
		
							<option data-value="<%=bean.getPkUnitId()%>" value="<%=bean.getUnitName()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist> --%>
            			</div>
           		 	</div>
           		 	
           		 	<label class="col-md-2 control-label" for="unitDescription">SI Unit Description<sup>*</sup></label>  
           	 		<div class="col-md-3">
            			<div class="input-group">
							<span class="input-group-addon">
								<i class="	glyphicon glyphicon-hand-right"></i>
							</span>
              			    						<input id="unitDescription" name="unitDescription" placeholder="Unit " class="form-control input-md" type="text"  style="text-transform: lowercase;">	
							<%-- <%
							MeasuringUnitsDao dao1 = new MeasuringUnitsDao();
           					List unitList =dao1.getAllUnits();
							
							%>
							<input list="unitName_drop1" id="unitDescription" name="unitDescription" class="form-control">
				<datalist id="unitName_drop1">
							<%
					           for(int i=0;i<unitList.size();i++){
					        	   MeasuringUnitsBean bean1 =(MeasuringUnitsBean)unitList.get(i);
							%>
		
							<option data-value="<%=bean1.getPkUnitId()%>" value="<%=bean1.getUnitDescription()%>">
							<%
				      			}
				    		%>
			              	
            			</datalist> --%>
            			</div>
           		 	</div>
           		 </div>
           		 <div class="form-group row">
		            <div class="col-md-10 text-center">
		            
	           	 <!-- <input type="button" id="btn" name="btn" style="font-size: 25" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  value="Submit" onclick="addMeasuringUnit() "> 
	           		 <input id="save" name="btn" style="font-size: 25" class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width"  type="reset"  onclick="reset()" value="Cancel"> -->
	           		 <input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" name="btn" value="Submit" class="btn btn-large btn-success button-height-width" onclick="addMeasuringUnit()" /> 
             	<input style=" height: 65px; width: 180; font-size: 25" class="btn btn-large btn-danger  button-height-width" type="reset" id="save" name="btn" value="Cancel" onclick="reset()" />
             	<input style=" height: 65px; width: 180; font-size: 25" type="button" value="List" id="listBtn" class="btn btn-primary" onclick="measuringList()" />
	           		<!--  <button id="save" name="btn" class="btn btn-large btn-success glyphicon glyphicon-save  button-height-width"  onclick="addUnit()"><h4> Submit</h4></button>
              	<button class="btn btn-large btn-danger glyphicon glyphicon-remove-circle  button-height-width" type="reset"  onclick="reset()"><h4> Cancel</h4> </button> -->
	           		 
	           		 </div>
         		</div>
           	</fieldset>
          </form>
         </div>
         <%@include file="commons/newFooter.jsp" %>
       <%-- <%@include file="commons/footer.jsp" %> --%>