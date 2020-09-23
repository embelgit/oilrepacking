/*
 * Name : Meghraj Menkudle 
 * Date : 21/05/2017 
 * Method Name : expensePaymentValidation()
 * Reason : Credit Customer Validation in cashBook
 

function expensePaymentValidation() {

	var expenseName = $("#expenseName").val();
	var serviceProvider = $("#serviceProvider").val();
	var contactNumber = $("#contactNumber").val();
	var expCredit = $("#expCredit").val();
	var accountantName = $("#accountantName").val();

	if (expenseName != null && expenseName != "" && expenseName != " ") {
		if (serviceProvider != null && serviceProvider != ""
				&& serviceProvider != " ") {
			if (contactNumber != null && contactNumber != ""
					&& contactNumber != " ") {
				var phoneno = /^\d{10}$/;
				if (contactNumber.match(phoneno)) {
					if (accountantName != null && accountantName != ""
							&& accountantName != " ") {
						var onlyAlfabet = /^[a-zA-Z ]*$/;
						if (accountantName.match(onlyAlfabet)) {
							--if () {
								addExpense();
							} else {
								alert("Enter Accountant Name without Any Number and Special symbols");
							}
						} else {
							alert("Enter Accountant Name without Any Number and Special symbols");
						}
					} else {
						alert("Enter Accountant Name.");
					}

				} else {
					alert("Contact No Must be 10 digit.");
				}
			} else {
				alert("Enter Contact Number");
			}
		} else {
			alert("Enter Service Provider");
		}
	} else {
		alert("please Select Expenditure Name");
	}
}*/

//Adding expense detail
function addExpenseDetails(){
	if(document.expenseDetails.expenseName.value != "")
	{
		var letterNumber = /^[a-zA-Z0-9, ]+$/;
		if(document.expenseDetails.expenseName.value.match(letterNumber))
		{
			addExpense();
		}
		else
		{
			alert("Enter Alphabates And Numbers Only in Expenditure name field..!!");
			return false;	
		}
	}
	else
	{
		alert("Please Enter Expenditure Name");
		return false;
	}	
	
}



function addExpense() {

	document.expenseDetails.btn.disabled = true;

	var expenseName = $('#expenseName').val();

	var params = {};

	params["expenseName"] = expenseName;

	params["methodName"] = "addExpenseDetails";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) 
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

function reset() {
	document.expenseDetails.reset();

}

function addExpenseForBillingAndGoodsReceive() {

	document.expenseDetails1.btn1.disabled = true;

	var expenseName = $('#expenseNameForBilling').val();

	var params = {};

	params["expenseName"] = expenseName;

	params["methodName"] = "addExpenseDetailsForBilling";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {
		alert(data);
		if (document.expenseDetails1) {
			document.expenseDetails1.reset();
		}
		document.expenseDetails1.btn1.disabled = false;
	}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {
			$(loaderObj).hide();
			$(loaderObj).find('#errorDiv').show();
		}
	});

}