function fetchproductname(){
	
	
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
				$("#proName").append($("<option></option>").attr("value",count).text(v.product + ","+v.manufacturer+","+v.weight)); 
				//$("#batchNo").append($("<option></option>").attr("value",v.batchNo).text("Batch No = "+v.batchNo + "  " +" Stock = "+ v.quantityForBatchNo ));
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
}



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
			
			params["methodName"] = "getAllProductByCategories";
			
			params["fk_cat_id"]= fk_cat_id;
			
			$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
					{
				var jsonData = $.parseJSON(data);
				$.each(jsonData,function(i,v)
						{
					$("#proName").append($("<option></option>").attr("value",i).text(v.product)); 
					
						});
					}).error(function(jqXHR, textStatus, errorThrown){
						if(textStatus==="timeout") {

						}
					});
			
		}



function getAllProductForBooked(){

	
	var input1 = document.getElementById('fk_cat_id1'),
	list = document.getElementById('cat_drop1'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	var input1 = document.getElementById('supplier1'),
	list = document.getElementById('sup_drop1'),
	i,fk_sup_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_sup_id = list.options[i].getAttribute('data-value');
		}
	}
	
 var fk_cat_id = fk_cat_id;
 var fk_sup_id = fk_sup_id;
	$("#proName1").empty();
	$("#proName1").append($("<option></option>").attr("value","").text("Select product"));
	var params= {};
	
	params["methodName"] = "getAllProductByCategoriesAndBySupplierForBookedGoodsReceiveNew";
	
	params["fk_cat_id"]= fk_cat_id;
	params["fk_sup_id"]= fk_sup_id;
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		var count = 1;
		var jsonData = $.parseJSON(data);
		$.each(jsonData,function(i,v)
				{
			$("#proName1").append($("<option></option>").attr("value",count).text(v.product + ","+v.manufacturer+","+v.weight+","+v.unitName));
				count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
	

	
}


function prodetail(){
	
	
	var itemparams={};
	var productId = $('#proName').val();
	
	itemparams["productId"]= productId;
	itemparams["methodName"] = "getpreviousDetsil";
	
	$.post('/Repacking/jsp/utility/controller.jsp',itemparams,function(data)
			{
		var jsonData = $.parseJSON(data);
		$.each(jsonData,function(i,v)
				{
			//$("#proName").append($("<option></option>").attr("value",i).text(v.product)); 
			 
			 alert( "Previous Purchase Detail Of "  +v.productName+  "\nProduct"+
					"\n\n\nProduct Name : " +v.productName+
					"\nBuy Price    : " +v.buyPrice+
					"\nSale Price   : " +v.salePrice+
					"\nQuantity     : " +v.quantity+
					"\nWeight       : " +v.weight+
					"\nMRP          : " +v.mrp);
			 
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
	
	
}





function getdetails()
{
	
	var productList = "";
	this.getProductdetails = getProductdetails;
	this.getAllProductDetailsForBooked = getAllProductDetailsForBooked;
	
	function getProductdetails()
	{	
		//Grid for Retail if it is checked 
		if (document.getElementById('retail').checked) {
		jQuery("#jqGrid").trigger('reloadGrid');
		
		
		
		var params= {};
		var itemparams={};
		var productId = $('#proName').val();
		
		itemparams["productId"]= productId;
		itemparams["methodName"] = "getProductDetailsPO";
		$.post('/Repacking/jsp/utility/controller.jsp',itemparams,function(data)
				{ 
			var jsonData = $.parseJSON(data);
			
	

			 function sumFmatter (cellvalue, options, rowObject)
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
		        	}else{
		        	document.getElementById("total").value = jam;
		        	}
		         // to check whether bill is with or without VAT  
		        	if (document.getElementById('retail').checked) {
		       
		 			   /*	Gross total calculation without VAT for cash customer 	*/
		        	var expence = document.getElementById("extraExpence").value;
		        	totalWithExpence = Number(jam) + Number(expence);
		        	var discount = $('#discount').val();
		        	var discountAmount = ((discount/100)*totalWithExpence);
		        	var totalminusDiscount = totalWithExpence - discountAmount;
		        	document.getElementById("discountAmount").value = discountAmount;
		        	
		        	document.getElementById("grossTotal").value = totalminusDiscount;
     	
		           return tot;
		 		   }
		       
		           else{
		           /*	Gross total calculation with VAT for cash customer 	*/
		           /*Vat Amount calculation*/
			        	var expence = document.getElementById("extraExpence").value;
			        	totalWithExpence = Number(jam) + Number(expence);
			        	var discount = $('#discount').val();
			        	var discountAmount = ((discount/100)*totalWithExpence);
			        	var totalminusDiscount = totalWithExpence - discountAmount;
			        	document.getElementById("discountAmount").value = discountAmount;
			        	
			        	document.getElementById("grossTotal").value = totalminusDiscount;
	     	
			           return tot; 	 
		           }	
		        }
		        
			
		
			 
			$.each(jsonData,function(i,v)
					{

				
				
				$("#jqGrid").jqGrid({
					
				
				
					datatype:"local",

					colNames: ["Product ID","Product Name","Buy Price","M.R.P","Sale Price","Packing","Quantity","Total","BatchNo","ExpiryDate" ],

					colModel: [
					           { 	
					        	   name: "productID",
					        	   hidden:true
					        	   //resizable: true,


					           },
					           { 	
					        	   name: "productName",
					        	   width:100,

					           },
					           {
					        	   name: "buyPrice",
					        	   width: 140,
					        	   editable: true
					           },
					           {
					        	   name: "mrp",
					        	   width: 140,
					        	   editable: true
					           },	


					           {
					        	   name:  "salePrice",
					        	   width: 140,
					        	   editable: true
					           },
					           
					           {
					        	   name: "weight",
					        	   width: 100,
					        	   editable: true
					           },

					           {
					        	   name: "quantity",
					        	   width: 140,
					        	   editable: true


					           },

					         {
					        	   name : 'Total',
					        	  // name: "",
					        	  formatter: sumFmatter,
					        	   width: 150,
					        	  
					           },
					           {
					        	   label : 'batchNo',
					        	   name: "batchNo",
					        	   width: 150,
					        	   editable:true,
					        	  
					        	  
					           },
					           {
					        	   label : 'expiryDate',
					        	   name: "expiryDate",
					        	   index:'Date',
					        	   width: 200,
					        	   editable:true,
					        	   edittype:"text",
					        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
					        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
					           }
					           ],


					           sortorder : 'desc',
					           
					           multiselect: false,	
					           loadonce: false,
					           rownumbers:true,
					           'cellEdit':true,
					           afterSaveCell: function  grossTotal() {
							       /* 	Calculation of total after editing quantity*/
							        	   
							        	   // $(this).trigger('reloadGrid');
							        	   var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
					                       var rowData = jQuery("#jqGrid").getRowData(rowId);
					                    	var quantity = rowData['quantity'];
					                    	var buyPrice = rowData['buyPrice'];
					                    	
					                    	var tota = quantity * buyPrice;
					                    	$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
					        	},
					           
					        
					        	
					           
					           viewrecords: true,
					           width: 1200,
					           height: 250,
					           rowNum: 10,
					           pager: "#jqGridPager",
					           sortorder: "desc",
					       	onSelectRow: function(productID){
					       		if(productID && productID!==lastsel){
					       			jQuery('#jqGrid').jqGrid('restoreRow',lastsel);
					       			jQuery('#jqGrid').jqGrid('editRow',productID,true);
					       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
					       			lastsel=productID;
					       		}
					       	},
					       	
				});

				$("#jqGrid").addRowData(i,jsonData[i]);
				function pickdates(productID){
					jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
				}
				/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


				
				$('#jqGrid').navGrid('#jqGridPager',
						// the buttons to appear on the toolbar of the grid
						{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
						// options for the Edit Dialog
						
						
						
						
						
						{
							
							afterSaveCell: function () {
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
						
						
						
						// options for the Delete Dialogue
						{
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
		
		//Grid for Tax if retail is not checked
		else if (document.getElementById('vat').checked)
			{

			jQuery("#jqGrid").trigger('reloadGrid');
			
			
			
			var params= {};
			itemparams={};
			productId = $('#proName').val();
			
			itemparams["productId"]= productId;
			itemparams["methodName"] = "getProductDetailsForGoodsReceiveForTax";
			$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
					
					
					function(data)
					{ 
				var jsonData = $.parseJSON(data);
				
		

				 function sumFmatter (cellvalue, options, rowObject)
			        {
					 
					
					 
			        	var jam=0;
			        	var jam1="";
			        	var tot= ((options.rowData.quantity) * ((options.rowData.buyPrice)+((options.rowData.taxPercentage/100)*options.rowData.buyPrice)));
			        	//var shree = document.poferti.grossTotal.value;// to get gross total
			     
			        	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
			        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
			        	var AllRows=JSON.stringify(allRowsInGrid1);
			        	for (var i = 0; i < count; i++) {
			        		
			            	var quantity = allRowsInGrid1[i].quantity;
			             	params["quantity"+i] = quantity;
			             	
			             	var buyPrice = allRowsInGrid1[i].buyPrice;
			            	params["buyPrice"+i] = buyPrice;
			            	
			            	var taxPercentage = allRowsInGrid1[i].taxPercentage;
			            	params["taxPercentage"+i] = taxPercentage;
			            	
			            	var taxAmount = ((taxPercentage/100)*buyPrice);
			            	
			            	var priceWithTaxamount = taxAmount+buyPrice;
			            	
			            	var totals1=((priceWithTaxamount)*(quantity));
			            
			            	jam = jam + totals1;
			            	
			            	document.getElementById("total").value = jam;
		        	    }
			        	if(count == 0){
			        		document.getElementById("total").value = tot;
			        	}
			        	else{
			        	document.getElementById("total").value = jam;
			        	}
			        	
			         // to check whether bill is with or without VAT  
			        	if (document.getElementById('retail').checked) {
			       
			 			   /*	Gross total calculation without VAT for cash customer 	*/
			        	var expence = document.getElementById("extraExpence").value;
			        	totalWithExpence = Number(jam) + Number(expence);
			        	var discount = $('#discount').val();
			        	var discountAmount = ((discount/100)*totalWithExpence);
			        	var totalminusDiscount = totalWithExpence - discountAmount;
			        	document.getElementById("discountAmount").value = discountAmount;
			        	
			        	document.getElementById("grossTotal").value = totalminusDiscount;
	     	
			           return tot;
			 		   }
			       
			           else{
			           /*	Gross total calculation with VAT for cash customer 	*/
			           /*Vat Amount calculation*/
			        	   var expence = document.getElementById("extraExpence").value;
				        	totalWithExpence = Number(jam) + Number(expence);
				        	var discount = $('#discount').val();
				        	var discountAmount = ((discount/100)*totalWithExpence);
				        	var totalminusDiscount = totalWithExpence - discountAmount;
				        	document.getElementById("discountAmount").value = discountAmount;
				        	
				        	document.getElementById("grossTotal").value = totalminusDiscount;
		     	
				           return tot;	 
			           }	
			        }
			        
				
			
				 
				$.each(jsonData,function(i,v)
						{

					var productName =  v.productName;
					var  buyPrice =  v.buyPrice;  
					var salePrice =v.salePrice;
					var quantity = v.quantity;
					var weight = v.weight ;
					var productID = v.productID ;
					var lastsel = productID;
					
					$("#jqGrid").jqGrid({
						
					
					
						datatype:"local",

						colNames: ["Product ID","Product Name","Buy Price","Tax %","M.R.P","Sale Price","Packing","Quantity","Total","BatchNo","ExpiryDate" ],

						colModel: [
						           { 	
						        	   name: "productID",
						        	   hidden:true
						        	   //resizable: true,


						           },
						           { 	
						        	   name: "productName",
						        	   width:100,

						           },
						           {
						        	   name: "buyPrice",
						        	   width: 120,
						        	   editable: true
						           },	
						           {
						        	   name: "taxPercentage",
						        	   width: 140,
						        	   editable: true
						           },
						           {
						        	   name: "mrp",
						        	   width: 140,
						        	   editable: true
						           },
						           {
						        	   name:  "salePrice",
						        	   width: 140,
						        	   editable: true
						           },
						           
						           {
						        	   name: "weight",
						        	   width: 100,
						        	   
						           },

						           {
						        	   name: "quantity",
						        	   width: 120,
						        	   editable: true


						           },

						         {
						        	   name : 'Total',
						        	  // name: "",
						        	  formatter: sumFmatter,
						        	   width: 150,
						        	  
						           },
						           {
						        	   label : 'batchNo',
						        	   name: "batchNo",
						        	   width: 150,
						        	   editable:true,
						        	  
						        	  
						           },
						           {
						        	   label : 'expiryDate',
						        	   name: "expiryDate",
						        	   index:'Date',
						        	   width: 200,
						        	   editable:true,
						        	   edittype:"text",
						        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
						        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
						           }
						           ],


						           sortorder : 'desc',
						           
						           multiselect: false,	
						           loadonce: false,
						           rownumbers:true,
						           'cellEdit':true,
						           afterSaveCell: function  grossTotal() {
								       /* 	Calculation of total after editing quantity*/
								        	   
								        	   // $(this).trigger('reloadGrid');
								        	   var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
						                       var rowData = jQuery("#jqGrid").getRowData(rowId);
						                    	var quantity = rowData['quantity'];
						                    	var buyPrice = rowData['buyPrice'];
						                    	var taxPercentage = rowData['taxPercentage'];
						                    	var taxAmount = ((taxPercentage/100)*buyPrice);
						                    	var BuyPriceWithTaxAmount = taxAmount + buyPrice;
						                    	var tota = quantity * BuyPriceWithTaxAmount;
						                    	$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
						        	},
						           
						        
						        	
						           
						           viewrecords: true,
						           width: 1200,
						           height: 250,
						           rowNum: 10,
						           pager: "#jqGridPager",
						           sortorder: "desc",
						       	onSelectRow: function(productID){
						       		if(productID && productID!==lastsel){
						       			jQuery('#jqGrid').jqGrid('restoreRow',lastsel);
						       			jQuery('#jqGrid').jqGrid('editRow',productID,true);
						       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
						       			lastsel=productID;
						       		}
						       	},
						       	
					});

					$("#jqGrid").addRowData(i,jsonData[i]);
					function pickdates(productID){
						jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
					}
					/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


					
					$('#jqGrid').navGrid('#jqGridPager',
							// the buttons to appear on the toolbar of the grid
							{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
							// options for the Edit Dialog
							
							
							
							
							
							{
								
								afterSaveCell: function () {
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
							
							
							
							// options for the Delete Dialogue
							{
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
		
			
	}
	
	
/****************	Grid for Booked Goods Receive new  ********/
	
	function getAllProductDetailsForBooked(){
		
		/*
		//Grid for Retail if it is checked 
		if (document.getElementById('retail1').checked) {
		jQuery("#jqGrid1").trigger('reloadGrid');
		
		var input1 = document.getElementById('fk_cat_id1'),
		list = document.getElementById('cat_drop1'),
		i,fk_cat_id;
		for (i = 0; i < list.options.length; ++i) {
			if (list.options[i].value === input1.value) {
				fk_cat_id = list.options[i].getAttribute('data-value');
			}
		}
		
		var input1 = document.getElementById('supplier1'),
		list = document.getElementById('sup_drop1'),
		i,fk_sup_id;
		for (i = 0; i < list.options.length; ++i) {
			if (list.options[i].value === input1.value) {
				fk_sup_id = list.options[i].getAttribute('data-value');
			}
		}
		
	 var fk_cat_id = fk_cat_id;
	 var fk_sup_id = fk_sup_id;
		
		var params= {};
		itemparams={};
		productId = $('#proName1').val();
		
		$("#proName1 option:selected").each(function() {
			   selectedVal = $(this).text();
			});
		
		var splitText = selectedVal.split(",");
		
		var proName = splitText[0];
		var company = splitText[1];
		var weight = splitText[2];
		
		itemparams["proName"]= proName;
		itemparams["company"]= company;
		itemparams["weight"]= weight;
	
		itemparams["fk_cat_id"]= fk_cat_id;
		itemparams["fk_sup_id"]= fk_sup_id;
		
		var count=0;
		var newrow;
		var rowId;
		
		itemparams["methodName"] = "getbookedProductDetailsForGoodsReceiveNew";
		$.post('/Fertilizer/jsp/utility/controller.jsp',itemparams,
				
				
				function(data)
				{ 
			var jsonData = $.parseJSON(data);
			
	

			 function sumFmatter (cellvalue, options, rowObject)
		        {
				 
				
				 
				 var jam=0;
		        	var jam1="";
		        	var tot= (options.rowData.quantity * options.rowData.buyPrice);
		        	//var shree = document.poferti.grossTotal.value;// to get gross total
		     
		        	var count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records');
		        	var allRowsInGrid1 = $('#jqGrid1').getGridParam('data');
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
		        		document.getElementById("total1").value = tot;
		        	}else{
		        	document.getElementById("total1").value = jam;
		        	
		        	}
		        	
	 	
		           return tot;
		 		   	 
		           }	
		      
		        
			
		
			 
			$.each(jsonData,function(i,v)
					{

				$("#jqGrid1").jqGrid({
					
				
				
					datatype:"local",

					colNames: ["Product ID","Product Name","Company","Buy Price","M.R.P","Sale Price","Packing","Quantity","Total","BatchNo","ExpiryDate" ],

					colModel: [
					           { 	
					        	   name: "productID",
					        	   hidden:true
					        	   //resizable: true,
					           },
					           { 	
					        	   name: "productName",
					        	   width:120,

					           },
					           { 	
					        	   name: "manufacturer",
					        	   width:120
					        	  
					           },
					           {
					        	   name: "buyPrice",
					        	   width: 140,
					        	   editable: true
					           },	
					           {
					        	   name: "mrp",
					        	   width: 140,
					        	   editable: true
					           },
					           {
					        	   name:  "salePrice",
					        	   width: 140,
					        	   editable: true
					           },
					           
					           {
					        	   name: "weight",
					        	   width: 100,
					        	   
					           },

					           {
					        	   name: "quantity",
					        	   width: 140,
					        	   editable: true


					           },

					         {
					        	   name : 'Total',
					        	  // name: "",
					        	  formatter: sumFmatter,
					        	   width: 150,
					        	  
					           },
					           {
					        	   label : 'batchNo',
					        	   name: "batchNo",
					        	   width: 150,
					        	   editable:true,
					        	  
					        	  
					           },
					           {
					        	   label : 'expiryDate',
					        	   name: "expiryDate",
					        	   index:'Date',
					        	   width: 200,
					        	   editable:true,
					        	   edittype:"text",
					        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
					        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
					           }
					           ],


					           sortorder : 'desc',
					           
					           multiselect: false,	
					           loadonce: false,
					           rownumbers:true,
					           'cellEdit':true,
					           afterSaveCell: function  grossTotal() {
							        	Calculation of total after editing quantity
							        	   
							        	   // $(this).trigger('reloadGrid');
							        	   var rowId =$("#jqGrid1").jqGrid('getGridParam','selrow');  
					                       var rowData = jQuery("#jqGrid1").getRowData(rowId);
					                    	var quantity = rowData['quantity'];
					                    	var buyPrice = rowData['buyPrice'];
					                    	
					                    	var tota = quantity * buyPrice;
					                    	$("#jqGrid1").jqGrid("setCell", rowId, "Total", tota);
					        	},
					           
					        
					        	
					           
					           viewrecords: true,
					           width: 1200,
					           height: 250,
					           rowNum: 10,
					           pager: "#jqGridPager1",
					           sortorder: "desc",
					       	onSelectRow: function(productID){
					       		if(productID && productID!==lastsel){
					       			jQuery('#jqGrid1').jqGrid('restoreRow',lastsel);
					       			jQuery('#jqGrid1').jqGrid('editRow',productID,true);
					       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
					       			lastsel=productID;
					       		}
					       	},
					       	
				});
				
				 count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records'); 
			     var rowdata =$("#jqGrid1").jqGrid('getGridParam','data');
			     var ids = jQuery("#jqGrid1").jqGrid('getDataIDs');
				 
				
				  var prodName,com,packing;
				  for (var j = 0; j < count; j++) 
				  {
					  prodName = rowdata[j].productName;
					  com = rowdata[j].manufacturer;
					  packing = rowdata[j].weight;
					
					 var rowId = ids[j];
					 var rowData = jQuery('#jqGrid1').jqGrid ('getRowData', rowId);
					
					if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
				    	
				    	newrow=false;
						alert("Product Name Already Inserted !!!");
						var grid = jQuery("#jqGrid1");
					    grid.trigger("reloadGrid");
				    	break;
					}
					else
					{
						newrow = true;
					}
				   }
				  
				  if(newrow == true)
					 {
						
					 // $("#credit").addRowData(i,jsonData[i]);
					  $("#jqGrid1").addRowData(count,jsonData[i]);
						
					 }  
			        
				  if(count==0 || count==null)
					{
						// $("#credit").addRowData(i,jsonData[i]);
						 $("#jqGrid1").addRowData(0,jsonData[i]);
					}
				//$("#jqGrid1").addRowData(i,jsonData[i]);
				function pickdates(productID){
					jQuery("#"+productID+"_expiryDate","#jqGrid1").datepicker({dateFormat:"yy-mm-dd"});
				}
				jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});


				
				$('#jqGrid1').navGrid('#jqGridPager1',
						// the buttons to appear on the toolbar of the grid
						{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
						// options for the Edit Dialog
						
						
						
						
						
						{
							
							afterSaveCell: function () {
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
						
						
						
						// options for the Delete Dialogue
						{
							closeAfterdel:true,
							recreateForm: true,
							errorTextFormat: function (data) {
								return 'Error: ' + data.responseText
							},

							onSelectRow: function(id) {
								if (id && id !== lastSel) {
									jQuery("#jqGrid1").saveRow(lastSel, true, 'clientArray');
									jQuery("#jqGrid1").editRow(id, true);
									
									lastSel = id;
									console.log(id);
								}
							}
							
							
						});
				
			// grid refresh code	
				
					});
	       

				}); 
		
	}*/
	/*	
		//Grid for Tax if retail is not checked
		else if (document.getElementById('vat1').checked)
			{*/

			jQuery("#jqGrid1").trigger('reloadGrid');
			
			var input1 = document.getElementById('fk_cat_id1'),
			list = document.getElementById('cat_drop1'),
			i,fk_cat_id;
			for (i = 0; i < list.options.length; ++i) {
				if (list.options[i].value === input1.value) {
					fk_cat_id = list.options[i].getAttribute('data-value');
				}
			}
			
			var input1 = document.getElementById('supplier1'),
			list = document.getElementById('sup_drop1'),
			i,fk_sup_id;
			for (i = 0; i < list.options.length; ++i) {
				if (list.options[i].value === input1.value) {
					fk_sup_id = list.options[i].getAttribute('data-value');
				}
			}
			
		 var fk_cat_id = fk_cat_id;
		 var fk_sup_id = fk_sup_id;
			
			var params= {};
			itemparams={};
			productId = $('#proName1').val();
		
			$("#proName1 option:selected").each(function() {
				   selectedVal = $(this).text();
				});
			
			var splitText = selectedVal.split(",");
			
			var proName = splitText[0];
			var company = splitText[1];
			var weight = splitText[2];
			
			itemparams["proName"]= proName;
			itemparams["company"]= company;
			itemparams["weight"]= weight;
		
			
			
			itemparams["fk_cat_id"]= fk_cat_id;
			itemparams["fk_sup_id"]= fk_sup_id;
			
			var count=0;
			var newrow;
			var rowId;
			
			itemparams["methodName"] = "getProductDetailsForGoodsReceiveForBookedWithTaxNew";
			$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
					
					
					function(data)
					{ 
				var jsonData = $.parseJSON(data);
				
		

				 function sumFmatter (cellvalue, options, rowObject)
			        {
					 
					
					 
					 var jam=0;
			        	var jam1="";
			        	var tot= ((options.rowData.quantity) * ((options.rowData.buyPrice)+((options.rowData.taxPercentage/100)*options.rowData.buyPrice)));
			        	//var shree = document.poferti.grossTotal.value;// to get gross total
			     
			        	var count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records');
			        	var allRowsInGrid1 = $('#jqGrid1').getGridParam('data');
			        	var AllRows=JSON.stringify(allRowsInGrid1);
			        	for (var i = 0; i < count; i++) {
			        		
			            	var quantity = allRowsInGrid1[i].quantity;
			             	params["quantity"+i] = quantity;
			             	
			             	var buyPrice = allRowsInGrid1[i].buyPrice;
			            	params["buyPrice"+i] = buyPrice;
			            	
			            	var taxPercentage = allRowsInGrid1[i].taxPercentage;
			            	params["taxPercentage"+i] = taxPercentage;
			            	
			            	var taxAmount = ((taxPercentage/100)*buyPrice);
			            	
			            	var priceWithTaxamount = taxAmount+buyPrice;
			            	
			            	var totals1=((priceWithTaxamount)*(quantity));
			            
			            	jam = jam + totals1;
			            	
			            	/*document.getElementById("total").value = jam;
			            	document.getElementById("duptotal").value = jam;*/
		        	    }
			        	if(count == 0){
			        		document.getElementById("total1").value = tot;
			        		
			        	}
			        	else{
			        	document.getElementById("total1").value = jam;
			        	
			        	}
			        	
				           return tot;	 
			           }	
				 
				 
				$.each(jsonData,function(i,v)
						{

					var productName =  v.productName;
					var  buyPrice =  v.buyPrice;  
					var salePrice =v.salePrice;
					var quantity = v.quantity;
					var weight = v.weight ;
					var productID = v.productID ;
					var manufacturer = v.manufacturer ;
					var lastsel = productID;
					
					$("#jqGrid1").jqGrid({
						
					
					
						datatype:"local",

						colNames: ["Product ID","Product Name","Company","Buy Price","M.R.P","Tax %","Sale Price","Packing","Quantity","Total","BatchNo","ExpiryDate" ],

						colModel: [
						           { 	
						        	   name: "productID",
						        	   hidden:true
						        	   //resizable: true,


						           },
						           { 	
						        	   name: "productName",
						        	   width:120,

						           },
						           { 	
						        	   name: "manufacturer",
						        	   width:120
						        	  
						           },
						           {
						        	   name: "buyPrice",
						        	   width: 120,
						        	   editable: true
						           },
						           {
						        	   name: "mrp",
						        	   width: 120,
						        	   editable: true
						           },
						           {
						        	   name: "taxPercentage",
						        	   width: 140,
						        	   editable: true
						           },
						         
						           {
						        	   name:  "salePrice",
						        	   width: 140,
						        	   editable: true
						           },
						           
						           {
						        	   name: "weight",
						        	   width: 100,
						        	   
						           },

						           {
						        	   name: "quantity",
						        	   width: 120,
						        	   editable: true


						           },

						         {
						        	   name : 'Total',
						        	  // name: "",
						        	  formatter: sumFmatter,
						        	   width: 150,
						        	  
						           },
						           {
						        	   label : 'batchNo',
						        	   name: "batchNo",
						        	   width: 150,
						        	   editable:true,
						        	  
						        	  
						           },
						           {
						        	   label : 'expiryDate',
						        	   name: "expiryDate",
						        	   index:'Date',
						        	   width: 200,
						        	   editable:true,
						        	   edittype:"text",
						        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
						        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
						           }
						           ],


						           sortorder : 'desc',
						           
						           multiselect: false,	
						           loadonce: false,
						           rownumbers:true,
						           'cellEdit':true,
						           afterSaveCell: function  grossTotal() {
								       /* 	Calculation of total after editing quantity*/
								        	   
								        	   // $(this).trigger('reloadGrid');
								        	   var rowId =$("#jqGrid1").jqGrid('getGridParam','selrow');  
						                       var rowData = jQuery("#jqGrid1").getRowData(rowId);
						                    	var quantity = rowData['quantity'];
						                    	var buyPrice = rowData['buyPrice'];
						                    	var taxPercentage = rowData['taxPercentage'];
						                    	var taxAmount = ((taxPercentage/100)*buyPrice);
						                    	var BuyPriceWithTaxAmount = taxAmount + buyPrice;
						                    	var tota = quantity * BuyPriceWithTaxAmount;
						                    	$("#jqGrid1").jqGrid("setCell", rowId, "Total", tota);
						        	},
						           
						        
						        	
						           
						           viewrecords: true,
						           width: 1200,
						           height: 250,
						           rowNum: 10,
						           pager: "#jqGridPager1",
						           sortorder: "desc",
						       	onSelectRow: function(productID){
						       		if(productID && productID!==lastsel){
						       			jQuery('#jqGrid1').jqGrid('restoreRow',lastsel);
						       			jQuery('#jqGrid1').jqGrid('editRow',productID,true);
						       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
						       			lastsel=productID;
						       		}
						       	},
						       	
					});
					
					
					 count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records'); 
				     var rowdata =$("#jqGrid1").jqGrid('getGridParam','data');
				     var ids = jQuery("#jqGrid1").jqGrid('getDataIDs');
					 
					
					  var prodName,com,packing;
					  for (var j = 0; j < count; j++) 
					  {
						  prodName = rowdata[j].productName;
						  com = rowdata[j].manufacturer;
						  packing = rowdata[j].weight;
						
						 var rowId = ids[j];
						 var rowData = jQuery('#jqGrid1').jqGrid ('getRowData', rowId);
						
						if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
					    	
					    	newrow=false;
							//alert("Product Name Already Inserted !!!");
							var grid = jQuery("#jqGrid1");
						    grid.trigger("reloadGrid");
					    	break;
						}
						else
						{
							newrow = true;
						}
					   }
					  
					  if(newrow == true)
						 {
							
						 // $("#credit").addRowData(i,jsonData[i]);
						  $("#jqGrid1").addRowData(count,jsonData[i]);
							
						 }  
				        

					  if(count==0 || count==null)
						{
							// $("#credit").addRowData(i,jsonData[i]);
							 $("#jqGrid1").addRowData(0,jsonData[i]);
						}
					//$("#jqGrid1").addRowData(i,jsonData[i]);
					function pickdates(productID){
						jQuery("#"+productID+"_expiryDate","#jqGrid1").datepicker({dateFormat:"yyyy-mm-dd"});
					}
					/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


					
					$('#jqGrid1').navGrid('#jqGridPager1',
							// the buttons to appear on the toolbar of the grid
							{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
							// options for the Edit Dialog
							
							
							
							
							
							{
								
								afterSaveCell: function () {
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
							
							
							
							// options for the Delete Dialogue
							{
								closeAfterdel:true,
								recreateForm: true,
								errorTextFormat: function (data) {
									return 'Error: ' + data.responseText
								},

								onSelectRow: function(id) {
									if (id && id !== lastSel) {
										jQuery("#jqGrid1").saveRow(lastSel, true, 'clientArray');
										jQuery("#jqGrid1").editRow(id, true);
										
										lastSel = id;
										console.log(id);
									}
								}
								
								
							});
					
				// grid refresh code	
					
						});
		       

					}); 
			
		
			
			}
		
			
	
		
	
	
}






var prodetails = new getdetails();

	// calculation for Without booked 




// Calculations for Booked goods receive
function discountCalculationForBooked(){
	var total = document.getElementById("total1").value;
	var discount = $('#discount1').val();
	var discountAmount = ((discount/100)*Number(total));
	var totalminusDiscount = Number(total) - discountAmount;
	document.getElementById("discountAmount1").value = discountAmount;
	document.getElementById("grossTotal1").value = totalminusDiscount;
}

function hamaliExpenseAddingToGrossForBooked(){
	var hamaliExpence = document.getElementById("hamaliExpence1").value;
	//Gross total calculation
	var discount = $('#discount1').val();
	var transExpence = document.getElementById("transExpence1").value;
	
	if(discount == ""){
		
		if(transExpence == ""){
			var total = document.getElementById("total1").value;
			var totalWithExpense = Number(total) + Number(hamaliExpence);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}
		if(transExpence != ""){
			var total = document.getElementById("total1").value;
			var totalWithExpense = Number(total) + Number(transExpence);
			var totalWithExpense1 = Number(totalWithExpense) + Number(hamaliExpence);
			document.getElementById("grossTotal1").value = totalWithExpense1;
		}
	}
	
	if(discount != ""){
		var transExpence = document.getElementById("transExpence1").value;
		if(transExpence == ""){
			var total = document.getElementById("total1").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - Number(discountAmount);
			var totalWithExpense = Number(totalminusDiscount) + Number(hamaliExpence);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}
		if(transExpence != ""){
			var total = document.getElementById("total1").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - discountAmount;
			var totalwithTrans = Number(totalminusDiscount) + Number(transExpence);
			var totalWithExpense = Number(totalwithTrans) + Number(hamaliExpence);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}
	}
	
}

function transExpenseAddingToGrossTotalForBooked(){
	var transExpence = document.getElementById("transExpence1").value;
	var hamaliExpence = document.getElementById("hamaliExpence1").value;
	var discount = $('#discount1').val();
	
	if(discount == ""){
		if(hamaliExpence == ""){
		var total = document.getElementById("total1").value;
		var totalWithExpense = Number(total) + Number(transExpence);
		document.getElementById("grossTotal1").value = totalWithExpense;
		}	
		
		if(hamaliExpence != ""){
			var total = document.getElementById("total1").value;
			var hamaliTotal = Number(total) + Number(hamaliExpence);
			var totalWithExpense = Number(transExpence) + Number(hamaliTotal);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}	
	}
	
	
	if(discount != ""){
		if(hamaliExpence == ""){
			var total = document.getElementById("total1").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - Number(discountAmount);
			var totalWithExpense = Number(totalminusDiscount) + Number(transExpence);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}	
		if(hamaliExpence != ""){
			var total = document.getElementById("total1").value;
			var discountAmount = ((discount/100)*Number(total));
			var totalminusDiscount = Number(total) - Number(discountAmount);
			var totalwithTrans = Number(totalminusDiscount) + Number(hamaliExpence);
			var totalWithExpense = Number(totalwithTrans) + Number(transExpence);
			document.getElementById("grossTotal1").value = totalWithExpense;
		}
	
	}
	
}


 /*++++++++ Grid code for Without Advance Booking by shrimant ++++++++++*/

function productDetailInGrid(){
	

	/*if (document.getElementById('retail').checked) {*/
 	document.getElementById("discount").value = 0;
	document.getElementById("discountAmount").value = 0;
	
	document.getElementById("transExpence3").value = 0;
	document.getElementById("transExpence").value = 0;
	
	document.getElementById("hamaliExpence3").value = 0;
	document.getElementById("hamaliExpence").value = 0;
	
	var tot1 = document.getElementById("total").value;
	document.getElementById("grossTotal").value = tot1;
	
	var params= {};
	itemparams={};
	var input1 = document.getElementById('fk_cat_id'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
productId = $('#subCat').val();
	
	$("#subCat option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var fk_subCat_id = splitText[1];
	
	productId = $('#proName').val();
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	
	
	itemparams["proName"]= proName;
	itemparams["fk_cat_id"]= fk_cat_id;
	itemparams["fk_subCat_id"]= fk_subCat_id;
	
	itemparams["productId"]= productId;
	
	var count=0;
	var newrow;
	var rowId;
	var	taxPercentage;
	itemparams["methodName"] = "getProductDetailsForGoodsReceiveForTax";
	$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
			function(data)
			{ 
		var jsonData = $.parseJSON(data);
		
		

/*			 function sumFmatter (cellvalue, options, rowObject)
	        {
			 
	        	var jam=0;
	        	var jam1="";
	        	var tot= ((options.rowData.quantity) * ((options.rowData.buyPrice)+((options.rowData.taxPercentage/100)*options.rowData.buyPrice)));
	        	//var shree = document.poferti.grossTotal.value;// to get gross total
	     
	        	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
	        	var AllRows=JSON.stringify(allRowsInGrid1);
	        	for (var i = 0; i < count; i++) {
	        		
	            	var quantity = allRowsInGrid1[i].quantity;
	             	params["quantity"+i] = quantity;
	             	
	             	var buyPrice = allRowsInGrid1[i].buyPrice;
	            	params["buyPrice"+i] = buyPrice;
	            	
	            	var cGst = allRowsInGrid1[i].cGst;
	            	params["cGst"+i] = cGst;
	            	
	            	var sGst = allRowsInGrid1[i].sGst;
	            	params["sGst"+i] = sGst;
	            	
	            	var iGst = allRowsInGrid1[i].iGst;
	            	params["iGst"+i] = iGst;
	            	
	            	if(iGst == 0){
	            	taxPercentage = cGst + sGst;
	            	
	            	var taxAmount = ((taxPercentage/100)*buyPrice);
	            	
	            	var priceWithTaxamount = taxAmount+buyPrice;
	            	
	            	var totals1=((priceWithTaxamount)*(quantity));
	            
	            	jam = jam + totals1;
	            	}
	            	else if (iGst != 0){
	            		taxPercentage = iGst;
		            	var taxAmount = ((taxPercentage/100)*buyPrice);
		            	
		            	var priceWithTaxamount = taxAmount+buyPrice;
		            	
		            	var totals1=((priceWithTaxamount)*(quantity));
		            
		            	jam = jam + totals1;
	            	}
	            	document.getElementById("total").value = jam;
	            	document.getElementById("duptotal").value = jam;
        	    }
	        	if(count == 0){
	        		document.getElementById("total").value = tot;
	        		document.getElementById("duptotal").value = tot;
	        	}
	        	else{
	        	document.getElementById("total").value = jam;
	        	document.getElementById("duptotal").value = jam;
	        	}
	        	
	         
     	
		           return tot;	 
	           }*/	
		document.getElementById("proName").value = "";
		
		
		$.each(jsonData,function(i,v)
				{

			var productName =  v.productName;
			var  buyPrice =  v.buyPrice;  
			var salePrice =v.salePrice;
			var quantity = v.quantity;
		//	var weight = v.weight;
			var productID = v.productID ;
			var manufacturer = v.manufacturer ;
			var hsn = v.hsn ;
			var lastsel = productID;
        	
			$("#jqGrid").jqGrid({
				
			
			
				datatype:"local",

				colNames: [	"Cat ID","Product ID","Product Name","Company","HSN","Buy Price","Sale Price","Unit","Shortage","GST %","IGST %","Quantity/Weight","Total" ],

				colModel: [
							{ 	
								   name: "catId",
								   hidden:true
								   //resizable: true,
							
							
							},
				           { 	
				        	   name: "productID",
				        	   hidden:true
				        	   //resizable: true,


				           },
				           { 	
				        	   name: "productName",
				        	   width:160,

				           },
				           { 	
				        	   name: "manufacturer",
				        	   width:140
				        	  
				           },
				           { 	
				        	   name: "hsn",
				        	   width:80
				        	  
				           },
				           {
				        	   name: "buyPrice",
				        	   width: 120,
				        	   editable: true
				           },	
				           
				          /* {
				        	   name: "mrp",
				        	   width: 140,
				        	   editable: true
				           },*/
				           {
				        	   name:  "salePrice",
				        	   width: 120,
				        	   editable: true
				           },
				           
				           /*{
				        	   name:  "discount",
				        	   width: 140,
				        	   editable: true
				           },*/
				           
				           /*{
				        	   name: "weight",
				        	   width: 100,
				        	   editable: true
				           },*/

				           {
				        	   name: "unit",
				        	   width: 80,
				        	   editable: true
				           },
				           
				           {
				        	   name:  "dcNum", //dcnum used for shortage
				        	   width: 100,
				        	   editable: true
				           },
				           
				           /*{
				        	   name: "weightAftShortMinus",
				        	   width: 100,
				        	   
				           },*/
				           
				           {
				        	   name: "gst",
				        	   width: 80,
				        	   editable: true
				           },
				          /* {
				        	   name: "sGst",
				        	   width: 80,
				        	   editable: true
				           },*/
				           {
				        	   name: "igst",
				        	   width: 80,
				        	   editable: true
				           },
				           {
				        	   name: "quantity",
				        	   width: 160,
				        	   editable: true


				           },

				         {
				        	   name : 'Total',
				        	  // name: "",
				        	  //formatter: sumFmatter,
				        	   width: 150,
				        	  
				           },
				           /*{
				        	   label : 'batchNo',
				        	   name: "batchNo",
				        	   width: 150,
				        	   editable:true,
				        	  
				        	  
				           },*/
				           /*{
				        	   label : 'expiryDate',
				        	   name: "expiryDate",
				        	   index:'Date',
				        	   width: 200,
				        	   editable:true,
				        	   edittype:"text",
				        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
				        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
				           }*/
				           ],


				           sortorder : 'desc',
							loadonce: false,
							viewrecords: true,
							width: 1200,
				         shrinkToFit:true,
				          hoverrows: true,
					        rownumbers: true,
				          rowNum: 10,
				          'cellEdit':true,
				           afterSaveCell: function  grossTotal() {
						       /* 	Calculation of total after editing quantity*/
						        	   
						        	   // $(this).trigger('reloadGrid');
						        	   var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
				                       var rowData = jQuery("#jqGrid").getRowData(rowId);
				             //          var weight = rowData['weight'];
				                       var dcNum = rowData['dcNum'];
				                       
				                    	
			                   /* 	   if(dcNum >= 0){
			                    		   var W=weight;
			                    		   var d=dcNum;
			                    		   var weightWithShortage = W - d;
			                    		   $("#jqGrid").jqGrid("setCell", rowId, "weightAftShortMinus", weightWithShortage);
			                    	   }*/
			                    	   
			                    	   
				                    	var quantity = rowData['quantity'];
				                    	var buyPrice = rowData['buyPrice'];
				                    	var igst = rowData['igst'];
				                    	var gst = rowData['gst'];
				                    	var unit = rowData['unit'];
				                    	var salePrice = rowData['salePrice'];
				             //       	var discount = rowData['discount'];
				                    	
				                    	
				                    	if(buyPrice != "")
					                       {
					                    	   var checkprice = /^[0-9]+\.?[0-9]*$/;
					                    	   if(buyPrice.match(checkprice))
					                    	   {}
					                    	   else
					                    	   {
					                    		   alert("Please Enter Valid Buy Price");
				                    				
			                    				   var setZero = 0;
				 		                    	   $("#jqGrid").jqGrid("setCell", rowId, "buyPrice", setZero);
						                    		
				 		                    	   return false;
					                    	   }
					                       }
				                    	
				                    	
				                    	if(salePrice != "")
					                       {
					                    	   var checkprice = /^[0-9]+\.?[0-9]*$/;
					                    	   if(salePrice.match(checkprice))
					                    	   {}
					                    	   else
					                    	   {
					                    		   alert("Please Enter Valid Sale Price");
				                    				
			                    				   var setZero = 0;
				 		                    	   $("#jqGrid").jqGrid("setCell", rowId, "salePrice", setZero);
						                    		
				 		                    	   return false;
					                    	   }
					                       }
				                    	
				                    	
				                    	/*if(discount !="")
										{
										var dis =/^[0-9 ]+$/;
										if(discount.match(dis))
											{
											
											}
										else{
											var dis ="0";
											alert("Please Enter Discount In Number");
											$("#jqGrid").jqGrid("setCell",rowId, "discount", dis);
										return false;	
										}
										}*/
				                    	
				                    	/*if(salePrice !="")
										{
										var salePricenew = /^\d{0,10}(?:\.\d{0,2})?$/;
										if(salePrice.match(salePricenew)){
											
										}
										else
											{
											var sale ="0";
											alert("Please Enter the salePrice ");
											$("#jqGrid").jqGrid("setCell",rowId, "salePrice", sale);
											//location.reload();
											return false;
											}
										}*/
				                    	/*if(buyPrice == undefined || buyPrice == 0 || buyPrice == null || buyPrice == '')
				                		{	
				                			alert("Please Enter buyPrice");
				                			document.getElementById("save").disabled = false;
				                			return false;
				                		}
				                		else if(buyPrice != '')
				                		{
				                			var numbers = /^[0-9]+$/;
				                			if(buyPrice.match(numbers))
				                			{
				                								
				                			}
				                			else
				                			{
				                				alert("Please Enter Valid buyPrice");
				                				document.getElementById("save").disabled = false;
				                				return false;
				                			}
				                		}*/
				                    	
				                    	/*if(weight !="")
										{
										var weightnew = /^\d{0,10}(?:\.\d{0,2})?$/;
										if(weight.match(weightnew)){
											
										}
										else
											{
											var weight ="0";
											alert("Please Enter valid weight ");
											$("#jqGrid").jqGrid("setCell",rowId, "weight", weight);
											//location.reload();
											return false;
											}
										}*/
				                    	
				                    	
				                    	if(unit != "")
					                       {
					                    	   var checkprice = /^[a-zA-Z]+$/;
					                    	   if(unit.match(checkprice))
					                    	   {}
					                    	   else
					                    	   {
					                    		   alert("Please Enter Valid Sale Price");
				                    				   				   
					                    		   var setZero = 0;
				 		                    	   $("#jqGrid").jqGrid("setCell", rowId, "unit", setZero);
						                    		
					 		                    	  
				                    				return false;
					                    	   }
					                       }
				                    	
				                    	if(quantity != '')
			                    		{
			                    			 var checkQuantity = /^[0-9]+$/;
			                    			 if(String(quantity).match(checkQuantity))
			                    			 {}
			                    			 else
			                    			 {
			                    				 alert("Please Enter Valid Quantity");
			                    				 quantity = 0;
			                    				 var setZero = 0;
		                                  		 $("#jqGrid").jqGrid("setCell", rowId, "quantity", setZero);
			                    			 }
			                    			 
			                    		}
				                    	
				                    	/*if(unit !="")
										{
										var buyPricenew = /^[a-zA-Z]+$/;
										if(unit.match(buyPricenew)){
											
										}
										else
											{
											var buy ="0";
											alert("Please Enter the unit ");
											$("#jqGrid").jqGrid("setCell",rowId, "unit", buy);
											//location.reload();
											return false;
											}
										}*/
				                    	
				                    		/*if (iGst != 0){
				                  			var taxPercentage = iGst;
					                    		var taxAmount = ((taxPercentage/100)*buyPrice);
					                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
					                    		var tota = quantity * buyPrice;
					                    		$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
				                    	}
				                    	else if(iGst == 0){
				                    		var  taxPercentage = Number(Gst);
				                    		var taxAmount = ((taxPercentage/100)*buyPrice);
				                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
				                    		var tota = quantity * buyPrice;
				                    		$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
				                    		
				                    	}*/
				                    	
				                    		
				                    		/*if(unit == undefined || unit == 0 || unit == null || unit == '')
					                   		{			
					                   			var msg="Please Enter Quantity<br>For Product => "+(count+1)+" "+productName;;
					                   			alert("Enter unit In Grid");
					                   			var dialog = bootbox.dialog({
					                   				//title: "Embel Technologies Says :",
					                   			    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'<img src="/Repacking/staticContent/images/s1.jpg" height="50" width="50"/></p>',
					                   			    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'</p>',
					                   			    closeButton: false
					                   			});
					                   			
					                   			setTimeout(function() {
					                   				dialog.modal('hide');
					                   			}, 1500);				
					                   			document.getElementById("save").disabled = false;
					                   			return false;
					                   		}
					                   		else if(unit != '')
					                   		{
					                   			var letterNumber = /^[a-zA-Z0-9/\, ]+$/;
					                   			if(document.unit.value.match(letterNumber))
					                   			{
					                   				params["unit" + i] = unit;				
					                   			}
					                   			else
					                   			{
					                   				var msg="Please Enter Valid unit<br>For Product => "+(count+1)+" "+productName;;
					                   				alert("Please Enter Valid unit");
					                   				return false;
					                   				var dialog = bootbox.dialog({
					                   					//title: "Embel Technologies Says :",
					                   				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'<img src="/Repacking/staticContent/images/s1.jpg" height="50" width="50"/></p>',
					                   				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'</p>',
					                   				    closeButton: false
					                   				});
					                   				
					                   				setTimeout(function() {
					                   					dialog.modal('hide');
					                   				}, 1500);				
					                   				document.getElementById("save").disabled = false;
					                   				return false;
					                   			}
					                   		}*/
				                    		
				                    	if(gst != "")
										{
											var IDecs = /^[0-9]+$/;
											if(gst.match(IDecs))
											{
												(gst > Number(0))
												{
												/*var abc ="0";
												
												alert(" Please Enter GST Number OR IGST Number");
												$("#jqGrid").jqGrid("setCell",rowId, "IGst", abc);

												$("#jqGrid").jqGrid("setCell",rowId, "Gst", abc);
												return false;*/
												}

											}
										else{
											var abc ="0";
											var pqr ="0"
											alert(" Please Enter GST Number OR IGST Number ");
											$("#jqGrid").jqGrid("setCell",rowId, "igst", abc);

											$("#jqGrid").jqGrid("setCell",rowId, "gst", abc);
											//$("#jqGrid").jqGrid("setCell",rowId, "TaxAmount", pqr);
											return false;
											}
										
										}
										
										if(igst != "")
										{
											var IDecs = /^[0-9]+$/;
											if(igst.match(IDecs))
											{
												(igst > Number(0))
												{
												/*var abc ="0";
												
												alert(" Please Enter GST Number OR IGST Number");
												$("#jqGrid").jqGrid("setCell",rowId, "IGst", abc);

												$("#jqGrid").jqGrid("setCell",rowId, "Gst", abc);
												return false;
*/																			}

											}
										else{
											var abc ="0";
											
											alert(" Please Enter GST Number OR IGST Number ");
											$("#jqGrid").jqGrid("setCell",rowId, "igst", abc);

											$("#jqGrid").jqGrid("setCell",rowId, "gst", abc);
											//$("#jqGrid").jqGrid("setCell",rowId, "TaxAmount", pqr);
											return false;
											}
										
										}
										if(igst >0 && gst > 0 )
										{
										var abc ="0";
										alert(" Please Enter GST Number OR IGST Number");
										$("#jqGrid").jqGrid("setCell",rowId, "igst", abc);

										$("#jqGrid").jqGrid("setCell",rowId, "gst", abc);
										//$("#jqGrid").jqGrid("setCell",rowId, "TaxAmount", pqr);
										return false;
										}
									
									
										/*var setZero = 0;
			                    		$("#list4").jqGrid("setCell", rowId, "total", setZero);
*/
										/*var gst1 = 0;
										var igst1 = 0;
											
										if(gst!="0")
										{	
										var tax = ((+gst / 100) * 100) + buyPrice ;
										var taxAmt = ((+gst / 100) * 100) * quantity;
										var totAmt = quantity * tax;
										}
										else
										{
									var tax = ((+igst / 100) * 100) + buyPrice;
									var taxAmt = ((+igst / 100) * 100) * quantity;
									var totAmt = +quantity * tax;
										}
								
								
									
									

										var TotalGst = 0;
										var TotalIgst = 0;
										var sGstAmt = 0;
										var cGstAmt = 0;

										var rowData = jQuery("#jqGrid").getRowData(rowId);

										tota = quantity * buyPrice;
								
											
											
										if(gst!="0"){
											gstAmnt = ((tota * gst) / 100);
											totAmt1 = tota	+ gstAmnt;
											}
											else
											{
											gstAmnt  = ((tota * igst) / 100);
											totAmt1 = tota	+ gstAmnt;
											}*/
										
										
										tota = quantity * buyPrice;
									//	disAmt = (tota/100)*discount;// this is discount
																		// AMOUNT
									//	idisAmt = tota - disAmt; // total amount minus
										idisAmt = tota;				// discount amount
										
										
										
										
										
										
										
										
										if(gst!="0")
											{
											
											gstAmt = (idisAmt*gst)/100;
											totAmt = (idisAmt + gstAmt).toFixed(2);
											//$("#jqGrid").jqGrid("setCell", rowId, "gst",gst);
											//$("#jqGrid").jqGrid("setCell", rowId, "TaxAmount",gstAmt);
											//$("#jqGrid").jqGrid("setCell", rowId, "Total",totAmt);
											}
										else {
											
											igstAmt = (idisAmt*igst)/100;
											totAmt = (idisAmt + igstAmt).toFixed(2);
											//$("#jqGrid").jqGrid("setCell", rowId, "TaxAmount",igstAmt);
											//$("#jqGrid").jqGrid("setCell", rowId, "gst",igst);
											//$("#jqGrid").jqGrid("setCell", rowId, "Total",totAmt);
										}
										
										
										/*if(igst!="0"){
											igstAmnt = ((tota * igst) / 100);
											totAmt1 = tota	+ igstAmnt;
											}
											else
											{
											igstAmnt  = ((tota * igst) / 100);
											totAmt1 = tota	+ igstAmnt;
											}*/
												/*gstAmnt = ((tota * Igst) / 100);
												totAmt1 = tota	+ gstAmnt;*/
												
										

										$("#jqGrid").jqGrid("setCell",rowId,"Total",Math.round(totAmt));
										//$("#jqGrid").jqGrid("setCell",rowId,"TaxAmount",Math.round(gstAmnt));	
				                    	
				                    	
				                    	
				                    	
				                    	
				                    		/*if(quantity !="")
											{
											var quantitynew = /^\d{0,10}(?:\.\d{0,2})?$/;
											if(quantity.match(quantitynew)){
												
											}
											else
												{
												var sale ="0";
												alert("Please Enter the Quantity ");
												$("#jqGrid").jqGrid("setCell",rowId, "quantity", sale);
												//location.reload();
												return false;
												}
											}*/
										
										
				                    		
				                    		
				                    		
				                    		var Total =0;
				                    		var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
				        		        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
				        		        	var AllRows=JSON.stringify(allRowsInGrid1);
				        		        	for (var k = 0; k < count; k++) {
				        		        		var Total1 = allRowsInGrid1[k].Total;
				        		        		if(Total1 != null){
				        		        		Total = +Total + +Total1;
				        		        		}
				        		        		}
				        		        	
				        		        	
				        		        	
				        		        	document.getElementById("total").value = (Total).toFixed(2);
			        		        		//document.getElementById("duptotal").value = Total;
			        		        		document.getElementById("grossTotal").value = (Total).toFixed(2);
			        		        		
			        		        		
				        		        	
				        	},
				           
				           viewrecords: true,
				           width: 1200,
				           rowNum: 10,
				           pager: "#jqGridPager",
				           sortorder: "desc",
				       	onSelectRow: function(productID){
				       		if(productID && productID!==lastsel){
				       			jQuery('#jqGrid').jqGrid('restoreRow',lastsel);
				       			jQuery('#jqGrid').jqGrid('editRow',productID,true);
				       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
				       			lastsel=productID;
				       		}
				       	},
				       	
			});

			count = jQuery("#jqGrid").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#jqGrid").jqGrid('getGridParam','data');
		     var ids = jQuery("#jqGrid").jqGrid('getDataIDs');
			 
			
			  var prodName,com,packing;
			  for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].productName;
				  com = rowdata[j].manufacturer;
				  packing = rowdata[j].weight;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#jqGrid').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
			    	
			    	newrow=false;
					alert("Product Name Already Inserted !!!");
					var grid = jQuery("#jqGrid");
				    grid.trigger("reloadGrid");
			    	break;
				}
				else
				{
					newrow = true;
				}
			   }
			  
			  if(newrow == true)
				 {
					
				 // $("#credit").addRowData(i,jsonData[i]);
				  $("#jqGrid").addRowData(count,jsonData[i]);
					
				 }  
		        
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			if(count==0 || count==null)
			{
				// $("#credit").addRowData(i,jsonData[i]);
				 $("#jqGrid").addRowData(0,jsonData[i]);
			}
			
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			function pickdates(productID){
				jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
			}
			/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


			
			$('#jqGrid').navGrid('#jqGridPager',
					// the buttons to appear on the toolbar of the grid
					{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
					// options for the Edit Dialog
					
					
					
					
					
					{
						
						/*afterSaveCell: function () {
							  $("#jqGrid").trigger('reloadGrid');
						},*/
						editCaption: "The Edit Dialog",
						recreateForm: true,
						checkOnUpdate : true,
						checkOnSubmit : true,
						closeAfteredit: true,
						afterSubmit: function() {
	                		$('#jqGrid').trigger( 'reloadGrid' );
						},
						errorTextFormat: function (data) {
							return 'Error: ' + data.responseText
						}
					
						
					
					},
					
					{
						
					},
					
					// options for the Delete Dialogue
					{
						closeAfterdel:true,
						recreateForm: true,
						errorTextFormat: function (data) {
							return 'Error: ' + data.responseText
						},
						afterComplete: function() {
							$('#list4').trigger( 'reloadGrid' ); 
							  /* 	Calculation of total after editing quantity*/
				        	   
				        	   // $(this).trigger('reloadGrid');
							  var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#jqGrid").getRowData(rowId);
		              //         var weight = rowData['weight'];
		                       var dcNum = rowData['dcNum'];
		                    	
	                    	   /*if(dcNum >= 0){
	                    		   var W=weight;
	                    		   var d=dcNum;
	                    		   var weightWithShortage = W - d;
	                    		   $("#jqGrid").jqGrid("setCell", rowId, "weightAftShortMinus", weightWithShortage);
	                    	   }*/
	                    	   
		                    	var quantity = rowData['quantity'];
		                    	var buyPrice = rowData['buyPrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		/*var taxAmount = ((taxPercentage/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);*/
			                    		var tota = quantity * buyPrice;
			                    		$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		/*var taxAmount = ((taxPercentage/100)*buyPrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);*/
		                    		var tota = quantity * buyPrice;
		                    		$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
		                    		
		                    	}
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].Total;
		        		        		
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	
		        		        	document.getElementById("discount").value = 0;
		        		        	document.getElementById("discountAmount").value = 0;
		        		        	
		        		        	document.getElementById("transExpence3").value = 0;
		        		        	document.getElementById("transExpence").value = 0;
		        		        	
		        		        	document.getElementById("hamaliExpence3").value = 0;
		        		        	document.getElementById("hamaliExpence").value = 0;
		        		        	
		        		        	document.getElementById("total").value = Total;
	        		        		document.getElementById("duptotal").value = Total;
	        		        		document.getElementById("grossTotal").value = Total;
	        		        		
	        		        		
        		        		
        		        		
	        		        	
	        	},
									
						
						afterSubmit: function() {
	                		$('#jqGrid').trigger( 'reloadGrid' );
						},

						onSelectRow: function(id) {
							if (id && id !== lastSel) {
								jQuery("#jqGrid").saveRow(lastSel, true, 'clientArray');
								jQuery("#jqGrid").editRow(id, true);
								
								lastSel = id;
								console.log(id);
							}
						},
						
						
					});
			
		// grid refresh code	
			
				});
       

			}); 

	 

		
	/*}
	
	
	
	+++++++++++ grid for Tax ++++++++++++
	else if(document.getElementById('vat').checked){

		var params= {};
		itemparams={};
		productId = $('#proName').val();
		
		$("#proName option:selected").each(function() {
			   selectedVal = $(this).text();
			});
		
		var splitText = selectedVal.split(",");
		
		var proName = splitText[0];
		var company = splitText[1];
		var weight = splitText[2];
		
		itemparams["proName"]= proName;
		itemparams["company"]= company;
		itemparams["weight"]= weight;
		
		itemparams["productId"]= productId;
		
		var count=0;
		var newrow;
		var rowId;
		
		itemparams["methodName"] = "getProductDetailsForGoodsReceiveForTax";
		$.post('/Fertilizer/jsp/utility/controller.jsp',itemparams,
				function(data)
				{ 
			var jsonData = $.parseJSON(data);
			
			

			 function sumFmatter (cellvalue, options, rowObject)
		        {
				 
		        	var jam=0;
		        	var jam1="";
		        	var tot= ((options.rowData.quantity) * ((options.rowData.buyPrice)+((options.rowData.taxPercentage/100)*options.rowData.buyPrice)));
		        	//var shree = document.poferti.grossTotal.value;// to get gross total
		     
		        	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
		        	var allRowsInGrid1 = $('#jqGrid').getGridParam('data');
		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        	for (var i = 0; i < count; i++) {
		        		
		            	var quantity = allRowsInGrid1[i].quantity;
		             	params["quantity"+i] = quantity;
		             	
		             	var buyPrice = allRowsInGrid1[i].buyPrice;
		            	params["buyPrice"+i] = buyPrice;
		            	
		            	var taxPercentage = allRowsInGrid1[i].taxPercentage;
		            	params["taxPercentage"+i] = taxPercentage;
		            	
		            	var taxAmount = ((taxPercentage/100)*buyPrice);
		            	
		            	var priceWithTaxamount = taxAmount+buyPrice;
		            	
		            	var totals1=((priceWithTaxamount)*(quantity));
		            
		            	jam = jam + totals1;
		            	
		            	document.getElementById("total").value = jam;
		            	document.getElementById("duptotal").value = jam;
	        	    }
		        	if(count == 0){
		        		document.getElementById("total").value = tot;
		        		document.getElementById("duptotal").value = tot;
		        	}
		        	else{
		        	document.getElementById("total").value = jam;
		        	document.getElementById("duptotal").value = jam;
		        	}
		        	
		         
	     	
			           return tot;	 
		           }	
			 
			$.each(jsonData,function(i,v)
					{

				var productName =  v.productName;
				var  buyPrice =  v.buyPrice;  
				var salePrice =v.salePrice;
				var quantity = v.quantity;
				var weight = v.weight ;
				var productID = v.productID ;
				var manufacturer = v.manufacturer ;
				var lastsel = productID;
				
				$("#jqGrid").jqGrid({
					
				
				
					datatype:"local",

					colNames: [	"Cat ID","Product ID","Product Name","Company","Buy Price","Tax %","M.R.P","Sale Price","Packing","Quantity","Total","BatchNo","ExpiryDate" ],

					colModel: [
								{ 	
									   name: "catIDforVAt",
									   hidden:true
									   //resizable: true,
								
								
								},
					           { 	
					        	   name: "productID",
					        	   hidden:true
					        	   //resizable: true,


					           },
					           { 	
					        	   name: "productName",
					        	   width:120,

					           },
					           { 	
					        	   name: "manufacturer",
					        	   width:120
					        	  
					           },
					           {
					        	   name: "buyPrice",
					        	   width: 120,
					        	   editable: true
					           },	
					           {
					        	   name: "taxPercentage",
					        	   width: 140,
					        	   editable: true
					           },
					           {
					        	   name: "mrp",
					        	   width: 140,
					        	   editable: true
					           },
					           {
					        	   name:  "salePrice",
					        	   width: 140,
					        	   editable: true
					           },
					           
					           {
					        	   name: "weight",
					        	   width: 100,
					        	   
					           },

					           {
					        	   name: "quantity",
					        	   width: 120,
					        	   editable: true


					           },

					         {
					        	   name : 'Total',
					        	  // name: "",
					        	  formatter: sumFmatter,
					        	   width: 150,
					        	  
					           },
					           {
					        	   label : 'batchNo',
					        	   name: "batchNo",
					        	   width: 150,
					        	   editable:true,
					        	  
					        	  
					           },
					           {
					        	   label : 'expiryDate',
					        	   name: "expiryDate",
					        	   index:'Date',
					        	   width: 200,
					        	   editable:true,
					        	   edittype:"text",
					        	   editrules:{date:true, minValue:0}, datefmt:'Y-m-d',
					        	   editoptions:{dataInit: function (elem) {$(elem).datepicker({dateFormat:"yy-mm-dd"});} }
					           }
					           ],


					           sortorder : 'desc',
					           
					           multiselect: false,	
					           loadonce: false,
					           rownumbers:true,
					           'cellEdit':true,
					           afterSaveCell: function  grossTotal() {
							        	Calculation of total after editing quantity
							        	   
							        	   // $(this).trigger('reloadGrid');
							        	   var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
					                       var rowData = jQuery("#jqGrid").getRowData(rowId);
					                    	var quantity = rowData['quantity'];
					                    	var buyPrice = rowData['buyPrice'];
					                    	var taxPercentage = rowData['taxPercentage'];
					                    	var taxAmount = ((taxPercentage/100)*buyPrice);
					                    	var BuyPriceWithTaxAmount = taxAmount + buyPrice;
					                    	var tota = quantity * BuyPriceWithTaxAmount;
					                    	$("#jqGrid").jqGrid("setCell", rowId, "Total", tota);
					        	},
					           
					        
					        	
					           
					           viewrecords: true,
					           width: 1200,
					           height: 250,
					           rowNum: 10,
					           pager: "#jqGridPager",
					           sortorder: "desc",
					       	onSelectRow: function(productID){
					       		if(productID && productID!==lastsel){
					       			jQuery('#jqGrid').jqGrid('restoreRow',lastsel);
					       			jQuery('#jqGrid').jqGrid('editRow',productID,true);
					       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
					       			lastsel=productID;
					       		}
					       	},
					       	
				});

				count = jQuery("#jqGrid").jqGrid('getGridParam', 'records'); 
			     var rowdata =$("#jqGrid").jqGrid('getGridParam','data');
			     var ids = jQuery("#jqGrid").jqGrid('getDataIDs');
				 
				
				  var prodName,com,packing;
				  for (var j = 0; j < count; j++) 
				  {
					  prodName = rowdata[j].productName;
					  com = rowdata[j].manufacturer;
					  packing = rowdata[j].weight;
					
					 var rowId = ids[j];
					 var rowData = jQuery('#jqGrid').jqGrid ('getRowData', rowId);
					
					if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
				    	
				    	newrow=false;
						alert("Product Name Already Inserted !!!");
						var grid = jQuery("#jqGrid");
					    grid.trigger("reloadGrid");
				    	break;
					}
					else
					{
						newrow = true;
					}
				   }
				  
				  if(newrow == true)
					 {
						
					 // $("#credit").addRowData(i,jsonData[i]);
					  $("#jqGrid").addRowData(count,jsonData[i]);
						
					 }  
			        
				
				
				
				//$("#jqGrid").addRowData(i,jsonData[i]);
				if(count==0 || count==null)
				{
					// $("#credit").addRowData(i,jsonData[i]);
					 $("#jqGrid").addRowData(0,jsonData[i]);
				}
				
				
				
				
				//$("#jqGrid").addRowData(i,jsonData[i]);
				function pickdates(productID){
					jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
				}
				jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});


				
				$('#jqGrid').navGrid('#jqGridPager',
						// the buttons to appear on the toolbar of the grid
						{edit: true, add: false,del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
						// options for the Edit Dialog
						
						
						
						
						
						{
							
							afterSaveCell: function () {
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
						
						
						
						// options for the Delete Dialogue
						{
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
	
		}*/
	
}


function batchNoValidate(){
        var rowId =$("#jqGrid").jqGrid('getGridParam','selrow');  
        var rowData = jQuery("#jqGrid").getRowData(rowId);
        var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
        var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
    	var AllRows=JSON.stringify(allRowsInGrid);
        for (var i = 0; i < count; i++) {
    		var catId = allRowsInGrid[i].catId;
        if (catId != 1){
        	var batchNo = allRowsInGrid[i].batchNo;
        	var expiryDate = allRowsInGrid[i].expiryDate;
        	/*var batchNo = rowData['batchNo'+i]; 
        	var expiryDate = rowData['expiryDate'+i];*/
        	if(batchNo == undefined || batchNo == ""){
        		alert("Please Enter Batch number At Column No :: "+ ++i );
        		return true;
        	}
        	else{
        		if(expiryDate == undefined || expiryDate == ""){
        			alert("Please Enter Expiry Date At Column No :: "+ ++i );
            		return true;
        		}
        	}
           }
        }
        addingGoodsReceive()
}

function batchNoValidateForBooked(){
    var rowId =$("#jqGrid1").jqGrid('getGridParam','selrow');  
    var rowData = jQuery("#jqGrid1").getRowData(rowId);
    var count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records');
    var allRowsInGrid = $('#jqGrid1').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
    for (var i = 0; i < count; i++) {
		var catId = allRowsInGrid[i].catId;
    if (catId != 1){
    	var batchNo = allRowsInGrid[i].batchNo;
    	var expiryDate = allRowsInGrid[i].expiryDate;
    	/*var batchNo = rowData['batchNo'+i]; 
    	var expiryDate = rowData['expiryDate'+i];*/
    	if(batchNo == undefined || batchNo == ""){
    		alert("Please Enter Batch number At Column No :: "+ ++i );
    		return true;
    	}
    	else{
    		if(expiryDate == undefined || expiryDate == ""){
    			alert("Please Enter Expiry Date At Column No :: "+ ++i );
        		return true;
    		}
    	}
       }
    }
    addBookedGoodsReceive()
}