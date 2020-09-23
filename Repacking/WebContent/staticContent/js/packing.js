/*function packValidation()
{
	
	if(document.pk.proName.value != "")
	{
		if(document.pk.containerName.value != "")
		{
			if(document.pk.unitName.value != "")
			{
				if(document.pk.packingQuantity.value != "")
				{
					if(document.pk.capacity.value != "")
					{
						pack();
					}
					else
					{
						alert("Please Select Capacity");
						return false;
					}
				}
				else
				{
					alert("Enter Packing Quantity");
					return false;
				}
			}
			else
			{
				alert("Please Select Unit");
				return false;
			}
		}
		else
		{
			alert("Please Select Container Name");
			return false;
		}
	}
	else
	{
		alert("Please Select Product Name");
		return false;
	}
	
}*/


function packValidation()
{
	
	if(document.pk.proName.value == "")
	{
		
			alert("Please Select Product Name");
			return false;
	}
		if(document.pk.containerName.value == "")
		{
				alert("Please Select Container Name");
				return false;
		}
			if(document.pk.unitName.value == "")
			{
				
					alert("Please Select Unit");
					return false;
			}
				if(document.pk.packingQuantity.value == "")
				{
					
						alert("Enter Packing Quantity");
						return false;
				}	
				 	var letterNumber = /^[0-9]+$/;
				 	if(document.pk.packingQuantity.value.match(letterNumber))
       				 {
       				 
				 		if(document.pk.capacity.value == "")
				 		{
						
				 				alert("Please Select Capacity");
				 				return false;
				 				
				 				
				 		}	
				 				
				 			pack();
       				 } 
				 	
				 	else{
				 		
				 		alert("Please enter valid packing quantity");
				 	}
				
	
}

function pack(){
	
	document.pk.btn.disabled =true;
	var i=0;
	var fk_packType_id=0;
			var packingQuantity = $('#packingQuantity').val();
			
			$("#capacity option:selected").each(function() {
				   selectedVal = $(this).text();
				});
			
			var splitText = selectedVal.split(",");
			
			var fk_packType_id = splitText[2]
			var fk_type_id = splitText[0]
			
			var container = $('#container').val();
			
			$("#proName option:selected").each(function() {
				   selectedVal = $(this).text();
				});
			var splitText = selectedVal.split(",");
			
			var proName = splitText[0];
			var Quantity = splitText[2];
			var fkCatId = splitText[4];
			var fkSubCatId= splitText[6];
			var fkShopId = splitText[8];
			
			var containerName = $('#containerName').val();
			var unitName = $('#unitName').val();
			
			
			
	
		var params = {};
		
		params["proName"] =proName;
		params["fk_packType_id"] =fk_packType_id;
		params["container"] =container;
		params["packingQuantity"] =packingQuantity;
		params["fkCatId"] =fkCatId;
		params["fkSubCatId"] =fkSubCatId;
		params["fkShopId"] =fkShopId;
		params["containerName"] =containerName;
		params["fk_type_id"] =fk_type_id;
		params["unitName"] =unitName;
	
		params["methodName"] = "packingDetails";
	
	 	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	 	    	{
	 				
	 			alert(data);
	 			location.reload();
	 				
	 				if(document.pk)
	 				{
	 					document.pk.reset();
	 				}	
	 				document.pk.btn.disabled =false;
	 			}
	 	    	).error(function(jqXHR, textStatus, errorThrown){
	 	    		if(textStatus==="timeout") {
	 	    			$(loaderObj).hide();
	 	    			$(loaderObj).find('#errorDiv').show();
	 	    		}
	 	    	});

		
}


/*** +++ Fetching product Name FOR *****/
function getProductName(){
		
	  var params= {};
	  var proName = 1;
	   productId = $('#proName').val();
		$("#proName").empty();
		$("#proName").append($("<option></option>").attr("value","").text("Select product"));
		
		$("#proName option:selected").each(function() {
			   selectedVal = $(this).text();
			});
		var splitText = selectedVal.split(",");
		
		var proName = splitText[0];
		var Quantity = splitText[1];
		

		params["proName"]= proName;
		params["Quantity"]=Quantity;

		var newrow;
		var rowId;
		
		params["methodName"] = "getAllProductBypacking";
		
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				
				{ var count = 1;
				
		    	var jsonData = $.parseJSON(data);
			    $.each(jsonData,function(i,v)
					{
				$("#proName").append($("<option></option>").attr("value",count).text(v.product + ",Unpacked Stock =,"+ v.quantityDouble + ", cat =,"+v.catid + ", SubCat =,"+v.subCatid + ", Shop =,"+v.shopid +", cat = "+v.catname + ", SubCat = "+v.subcatname));
//				$("#proName").append($("<option></option>").attr("value",count).text(v.product + ", Unpacked Stock = "+ v.quantityDouble + ", cat = "+v.catname + ", SubCat = "+v.subcatname));
			    	//$("#proName").append($("<option></option>").attr("value",count).text(v.product +",Stock," +v.quantityDouble +","+ v.catid +","+ v.subCatid +","+ v.shopid ));
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
}

function getCapacity(){
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split("=");
	
	var quantity = splitText[2];
		
	$("#capacity option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	var capacity = splitText[0];
	var quantity = splitText[2];
	
	var packingQuantity = $('#packingQuantity').val();
	
	if(Number(packingQuantity) > Number(quantity)){
		alert("Packing Quantity Should Be Less Than Quantity");
		
		document.getElementById("packingQuantity").value = "";
		//location.reload();
		return false;
		
		
	}
	
	 var fk_cat_id = 1;
		$("#capacity").empty();
		$("#capacity").append($("<option></option>").attr("value","").text("Select capacity"));
		var params= {};
		var containerName = $('#containerName').val();
		
		
		params["containerName"] = containerName;
		params["methodName"] = "getCapacity";
		
		//params["fk_cat_id"]= fk_cat_id;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{ var count = 1;
			var jsonData = $.parseJSON(data);
			$.each(jsonData,function(i,v)
					{
				$("#capacity").append($("<option></option>").attr("value",count).text(v.packing_Type+",Ltr,"+v.packing_Id)); 
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
	
}

function getContainerByPacking(){
	
	 // productId = $('#proName').val();
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split("=");
	
	var quantity = splitText[1];
	
	var splitText = selectedVal.split(",");
	var quantity = splitText[0];
	
	$("#capacity option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	//var quantity = splitText[1];
	var capacity = splitText[0];
	var packingQuantity = $('#packingQuantity').val();
	
	 if(Number(packingQuantity) < Number(capacity)){
			alert("Container Capacity Should Be Equal Or Less Than Packing Quantity");
			//location.reload();
			document.getElementById("capacity").value = "";
			document.getElementById("containerName").value = "";
			return false;
		}
	 else {
	var quantityDividePacking = Number(packingQuantity)/Number(capacity)
	
	document.getElementById("container").value = quantityDividePacking;
	 }
	}
	
	
function reset()
{
   document.catd.reset();	
}



function getunit(){
	
	var input = document.getElementById('containerName'),
    list = document.getElementById('pack_drop2'),
    i,fk_item_id1;
	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	fk_item_id1 = list.options[i].getAttribute('data-value');
    }
}
	
	var params= {};


	
	params["unitid"]= fk_item_id1;
	params["methodName"] = "getunit";	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		var jsonData = $.parseJSON(data);
		var catmap = jsonData;
		if(catmap==null){
			alert("no data");
			return false;
		}
		//var jsonData = jsonData.list;
		$.each(jsonData,function(i,v)
				{
					//document.getElementById("totalAmount").value = v.grossTotal;
					document.getElementById("unitName").value = v.unit;
			
			
					//document.getElementById("balanceAmount").value = v.balanceamount;
			
				});
			})
		
}