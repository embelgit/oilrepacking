function addMeasuringUnit()
{	
	if (document.munits.unitName.value == "")
	 {
		alert("Please Enter SI Unit");
		return false;
	 }
	 var letterNumber = /^[a-zA-Z, ]+$/;
	 if(document.munits.unitName.value.match(letterNumber) )
	 {
		 if ( document.munits.unitDescription.value == "" )
		 {
			 alert("Please Enter SI Unit Description");
			 return false;
		 }
		 var letterNumber = /^[a-zA-Z, ]+$/; 
		 if(document.munits.unitDescription.value.match(letterNumber) )
		 {
			 addUnit()
	 }
	 else
		{
				alert("Enter Alphabates  in SI unit Description Field.");
				return false;
			}
		}
	 else
		{
				alert("Enter Alphabates  in Unit Name  Field..!!");
				return false;
			}
		}


function addUnit(){
//	document.munits.btn.disabled =true;
	document.getElementById("save").disabled = true;
	//document.getElementById("save").disabled=true;

	//document.munits.btn.disabled =true;
//document.munits.save.disable=true;
	//document.getElementById('save').disabled=true;
	var unitName = $('#unitName').val();
	var unitDescription = $('#unitDescription').val();
	var params = {};
	
	params["unitName"] = unitName;
	params["unitDescription"] = unitDescription;
	params["methodName"] = "measuringUnits";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			
			{
			alert(data);
			document.getElementById("save").disabled = false;
			if(document.munits)
			{
				document.munits.reset();
			}	
	//		document.munits.btn.disabled =false;
		}
 	).error(function(jqXHR, textStatus, errorThrown){
 		if(textStatus==="timeout") {
 			$(loaderObj).hide();
 			$(loaderObj).find('#errorDiv').show();
 		}
 	});
/*document.munits.save.disabled =false;
document.getElementById("save").disabled=false;*/

}

function delUnit(){
	
	if(document.delPro.delProName.value == "")
	{
		alert("Please Enter Product Name");
		return false;
	}	
	/*var letterNumber = /^[a-zA-Z]+$/;
	if(document.delCust.delCustName.value.match(letterNumber))
	{*/
	delUnit1();

	
	/*else
	{
		alert("Enter Alphabates And Numbers Only in Godown name field..!!");
		return false;
	}	*/
}

function delUnit1(){
	
	var input = document.getElementById('delProName'),
    list = document.getElementById('proName_drop1'),
    i,delProName;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	delProName = list.options[i].getAttribute('data-value');
    	}
	}
	
	var params = {};
	
	params["delUnit"] =delProName;
	
	params["methodName"] = "deleteUnit";
	
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
document.munits.reset();	

}
