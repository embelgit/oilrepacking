function sublevelD(){
			var subLevelName= $('#subLevelName').val();
			
		   
				
			var params= {};
			
			params ["subLevelName"] = subLevelName;
			
			
			
			params["methodName"] = "regSubLevelMater";
	    	
	    	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	    	{
	    				alert(data);
	    			}
	    	    	).error(function(jqXHR, textStatus, errorThrown){
	    	    		if(textStatus==="timeout") {
	    	    			$(loaderObj).hide();
	    	    			$(loaderObj).find('#errorDiv').show();
	    	    		}
	    	    	});
	    	
	    }
	    
			
			