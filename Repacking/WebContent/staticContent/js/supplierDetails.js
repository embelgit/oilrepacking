function supplierDetail(){
	 //supDetails();
if(document.spld.IdNo.value != "")
{
	
	var letterNumber = /^[0-9]$/;
	if(document.spld.IdNo.value.match(letterNumber))
	{
		
	
	if(document.spld.dealerName.value != "")
	{
		
		if(document.spld.personName.value != "")
		{
			var letterNumber = /^[a-zA-Z ]+$/;
			if(document.spld.dealerName.value.match(letterNumber))
			{
				if(document.spld.contactNo.value != "")
				{
				var letterNumber = /^[0-9]{10}$/;
      			 if(document.spld.contactNo.value.match(letterNumber))
      			 {
      				if(document.spld.emailId.value !="")
      				{
      				 var letterNumber = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	   	        	 if(document.spld.emailId.value.match(letterNumber))
	   	        	 {
      				 if(document.spld.city.value!="")
      				 {	
      					 var letterNumber = /^[a-zA-Z ]+$/;
      					 if(document.spld.city.value.match(letterNumber))
      					 {
       					
      						 if ( document.spld.tinNo.value != "" )
      						 {
      							 supDetails();
      						 }
      						 else
      						 {
      							 alert("Enter GST Number");
      							 return false;
      						 }
      					 }
      					 else
      					 {
      						 alert("Enter City Name Contains Only Characters");
      						 return false;
      					 }
      				 }
      				 else
      				 {
      					 alert("Enter City Name");
      					 return false;
      				 }
	   	        	 }
	   	        	 else {
	   	        		alret("please enter emailid in proper format")
	   	        		 return false;
	   	        		 }
	   	        	 }
      				else
      					{
      					
      					alert("please Enter EmaiId ");
      					}
      			 }
      			 else
      			 {
      				 alert("Please Enter 10 Digit Mobile Number");
 					 return false;
      			 }
				}
				
				else
				{
					alert("Please Enter Contact Number");
					 return false;
				}
       					
      			 }
      			 else
      			 {
      				 alert("Enter Supplier Name Contains only Characters");
      				 return false;
      			 }
		}
			else
			{
				alert("Enter Person Name");
				return false;
			}
			
		}
	
		else
		{
			alert("Enter Supplier Name");
			return false;
		}	
	
	
	
	
	
	
	
	}
	else{
		alert("Enter SupplierId In number only!");
	}
	
	
}
	else
	{
		alert("Enter SupplierId ...!!");
		return false;
	}

	
	

}

	
	


	/*else
	{
		alert("Enter supplier  Name.");
		return false;
	}	*/
	
		/*if(document.spld.personName.value == "")
		{
			alert("Enter Person Name.");
			return false;
		}	*/
			/*var letterNumber = /^[a-zA-Z, ]+$/;
			if(document.spld.personName.value.match(letterNumber))
			{*/
				/* if ( document.spld.contactNo.value == "" )
       			 {
		  	       alert("Please Enter Contact Number");
		  	       return false;
       			 }
       			
				 var letterNumber = /^[0-9]{10}$/;
       			 if(document.spld.contactNo.value.match(letterNumber))
       			 {*/
       				 /*if ( document.spld.landline.value == "" )
           			 {
    		  	       alert("Please Enter Landline Number");
    		  	       return false;
           			 }*/
           			
    				// var letterNumber = /^[0-9]+$/;
           			/* if(document.spld.landline.value.match(letterNumber))
           			 {
       			 
           				*/
       				  /*if(document.spld.emailId.value == ""  )
           				 {
	 			            
	 	    	    	     alert("Please Enter Email .");
	 			             return false;
           				 }*/
		   	        	// var letterNumber = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		   	        	/* if(document.spld.emailId.value.match(letterNumber) || document.spld.emailId.value==null || document.spld.emailId.value=="")
		   	        	 {
	   	        		*/
	   	        				/*if(document.spld.city.value == "")
	   	        				{
	   	        					alert("Please Enter city.");
	   	        					return false;
	   	        				}*/
	   	        /*			if(document.spld.city.value!="")
	   	        			{	
	   	        				var letterNumber = /^[a-zA-Z]+$/;
	   	        				if(document.spld.city.value.match(letterNumber))
	   	        				{
	   	        					
	   	        					if ( document.spld.tinNo.value != "" )
								    {
								         */
								/*	var letterNumber = /^[0-9a-zA-Z,]+$/;*/
									/*if(document.spld.tinNo.value.match(letterNumber))
									{*/
										/*if(document.spld.address.value == "")
			   	        				{
			   	        					alert("Please Enter address.");
			   	        					return false;
			   	        				}	*/
				   	        				/*var letterNumber = /^[a-zA-Z0-9, ]+$/;*/
				   	        				/*if(document.spld.address.value.match(letterNumber))
				   	        				{*/
										/*	supDetails();
											}*/
										
			   	        				
			   	        				/*else
										{
												alert("Enter Alphabates Only in Address field..!!");
												return false;
											}
										}
			   	        				
			   	        				
			   	        				else
										{
												alert("Enter Numbers Only in Tin number field..!!");
												return false;
											}
										}
									
	   	        				else
									{
										alert("Enter Alphabates Only in city field..!!");
										return false;
									}	
								}
										*/
		   	        	 /*else
							{
								alert("Enter a Valid email adress (example = abc@xyz.com)");
								return false;
							}
						}*/
           	
           		 /*else
						{
							alert("Enter Numbers Only in Landline number field..!!");
							return false;
							}	
						}*/								
           			 
       			 /*else
						{
							alert("Enter 10 digit Numbers Only in contact number field..!!");
							return false;
							}	
						}*/
																
		/*else
			{
				alert("Enter Alphabets Only in Person name field..!!");
				return false;
			}
		}*/					
	   	        					
	   	        				
	   	    /*    				else
	   	        				{

							  	      alert("Please Enter GST Number");
							          return false;
							    }
	   	        				
	   	        			}
	   	        			else
	   	        			{
	   	        				alert("Please Enter City ");
	   	        				return false;
	   	        				}
	   	        			}
	   	        		
	else
		{
			alert("Enter Alphabets Only in Dealer name field..!!");
			return false;
		}
	}
}*/



function supDetails(){

				document.getElementById("save").disabled = false;
	
				var dealerName = $('#dealerName').val();
				var personName = $('#personName').val();
				var contactNo = $('#contactNo').val();
				var landline = $('#landline').val();
				var emailId = $('#emailId').val();
				var tinNo = $('#tinNo').val();
				var city = $('#city').val();
				var address = $('#address').val();
				var IdNo = $('#IdNo').val();
				
				var params = {};
				
				params["dealerName"] = dealerName;
				params["personName"] =personName;
				params["contactNo"] = contactNo;
				params["landline"] =landline;
				params["emailId"] = emailId;
				params["tinNo"] = tinNo;
				params["city"] = city;
				params["address"] = address;
				params["IdNo"] = IdNo;
				
				params["methodName"] = "supplierDetails";

				$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			 	    	{
			 				alert(data);
			 				if(document.spld)
			 				{
			 					document.spld.reset();
			 					location.reload();
			 				}	
			 				document.spld.btn.disabled =false;
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
   document.spld.reset();	

}


/********* Edit Supplier Details ************/
function getSupplierDetails(){
	var params= {};
	
	var input = document.getElementById('supplier'),
     list = document.getElementById('sup_drop'),
     	i,fkRootSupId;
	 		for (i = 0; i < list.options.length; ++i) {
			     if (list.options[i].value === input.value) {
			    	 fkRootSupId = list.options[i].getAttribute('data-value');
			     }
	 		}
	
	$("#dealerName").append($("<input/>").attr("value","").text());
	$("#personName").append($("<input/>").attr("value","").text());
	$("#contactNo").append($("<input/>").attr("value","").text());
	$("#landline").append($("<input/>").attr("value","").text());
	$("#emailId").append($("<input/>").attr("value","").text());
	$("#city").append($("<input/>").attr("value","").text());
	$("#tinNo").append($("<input/>").attr("value","").text());
	$("#address").append($("<input/>").attr("value","").text());
	$("#IdNo").append($("<input/>").attr("value","").text());
	
	
	
	params["SupplierId"]= fkRootSupId;
	params["methodName"] = "getSupplierDetailsToEdit";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				  document.getElementById("dealerName").value = v.dealerName;
			      document.getElementById("personName").value = v.personName;
			      document.getElementById("contactNo").value = v.contactNo;
			      document.getElementById("landline").value = v.landline;
			      document.getElementById("emailId").value = v.email;
			      document.getElementById("city").value = v.city;
			      document.getElementById("tinNo").value = v.tin;
			      document.getElementById("address").value = v.address;
			      document.getElementById("IdNo").value = v.IdNo;
			   
		      
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
 	    	
}

function updateSupplierDetails(){
	
	if(document.spld1.dealerName.value == "")
	{
		
	alert("Please Enter Supplier Name");
	return false;	
	}
	if(document.spld1.personName.value == "")
	{
		
	alert("Please Enter Person  Name");
	return false;	
	}
	
	var letterNumber = /^[a-zA-Z,0-9, ]+$/;
	if(document.spld1.personName.value.match(letterNumber))
	{
		
		if(document.spld1.contactNo.value == "")
		{
			alert("Please Enter Contact No.");
			return false;
		}
		if(document.spld1.city.value == "")
		{
			alert("Please Enter City Name.");
			return false;
		}
		if(document.spld1.tinNo.value == "")
		{
			alert("Please Enter GST No.");
			return false;
		}
		var letterNumber = /^[a-zA-Z]+$/;
		if(document.spld1.tinNo.value.match(letterNumber))
		{
	
		}/*else
		{
			alert("Enter Characters only in Person Name.");
			return false;
		}*/
	}
	else
	{
		alert("Enter Characters only in Supplier Name.");
		return false;
	}
		
	updateSupplierDetails1();
	}

function updateSupplierDetails1(){

	
	document.spld1.btn.disabled = true;
	
	var input = document.getElementById('supplier'),
    list = document.getElementById('sup_drop'),
    	i,fkRootSupId;
	 		for (i = 0; i < list.options.length; ++i) {
			     if (list.options[i].value === input.value) {
			    	 fkRootSupId = list.options[i].getAttribute('data-value');
			     }
	 		}
	
	//var customerId = document.getElementById("customerId").value;
	
	var dealerName = $('#dealerName').val();
	var personName = $('#personName').val();
	var contactNo = $('#contactNo').val();				
	var landline = $('#landline').val();
	var emailId = $('#emailId').val();
	var city = $('#city').val();
	var tinNo = $('#tinNo').val();
	var address = $('#address').val();
	var IdNo = $('#IdNo').val();
	
	var params = {};
	
		if(personName=="" || personName==null || personName==undefined)
		{
		personName="N/A";
		}
		
		if(emailId =="" || emailId == null || emailId == undefined)
		{
			emailId = "NA";
		}
		
		if(landline =="" || landline == null || landline == undefined)
		{
			landline = "0";
		}	
		if(address =="" || address == null || address == undefined)
		{
			address = "NA";
		}
		if(IdNo =="" || IdNo == null || IdNo == undefined)
		{
			IdNo = "0";
		}
		
	params["supplierId"] = fkRootSupId;
	
	params["dealerName"] = dealerName;	
	params["personName"] = personName;
	params["contactNo"] = contactNo;
	params["landline"] = landline;
	params["emailId"] =emailId;
	params["city"] = city;
	params["tinNo"] = tinNo;
	params["address"] = address;
	params["IdNo"] = IdNo;
	
	
	
	params["methodName"] = "updateSupplierDetails";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
			alert(data);
				if(document.spld1)
				{
					document.spld1.reset();
				}	
				document.spld1.btn.disabled =false;
			}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		
 	    		/*alert("Data Added Successfully..");
 	    		location.reload();
 				document.ccd.btn.disabled =false;*/
 	    		
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});
}