
<%@page import="com.Fertilizer.hibernate.MeasuringUnitsBean"%>
<%@page import="com.Fertilizer.dao.MeasuringUnitsDao"%>
<%@page import="com.Fertilizer.hibernate.Packing_InfoBean"%>
<%@page import="com.Fertilizer.dao.Packing_InfoDao"%>
<%boolean isHome = false;
%>
<%@include file="commons/header.jsp"%>
 
<head>
<meta charset="utf-8">
<script type="text/javascript">
function checkForDuplicatePackingEntry(){
          			<%
          			Packing_InfoDao dao = new Packing_InfoDao();
          			List list = dao.getAllpack_Type();
          			%>
          			
          			<%
          			int z = 0;
          			for(z=0;z<list.size();z++){
          				Packing_InfoBean bean = (Packing_InfoBean)list.get(z);
          			%>
          			
          			var con = "<%=bean.getContainerName()%>";
          			var conName = document.getElementById("containerName").value;
          			var pro = "<%=bean.getPacking_Type()%>";
          			var proName=document.getElementById("packing_Type").value;
          			
          			/* if(conName == con){
          				alert("Container Name already exist...Duplicate Not allowed");
          				location.reload();
          				return false;
          			} */
          			
          			 if(proName == pro && conName == con){
          				alert("Packing type and Container already exist... Duplicate Not allowed");
          				location.reload();
          				return false;
          			} 
          			<%
          			}
          			%>
          			
          			} 
          			
        
</script>
<script type="text/javascript" src="/Repacking/staticContent/js/PackingType.js"></script>


<script type="text/javascript">
function editContainer()
	 {
	 window.location = "editPacking_Info.jsp";
	 }
function ContainerList()
{
	
	
	window.location ="ContainerList.jsp";
	}



</script>
</head>
              <div class="row header_margin_top">
			    <div align="center">
			  		<h2 class="form-name style_heading"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("PackingInformation") %> <%}%> <%if(abc.equals("english")){%>Container Information<%}%> </h2>
			  	</div>
			 
    </div>
     <div class="row">
		     <div class="col-sm-offset-1 col-md-10">
				  		<hr style="border-top-color:#c1b1b1;">
		     </div>	
    </div>
    
	<div class="container col-sm-offset-2" >
         <form class="form-horizontal" method="post" action="" name="Pcktyp">  
         <fieldset>
            <div class="row form-group">
           	 		<div class="col-md-6">
              			<%@include file="commons/clock.jsp" %>
           		 	</div>
           </div>
         <div class="row form-group">
         		<label class="col-md-2  control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("catName") %> <%}%> <%if(abc.equals("english")){%>Container Name<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-list-alt"></i>
							</span>
			<!-- 				<input  id="containerName"  class="form-control" placeholder="Container Name" > -->
			<input list="pack_drop" id="containerName"  class="form-control" placeholder="Container Name">				
				</div>
				</div>
         
           		<label class="col-md-2  control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("catName") %> <%}%> <%if(abc.equals("english")){%>Capacity<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-list-alt"></i>
							</span>
							<input list="pack_drop" id="packing_Type"  class="form-control" placeholder="Container Capacity" onchange="checkForDuplicatePackingEntry()">
							
				</div>
				</div>
			    </div>
			    
			     <div class="row form-group">
         		<label class="col-md-2  control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("catName") %> <%}%> <%if(abc.equals("english")){%>Unit<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-list-alt"></i>
							</span>
								<%
								MeasuringUnitsDao dao2 = new MeasuringUnitsDao();
           						List shop =dao2.getAllUnits();
							
							%>
							
							<input type="text" id="unitName" list="unit_drop1" class="form-control" >
				<datalist id="unit_drop1">
							
							<%
					           for(int i=0;i<shop.size();i++){
					        	   MeasuringUnitsBean bean =(MeasuringUnitsBean)shop.get(i);
							%>
							<option data-value="<%=bean.getPkUnitId()%>" value="<%=bean.getUnitName()%>" >
							<%
				      			}
				    		%>
						</datalist>
							
				</div>
				</div>
         
           		<%-- <label class="col-md-2  control-label" for="packing_Type"><%if(abc.equals("marathi")){%><%=PropertiesHelper.marathiProperties.getProperty("catName") %> <%}%> <%if(abc.equals("english")){%>Extra Packing<%}%><sup>*</sup></label>  
           	 		<div class="col-md-3">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-list-alt"></i>
							</span>
							<input  id="extrapacking"  class="form-control" placeholder="Extra Packing" >
							
				</div>
				</div> --%>
			    </div>
			    
				<div class="form-group row">
		            <div class="col-md-10 text-center" style="margin-top: 1px">
		           	<input style=" height: 65px; width: 180; font-size: 25" type="button" id="save" style="font-size: 25" class="btn btn-large btn-success button-height-width" name="save" onclick="packType()" value="Submit">
		            <input style=" height: 65px; width: 180; font-size: 25" type="reset" style="font-size: 25" class="btn btn-large btn-danger  button-height-width" id="save" name="btn" value="Cancel" onclick="reset()">
		            	<input style=" height: 65px; width: 180; font-size: 25" type="button" value="Container List" id="listBtn" class="btn btn-primary" onclick="ContainerList()" /> 
		            	<input style=" height: 65px; width: 180; font-size: 25" type="button" value="Edit" id="listBtn" class="btn btn-primary" onclick="editContainer()" /> 
		          </div>
	          </div>
	              </fieldset>
         </form>
         </div>

  
     <%@include file="commons/newFooter.jsp" %>
     
<%-- <%@include file="commons/footer.jsp" %> --%>
