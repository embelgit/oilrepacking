
	function empAtt(){
		
		var employee_name = $('#employee_name').val();
		
		var params = {};
		
		params["employee_name"] = employee_name;
		
		
		params["methodName"] = "regEmpAtt";
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	 	    	{
			alert(data);
	 	    	}
	 	    	).error(function(jqXHR, textStatus, errorThrown){
	 	    		if(textStatus==="timeout") {
	 	    			$(loaderObj).hide();
	 	    			$(loaderObj).find('#errorDiv').show();
	 	    		}
	 	    	})
		
		
		
	}