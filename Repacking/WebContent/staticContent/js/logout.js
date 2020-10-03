

$( document ).ready(function() {
	$("#pass").on('keyup', function (e) {
	    if (e.keyCode == 13) {
	    	login();
	    }
	});
	$("#uname").on('keyup', function (e) {
	    if (e.keyCode == 13) {
	    	login();
	    }
	});
});

function Logout(){
	
	var params = {};
	
	params["methodName"] = "logout";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	{   
				
		        alert (" Ur r logged Out Successfully!!!");
				window.location.replace("/Repacking/jsp/login.jsp");
				
			    }
	    	).error(function(jqXHR, textStatus, errorThrown){
	    		if(textStatus==="timeout") {
	    			$(loaderObj).hide();
	    			$(loaderObj).find('#errorDiv').show();
	    		}
	    	});
	
}


function login(){
	var uname = $("#uname").val();
	var pass = $("#pass").val();
	
	var params = {};
	
	params["uname"] = uname;
	params["pass"] = pass;
	
	if(uname=="" || pass=="")
		{
		if(uname=="")
			{
			alert("enter a username");
			return false;
			}
		else{
			alert("enter a password");
			return false;
		}
		alert("Enter a username and passord");
		return false;
		}
	
	params["methodName"] = "login";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	{   
	
	window.location.replace("/Repacking/jsp/indexx.jsp");
				
			    }
	    	).error(function(jqXHR, textStatus, errorThrown){
	    		if(textStatus==="timeout") {
	    			$(loaderObj).hide();
	    			$(loaderObj).find('#errorDiv').show();
	    		}
	    	});
	
}

function language(){
	
	var language = $("#language").val();
	
	var params = {};
	
	params["language"] = language;
	
	
	params["methodName"] = "language";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
	    	{   
	
	           location.reload();
				
			    }
	    	).error(function(jqXHR, textStatus, errorThrown){
	    		if(textStatus==="timeout") {
	    			$(loaderObj).hide();
	    			$(loaderObj).find('#errorDiv').show();
	    		}
	    	});
	
	
}
