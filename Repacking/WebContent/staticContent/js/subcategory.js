

function categoryd(){
	
	
	
	
	if ( document.subcat.fkRootcatId.value == "" )
    {
        
 	       alert("Please Select Category Name.");
          return false;
     }

    
   
     if ( document.subcat.subcatName.value == "" )
  	   {
	    
     	     alert("Please Enter Sub Category Name.");
	         return false;
	    }
     
     
       var letterNumber = /^[a-zA-Z]+$/;  
	    if(document.subcat.subcatName.value.match(letterNumber))   
	    {  
	       
	    	subcate();
    
    
	    }  
	     else  
	      {   
	       
	    	 alert( "Enter Alphabets only.");
	         return false;   
	      }  
	    
	    
}


function subcate(){
	
	        document.subcat.btn.disabled = true;
	      
	
			var subcatName= $('#subcatName').val();
			var activeYn = $('#activeYn').val();
			var isLeafCatId=$('#isLeafCatId').val();
			var isrootCat =$('#isrootCat').val();
		    var input = document.getElementById('fkRootcatId'),
		        list = document.getElementById('fkRootcatId_drop'),
		        i,fkRootcatId;
		    for (i = 0; i < list.options.length; ++i) {
		        if (list.options[i].value === input.value) {
		        	fkRootcatId = list.options[i].getAttribute('data-value');
		        }
		    }
		    		    
		    
			var params= {};
			
			params ["subcatName"] = subcatName;
			params ["activeYn"] = activeYn;
			params ["isLeafCatId"] = isLeafCatId;
			params ["isrootCat"] = isrootCat;
			params ["fkRootcatId"] = fkRootcatId;
			
			
			params["methodName"] = "regSubCategory";
	    	
	    	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	    	{
	    				 alert(data);
	    				 if(document.getElementById) 
	    			 	 {
	    					 document.subcat.reset();
	    				 }
	    				 document.subcat.btn.disabled = false;
	    				 
	    			}
	    	    	).error(function(jqXHR, textStatus, errorThrown){
	    	    		if(textStatus==="timeout") {
	    	    			$(loaderObj).hide();
	    	    			$(loaderObj).find('#errorDiv').show();
	    	    		}
	    	    	});
	    	
	    }
	    
			
function delsubCat(){
	
	if(document.delPro.delProName.value == "")
	{
		alert("Please Enter Product Name");
		return false;
	}	
	delsubCat1();
}

function delsubCat1(){
	
	var input = document.getElementById('delProName'),
    list = document.getElementById('proName_drop1'),
    i,delProName;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	delProName = list.options[i].getAttribute('data-value');
    	}
	}
	
	var params = {};
	
	params["delsubcat"] =delProName;
	
	params["methodName"] = "deletesubcat";
	
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