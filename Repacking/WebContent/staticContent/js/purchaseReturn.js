
function getAllBills()
	{
		
		 var input = document.getElementById('supplier'),
	     list = document.getElementById('sup_drop'),
	     i,supplier;
	
		for (i = 0; i < list.options.length; ++i) {
	     if (list.options[i].value === input.value) {
	    	 supplier = list.options[i].getAttribute('data-value');
	     }
	 }
		
	 var supplier = supplier;
		//$("#bill_no").empty();
		$("#bill_no").append($("<option></option>").attr("value","").text("Select bill"));
		var params= {};
		
		params["methodName"] = "getAllBillBySuppliers";
		
		params["supplier"]= supplier;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			var jsonData = $.parseJSON(data);
			//var jsonData = jsonData.list;
			$.each(jsonData,function(i,v)
					{
				$("#bill_no").append($("<option></option>").attr("value",i).text(v.billNo)); 
				
					});
				})

	}







function fetchDataForPurchase(){
	
	var bill_no = $('#bill_no').val();
	
	var input = document.getElementById('supplier'),
    list = document.getElementById('sup_drop'),
    i,supplier;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
   	 supplier = list.options[i].getAttribute('data-value');
    }
    }
	
	var params= {};
	
	params["methodName"] = "getAllIetmByBillNo";
	
	params["bill_no"]= bill_no;
	params["supplier"]= supplier;
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{ 

		 
		var jsonData = $.parseJSON(data);
		//$("#jqGrid1").jqGrid("clearGridData", true);
		
		$("#jqGrid").jqGrid("clearGridData", true).trigger("reloadGrid");

		/* function sumFmatter (cellvalue, options, rowObject)
	        {
			 
			
			 
	        	var jam=0;
	        	var jam1="";
	        	var tot= (options.rowData.quantity * options.rowData.buyPrice);
	        	//var shree = document.poferti.grossTotal.value;// to get gross total
	     
	        	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
	        	var AllRows=JSON.stringify(allRowsInGrid1);
	        	for (var i = 0; i < count; i++) {
	        		
	            	var quantity = allRowsInGrid1[i].quantity;
	             	params["quantity"+i] = quantity;
	             	
	             	var buyPrice = allRowsInGrid1[i].buyPrice;
	            	params["buyPrice"+i] = buyPrice;
	            	
	            	
	            	var totals1=((buyPrice)*(quantity));
	            
	            	jam = jam + totals1;
	            	
	            
        	    }
	        	if(count == 0){
	        		document.getElementById("total").value = tot;
	        		document.getElementById("duptotal").value = tot;
	        	}else{
	        	document.getElementById("total").value = jam;
	        	document.getElementById("duptotal").value = jam;
	        	}
	        	
 	
	           return tot;
	 		   }
	       
	          	
	      
	        
		*/
	
		 
		$.each(jsonData,function(i,v)
				{
			$("#jqGrid").jqGrid({
			
				datatype:"local",

				colNames: ["Product ID","Supplier","Product Name","Category","Company","Batch No","Packing","Buy Price","Sale Price","M.R.P","Tax per","Quantity","Return Quantity","Dc No","Barcode No","PurchaseDate","DuplicateQuant" ],

				colModel: [
				           { 	
				        	   name: "pk_goods_receive_id",
				        	   hidden:true
				        	   //resizable: true,
				           },
				           { 	
				        	   name: "supplier_name",
				        	   width:100,
				        	   //resizable: true,
				           },
				           { 	
				        	   name: "product_name",
				        	   width:100,
				        	   //resizable: true,
				           },
				           { 	
				        	   name: "catName",
				        	   width:100,
				           },
				           {
				        	   name: "company_Name",
				        	   width: 80
				           },
				           {
				        	   name: "batch_no",
				        	   width: 70
				           },	
				           {
				        	   name:  "weight",
				        	   width: 70
				           },
				           {
				        	   name: "buy_price",
				        	   width: 70,
				           },
				           {
				        	   name: "sale_price",
				        	   width: 70
				           },
				           {
				        	   name : 'mrp',
				        	   //formatter: sumFmatter,
				        	   width: 70
				           },
				           {
				        	   name: "tax_percentage",
				        	   width: 50
				           },
				           {
				        	   name: "dupQuantity1",
				        	   width: 70
				           },
				           {
				        	   name: "quantity1",
				        	   width: 100,
				        	   editable:true
				           },
				           {
				        	   name: "dc_number",
				        	   width: 70
				           },
				           {
				        	   name: "barcodeNo",
				        	   width: 80
				           },
				           {
				        	   name: "purchaseDate",
				        	   width: 140
				           }
				           ,
				           {
				        	   name: "dupQuantity1",
				        	   hidden: true
				           }
				           ],


				           sortorder : 'desc',
				           
				           multiselect: false,	
				           loadonce: false,
				           rownumbers:true,
				           forcePlaceholderSize: true ,
				           'cellEdit':true,
				           viewrecords: true,
				           width: 1400,
				           shrinkToFit:true,
				           rowNum: 10,
				           pager: "#jqGridPager",
				           sortorder: "desc",
			});

			$("#jqGrid").addRowData(i,jsonData[i]);
			
			$('#jqGrid').navGrid('#jqGridPager',
					// the buttons to appear on the toolbar of the grid
					{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
					// options for the Edit Dialog
					
					{
						afterSubmit: function () {
							  $(this).trigger('reloadGrid');
						},
						editCaption: "The Edit Dialog",
						recreateForm: true,
						checkOnUpdate : true,
						checkOnSubmit : true,
						closeAfteredit: true,
						errorTextFormat: function (data) {
							return 'Error: ' + data.responseText
						}
					
					},
					{},
					// options for the Delete Dialogue
					{    
						afterSubmit: function () {
							  $(this).trigger('reloadGrid');
						},
						closeAfterdel:true,
						recreateForm: true,
						errorTextFormat: function (data) {
							return 'Error: ' + data.responseText
						},

						onSelectRow: function(id) {
							if (id && id !== lastSel) {
								jQuery("#jqGrid").saveRow(lastSel, true, 'clientArray');
								jQuery("#jqGrid").editRow(id, true);
								
								lastSel = id;
								console.log(id);
							}
						}
						
						
					});
			
		// grid refresh code	
			
				});
       
			}); 
			
}




function purchaseDetails() {
	var params={};
	
	var input = document.getElementById('supplier'),
    list = document.getElementById('sup_drop'),
    i,supplier;
	
	for (i = 0; i < list.options.length; ++i) {
	    if (list.options[i].value === input.value) {
	   	 supplier = list.options[i].getAttribute('data-value');
	    }
	    
	}
	
	var bill_no = $('#bill_no').val();
	//alert("Bill number---------"+bill_no);
	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var pk_goods_receive_id = allRowsInGrid[i].pk_goods_receive_id;
		//alert("goodsreceive id----------"+pk_goods_receive_id)
		params["pk_goods_receive_id"+i] = pk_goods_receive_id;
		
		var dupQuantity1 = allRowsInGrid[i].dupQuantity1;
	//	alert("dupQuantity1"+dupQuantity1);
		params["dupQuantity1"+i] = dupQuantity1;
		
		var product_name = allRowsInGrid[i].product_name;
		//alert("product_name"+product_name);
		params["product_name"+i] = product_name;
		
		var company_Name = allRowsInGrid[i].company_Name;
		//alert("company_Name"+company_Name);
		params["company_Name"+i] = company_Name;
		
		var weight = allRowsInGrid[i].weight;
		//alert("weight"+weight);
		params["weight"+i] = weight;
		
		var quantity1 = allRowsInGrid[i].quantity1;
		//alert("quantity1"+quantity1);
		/*if(quantity == "" || quantity == null || quantity ==undefined || quantity == 0)
		{
			alert("Please Enter Quantity\n-- RETURN QUANTITY MUST BE LESS THAN AVALABLE QUANTITY --");
			document.getElementById("save").disabled = false;
			return false;				
		}*/
		params["quantity1"+i] = quantity1;
		
		//params["quantity1"+i] = quantity1;
		
		/*if(Number(quantity) > Number(dupQuantity1))
			{
				alert("Please Enter Return Quantity less than Available Quantity");
				document.getElementById("save").disabled = false;
				return false;				
			}*/
		
		
		var mrp = allRowsInGrid[i].mrp;
		//alert("mrp"+mrp);
		params["mrp"+i] = mrp;
		
		var tax_percentage = allRowsInGrid[i].tax_percentage;
		//alert("tax_percentage"+tax_percentage);
		params["tax_percentage"+i] = tax_percentage;
		
		var buy_price = allRowsInGrid[i].buy_price;
		//alert("buy_price"+buy_price);
		params["buy_price"+i] = buy_price;
		
		var supplier_name = allRowsInGrid[i].supplier_name;
		//alert("supplier_name"+supplier_name)
		params["supplier_name"+i] = supplier_name;
		
		var purchaseDate = allRowsInGrid[i].purchaseDate;
		//alert("purchaseDate"+purchaseDate);
		params["purchaseDate"+i] = purchaseDate;
		
		var barcodeNo = allRowsInGrid[i].barcodeNo;
		//alert("barcodeNo"+barcodeNo)
		params["barcodeNo"+i] = barcodeNo;
		
		
		var catName = allRowsInGrid[i].catName;
		//alert("catName"+catName);
		params["catName"+i] = catName;
		
		
	}
	
	params["bill_no"] = bill_no;
	params["count"] = count;
    params["methodName"] = "PurchaseReturn";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 				//alert(data);
 				//returntMinusFromStockPurchase();
 				
 				
 	    	}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});
}





function purchaseRetunValidation()
{
	if(document.prf.supplier.value != "")
	{
		if(document.prf.bill_no.value != "")
		{
			returntPurchase();
			returntMinusFromStockPurchase();
		}
		else
		{
			alert("Please Select Bill Number ");
			return false;
		}
	}
	else
	{
		alert("Please Select Supplier Name");
		return false;
	}
}

function returntPurchase(){
	var params={};
	var input = document.getElementById('supplier'),
    list = document.getElementById('sup_drop'),
    i,supplier;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
   	 supplier = list.options[i].getAttribute('data-value');
    }
    
}
	var bill_no = $('#bill_no').val();
	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var pk_goods_receive_id = allRowsInGrid[i].pk_goods_receive_id;
		//alert("goodsreceive id----------"+pk_goods_receive_id)
		params["pk_goods_receive_id"+i] = pk_goods_receive_id;
		
		var dupQuantity1 = allRowsInGrid[i].dupQuantity1;
		params["dupQuantity1"+i] = dupQuantity1;
		
		var product_name = allRowsInGrid[i].product_name;
		params["product_name"+i] = product_name;
		
		var company_Name = allRowsInGrid[i].company_Name;
		params["company_Name"+i] = company_Name;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
		var quantity1 = allRowsInGrid[i].quantity1;
		
		/*if(QuantityToReturn == "" || QuantityToReturn == null || QuantityToReturn ==undefined || QuantityToReturn == 0)
		{
			alert("Please Enter Quantity\n-- RETURN QUANTITY MUST BE LESS THAN AVALABLE QUANTITY --");
			document.getElementById("save").disabled = false;
			return false;				
		}*/
		params["quantity1"+i] = quantity1;
		
		//params["quantity1"+i] = quantity1;
		
		/*if(Number(QuantityToReturn) > Number(dupQuantity1))
			{
				alert("Please Enter Return Quantity less than Available Quantity");
				document.getElementById("save").disabled = false;
				return false;				
			}*/
		
		
		var mrp = allRowsInGrid[i].mrp;
		params["mrp"+i] = mrp;
		
		var tax_percentage = allRowsInGrid[i].tax_percentage;
		params["tax_percentage"+i] = tax_percentage;
		
		var buy_price = allRowsInGrid[i].buy_price;
		params["buy_price"+i] = buy_price;
		
		var supplier_name = allRowsInGrid[i].supplier_name;
		//alert("supplier_name"+supplier_name)
		params["supplier_name"+i] = supplier_name;
		
		var insertDate = allRowsInGrid[i].insertDate;
		params["insertDate"+i] = insertDate;
		
		var barcodeNo = allRowsInGrid[i].barcodeNo;
		params["barcodeNo"+i] = barcodeNo;
		
		
		var catName = allRowsInGrid[i].catName;
		params["catName"+i] = catName;
		
	}
	
	params["bill_no"] = bill_no;
	params["count"] = count;
    params["methodName"] = "returntPurchase";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 				//alert(data);
 				//returntMinusFromStockPurchase();
 				
 				
 	    	}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});
	
}

function returntMinusFromStockPurchase(){
	var params={};
	
	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var pk_goods_receive_id = allRowsInGrid[i].pk_goods_receive_id;
		params["pk_goods_receive_id"+i] = pk_goods_receive_id;
		
		var dupQuantity1 = allRowsInGrid[i].dupQuantity1;
		params["dupQuantity1"+i] = dupQuantity1;
		
		var product_name = allRowsInGrid[i].product_name;
		params["product_name"+i] = product_name;
		
		var company_Name = allRowsInGrid[i].company_Name;
		params["company_Name"+i] = company_Name;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
//		var QuantityToReturn = allRowsInGrid[i].QuantityToReturn;
		var QuantityToReturn = allRowsInGrid[i].quantity1
		params["QuantityToReturn"+i] = QuantityToReturn;
	}
	
	params["count"] = count;
    params["methodName"] = "returntMinusFromStockPurchase";
	
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

function registerPurchaseReturn(){
	
var params={};
	
	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var pk_goods_receive_id = allRowsInGrid[i].pk_goods_receive_id;
		params["pk_goods_receive_id"+i] = pk_goods_receive_id;
		
		var dupQuantity = allRowsInGrid[i].dupQuantity;
		params["dupQuantity"+i] = dupQuantity;
		
		var product_name = allRowsInGrid[i].product_name;
		params["product_name"+i] = product_name;
		
		var company_Name = allRowsInGrid[i].company_Name;
		params["company_Name"+i] = company_Name;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
		
		var duplicateQuantity = allRowsInGrid[i].dupQuantity1;
		params["duplicateQuantity"+i] = duplicateQuantity;
	
	}
	
	params["count"] = count;
    params["methodName"] = "returntMinusFromStockPurchase";
	
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