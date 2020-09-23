function packType(){
	
	if(document.Pcktyp.containerName.value == "")
		{
		alert("Please Enter Container Name");
		return false;
		}
	
	if(document.Pcktyp.packing_Type.value == "")
	{
		alert("Please Enter Capacity");
		return false;
	}
	
	
	 if(document.Pcktyp.unitName.value == "")
	 {
		 alert("Please Select Unit Name");
		return false;
			
	}
	 else
	 {
	 packingInfo();
	
	 }
	 /*if(document.Pcktyp.unitName.value.match(letterNumber)) 
	{*/
		/* if(document.Pcktyp.extrapacking.value == "")
			 {
			 alert("Please Enter Extra Packing");
			 return false;
			 }
		 else
			 {
			 packingInfo();
			
			 }*/
	/*}*/
	/*if(document.Pcktyp.unitName.value == "")
	{
		
	alert("Please Enter Extra Packing");
	return false;
	}*/
	
	
	/*packingInfo();*/
	/*var letterNumber = /^[a-zA-Z0-9]+$/;
	if(document.Pcktyp.packing_Type.value.match(letterNumber))
	{
		
	}
	else
	{
		alert("Enter Proper Unit value..!!");
		return false;
	}	*/
}

function packingInfo(){
	//document.Pcktyp.btn.disabled =true;
	document.getElementById("save").disabled = false;
	
	var containerName=$('#containerName').val();
	var packing_Type = $('#packing_Type').val();
	var unitname = $('#unitName').val();
	var input = document.getElementById('unitName'),
    list = document.getElementById('unit_drop1'),
    i,unitId;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	unitId = list.options[i].getAttribute('data-value');
    	}
	}
	
//	var extrapacking = $('#extrapacking').val();
	var extrapacking = 0;
		var params = {};
		params['unitname'] = unitname;
		params["containerName"] =containerName;
		params["packing_Type"] =packing_Type;
		params["unitId"] =unitId;
		params["extrapacking"] =extrapacking;
	
		params["methodName"] = "PackingTypeInfo";
	
	 	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	 	    	{
	 				
	 		
	 			alert(data);
	 			location.reload();
	 				
	 				if(document.Pcktyp)
	 				{
	 					document.Pcktyp.reset();
	 				}	
	 				document.Pcktyp.btn.disabled =false;
	 			}
	 	    	).error(function(jqXHR, textStatus, errorThrown){
	 	    		if(textStatus==="timeout") {
	 	    			$(loaderObj).hide();
	 	    			$(loaderObj).find('#errorDiv').show();
	 	    		}
	 	    	});
		
}

//packing type update 
function updatepackType()
{
	if(document.Pcktyp.containerName.value == "")
	{
	alert("Please Enter Container Name");
	return false;
	}

if(document.Pcktyp.packing_Type.value == "")
{
	alert("Please Enter Capacity");
	return false;
}


 if(document.Pcktyp.unitName.value == "")
 {
	 alert("Please Select Unit Name");
	return false;
		
 }
 else
 {
 packingInfo1();

 }
 /*if(document.Pcktyp.unitName.value.match(letterNumber)) 
{*/
	/* if(document.Pcktyp.extrapacking.value == "")
		 {
		 alert("Please Enter Extra Packing");
		 return false;
		 }*/

/*}*/
/*if(document.Pcktyp.unitName.value == "")
{
	
alert("Please Enter Extra Packing");
return false;
}*/


/*packingInfo();*/
/*var letterNumber = /^[a-zA-Z0-9]+$/;
if(document.Pcktyp.packing_Type.value.match(letterNumber))
{
	
}
else
{
	alert("Enter Proper Unit value..!!");
	return false;
}	*/






}

function packingInfo1()
{
document.getElementById("save").disabled = false;
	
	var containerName=$('#newcontainerName').val();
	var packing_Type = $('#packing_Type').val();
	
	var input = document.getElementById('containerName'),
    list = document.getElementById('cust_drop'),
    i,packing_Id;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	packing_Id = list.options[i].getAttribute('data-value');
    	}
	}
	
//	var extrapacking = $('#extrapacking').val();
	var unitName = $('#unitName').val();
	var extrapacking = 0;
		var params = {};
		
		params["containerName"] =containerName;
		params["packing_Type"] =packing_Type;
		params["packing_Id"] =packing_Id;
		params["unitname"]=unitName;
		params["extrapacking"] =extrapacking;
	
		params["methodName"] = "UpdatePackingTypeInfo";
	
	 	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	 	    	{
	 				
	 		
	 			alert(data);
	 			location.reload();
	 				
	 				if(document.Pcktyp)
	 				{
	 					document.Pcktyp.reset();
	 				}	
	 				document.Pcktyp.btn.disabled =false;
	 			}
	 	    	).error(function(jqXHR, textStatus, errorThrown){
	 	    		if(textStatus==="timeout") {
	 	    			$(loaderObj).hide();
	 	    			$(loaderObj).find('#errorDiv').show();
	 	    		}
	 	    	});
		



}

function getContainerDetails(){
var params= {};
	
	var input = document.getElementById('containerName'),
     list = document.getElementById('cust_drop'),
     	i,pk_type_id;
	 		for (i = 0; i < list.options.length; ++i) {
			     if (list.options[i].value === input.value) {
			    	 pk_type_id = list.options[i].getAttribute('data-value');
			     }
	 		}
	
	// $("#containerName").append($("<input/>").attr("value","").text());
	$("#packing_Type").append($("<input/>").attr("value","").text());
	$("#unitName").append($("<input/>").attr("value","").text());
	$("#extrapacking").append($("<input/>").attr("value","").text());
	//$("#pk_type_id").append($("<input/>").attr("value","").text());


	
	
	
	params["containerName"]= pk_type_id;
	params["methodName"] = "getContainerDetailsToEdit";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				document.getElementById("newcontainerName").value = v.containerName;
			      document.getElementById("packing_Type").value = v.packing_Type;
			      document.getElementById("unitName").value = v.unitName;
		//	      document.getElementById("extrapacking").value = v.extraPacking;
			      //document.getElementById("pk_type_id").value = v.packing_Id;
				     
			     
			 
			   
		      
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
	
	
	
	
}

function getPackingDetails()
{
	
	var params= {};
	
	var input = document.getElementById('containerName'),
     list = document.getElementById('con_drop'),
     	i,fkRootSupId;
	 		for (i = 0; i < list.options.length; ++i) {
			     if (list.options[i].value === input.value) {
			    	 fkRootSupId = list.options[i].getAttribute('data-value');
			     }
	 		}
	
	$("#containerName").append($("<input/>").attr("value","").text());
	$("#packing_Type").append($("<input/>").attr("value","").text());
	$("#unitName").append($("<input/>").attr("value","").text());
	$("#extrapacking").append($("<input/>").attr("value","").text());

	//$("#IdNo").append($("<input/>").attr("value","").text());
	
	
	
	params["SupplierId"]= fkRootSupId;
	params["methodName"] = "getContainerDetailsToEdit";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				  document.getElementById("containerName").value = v.dealerName;
			      document.getElementById("packing_Type").value = v.personName;
			      document.getElementById("unitName").value = v.contactNo;
			      document.getElementById("extrapacking").value = v.landline;
			     
			      //document.getElementById("IdNo").value = v.IdNo;
			   
		      
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
 	    	
}

//delete container
function delContainer(){
	
	if(document.delCont.delContName.value == "")
	{
		alert("Please Enter Container Name");
		return false;
	}	
	delContainer1();

}

function delContainer1(){
	
	var input = document.getElementById('delContName'),
    list = document.getElementById('contName_drop1'),
    i,delContName;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	delContName = list.options[i].getAttribute('data-value');
    	}
	}
	
	var params = {};
	
	params["delContName"] =delContName;
	
	params["methodName"] = "deletCont";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 		if(data=="↵↵↵↵↵↵↵"){
 			alert("Not Added");
 		}
 		else{
 			alert(data);
 		}
 			location.reload();

 			}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});
	
}




function reset()
{
   document.catd.reset();	
}