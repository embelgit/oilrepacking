function shopDetails(){
	
	if(document.catd.shopName.value == "")
	{
		alert("Enter shop Name Name.");
		return false;
	}	
	/*var letterNumber = /^[0-9a-zA-Z, ]+$/;
	if(document.catd.shopName.value.match(letterNumber))
	{
		shopDetails1();
	}
	
	else
	{
		alert("Enter Alnumerics Only in shop name field..!!");
		return false;
	}*/
	if(document.catd.shopName.value != "" || document.catd.shopName.value != null)
		{
			shopDetails1();
		}
	
}

function shopDetails1(){
	
	//document.getElementById("save").disabled = true;
	document.catd.btn.disabled =true;
	
		var shopName = $('#shopName').val();
		/*var subCategoryName = $('#subCategoryName').val();*/
		
		var params = {};
		
		params["shopName"] =shopName;
		/*params["subCategoryName"] =subCategoryName;*/
		
		
		params["methodName"] = "shopDetails";
	
	 	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	 	    	{
	 				
	 		
	 			alert(data);
	 				
	 				if(document.catd)
	 				{
	 					document.catd.reset();
	 				}	
	 				document.catd.btn.disabled =false;
	 			}
	 	    	).error(function(jqXHR, textStatus, errorThrown){
	 	    		if(textStatus==="timeout") {
	 	    			$(loaderObj).hide();
	 	    			$(loaderObj).find('#errorDiv').show();
	 	    		}
	 	    	});

		
}
//edit
function getshopname(){
	var params= {};
		
		var input = document.getElementById('shop1'),
	     list = document.getElementById('shop_drop1'),
	     	i,pk_shop_id;
		 		for (i = 0; i < list.options.length; ++i) {
				     if (list.options[i].value === input.value) {
				    	 pk_shop_id = list.options[i].getAttribute('data-value');
				     }
		 		}

		$("#shopName").append($("<input/>").attr("value","").text());
		
		
		params["shopid"]= pk_shop_id;
		params["methodName"] = "getshopToEdit";
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
			
			var jsonData = $.parseJSON(data);
			var catmap = jsonData.list;
			$.each(jsonData,function(i,v)
					{
					document.getElementById("shopName").value = v.shopName;

					     		      
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
		
		
		
	}
//upate shop
function updateshop(){
	var input = document.getElementById('shop1'),
    list = document.getElementById('shop_drop1'),
    i,shop_id;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	shop_id = list.options[i].getAttribute('data-value');
    	}
	}

	var shopname = $('#shopName').val();

	var params= {};
	
	params ["shop_id"] = shop_id;
	
	params ["shopname"] = shopname;
		
	params["methodName"] = "updateshop";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	{
				alert(data);
				location.reload();
			}
	    	).error(function(jqXHR, textStatus, errorThrown){
	    		if(textStatus==="timeout") {
	    			$(loaderObj).hide();
	    			$(loaderObj).find('#errorDiv').show();
	    		}
	    	});
	
}
//delete shop
function delContainer(){
	
	if(document.delCont.delContName.value == "")
	{
		alert("Please Enter Container Name");
		return false;
	}	
	delContainer1();

}

function delshopname1(){
	
	var input = document.getElementById('delshopname'),
    list = document.getElementById('shopname_drop1'),
    i,delshopNameid;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	delshopNameid = list.options[i].getAttribute('data-value');
    	}
	}
	
	var params = {};
//	alert(delshopNameid);
	params["delshopNameid"] =delshopNameid;
	
	params["methodName"] = "deleteshop";
	
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