/*+++++++++++++++++ Sale report between for single date as per category +++++++++++++++++++++++++*/
function saleReportForSingleDateAsPerCategory(){
	if(document.saleReportForm.fk_cat_id6.value == "")
	{
		alert("Please select Product Category");
		return false;
	}
	if(document.saleReportForm.fDate.value == "")
	{
		alert("Please select Date");
		return false;
	}
	saleReportForSingleDateAsPerCat();
}
function saleReportForSingleDateAsPerCat(){
	var params= {};

	var input1 = document.getElementById('fk_cat_id6'),
	list = document.getElementById('cat_drop6'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
	var fk_cat_id = fk_cat_id;
	var fDate = $("#fDate").val(); 
	params["cat"]= fk_cat_id;
	params["fDate"]= fDate;
	params["methodName"] = "getSaleDetailsAsPerCategoryForSingleDate";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#sale1').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == null || catmap == undefined || catmap ==""){
			alert("No data for selected entries");
			return false;
		}
		
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#sale1').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "taxPerc", "width": "5%"},
		            {"data": "taxAmnt", "width": "5%"},
		            {"data": "discountAmount", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		        
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Category Wise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                messageTop: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports'+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#sale1').dataTable().fnAddData(mydata);
	
		}
	

	);

}

/*+++++++++++++++++ Sale report between two dates as per category +++++++++++++++++++++++++*/
function saleReportBetweenTwoDatesAsPerCategory(){
	if(document.saleReportFormRange.fk_cat_id_for_payment_mode_two1.value == "")
	{
		alert("Please select Category");
		return false;
	}
	if(document.saleReportFormRange.fisDate.value == "")
	{
		alert("Please Select Start Date");
		return false;
	}
	if(document.saleReportFormRange.endDate.value == "")
	{
		alert("Please Select End Date");
		return false;
	}
	saleReportBetweenTwoDatesAsPerCat();
}
function saleReportBetweenTwoDatesAsPerCat(){
	

	var params= {};

	var input1 = document.getElementById('fk_cat_id_for_payment_mode_two1'),
	list = document.getElementById('cat_drop_For_payment_mode_two1'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	//alert(fk_cat_id);
	var fk_cat_id = fk_cat_id;
	var fisDate = $("#fisDate").val(); 
	var endDate = $("#endDate").val();
	
	params["fk_cat_id"]= fk_cat_id;
	params["fisDate"]= fisDate;
	params["endDate"]= endDate;
	params["methodName"] = "getSaleDetailsAsPerCategoryBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#saleBetTwoDates').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == null || catmap == undefined || catmap == ""){
			alert("No data for selected entries");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#saleBetTwoDates').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "taxPerc", "width": "5%"},
		            {"data": "taxAmnt", "width": "5%"},
		            {"data": "discountAmount", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Category Wise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                messageTop: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Category Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#saleBetTwoDates').dataTable().fnAddData(mydata);
	
		}
	

	);


}

/*+++++++++++++++++ Sale report between two dates as per category +++++++++++++++++++++++++*/
function saleReportBetweenTwoDatesAsPerShop(){
	

	var params= {};

	var input1 = document.getElementById('fkShopId'),
	list = document.getElementById('shp_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_shop_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
	var fk_shop_id = fk_shop_id;
	var fDate = $("#fisDate1").val(); 
	var sDate = $("#endDate1").val();
	
	params["shop"]= fk_shop_id;
	params["fDate"]= fDate;
	params["sDate"]= sDate;
	params["methodName"] = "getSaleDetailsAsPerShopBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#saleBetTwoDates1').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected entry");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#saleBetTwoDates1').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			      /*      // Total over this page
			            pageTotal = api
			                .column( 5 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 5 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
			            
			         // Total over this page
			            pageTotal = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 6 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
			            
			         // Total over this page
			            pageTotal = api
			                .column( 7 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 7 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);*/
			            
			         // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			             
			              'Rs'+' '+pageTotal.toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "taxPerc", "width": "5%"},
		            {"data": "taxAmnt", "width": "5%"},
		            {"data": "discountAmount", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'ShopWise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'ShopWise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'ShopWise Sale Reports '+fDate,
			                messageTop: 'ShopWise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'ShopWise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'ShopWise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#saleBetTwoDates1').dataTable().fnAddData(mydata);
	
		}
	

	);


}



/*+++++++++++++++++ Sale retutn report  as per Bill+++++++++++++++++++++++++*/
function saleReturnReportAsPerBill(){
	

	var params= {};
	var bill_no = $("#bill_no").val(); 
	
	params["bill_no"]= bill_no;
	params["methodName"] = "saleReturnReportAsPerBill";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		$('#salereturn').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected entry");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#salereturn').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            
			         // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			             
			              'Rs'+' '+pageTotal.toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "BillNo", "width": "5%"},
		            {"data": "productName", "width": "5%"},
		            {"data": "saleDate", "width": "5%"},
		            {"data": "salePrice" , "width": "5%"},
		            {"data": "availableQuantity" , "width": "5%"},
		            {"data": "returnDate1", "width": "5%"},
		            {"data": "ReturnAmount", "width": "5%"},
		            {"data": "returnQuantity", "width": "5%"},
		            {"data": "total_after_sale_return" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
	            buttons: [
	                'copy', 'csv', 'excel', 'pdf', 'print'
	            ]
		        
		    } );
		} );
		
	var mydata = catmap;
	$('#salereturn').dataTable().fnAddData(mydata);
	
		}
	

	);


}



/*+++++++++++++++++ bill no wise  +++++++++++++++++++++++++*/
function billnowiseReportAsPerBill(){
	

	var params= {};
	var Billno = $("#bill_no1").val(); 
	
	params["bill_no1"]= Billno;
	params["methodName"] = "bilnowiseReportAsPerBill";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		$('#Billreturn').dataTable().fnClearTable();
	
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected entry");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#Billreturn').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            
			      /*   // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			             
			              'Rs'+' '+pageTotal.toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            */
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "billno", "width": "5%"},
		            {"data": "grosstotal", "width": "5%"},
		         /*   {"data": "saleDate", "width": "5%"},
		            {"data": "salePrice" , "width": "5%"},
		            {"data": "availableQuantity" , "width": "5%"},
		          {"data": "returnDate1", "width": "5%"},
		            {"data": "ReturnAmount", "width": "5%"},
		            {"data": "returnQuantity", "width": "5%"},
		            {"data": "TotalAmount" , "width": "5%"}*/
		        ],
		        dom: 'Bfrtip',
	            buttons: [
	                'copy', 'csv', 'excel', 'pdf', 'print'
	            ]
		        
		    } );
		} );
		
	var mydata = catmap;
	$('#Billreturn').dataTable().fnAddData(mydata);
	
		}
	

	);


}


//get All product name as per cat for single date
function getAllProduct(){

		var input1 = document.getElementById('fk_cat_id'),
		list = document.getElementById('cat_drop'),
		i,fk_cat_id;
		for (i = 0; i < list.options.length; ++i) {
			if (list.options[i].value === input1.value) {
				fk_cat_id = list.options[i].getAttribute('data-value');
			}
		}
		
		
	 var fk_cat_id = fk_cat_id;
		$("#proName").empty();
		$("#proName").append($("<option></option>").attr("value","").text("Select product"));
		var params= {};
		
		params["methodName"] = "getAllProductByCategoriesForAdvance";
		
		params["fk_cat_id"]= fk_cat_id;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{ var count = 1;
				
			var jsonData = $.parseJSON(data);
			$.each(jsonData,function(i,v)
					{
				$("#proName").append($("<option></option>").attr("value",count).text(v.product)); 
				//$("#batchNo").append($("<option></option>").attr("value",v.batchNo).text("Batch No = "+v.batchNo + "  " +" Stock = "+ v.quantityForBatchNo ));
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
	}


//get All product name as per cat for sale report bet two dates
function getAllProductForSale(){

	var input1 = document.getElementById('fk_cat_id_for_sale'),
	list = document.getElementById('cat_drop_For_sale'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
 var fk_cat_id = fk_cat_id;
	$("#proName1").empty();
	$("#proName1").append($("<option></option>").attr("value","").text("Select product"));
	var params= {};
	
	params["methodName"] = "getAllProductByCategoriesForAdvance";
	
	params["fk_cat_id"]= fk_cat_id;
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{ var count = 1;
			
		var jsonData = $.parseJSON(data);
		$.each(jsonData,function(i,v)
				{
			$("#proName1").append($("<option></option>").attr("value",count).text(v.product)); 
				count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
	
}


/*+++++++++++++++++ Sale report between for single date as per item wise +++++++++++++++++++++++++*/
function saleReportforSingleDateAsPerProName(){
	if(document.saleReportFormItem.fk_cat_id.value == "")
	{
		alert("Please Select Product Category");
		return false;
	}
	if(document.saleReportFormItem.proName.value == "")
	{
		alert("Please Select Product Name");
		return false;
	}
	if(document.saleReportFormItem.fDate1.value == "")
	{
		alert("Please Select Date");
		return false;
	}
	
	saleReportforSingleDateAsPerPro();
}
function saleReportforSingleDateAsPerPro(){

	var params= {};
	
	var input1 = document.getElementById('fk_cat_id'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
	
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var fk_cat_id = fk_cat_id;
	var fDate = $('#fDate1').val();
	params["cat"]= fk_cat_id;
	params["product"]= proName;
	params["fDate"]= fDate;
	params["methodName"] = "getSaleDetailsAsPerProductNameForSingleDate";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#sale3').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == null || catmap == undefined || catmap == ""){
			alert("No data for selected entries");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#sale3').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            pageTotal = api
			                .column( 9 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 9 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		         /* 	{"data": "customerBill", "width": "5%"},
		          	{"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice", "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "discountAmount" , "width": "5%"},
		            {"data": "returnQuantity", "width": "5%"},
		           {"data": "taxAmnt", "width": "5%"},
		            {"data": "discountAmount", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"} */
		            
		            {"data": "customerBill", "width": "5%"},
		          	{"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice", "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "discountAmount" , "width": "5%"},
		            {"data": "taxAmnt", "width": "5%"},
		            {"data": "tax", "width": "5%"},

		            {"data": "totalAmount", "width": "5%"},
		            {"data": "iGSTPerc" , "width": "5%"},		          
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Product Name Wise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                messageTop: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#sale3').dataTable().fnAddData(mydata);
	
		}
	

	);


}

/*+++++++++++++++++ Sale report between two dates as per item wise +++++++++++++++++++++++++*/
function saleReportforBetweenTwoAsPerProName(){

	if(document.saleReportTwoDates.fk_cat_id_for_sale.value == "")
	{
		alert("Please Select Product Category");
		return false;
	}
	if(document.saleReportTwoDates.proName1.value == "")
	{
		alert("Please Select Product Name");
		return false;
	}
	if(document.saleReportTwoDates.fisDateForSale.value == "")
	{
		alert("Please Select Start Date");
		return false;
	}
	if(document.saleReportTwoDates.endDateForSale.value == "")
	{
		alert("Please Select End Date");
		return false;
	}
	
	saleReportforBetweenTwoAsPerPro();

}

function saleReportforBetweenTwoAsPerPro(){

	var params= {};
	
	var input1 = document.getElementById('fk_cat_id_for_sale'),
	list = document.getElementById('cat_drop_For_sale'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
	
	
	$("#proName1 option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var fk_cat_id = fk_cat_id;
	var fDate = $('#fisDateForSale').val();
	var sDate = $('#endDateForSale').val();
	params["cat"]= fk_cat_id;
	params["product"]= proName;
	params["fDate"]= fDate;
	params["sDate"]= sDate;
	
	params["methodName"] = "getSaleDetailsAsPerProductNameBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
{
		
		$('#sale4').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == null || catmap == undefined || catmap == ""){
			alert("No data available for selected entries");
			return false;
		}
		
		
		$(document).ready(function() {
		 var total =   $('#sale4').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            pageTotal = api
			                .column( 8 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 8 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "taxPerc", "width": "5%"},
		            {"data": "taxAmnt", "width": "5%"},
		            {"data": "discountAmount", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Product Name Wise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                messageTop: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports'+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Product Name Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#sale4').dataTable().fnAddData(mydata);
	
		}
	

	);


}
/*Supplier Wise Sale report*/
function supplierWiseSaleReport(){
	if(document.saleReportSupplier.fkSupplierId.value == "")
	{
		alert("Please Select Supplier");
		return false;
	}
	supplierWiseSale();
}

function supplierWiseSale(){
	var params= {};
	
	var input1 = document.getElementById('fkSupplierId'),
	list = document.getElementById('sup_drop'),
	i,fkSupplierId;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fkSupplierId = list.options[i].getAttribute('data-value');
		}
	}
	
	var fkSupplierId = fkSupplierId;
	params["fkSupplierId"]= fkSupplierId;
	
	params["methodName"] = "getSaleDetailsAsPerSupplierName";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
{
		
		$('#saleForSupplier').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		
		
		
		$(document).ready(function() {
		 var total =   $('#saleForSupplier').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            pageTotal = api
			                .column( 7 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 7 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},
		            {"data": "quantity1" , "width": "5%"},
		            {"data": "transExpense", "width": "5%"},
		            {"data": "hamaliexpense", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		      
		        
		    } );
		} );
		
	var mydata = catmap;
	$('#saleForSupplier').dataTable().fnAddData(mydata);
	
		}
	
	);

}



/*+++++++++++++++++ Payment Mode Wise +++++++++++++++++++++++++*/
function paymentModeReport(){
	if(document.pay.fk_cat_id_for_payment.value == "")
	{
		alert("Please select Product Category");
		return false;
	}
	
	if(document.pay.paymentModeId.value == "")
	{
		alert("Please select Payment Mode");
		return false;
	}
	
	saleReportAsPerPaymentMode();
}

function saleReportAsPerPaymentMode(){
	var params= {};
	var input1 = document.getElementById('fk_cat_id_for_payment'),
	list = document.getElementById('cat_drop_For_payment'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	var paymentMode = $("#paymentModeId").val(); 
	params["fk_cat_id"]= fk_cat_id;
	params["paymentMode"]= paymentMode;
	params["methodName"] = "getSaleDetailsAsPerPaymentMode";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#paymentModeSelect').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected input");
			return false;
		}
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#paymentModeSelect').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
			 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			         
			            // Total over this page
			            pageTotal = api
			                .column( 2 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 2 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "cusomerName", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Payment Mode Wise Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                messageTop: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

	var mydata = catmap;
	$('#paymentModeSelect').dataTable().fnAddData(mydata);
	
		}
	

	);

}
/*Payment Mode wise Sale report as per single date */
function paymentModeReportAsPerSingleDate(){
	if(document.datepaymentMode.fDateForPaymentMode.value == "")
	{
		alert("Please select Date");
		return false;
	}
	
	if(document.datepaymentMode.fk_cat_id_for_payment_mode.value == "")
	{
		alert("Please select Category");
		return false;
	}
	
	singleDatePaymentModeWiseSaleReport();
}

function singleDatePaymentModeWiseSaleReport(){

	var params= {};
	var input1 = document.getElementById('fk_cat_id_for_payment_mode'),
	list = document.getElementById('cat_drop_For_payment_mode'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	var fDateForPaymentMode = $("#fDateForPaymentMode").val(); 
	params["fk_cat_id"]= fk_cat_id;
	params["singleDate"]= fDateForPaymentMode;
	params["methodName"] = "getSaleDetailsAsPerPaymentModeForSingleDate";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#SinglePayment').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap =="" ||catmap == null ||catmap == undefined){
			alert("No data available for selected input");
			return false;
		}
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#SinglePayment').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            //cash total
			            pageTotal = api
			                .column( 1 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 1 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
			            //cheque total
			            pageTotal = api
		                .column( 2 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 2 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
		            //NEFT total
		            pageTotal = api
	                .column( 3 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 );
	 
	            // Update footer
	            $( api.column( 3 ).footer() ).html(
	            		
	              parseFloat(pageTotal).toFixed(2)
	               
	            );
	            console.log( pageTotal);
		            
	            //Card Total
	            pageTotal = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $( api.column( 4 ).footer() ).html(
            		
              parseFloat(pageTotal).toFixed(2)
               
            );
            console.log( pageTotal);
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "cashAmount", "width": "5%"},
		            {"data": "chequeAmount" , "width": "5%"},
		            {"data": "neftAmount", "width": "5%"},
		            {"data": "cardAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Payment Mode Wise Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                messageTop: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#SinglePayment').dataTable().fnAddData(mydata);
	
		}
	

	);


}


/*Payment Mode wise Sale report for two dates */
function paymentModeReportForTwoDates(){
	if(document.twoDatepaymentMode.fisDateForPay.value == "")
	{
		alert("Please select First Date");
		return false;
	}
	
	if(document.twoDatepaymentMode.endDateForPay.value == "")
	{
		alert("Please select Second Date");
		return false;
	}
	if(document.twoDatepaymentMode.fk_cat_id_for_payment_mode_two.value == "")
	{
		alert("Please select Category");
		return false;
	}
	twoDatePaymentModeWiseSaleReport();
}

function twoDatePaymentModeWiseSaleReport(){

	var params= {};
	var input1 = document.getElementById('fk_cat_id_for_payment_mode_two'),
	list = document.getElementById('cat_drop_For_payment_mode_two'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	var fDateForPaymentMode = $("#fisDateForPay").val(); 
	var secondDateForPaymentMode = $("#endDateForPay").val(); 
	params["fk_cat_id"]= fk_cat_id;
	params["singleDate"]= fDateForPaymentMode;
	params["secondDate"]= secondDateForPaymentMode;
	params["methodName"] = "getSaleDetailsAsPerPaymentModeForTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#TwoPayment').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected input");
			return false;
		}
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#TwoPayment').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            //cash total
			            pageTotal = api
			                .column( 1 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 1 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
			            //cheque total
			            pageTotal = api
		                .column( 2 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 2 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
		            //NEFT total
		            pageTotal = api
	                .column( 3 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 );
	 
	            // Update footer
	            $( api.column( 3 ).footer() ).html(
	            		
	              parseFloat(pageTotal).toFixed(2)
	               
	            );
	            console.log( pageTotal);
		            
	            //Card Total
	            pageTotal = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $( api.column( 4 ).footer() ).html(
            		
              parseFloat(pageTotal).toFixed(2)
               
            );
            console.log( pageTotal);
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "customerBill", "width": "5%"},
		            {"data": "cashAmount", "width": "5%"},
		            {"data": "chequeAmount" , "width": "5%"},
		            {"data": "neftAmount", "width": "5%"},
		            {"data": "cardAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Payment Mode Wise Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                messageTop: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Payment Mode Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

	var mydata = catmap;
	$('#TwoPayment').dataTable().fnAddData(mydata);
	
		}
	

	);


}


function saleReportBetweenToId(){

	var params= {};
	var input1 = document.getElementById('custIdNo'),
	list = document.getElementById('cddd_drop'),
	i,fk_cust_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cust_id = list.options[i].getAttribute('data-value');
		}
	}
	
	var input1 = document.getElementById('custIdNo1'),
	list = document.getElementById('cddd_drop'),
	i,fk_cust_id1;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cust_id1 = list.options[i].getAttribute('data-value');
		}
	}
	
	params["fk_cust_id"]= fk_cust_id;
	params["fk_cust_id1"]= fk_cust_id1;
	params["methodName"] = "saleReportBetweenToId";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		$('#saleBetTwoId').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected entry");
			return false;
		}
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#saleBetTwoId').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            //cash total
			            /*pageTotal = api
			                .column( 1 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 1 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
			            //cheque total
			            pageTotal = api
		                .column( 2 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 2 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
		            //NEFT total
		            pageTotal = api
	                .column( 3 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 );
	 
	            // Update footer
	            $( api.column( 3 ).footer() ).html(
	            		
	              parseFloat(pageTotal).toFixed(2)
	               
	            );
	            console.log( pageTotal);*/
		            
	            //Card Total
	            pageTotal = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $( api.column( 4 ).footer() ).html(
            		
              parseFloat(pageTotal).toFixed(2)
               
            );
            console.log( pageTotal);
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		            {"data": "custName", "width": "5%"},
		            {"data": "totalAmount" , "width": "5%"},
		            {"data": "initialPayment", "width": "5%"},
		            {"data": "balAftInitialPayment" , "width": "5%"},
		            {"data": "balanceAmount" , "width": "5%"}
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Customer ID Wise Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Customer ID Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Customer ID Wise Reports '+fDate,
			                messageTop: 'Customer ID Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Customer ID Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Customer ID Wise Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#saleBetTwoId').dataTable().fnAddData(mydata);
	
		}
	

	);


}

/*GST wise Sale Report*/
function gstWiseSaleReport(){

	if(document.gst.gstFisDate.value == "")
	{
		alert("Please select start date");
		return false;
	}
	
	if(document.gst.gstEndDate.value == "")
	{
		alert("Please select end date");
		return false;
	}
	if(document.gst.fk_cat_id_for_GST.value == "")
	{
		alert("Please select Category");
		return false;
	}
	GSTWiseSaleReport();
}

function GSTWiseSaleReport(){

	var params= {};
	var input1 = document.getElementById('fk_cat_id_for_GST'),
	list = document.getElementById('cat_drop_For_GST'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	var startDate = $("#gstFisDate").val();
	var endDate = $("#gstEndDate").val();
	
	params["fk_cat_id"]= fk_cat_id;
	params["startDate"]= startDate;
	params["endDate"]= endDate;
	
	params["methodName"] = "getSaleDetailsAsPerGST";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		
		$('#gstSale').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if("No data available for selected entry");
		return false;
		/*$(document).ready(function() {
		    
		} );
		*/
		
		$(document).ready(function() {
		 var total =   $('#gstSale').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			 
			            // Total over all pages
			            /* total = api
			                .column( 6 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 ); 
			 			console.log(total); */
			            // Total over this page
			            //for item Rate total
			            pageTotal = api
			                .column( 7 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 7 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
			            // Quantity total
			            pageTotal = api
		                .column( 8 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 8 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
		            
		            // Quantity total
		            pageTotal = api
	                .column( 9 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 );
	 
	            // Update footer
	            $( api.column( 9 ).footer() ).html(
	            		
	              parseFloat(pageTotal).toFixed(2)
	               
	            );
	            console.log( pageTotal);
	            
	            pageTotal = api
                .column( 10 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $( api.column( 10 ).footer() ).html(
            		
              parseFloat(pageTotal).toFixed(2)
               
            );
            console.log( pageTotal);
        
            // Quantity total
            pageTotal = api
            .column( 11 )
            .data()
            .reduce( function (a, b) {
                return intVal(a) + intVal(b);
            }, 0 );

        // Update footer
        $( api.column( 11 ).footer() ).html(
        		
          parseFloat(pageTotal).toFixed(2)
           
        );
        console.log( pageTotal);
        
        // Quantity total
        pageTotal = api
        .column( 12 )
        .data()
        .reduce( function (a, b) {
            return intVal(a) + intVal(b);
        }, 0 );

    // Update footer
    $( api.column( 12 ).footer() ).html(
    		
      parseFloat(pageTotal).toFixed(2)
       
    );
    console.log( pageTotal);
    
    
    pageTotal = api
    .column( 13 )
    .data()
    .reduce( function (a, b) {
        return intVal(a) + intVal(b);
    }, 0 );

// Update footer
$( api.column( 13 ).footer() ).html(
		
  parseFloat(pageTotal).toFixed(2)
   
);
console.log( pageTotal);

// Quantity total
pageTotal = api
.column( 14 )
.data()
.reduce( function (a, b) {
    return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 14 ).footer() ).html(
	
parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);

// Quantity total
pageTotal = api
.column( 15 )
.data()
.reduce( function (a, b) {
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 15 ).footer() ).html(

parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);

pageTotal = api
.column( 16 )
.data()
.reduce( function (a, b) {
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 16 ).footer() ).html(

parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);

// Quantity total
pageTotal = api
.column( 17 )
.data()
.reduce( function (a, b) {
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 17 ).footer() ).html(

parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);

// Quantity total
pageTotal = api
.column( 18 )
.data()
.reduce( function (a, b) {
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 18 ).footer() ).html(

parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);

//Quantity total
pageTotal = api
.column( 19 )
.data()
.reduce( function (a, b) {
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 19 ).footer() ).html(

parseFloat(pageTotal).toFixed(2)

);
console.log( pageTotal);
    
		        },
		    
		    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	{"data": "serialnumber", "width": "5%", "defaultContent": ""},
		            {"data": "saleDate", "width": "5%", "defaultContent": ""},
		            {"data": "cusomerName" , "width": "5%", "defaultContent": ""},
		            {"data": "billNo", "width": "5%", "defaultContent": ""},
		            {"data": "gstNumber", "width": "5%", "defaultContent": ""},
		            {"data": "hsnNumber" , "width": "5%", "defaultContent": ""},
		            {"data": "itemName", "width": "5%", "defaultContent": ""},
		            {"data": "SalePrice", "width": "5%", "defaultContent": ""},
		            {"data": "quantity1", "width": "5%", "defaultContent": ""},
		            {"data": "totalAmount" , "width": "5%", "defaultContent": ""},
		            {"data": "fivePercentageGST", "width": "5%", "defaultContent": ""},
		            {"data": "twelwePercentageGST", "width": "5%", "defaultContent": ""},
		            {"data": "eighteenPercentageGST" , "width": "5%", "defaultContent": ""},
		            {"data": "twentyEightPercentageGST", "width": "5%", "defaultContent": ""},
		            {"data": "iGSTFivePercentage", "width": "5%", "defaultContent": ""},
		            {"data": "iGSTTwelwePercentage" , "width": "5%", "defaultContent": ""},
		            {"data": "iGSTEighteenPercentage", "width": "5%", "defaultContent": ""},
		            {"data": "iGSTTwentyeightPercentage", "width": "5%", "defaultContent": ""},
		            {"data": "totalTaxAmount" , "width": "5%", "defaultContent": ""},
		            {"data": "netAmount" , "width": "5%", "defaultContent": ""}
		            
		        ],
		        dom: 'Bfrtip',
		        buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'GST Wise Sale Reports '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'GST Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'GST Wise Sale Reports '+fDate,
			                messageTop: 'GST Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'GST Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'GST Wise Sale Reports '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});

		
	var mydata = catmap;
	$('#gstSale').dataTable().fnAddData(mydata);
	
		}
	

	);


}


//GST Summary Report
function gstSummaryReportRange(){

	var params= {};
	var gstFisDate1 = $('#gstFisDate1').val();
	var gstEndDate1 = $('#gstEndDate1').val();

	
	params["gstFisDate1"]= gstFisDate1;
	params["gstEndDate1"]= gstEndDate1;
	
	params["methodName"] = "gstSummaryReportsBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
{
		
		$('#gstSummary').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		
		
		
		$(document).ready(function() {
		 var total =   $('#gstSummary').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			            
			            pageTotal = api
		                .column( 3 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 3 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
			 
			            pageTotal = api
		                .column( 4 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 4 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
			            pageTotal = api
			                .column( 5 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 5 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	/*{"data": "customerBill", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},*/
		            {"data": "quantity3" , "width": "5%"},
		            {"data": "tax", "width": "5%"},
		            {"data": "iGSTPerc", "width": "5%"},
		            {"data": "cgstAmnt", "width": "5%"},
		            {"data": "sgstAmnt" , "width": "5%"},
		            {"data": "igstAmnt", "width": "5%"}
		        ],
		        dom: 'Bfrtip',
	            buttons: [
	                'copy', 'csv', 'excel', 'pdf', 'print'
	            ]
		        
		    } );
		} );
		
	var mydata = catmap;
	$('#gstSummary').dataTable().fnAddData(mydata);
	
		}
	

	);


}

//GST Purchase Summary Report
function gstPurchaseSummaryReportRange(){

	var params= {};
	var gstFisDate1 = $('#gstFisDate1').val();
	var gstEndDate1 = $('#gstEndDate1').val();

	
	params["gstFisDate1"]= gstFisDate1;
	params["gstEndDate1"]= gstEndDate1;
	
	params["methodName"] = "gstPurchaseSummaryReportsBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
{
		
		$('#gstPurchaseSummary').dataTable().fnClearTable();
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		
		
		
		$(document).ready(function() {
		 var total =   $('#gstPurchaseSummary').DataTable( {
			 
			 fnRowCallback : function(nRow, aData, iDisplayIndex){
	                $("th:first", nRow).html(iDisplayIndex +1);
	               return nRow;
	            },
			
	        	
				 "footerCallback": function ( row, data, start, end, display ) {
			            var api = this.api(), data;
			 
			            // Remove the formatting to get integer data for summation
			            var intVal = function ( i ) {
			                return typeof i === 'string' ?
			                    i.replace(/[\$,]/g, '')*1 :
			                    typeof i === 'number' ?
			                        i : 0;
			            };
			            
			            pageTotal = api
		                .column( 3 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 3 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
			 
			            pageTotal = api
		                .column( 4 )
		                .data()
		                .reduce( function (a, b) {
		                    return intVal(a) + intVal(b);
		                }, 0 );
		 
		            // Update footer
		            $( api.column( 4 ).footer() ).html(
		            		
		              parseFloat(pageTotal).toFixed(2)
		               
		            );
		            console.log( pageTotal);
			            pageTotal = api
			                .column( 5 )
			                .data()
			                .reduce( function (a, b) {
			                    return intVal(a) + intVal(b);
			                }, 0 );
			 
			            // Update footer
			            $( api.column( 5 ).footer() ).html(
			            		
			              parseFloat(pageTotal).toFixed(2)
			               
			            );
			            console.log( pageTotal);
		            
		        },
		    	    	
		    	destroy: true,
		        searching: false,
		        
		      
		columns: [
		          	/*{"data": "customerBill", "width": "5%"},
		            {"data": "soldDate", "width": "5%"},
		            {"data": "itemName", "width": "5%"},
		            {"data": "SalePrice" , "width": "5%"},*/
		            {"data": "Qnty" , "width": "5%"},
		            {"data": "tax", "width": "5%"},
		            {"data": "iGSTPerc", "width": "5%"},
		            {"data": "cgstAmnt", "width": "5%"},
		            {"data": "sgstAmnt" , "width": "5%"},
		            {"data": "igstAmnt", "width": "5%"}
		        ],
		        dom: 'Bfrtip',
	            buttons: [
	                'copy', 'csv', 'excel', 'pdf', 'print'
	            ]
		        
		    } );
		} );
		
	var mydata = catmap;
	$('#gstPurchaseSummary').dataTable().fnAddData(mydata);
	
		}
	

	);


}