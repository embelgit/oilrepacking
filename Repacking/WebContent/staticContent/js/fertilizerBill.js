//get Product detail as Per barcode for cash customer
function getitemData(){ 
		var value = document.getElementById("key").value;
		
		var params= {};
		var count=0;
		var newrow;
		var rowId;

		params["methodName"] ="fetchCust";
		params["key"]=value;
		

		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			  var jsonData = $.parseJSON(data);
				
		      // $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
			
	        
		     $.each(jsonData,function(i,v)
				{
		    	 
		    	 
		        function sumFmatter (cellvalue, options, rowObject)
		        {
		            
		        	var tax = options.rowData.vatPercentage;
		        	
		        	if(tax == 0){
		        		var tot= (options.rowData.quantity * options.rowData.salePrice);
		        		if(isNaN(tot)){
		        			tot = 0;
						}
		        	}
		        	if(tax != 0){
		        		
		        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
		        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice)
		        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
		        		if(isNaN(tot)){
		        			tot = 0;
						}
		        	}
		        	var jam=0;
		        	
		        	
		        	count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        	for (var i = 0; i < count; i++) {
		        		
		            	var quantity = allRowsInGrid1[i].quantity;
		             	params["quantity"+i] = quantity;
		             	
		             	var salePrice = allRowsInGrid1[i].salePrice;
		            	params["salePrice"+i] = salePrice;
		            	
		            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
		            	params["vatPercentage"+i] = vatPercentage;
		            	
		            	if(vatPercentage == 0){
		            		
		            		var totals1=(salePrice)*(quantity);
		            		if(isNaN(totals1)){
			             		totals1 = 0;
							}
			            	jam = jam + totals1;
		            	}
		            	
		                if(vatPercentage != 0){
		                	
		                	var taxcal = (vatPercentage/100) * salePrice;
		                	var newSalePrice = Number(salePrice) + Number(taxcal);
		                	var totals1=(Number(newSalePrice)*Number(quantity));
		                	if(isNaN(totals1)){
			             		totals1 = 0;
							}
			            	jam = jam + totals1;
		                }                	
		            	
	            	
	        	    }
		        	
		        		
		        		 document.getElementById("totalWithExpense").value = jam;
		        	
		            	 return tot;

		        }
		        
		         count = jQuery("#list4").jqGrid('getGridParam', 'records'); 
			     var rowdata =$("#list4").jqGrid('getGridParam','data');
			     var ids = jQuery("#list4").jqGrid('getDataIDs');
				 
				
				  var prodName,com,packing,unit;
				  for (var j = 0; j < count; j++) 
				  {
					  prodName = rowdata[j].itemName;
					  com = rowdata[j].companyName;
					  packing = rowdata[j].weight;
					  unit = rowdata[j].unitName;
					
					 var rowId = ids[j];
					 var rowData = jQuery('#list4').jqGrid ('getRowData', rowId);
					
					if (prodName == jsonData.offer.itemName && com == jsonData.offer.companyName && packing == jsonData.offer.weight && unit == jsonData.offer.unitName) {
				    	/*ori_quantity = +rowdata[j].quantity+1;
				    	
				    	$("#list4").jqGrid("setCell", rowId, "quantity", ori_quantity);
				    	var grid = jQuery("#list4");
				    	grid.trigger("reloadGrid");*/
				    	newrow=false;
						//alert("Product Name Already Inserted !!!");
						var grid = jQuery("#list4");
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
						
					  //$("#list4").addRowData(i,jsonData[i]);
					  $("#list4").addRowData(count,jsonData.offer);
						
					 }
			
			
			$("#list4").jqGrid({
				datatype: "local",
				
				colNames:['cat_id','ItemName','CompanyName','Packing','Unit','Quantity', 'UnitPrice','MRP','TaxPercentage' ,'Total'],
				colModel:[ 
						     {
						    	 name:'cat_id',
						    	 hidden:true,
						     },
				          
	               
				     {	name:'itemName',
				    	 width:150,
						
					},
					
				     {	name:'companyName',
				    	 width:150,
						
					},
				           
				   
					{	name:'weight',
						width:100,
						
						
					},
					{	name:'unitName',
						width:100,
						
						
					},
					{	name:'quantity',
						width:100,
						editable: true
						
					},

					{	name:'salePrice',
						width:150,
						editable: true
						
					},
					{	name:'mrp',
						width:140,
						editable: true
						
					},
					
					{	name:'vatPercentage',
						width:100,
						editable: true
						
					},
					{	name:'total',
						width:150,
						formatter: sumFmatter
					},
					
					
				],
					
				
				sortorder : 'desc',
				loadonce: false,
				viewrecords: true,
				width: 1200,
	            height: 350,
	            rowheight: 300,
	            hoverrows: true,
		        rownumbers: true,
	            rowNum: 10,
	            'cellEdit':true,
		           afterSaveCell: function () {
		        	   // $(this).trigger('reloadGrid');
		        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
	                var rowData = jQuery("#list4").getRowData(rowId);
	             	var quantity = rowData['quantity'];
	             	var salePrice = rowData['salePrice'];
	             	
	             	var tota = quantity * salePrice;
	             	
	             	$("#list4").jqGrid("setCell", rowId, "total", tota);
		        	},
	           
				pager: "#jqGridPager",
				
				
				
			});
			
		
			//$("#list4").addRowData(i+1,jsonData[i]);
			if(count==0 || count==null)
			{
				 // $("#list4").addRowData(i,jsonData[i]);
				  $("#list4").addRowData(0,jsonData.offer);
			}
			

	     
			 $('#list4').navGrid('#jqGridPager',
		                
		                { edit: true, add: false, del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
		                
		                {
		                    editCaption: "The Edit Dialog",
		                   
		                    afterSubmit: function () {
								
		                      var grid = $("#list4"),
							  intervalId = setInterval(
								 function() {
								         grid.trigger("reloadGrid",[{current:true}]);
								   },
								   500);
		                         
		                      
							},
							
							 recreateForm: true,
							 checkOnUpdate : true,
							 checkOnSubmit : true,
			                 closeAfterEdit: true,
							
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                },
		                
		                {
		                    closeAfterAdd: true,
		                    recreateForm: true,
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                },
		                
		                {
		                	closeAfterdel:true,
		                	checkOnUpdate : true,
							checkOnSubmit : true,
							recreateForm: true,
		                	
							reloadAftersubmit:true,	
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                		
		                });
			 
			 
				   });
				
			})

}


//get Product detail as per Barcode for credit customer
function getProDetailsAsPerBarcode(){
	 
	var value = document.getElementById("barcode1").value;
	
	var params= {};
	var count=0;
	var newrow;
	var rowId;

	params["methodName"] ="fetchCust";
	params["key"]=value;
	

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		  var jsonData = $.parseJSON(data);
			
	      // $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
		 
	     $.each(jsonData,function(i,v)
			{
	    	 
	    	 
	        function sumFmatter (cellvalue, options, rowObject)
	        {
	            
	        	var tax = options.rowData.vatPercentage;
	        	
	        	if(tax == 0){
	        		var tot= (options.rowData.quantity * options.rowData.salePrice);
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	if(tax != 0){
	        		
	        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
	        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice);
	        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	var jam=0;
	        	
	        	
	        	var count = jQuery("#credit").jqGrid('getGridParam', 'records');
	        	var allRowsInGrid1 = $('#credit').getGridParam('data');
	        	var AllRows=JSON.stringify(allRowsInGrid1);
	        	for (var i = 0; i < count; i++) {
	        		
	            	var quantity = allRowsInGrid1[i].quantity;
	             	params["quantity"+i] = quantity;
	             	
	             	var salePrice = allRowsInGrid1[i].salePrice;
	            	params["salePrice"+i] = salePrice;
	            	
	            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
	            	params["vatPercentage"+i] = vatPercentage;
	            	
	            	if(vatPercentage == 0){
	            		
	            		var totals1=(salePrice)*(quantity);
	            		if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	            	}
	            	
	                if(vatPercentage != 0){
	                	
	                	var taxcal = (vatPercentage/100) *Number(salePrice);
	                	var newSalePrice = Number(salePrice) + Number(taxcal);
	                	var totals1=(Number(newSalePrice)*Number(quantity));
	                	if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	                }                	
	            	
          	
      	    }
	        	
	        		
	        		 document.getElementById("totalWithExpense1").value = jam;
	        	
	            	 return tot;

	        }
	        
	        count = jQuery("#credit").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#credit").jqGrid('getGridParam','data');
		     var ids = jQuery("#credit").jqGrid('getDataIDs');
			 
			
			  var prodName,com,packing,unit;
			  for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].itemName;
				  com = rowdata[j].companyName;
				  packing = rowdata[j].weight;
				  unit = rowdata[j].unitName;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#credit').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData.offer.itemName && com == jsonData.offer.companyName && packing == jsonData.offer.weight && unit == jsonData.offer.unitName) {
			    	/*ori_quantity = +rowdata[j].quantity+1;
			    	
			    	$("#list4").jqGrid("setCell", rowId, "quantity", ori_quantity);
			    	var grid = jQuery("#list4");
			    	grid.trigger("reloadGrid");*/
			    	newrow=false;
					//alert("Product Name Already Inserted !!!");
					var grid = jQuery("#list4");
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
				  $("#credit").addRowData(count,jsonData.offer);
					
				 }
		
		
		$("#credit").jqGrid({
			datatype: "local",
			
			colNames:['cat_id','ItemName','CompanyName','Packing','Unit','Quantity', 'UnitPrice','MRP','TaxPercentage' ,'Total'],
			colModel:[ 
					     {
					    	 name:'cat_id',
					    	 hidden:true,
					     },
			          
             
			     {	name:'itemName',
			    	 width:150,
					
				},
				
			     {	name:'companyName',
			    	 width:150,
					
				},
			           
			   
				{	name:'weight',
					width:100,
					
				},
				{	name:'unitName',
					width:100,
					
					
				},
				{	name:'quantity',
					width:100,
					editable: true
					
				},

				{	name:'salePrice',
					width:150,
					editable: true
					
				},
				{	name:'mrp',
					width:140,
					editable: true
					
				},
				
				{	name:'vatPercentage',
					width:100,
					editable: true
					
				},
				{	name:'total',
					width:150,
					formatter: sumFmatter
				},
				
				
			],
				
			
			sortorder : 'desc',
			loadonce: false,
			viewrecords: true,
			width: 1200,
          height: 350,
          rowheight: 300,
          hoverrows: true,
	        rownumbers: true,
          rowNum: 10,
          'cellEdit':true,
	           afterSaveCell: function () {
	        	   // $(this).trigger('reloadGrid');
	        	   var rowId =$("#credit").jqGrid('getGridParam','selrow');  
              var rowData = jQuery("#credit").getRowData(rowId);
           	var quantity = rowData['quantity'];
           	var salePrice = rowData['salePrice'];
           	
           	var tota = quantity * salePrice;
           	
           	$("#credit").jqGrid("setCell", rowId, "total", tota);
	        	},
         
			pager: "#jqGridPager",
			
			
			
		});
		
	
		//$("#credit").addRowData(i+1,jsonData[i]);
		if(count==0 || count==null)
		{
			// $("#credit").addRowData(i,jsonData[i]);
			 $("#credit").addRowData(0,jsonData.offer);
		}
		
      
   
		 $('#credit').navGrid('#jqGridPager',
	                
	                { edit: true, add: false, del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
	                
	                {
	                    editCaption: "The Edit Dialog",
	                   
	                    afterSubmit: function () {
							
	                      var grid = $("#credit"),
						  intervalId = setInterval(
							 function() {
							         grid.trigger("reloadGrid",[{current:true}]);
							   },
							   500);
	                         
	                      
						},
						
						 recreateForm: true,
						 checkOnUpdate : true,
						 checkOnSubmit : true,
		                 closeAfterEdit: true,
						
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                    closeAfterAdd: true,
	                    recreateForm: true,
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                	closeAfterdel:true,
	                	checkOnUpdate : true,
						checkOnSubmit : true,
						recreateForm: true,
	                	
						reloadAftersubmit:true,	
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                		
	                });
		 
			   });
			
		})

}

function getCustName(){
	var params= {};
	
	var input = document.getElementById('creditCustomer'), list1 = document
	.getElementById('cust_drop1'), i, fk_sup_id;

		for (i = 0; i < list1.options.length; ++i) {
			if (list1.options[i].value === input.value) {
				fk_cust_id = list1.options[i].getAttribute('data-value');
				}
		}
	
	$("#custName").append($("<input/>").attr("value","").text());
	params["fk_cust_id"]= fk_cust_id;
	params["methodName"] = "getCustName";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				  document.getElementById("custName").value = v.firstName+" "+v.lastName;
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
 
}

/*+++++++++++++  Fetcing Data from goods receive by product name for cash customer 20-5-17++++++++++++*/
function fetchDataByProductName(){
	var params= {};
	//var itemparams={};
	productId = $('#proName').val();
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var company = splitText[1];
	var weight = splitText[2];
	
	params["proName"]= proName;
	params["company"]= company;
	params["weight"]= weight;
	
	params["methodName"] = "fetchDetailsAsPerProductNameInFertiBill";
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
			  var jsonData = $.parseJSON(data);
				
		      // $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
			  var grid = jQuery("#list4");
		    	grid.trigger("reloadGrid");
			  
	        
		     $.each(jsonData,function(i,v)
				{
		    	 
		    	 
		        function sumFmatter (cellvalue, options, rowObject)
		        {
		            
		        	var tax = options.rowData.vatPercentage;
		        	
		        	if(tax == 0){
		        		var tot= (options.rowData.quantity * options.rowData.salePrice);
		        	}
		        	if(tax != 0){
		        		
		        		var taxcalculation = (tax/100)* options.rowData.salePrice;
		        		var tot= (options.rowData.quantity * options.rowData.salePrice) + taxcalculation;
		        	}
		        	var jam=0;
		        	
		        	
		        	var count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        	for (var i = 0; i < count; i++) {
		        		
		            	var quantity = allRowsInGrid1[i].quantity;
		             	params["quantity"+i] = quantity;
		             	
		             	var salePrice = allRowsInGrid1[i].salePrice;
		            	params["salePrice"+i] = salePrice;
		            	
		            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
		            	params["vatPercentage"+i] = vatPercentage;
		            	
		            	if(vatPercentage == 0){
		            		
		            		var totals1=(salePrice)*(quantity);
			            	jam = jam + totals1;
		            	}
		            	
		                if(vatPercentage != 0){
		                	
		                	var taxcal = (vatPercentage/100) * salePrice;
		                	var totals1=((salePrice)*(quantity)) + taxcal;
			            	jam = jam + totals1;
		                }                	
		            	
	            	
	        	    }
		        	
		        		
		        		 document.getElementById("totalWithExpense").value = jam;
		        	
		            	 return tot;

		        }
		        
		  	
			
			
			$("#list4").jqGrid({
				datatype: "local",
				
				colNames:['pk_goodre_id','supp_id','cat_id','BarcodeNO','ItemName','CompanyName','Packing', 'Quantity', 'UnitPrice','MRP','TaxPercentage' ,'Total'],
				colModel:[ 
				          
				          
	                 {
		                name:'PkGoodreceiveId',
		                hidden:true,
		              
	                 },    
				     {
				    	 name:'supplier_id',
				    	 hidden:true,
				     },
				     {
				    	 name:'cat_id',
				    	 hidden:true,
				     },
				    
				 	{
				    	 name:'barcodeNo',
				    	 width:100,				    	
				    	 
				     },
				     {	name:'itemName',
				    	 width:150,
						
					},
					
				     {	name:'companyName',
				    	 width:150,
						
					},
				           
				   
					{	name:'weight',
						width:100,
						editable: true
						
					},
					
					{	name:'quantity',
						width:100,
						editable: true
						
					},

					{	name:'salePrice',
						width:150,
						editable: true
						
					},
					{	name:'mrp',
						width:140,
						editable: true
						
					},
					
					{	name:'vatPercentage',
						width:100,
						editable: true
						
					},
					{	name:'total',
						width:150,
						formatter: sumFmatter
					},
					
					
				],
					
				
				sortorder : 'desc',
				loadonce: false,
				viewrecords: true,
				width: 1200,
	            height: 350,
	            rowheight: 300,
	            hoverrows: true,
		        rownumbers: true,
	            rowNum: 10,
	            'cellEdit':true,
		           afterSaveCell: function () {
		        	   // $(this).trigger('reloadGrid');
		        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
	                var rowData = jQuery("#list4").getRowData(rowId);
	             	var quantity = rowData['quantity'];
	             	var salePrice = rowData['salePrice'];
	             	
	             	var tota = quantity * salePrice;
	             	
	             	$("#list4").jqGrid("setCell", rowId, "total", tota);
		        	},
	           
				pager: "#jqGridPager",
				
				
				
			});
			
		
			$("#list4").addRowData(i+1,jsonData[i]);
	     
			 $('#list4').navGrid('#jqGridPager',
		                
		                { edit: true, add: false, del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
		                
		                {
		                    editCaption: "The Edit Dialog",
		                   
		                    afterSubmit: function () {
								
		                      var grid = $("#list4"),
							  intervalId = setInterval(
								 function() {
								         grid.trigger("reloadGrid",[{current:true}]);
								   },
								   500);
		                         
		                      
							},
							
							 recreateForm: true,
							 checkOnUpdate : true,
							 checkOnSubmit : true,
			                 closeAfterEdit: true,
							
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                },
		                
		                {
		                    closeAfterAdd: true,
		                    recreateForm: true,
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                },
		                
		                {
		                	closeAfterdel:true,
		                	checkOnUpdate : true,
							checkOnSubmit : true,
							recreateForm: true,
		                	
							reloadAftersubmit:true,	
		                    errorTextFormat: function (data) {
		                        return 'Error: ' + data.responseText
		                    }
		                		
		                });
			 
			 
				   });
				
				
 				
			
				
 			})
}





/*++++++++++++++ Fetch product details by product name for CREDIT customer 22-5-17 ++++++++++++++++++++++++++*/
/*function getProductDetailsByProductNameForCredit(){

	var params= {};
	//var itemparams={};
	productId = $('#proName1').val();
	
	$("#proName1 option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var company = splitText[1];
	var subCatId = splitText[2];
	var catId=splitText[7];
	
	
	params["proName"]= proName;
	params["company"]= company;
	params["catId"]= catId;
	params["subCatId"]= subCatId;
	
	var count=0;
	var newrow;
	var rowId;
	
	params["methodName"] = "getProductDetails2";
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
		  var jsonData = $.parseJSON(data);
			
	      // $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
		
    
	     $.each(jsonData,function(i,v)
			{
	    	 
	    	 
	        function sumFmatter (cellvalue, options, rowObject)
	        {
	            
	        	var tax = options.rowData.vatPercentage;
	        	
	        	if(tax == 0){
	        		var tot= (options.rowData.quantity * options.rowData.salePrice);
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	if(tax != 0){
	        		
	        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
	        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice)
	        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	var jam=0;
	        	
	        	
	        	count = jQuery("#credit").jqGrid('getGridParam', 'records');
	        	var allRowsInGrid1 = $('#credit').getGridParam('data');
	        	var AllRows=JSON.stringify(allRowsInGrid1);
	        	for (var i = 0; i < count; i++) {
	        		
	            	var quantity = allRowsInGrid1[i].quantity;
	             	params["quantity"+i] = quantity;
	             	
	             	var salePrice = allRowsInGrid1[i].salePrice;
	            	params["salePrice"+i] = salePrice;
	            	
	            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
	            	params["vatPercentage"+i] = vatPercentage;
	            	
	            	if(vatPercentage == 0){
	            		
	            		var totals1=(salePrice)*(quantity);
	            		if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	            	}
	            	
	                if(vatPercentage != 0){
	                	
	                	var taxcal = (vatPercentage/100) * salePrice;
	                	var newSalePrice = Number(salePrice) + Number(taxcal);
	                	var totals1=(Number(newSalePrice)*Number(quantity));
	                	if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	                }                	
	            	
        	
    	    }
	        	
	        		
	        		 document.getElementById("totalWithExpense").value = jam;
	        	
	            	 return tot;

	        }
	        
	         count = jQuery("#credit").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#credit").jqGrid('getGridParam','data');
		     var ids = jQuery("#credit").jqGrid('getDataIDs');
			 
			
			  var prodName,com,packing,unit,ltr;
			  for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].itemName;
				  com = rowdata[j].companyName;
				  packing = rowdata[j].weight;
				  unit = rowdata[j].unitName;
				  ltr = rowdata[j].unitName;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#credit').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData.offer.itemName && com == jsonData.offer.companyName && packing == jsonData.offer.weight && unit == jsonData.offer.unitName) {
			    	ori_quantity = +rowdata[j].quantity+1;
			    	
			    	$("#list4").jqGrid("setCell", rowId, "quantity", ori_quantity);
			    	var grid = jQuery("#list4");
			    	grid.trigger("reloadGrid");
			    	newrow=false;
					//alert("Product Name Already Inserted !!!");
					var grid = jQuery("#credit");
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
					
				  //$("#list4").addRowData(i,jsonData[i]);
				  $("#credit").addRowData(count,jsonData.offer);
					
				 }
		
		
		$("#credit").jqGrid({
			datatype: "local",
			
			colNames:['cat_id','sub_cat_id','ItemName','CompanyName',"HSN",'Packing','Unit', 'UnitPrice','GST','Quantity','Total'],
			colModel:[ 
					     {
					    	 name:'cat_id',
					    	 hidden:true,
					     },

					     {
					    	 name:'sub_cat_id',
					    	hidden:true,
					     },
					     
           
					     {	name:'itemName',
					    	 width:150,
							
					     },
						
					     {	name:'companyName',
					    	 width:150,
							
						 },
						 {	name:'hsn',
							width:80,
							
							
						 },      
					   
						 {	name:'weight',
							width:70,
							
							
						 },
						 {	name:'unitName',
							width:70,
							
							
						 },
						
		
						 {	name:'salePrice',
							width:120,
							editable: true
							
						 },
						{	name:'mrp',
							width:120,
							editable: true
							
						},
						
						 {	name:'gst',
							width:80,
							editable: true
							
						 },
						{	name:'sGst',
							width:80,
							editable: true
							
						},
						{	name:'igst',
							width:80,
							editable: true
							
						},
						 {	name:'quantity',
							width:100,
							editable: true
							
						 },
						 {	name:'total',
							width:150,
							//formatter: sumFmatter
						 },
						
						
					],
						
					
					sortorder : 'desc',
					loadonce: false,
					viewrecords: true,
					width: 1200,
		            shrinkToFir:true,
		            rowheight: 300,
		            hoverrows: true,
			         rownumbers: true,
		             rowNum: 10,
		        'cellEdit':true,
	           afterSaveCell: function () {
	        	   // $(this).trigger('reloadGrid');
	        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
            var rowData = jQuery("#list4").getRowData(rowId);
         	var quantity = rowData['quantity'];
         	var salePrice = rowData['salePrice'];
         	
         	var tota = quantity * salePrice;
         	
         	$("#list4").jqGrid("setCell", rowId, "total", tota);
	        	},
	        	
	        	
	        	 afterSaveCell: function  grossTotal() {
				        	Calculation of total after editing quantity
				        	   
				        	   // $(this).trigger('reloadGrid');
				        	   var rowId =$("#credit").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#credit").getRowData(rowId);
		                    	var quantity = rowData['quantity'];
		                    	var salePrice = rowData['salePrice'];
		                    	
		                    //	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	
		                    	if (Gst != 0){
	                    			var taxPercentage = Gst;
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	 if(Gst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    	
		                    	productId = $('#proName1').val();
		                    	
		                    	$("#proName1 option:selected").each(function() {
		                    		   selectedVal = $(this).text();
		                    		});
		                    	
		                    	var splitText = selectedVal.split(",");
		                    	
		                    	var stock = splitText[4];
		                    	
		                    	if ( Number(quantity) > Number(stock)){
		                    		alert("Available stock = "+stock);
	                    		
	                    	        }
		                    	
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#credit").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#credit').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	document.getElementById("totalWithExpense1").value = Total;
		        		        	document.getElementById("grossTotal1").value = Total;
	        		        		//document.getElementById("duptotal").value = Total;
		                    	
		        	},
	        	
       
			pager: "#jqGridPager1",
			
			
			
		});
		
	
		//$("#list4").addRowData(i+1,jsonData[i]);
		if(count==0 || count==null)
		{
			 // $("#list4").addRowData(i,jsonData[i]);
			  $("#credit").addRowData(i,jsonData.offer);
		}
		

 
		 $('#credit').navGrid('#jqGridPager1',
	                
	                { edit: true, add: false, del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
	                
	                {
	                    editCaption: "The Edit Dialog",
	                   
	                    afterSubmit: function () {
							
	                      var grid = $("#credit"),
						  intervalId = setInterval(
							 function() {
							         grid.trigger("reloadGrid",[{current:true}]);
							   },
							   500);

						},
						
						 recreateForm: true,
						 checkOnUpdate : true,
						 checkOnSubmit : true,
		                 closeAfterEdit: true,
						
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                    closeAfterAdd: true,
	                    recreateForm: true,
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                	closeAfterdel:true,
	                	checkOnUpdate : true,
						checkOnSubmit : true,
						recreateForm: true,
	                	
						afterComplete: function() {
	                		$('#list4').trigger( 'reloadGrid' );

	 				        	Calculation of total after editing quantity
	 				        	   
	 				        	   // $(this).trigger('reloadGrid');
	                		 var rowId =$("#credit").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#credit").getRowData(rowId);
		                    	var quantity = rowData['quantity'];
		                    	var salePrice = rowData['salePrice'];
		                    	
		                    //	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	
		                    	if (Gst != 0){
	                    			var taxPercentage = Gst;
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	 if(Gst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    	
		                    	productId = $('#proName1').val();
		                    	
		                    	$("#proName1 option:selected").each(function() {
		                    		   selectedVal = $(this).text();
		                    		});
		                    	
		                    	var splitText = selectedVal.split(",");
		                    	
		                    	var stock = splitText[4];
		                    	
		                    	if ( Number(quantity) > Number(stock)){
		                    		alert("Available stock = "+stock);
	                    		
	                    	        }
		                    	
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#credit").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#credit').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	document.getElementById("totalWithExpense1").value = Total;
		        		        	document.getElementById("grossTotal1").value = Total;
	        		        		//document.getElementById("duptotal").value = Total;
		                    	
		
						},
						afterSubmit: function() {
	                		$('#credit').trigger( 'reloadGrid' );
						},
						reloadAftersubmit:true,	
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                		
	                });
		 
		 
			   });
			
			
			
		
			
		})

	
	
	
	
}*/



function getProductDetailsByProductNameForCredit(){
	
	var itemparams = {};
	/*var input1 = document.getElementById('containerName'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}*/
	
	
	productId = $('#proName1').val();
	
	$("#proName1 option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var company = splitText[1];
	var subCatId = splitText[2];
	var cont = splitText[4];
	var catId=splitText[7];
	
	itemparams["proName"]= proName;
	itemparams["company"]= company;
	itemparams["catId"]= catId;
	itemparams["subCatId"]= subCatId;
	
	
	var count=0;
	var newrow;
	var rowId;
	
	itemparams["methodName"] = "getProductDetails2";
	$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
			function(data)
			{ 
		var jsonData = $.parseJSON(data);
		
		 $.each(jsonData,function(i,v)
					{
			    	 
			    	 
			        function sumFmatter (cellvalue, options, rowObject)
			        {
			            
			        	var tax = options.rowData.vatPercentage;
			        	
			        	if(tax == 0){
			        		var tot= (options.rowData.quantity * options.rowData.salePrice);
			        		if(isNaN(tot)){
			        			tot = 0;
							}
			        	}
			        	if(tax != 0){
			        		
			        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
			        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice)
			        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
			        		if(isNaN(tot)){
			        			tot = 0;
							}
			        	}
			        	var jam=0;
			        	
			        	
			        	count = jQuery("#credit").jqGrid('getGridParam', 'records');
			        	var allRowsInGrid1 = $('#credit').getGridParam('data');
			        	var AllRows=JSON.stringify(allRowsInGrid1);
			        	for (var i = 0; i < count; i++) {
			        		
			            	var quantity = allRowsInGrid1[i].quantity;
			             	params["quantity"+i] = quantity;
			             	
			             	var salePrice = allRowsInGrid1[i].salePrice;
			            	params["salePrice"+i] = salePrice;
			            	
			            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
			            	params["vatPercentage"+i] = vatPercentage;
			            	
			            	if(vatPercentage == 0){
			            		
			            		var totals1=(salePrice)*(quantity);
			            		if(isNaN(totals1)){
				             		totals1 = 0;
								}
				            	jam = jam + totals1;
			            	}
			            	
			                if(vatPercentage != 0){
			                	
			                	var taxcal = (vatPercentage/100) * salePrice;
			                	var newSalePrice = Number(salePrice) + Number(taxcal);
			                	var totals1=(Number(newSalePrice)*Number(quantity));
			                	if(isNaN(totals1)){
				             		totals1 = 0;
								}
				            	jam = jam + totals1;
			                }                	
			            	
			                if(quantity > cont){
	                    		 alert("please enter quantity less than stock");
	                    		 var setZero = 0;
                         		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
                         		 return false;
	                    	 }
			                
		    	    }
			        	
			        		
			        		 document.getElementById("totalWithExpense").value = jam;
			        	
			            	 return tot;

			        }
			        
			         count = jQuery("#credit").jqGrid('getGridParam', 'records'); 
				     var rowdata =$("#credit").jqGrid('getGridParam','data');
				     var ids = jQuery("#credit").jqGrid('getDataIDs');
				   /*  var quan;		
				     for (var j = 0; j < count; j++) 
					  {
				    	quan =  rowdata[j].quantity;
				    	if(quan > cont){
                   		 alert("please enter quantity less than stock");
                   		 var setZero = 0;
                    		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
                    		 return false;
				    		}
					  }*/
				     
	        		 document.getElementById("proName1").value = "";
			/*var productName =  v.productName;
			var  buyPrice =  v.buyPrice;  
			var salePrice =v.salePrice;
			var quantity = v.quantity;
			var weight = v.weight;
			var productID = v.productID ;
			var manufacturer = v.manufacturer ;
			var hsn = v.hsn ;
			var lastsel = productID;*/
        	
			//$("#jqGrid").addRowData(count,jsonData.offer);
			$("#credit").jqGrid({
				datatype: "local",
				
				colNames:['cat_id','sub_cat_id','ItemName','CompanyName',"HSN",'Packing','Unit', 'UnitPrice','GST','Quantity','Total'],
				colModel:[ 
						     {
						    	 name:'cat_id',
						    	 hidden:true,
						     },

						     {
						    	 name:'sub_cat_id',
						    	hidden:true,
						     },
						     
	           
						     {	name:'itemName',
						    	 width:140,
								
						     },
							
						     {	name:'companyName',
						    	 width:140,
								
							 },
							 {	name:'hsn',
								width:80,
								
								
							 },      
						   
							 {	name:'weight',
								width:70,
								
								
							 },
							 {	name:'unitName',
								width:70,
								
								
							 },
							
			
							 {	name:'salePrice',
								width:100,
								editable: true
								
							 },
							/*{	name:'mrp',
								width:120,
								editable: true
								
							},*/
							
							 {	name:'gst',
								width:80,
								editable: true
								
							 },
							/*{	name:'sGst',
								width:80,
								editable: true
								
							},*/
							/*{	name:'igst',
								width:80,
								editable: true
								
							},*/
							 {	name:'quantity',
								width:100,
								editable: true
								
							 },
							 {	name:'total',
								width:120,
								//formatter: sumFmatter
							 },
							
							
						],
							
						
						sortorder : 'desc',
						loadonce: false,
						viewrecords: true,
						width: 1200,
			            shrinkToFir:true,
			            rowheight: 300,
			            hoverrows: true,
				         rownumbers: true,
			             rowNum: 10,
			        'cellEdit':true,
			        afterSaveCell: function  grossTotal() {
					       /* 	Calculation of total after editing quantity*/
					        	   
			        		document.getElementById("discount1").value = 0;
			        		document.getElementById("discountAmount1").value = 0;
			        		document.getElementById("hamaliExpence3").value = 0;
			        		document.getElementById("hamaliExpence1").value = 0;
		     			
		     			
		     					   // $(this).trigger('reloadGrid');
					        	   var rowId =$("#credit").jqGrid('getGridParam','selrow');  
			                       var rowData = jQuery("#credit").getRowData(rowId);
			                       var quantity = rowData['quantity'];
			                    	var salePrice = rowData['salePrice'];
			                    		
			                    	var iGst = rowData['igst'];
			                    	var Gst = rowData['gst'];
			                    	
			                    	var count = jQuery("#credit").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#credit').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);           
		        		        	var quan;		
		        		        	for (var j = 0; j < count; j++) 
		       					  		{
		        		        		quan =  rowdata[j].quantity;
		        		        		if(Number(quan) > Number(cont)){
		                          		 alert("please enter quantity less than stock");
		                          		 var setZero = 0;
		                           		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
		                           		 return false;
		       				    			}
		       					  		}
		        		        	
		        		        	/*if(quantity > cont){
			                    		 alert("please enter quantity less than stock");
			                    		 var setZero = 0;
                                  		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
                                  		 return false;
			                    	 }*/
			                    	
			                    	if (Gst != 0){
		                    			var taxPercentage = Gst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * BuyPriceWithTaxAmount;
				                    		$("#credit").jqGrid("setCell", rowId, "total", Math.round(tota));
			                    	}
			                    	 if(Gst == 0){
			                    		var  taxPercentage = Number(Gst);
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * BuyPriceWithTaxAmount;
			                    		$("#credit").jqGrid("setCell", rowId, "total", Math.round(tota));
			                    		
			                    	}
			                    	
			                    	 
			                    	 /*if(salePrice !="")
										{
										var Price = /^[0-9]+\.?[0-9]*$/;
										if(salePrice.match(Price)){
											
										}
										else
											{
											 var sale ="0";
											alert("Please Enter Only Number In Rate");
											$("#jqGrid").jqGrid("setCell",rowId, "salePrice", sale);
											location.reload();
											return false;
											}
										}*/
			                    	 
			                    	 if(salePrice != "")
				                       {
				                    	   var checkprice = /^[0-9]+\.?[0-9]*$/;
				                    	   if(salePrice.match(checkprice))
				                    	   {}
				                    	   else
				                    	   {
				                    		   alert("Please Enter Valid Sale Price");
			                    				/*var dialog = bootbox.dialog({
			                    					//title: "Embel Technologies Says :",
			                    				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'<img src="/Shop/staticContent/images/s1.jpg" height="50" width="50"/></p>',
			                    				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'</p>',
			                    				    closeButton: false
			                    				});
			                    				*/
			                    				
			                    				
		                    				   var setZero = 0;
			 		                    	   $("#credit").jqGrid("setCell", rowId, "salePrice", setZero);
					                    		
				 		                    	  //gridTotalCalculation();

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
		                                  		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
			                    			 }
			                    			 
			                    		}

			                    	 
			                    	/*productId = $('#proName1').val();
			                    	
			                    	$("#proName1 option:selected").each(function() {
			                    		   selectedVal = $(this).text();
			                    		});
			                    	
			                    	var splitText = selectedVal.split(",");
			                    	
			                    	var stock = splitText[4];
			                    	
			                    	if ( Number(quantity) > Number(stock)){
			                    		alert("Available stock = "+stock);
		                    		
		                    	        }
			                    	
			                    	
			                    		if (iGst != 0){
			                    			var taxPercentage = iGst;
				                    		var taxAmount = ((taxPercentage/100)*salePrice);
				                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
				                    		var tota = quantity * salePrice;
				                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
			                    	}
			                    	else if(iGst == 0){
			                    		var  taxPercentage = Number(Gst);
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
			                    		
			                    	}*/
			                    		
			                    		var Total =0;
			                    		var count = jQuery("#credit").jqGrid('getGridParam', 'records');
			        		        	var allRowsInGrid1 = $('#credit').getGridParam('data');
			        		        	var AllRows=JSON.stringify(allRowsInGrid1);
			        		        	for (var k = 0; k < count; k++) {
			        		        		var Total1 = allRowsInGrid1[k].total;
			        		        		if(Total1 != undefined){
			        		        		Total = +Total + +Total1;
			        		        		}
			        		        	}	
			        		        	document.getElementById("totalWithExpense1").value = (Total).toFixed(2);
			        		        	document.getElementById("grossTotal1").value = (Total).toFixed(2);
		        		        		//document.getElementById("duptotal").value = Total;
		        		        		
		        		        		
			                    	 
		        		        		
			                    	
			        	},
				           
				           viewrecords: true,
				           width: 1200,
				           rowNum: 10,
				           pager: "#jqGridPager1",
				           sortorder: "desc",
				       /*	onSelectRow: function(productID){
				       		if(productID && productID!==lastsel){
				       			jQuery('#credit').jqGrid('restoreRow',lastsel);
				       			jQuery('#credit').jqGrid('editRow',productID,true);
				       			
				       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
				       			lastsel=productID;
				       		}
				       	},*/
				       	
			});

			count = jQuery("#credit").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#credit").jqGrid('getGridParam','data');
		     var ids = jQuery("#credit").jqGrid('getDataIDs');
			 
			
		     
			  var prodName,com,packing;
			 /* for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].productName;
				  com = rowdata[j].manufacturer;
				  packing = rowdata[j].weight;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#credit').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
			    	
			    	newrow=false;
					//alert("Container Name Already Inserted !!!");
					var grid = jQuery("#credit");
				    grid.trigger("reloadGrid");
			    	break;
				}
				else
				{
					newrow = true;
				}
			   }*/
			  newrow = true;
			  if(newrow == true)
				 {
					
				 // $("#credit").addRowData(i,jsonData[i]);
				  $("#credit").addRowData(count,jsonData[i]);
					
				 }  
		        
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			/*if(count==0 || count==null)
			{
				// $("#credit").addRowData(i,jsonData[i]);
				 $("#credit").addRowData(0,jsonData[i]);
			}*/
			
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			/*function pickdates(productID){
				jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
			}*/
			/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


			
			$('#credit').navGrid('#jqGridPager1',
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
	                		$('#credit').trigger( 'reloadGrid' );
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
						/*afterSubmit: function() {
	                		$('#credit').trigger( 'reloadGrid' );
						},
						
						 */
						afterComplete: function() {
	                		$('#credit').trigger( 'reloadGrid' );

	 				       /* 	Calculation of total after editing quantity*/
	 				        	   
	 				        	   // $(this).trigger('reloadGrid');
	                		   var rowId =$("#credit").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#credit").getRowData(rowId);
		                    	
		                    	var quantity = rowData['quantity'];
		                    	var buyPrice = rowData['salePrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	var tota = 0;
		                    	
		                    	
		                    	 if(quantity > cont){
		                    		 alert("please enter quantity less than the avaliabe stock");
		                    		 var setZero = 0;
                              		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
                              		 return false;
		                    	 }
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
			                    		tota = quantity * buyPrice;
			                    	//	$("#credit").jqGrid("setCell", rowId, "Total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*buyPrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
		                    	    tota = quantity * buyPrice;
		                    		//$("#credit").jqGrid("setCell", rowId, "Total", tota);
		                    		
		                    	}
		                    		
		                    		$("#credit").jqGrid("setCell", rowId, "Total", tota);
		                    		/*var tota = quantity * buyPrice;
		                    		$("#credit").jqGrid("setCell", rowId, "Total", tota);*/
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#credit").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#credit').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		if(Total1 != undefined){
		        		        		Total = +Total + +Total1;
		        		        		}
		        		        	}
		        		        	
		        		        	
//		        		        	document.getElementById("total1").value = Total;
		        		        	document.getElementById("totalWithExpense1").value = Total;
	        		        		document.getElementById("grossTotal1").value = Total;
	        		
						},
						onSelectRow: function(id) {
							if (id && id !== lastSel) {
								jQuery("#credit").saveRow(lastSel, true, 'clientArray');
								jQuery("#credit").editRow(id, true);
								
								lastSel = id;
								console.log(id);
							}
						},
						
						
					});
			
		// grid refresh code	
			
				});
       

			}); 
}




function getProductDetailsByProductName(){
	
	var itemparams = {};
	/*var input1 = document.getElementById('containerName'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}*/
	
	
	productId = $('#proName').val();
		
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var company = splitText[1];
	var subCatId = splitText[2];
	var container = splitText[4];
	var catId=splitText[7];
	
	itemparams["proName"]= proName;
	itemparams["company"]= company;
	itemparams["catId"]= catId;
	itemparams["subCatId"]= subCatId;
	
	
	var count=0;
	var newrow;
	var rowId;
	
	itemparams["methodName"] = "getProductDetails1";
	$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
			function(data)
			{ 
		var jsonData = $.parseJSON(data);
		
		 $.each(jsonData,function(i,v)
					{
			    	 
			    	 
			 function sumFmatter (cellvalue, options, rowObject)
		        {
		            
		        	var tax = options.rowData.vatPercentage;
		        	
		        	if(tax == 0){
		        		var tot= (options.rowData.quantity * options.rowData.salePrice);
		        		if(isNaN(tot)){
		        			tot = 0;
						}
		        	}
		        	if(tax != 0){
		        		
		        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
		        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice)
		        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
		        		if(isNaN(tot)){
		        			tot = 0;
						}
		        	}
		        	var jam=0;
		        	
		        	
		        	count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        	for (var i = 0; i < count; i++) {
		        		
		            	var quantity = allRowsInGrid1[i].quantity;
		             	params["quantity"+i] = quantity;
		             	
		             	var salePrice = allRowsInGrid1[i].salePrice;
		            	params["salePrice"+i] = salePrice;
		            	
		            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
		            	params["vatPercentage"+i] = vatPercentage;
		            	
		            	if(vatPercentage == 0){
		            		
		            		var totals1=(salePrice)*(quantity);
		            		if(isNaN(totals1)){
			             		totals1 = 0;
							}
			            	jam = jam + totals1;
		            	}
		            	
		                if(vatPercentage != 0){
		                	
		                	var taxcal = (vatPercentage/100) * salePrice;
		                	var newSalePrice = Number(salePrice) + Number(taxcal);
		                	var totals1=(Number(newSalePrice)*Number(quantity));
		                	if(isNaN(totals1)){
			             		totals1 = 0;
							}
			            	jam = jam + totals1;
		                }                	
		            	
	          	
	      	    }
		        	
		        		
		        		 document.getElementById("totalWithExpense").value = jam;
		        	
		            	 return tot;

		        }
		        
		         count = jQuery("#list4").jqGrid('getGridParam', 'records'); 
			     var rowdata =$("#list4").jqGrid('getGridParam','data');
			     var ids = jQuery("#list4").jqGrid('getDataIDs');

			/*var productName =  v.productName;
			var  buyPrice =  v.buyPrice;  
			var salePrice =v.salePrice;
			var quantity = v.quantity;
			var weight = v.weight;
			var productID = v.productID ;
			var manufacturer = v.manufacturer ;
			var hsn = v.hsn ;
			var lastsel = productID;*/
			     document.getElementById("proName").value = "";
			     
			     
			//$("#jqGrid").addRowData(count,jsonData.offer);
			     $("#list4").jqGrid({
						datatype: "local",
						
						colNames:['cat_id','sub_cat_id','ItemName','CompanyName',"HSN",'Packing','Unit', 'UnitPrice','GST','Quantity','Total'],
						colModel:[ 
								     {
								    	 name:'cat_id',
								    	 hidden:true,
								     },

								     {
								    	 name:'sub_cat_id',
								    	hidden:true,
								     },
			             
								    {	name:'itemName',
								    	 width:150,
										
									},
									
								     {	name:'companyName',
								    	 width:150,
										
									},
									{	name:'hsn',
										width:80,
										
										
									},      
								   
									{	name:'weight',
										width:70,
										
										
									},
									{	name:'unitName',
										width:70,
										
										
									},
									
					
									{	name:'salePrice',
										width:120,
										editable: true
										
									},
									/*{	name:'mrp',
										width:120,
										editable: true
										
									},*/
									
									{	name:'gst',
										width:80,
										editable: true
										
									},
									/*{	name:'sGst',
										width:80,
										editable: true
										
									},*/
									/*{	name:'igst',
										width:80,
										//editable: true
										
									},*/
									{	name:'quantity',
										width:100,
										editable: true
										
									},
									{	name:'total',
										width:150,
										//formatter: sumFmatter
									},
									
									
								],
									
						
							sortorder : 'desc',
							loadonce: false,
							viewrecords: true,
							width: 1200,
				          shrinkToFit:true,
				          rowheight: 300,
				          hoverrows: true,
					        rownumbers: true,
				          rowNum: 10,
				          'cellEdit':true,

			        afterSaveCell: function  grossTotal() {
					       /* 	Calculation of total after editing quantity*/
					        	   
			        			document.getElementById("discount").value = 0;
			        			document.getElementById("discountAmount").value = 0;
			        			document.getElementById("hamaliExpence2").value = 0;
			        			document.getElementById("hamaliExpence").value = 0;
			        	
					        	   // $(this).trigger('reloadGrid');
					        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
			                       var rowData = jQuery("#list4").getRowData(rowId);
			                    	var quantity = rowData['quantity'];
			                    	var salePrice = rowData['salePrice'];
			                    	
			                    //	var iGst = rowData['igst'];
			                    	var Gst = rowData['gst'];
			                    	
			                    	var count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);           
		        		        	var quan;		
		        		        	for (var j = 0; j < count; j++) 
		       					  		{
		        		        		quan =  rowdata[j].quantity;
		        		        		if(Number(quan) > Number(container)){
		                          		 alert("please enter quantity less than stock");
		                          		 var setZero = 0;
		                           		 $("#credit").jqGrid("setCell", rowId, "quantity", setZero);
		                           		 return false;
		       				    			}
		       					  		}
			                    	/*if(container < quantity){
			                    		 alert("Quantity entered should be less than the stock");
			                    		 var quan = 0;
			                    		 $("#list4").jqGrid("setCell", rowId, "quantity",quan);
			                    		 return false;
			                    	 }*/
			                    	
			                    	if (Gst != 0){
		                    			var taxPercentage = Gst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * BuyPriceWithTaxAmount;
				                    		$("#list4").jqGrid("setCell", rowId, "total", Math.round(tota));
			                    	}
			                    	 if(Gst == 0){
			                    		var  taxPercentage = Number(Gst);
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * BuyPriceWithTaxAmount;
			                    		$("#list4").jqGrid("setCell", rowId, "total", Math.round(tota));
			                    		
			                    	}
			                    	
			                    	 if(subCatId < quantity){
			                    		 alert("Quantity entered should be less than "+subCatId);
/*			                    		 var quan = 0;
			                    		 $("#list4").jqGrid("setCell", rowId, "quantity",quan);*/
			                    		 
			                    	 }
			                    	 
			                    	 
			                    	/*productId = $('#proName1').val();
			                    	
			                    	$("#proName1 option:selected").each(function() {
			                    		   selectedVal = $(this).text();
			                    		});
			                    	
			                    	var splitText = selectedVal.split(",");
			                    	
			                    	var stock = splitText[4];
			                    	
			                    	if ( Number(quantity) > Number(stock)){
			                    		alert("Available stock = "+stock);
		                    		
		                    	        }
			                    	
			                    	
			                    		if (iGst != 0){
			                    			var taxPercentage = iGst;
				                    		var taxAmount = ((taxPercentage/100)*salePrice);
				                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
				                    		var tota = quantity * salePrice;
				                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
			                    	}
			                    	else if(iGst == 0){
			                    		var  taxPercentage = Number(Gst);
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#credit").jqGrid("setCell", rowId, "total", tota);
			                    		
			                    	}*/
			                    		
			                    		var Total =0;
			                    		var count = jQuery("#list4").jqGrid('getGridParam', 'records');
			        		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
			        		        	var AllRows=JSON.stringify(allRowsInGrid1);
			        		        	for (var k = 0; k < count; k++) {
			        		        		var Total1 = allRowsInGrid1[k].total;
			        		        		if(Total1 != undefined){
			        		        		Total = +Total + +Total1;
			        		        		}
			        		        	
			        		        	}	
			        		        	document.getElementById("totalWithExpense").value = (Total).toFixed(2);
			        		        	document.getElementById("grossTotal").value = (Total).toFixed(2);
		        		        		//document.getElementById("duptotal").value = Total;
			                    	
			        	},
				           
				           viewrecords: true,
				           width: 1200,
				           rowNum: 10,
				           pager: "#jqGridPager",
				           sortorder: "desc",
				       /*	onSelectRow: function(productID){
				       		if(productID && productID!==lastsel){
				       			jQuery('#credit').jqGrid('restoreRow',lastsel);
				       			jQuery('#credit').jqGrid('editRow',productID,true);
				       			
				       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
				       			lastsel=productID;
				       		}
				       	},*/
				       	
			});

			count = jQuery("#list4").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#list4").jqGrid('getGridParam','data');
		     var ids = jQuery("#list4").jqGrid('getDataIDs');
			 
			
		     
			  var prodName,com,packing;
			 /* for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].productName;
				  com = rowdata[j].manufacturer;
				  packing = rowdata[j].weight;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#credit').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData[i].productName && com == jsonData[i].manufacturer && packing == jsonData[i].weight) {
			    	
			    	newrow=false;
					//alert("Container Name Already Inserted !!!");
					var grid = jQuery("#credit");
				    grid.trigger("reloadGrid");
			    	break;
				}
				else
				{
					newrow = true;
				}
			   }*/
			  newrow = true;
			  if(newrow == true)
				 {
					
				 // $("#credit").addRowData(i,jsonData[i]);
				  $("#list4").addRowData(count,jsonData[i]);
					
				 }  

			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			/*if(count==0 || count==null)
			{
				// $("#credit").addRowData(i,jsonData[i]);
				 $("#credit").addRowData(0,jsonData[i]);
			}*/
			
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			/*function pickdates(productID){
				jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
			}*/
			/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


			
			$('#list4').navGrid('#jqGridPager',
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
	                		$('#list4').trigger( 'reloadGrid' );
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
						/*afterSubmit: function() {
	                		$('#credit').trigger( 'reloadGrid' );
						},
						
						 */
						afterComplete: function() {
	                		$('#list4').trigger( 'reloadGrid' );

	 				       /* 	Calculation of total after editing quantity*/
	 				        	   
	 				        	   // $(this).trigger('reloadGrid');
	                		   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#list4").getRowData(rowId);
		                    	
		                    	var quantity = rowData['quantity'];
		                    	var buyPrice = rowData['salePrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	var tota = 0;
		                    	
		                    	
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
			                    		tota = quantity * buyPrice;
			                    	//	$("#credit").jqGrid("setCell", rowId, "Total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*buyPrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
		                    	    tota = quantity * buyPrice;
		                    		//$("#credit").jqGrid("setCell", rowId, "Total", tota);
		                    		
		                    	}
		                    		
		                    		$("#list4").jqGrid("setCell", rowId, "Total", tota);
		                    		/*var tota = quantity * buyPrice;
		                    		$("#credit").jqGrid("setCell", rowId, "Total", tota);*/
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		if(Total1 != undefined){
		        		        		Total = +Total + +Total1;
		        		        		}
		        		        	}
		        		        			        		        	
		        		        	document.getElementById("totalWithExpense").value = Total;
	        		        		document.getElementById("grossTotal").value = Total;
	        		
						},
						onSelectRow: function(id) {
							if (id && id !== lastSel) {
								jQuery("#list4").saveRow(lastSel, true, 'clientArray');
								jQuery("#list4").editRow(id, true);
								
								lastSel = id;
								console.log(id);
							}
						},
						
						
					});
			
		// grid refresh code	
			
				});
       

			}); 
}



/*++++++++++++++ Fetch product details by product name for cash customer 22-5-17 ++++++++++++++++++++++++++*/
/*function getProductDetailsByProductName(){

	
	var params= {};
	//var itemparams={};
	productId = $('#proName').val();
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var proName = splitText[0];
	var company = splitText[1];
	var subCatId = splitText[2];
	var catId=splitText[7];
	
	
	params["proName"]= proName;
	params["company"]= company;
	params["catId"]= catId;
	params["subCatId"]= subCatId;
	
	var count=0;
	var newrow;
	var rowId;
	
	params["methodName"] = "getProductDetails1";
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
		  var jsonData = $.parseJSON(data);
			
	      // $("#list4").jqGrid("clearGridData", true).trigger("reloadGrid");
		
      
	     $.each(jsonData,function(i,v)
			{
	    	 
	    	 
	        function sumFmatter (cellvalue, options, rowObject)
	        {
	            
	        	var tax = options.rowData.vatPercentage;
	        	
	        	if(tax == 0){
	        		var tot= (options.rowData.quantity * options.rowData.salePrice);
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	if(tax != 0){
	        		
	        		var taxcalculation = (tax/100)* Number(options.rowData.salePrice);
	        		var newSalePrice = Number(taxcalculation) + Number(options.rowData.salePrice)
	        		var tot= (Number(options.rowData.quantity) * Number(newSalePrice));
	        		if(isNaN(tot)){
	        			tot = 0;
					}
	        	}
	        	var jam=0;
	        	
	        	
	        	count = jQuery("#list4").jqGrid('getGridParam', 'records');
	        	var allRowsInGrid1 = $('#list4').getGridParam('data');
	        	var AllRows=JSON.stringify(allRowsInGrid1);
	        	for (var i = 0; i < count; i++) {
	        		
	            	var quantity = allRowsInGrid1[i].quantity;
	             	params["quantity"+i] = quantity;
	             	
	             	var salePrice = allRowsInGrid1[i].salePrice;
	            	params["salePrice"+i] = salePrice;
	            	
	            	var vatPercentage = allRowsInGrid1[i].vatPercentage;
	            	params["vatPercentage"+i] = vatPercentage;
	            	
	            	if(vatPercentage == 0){
	            		
	            		var totals1=(salePrice)*(quantity);
	            		if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	            	}
	            	
	                if(vatPercentage != 0){
	                	
	                	var taxcal = (vatPercentage/100) * salePrice;
	                	var newSalePrice = Number(salePrice) + Number(taxcal);
	                	var totals1=(Number(newSalePrice)*Number(quantity));
	                	if(isNaN(totals1)){
		             		totals1 = 0;
						}
		            	jam = jam + totals1;
	                }                	
	            	
          	
      	    }
	        	
	        		
	        		 document.getElementById("totalWithExpense").value = jam;
	        	
	            	 return tot;

	        }
	        
	         count = jQuery("#list4").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#list4").jqGrid('getGridParam','data');
		     var ids = jQuery("#list4").jqGrid('getDataIDs');
			 
			
			  var prodName,com,packing,unit;
			  for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].itemName;
				  com = rowdata[j].companyName;
				  packing = rowdata[j].weight;
				  unit = rowdata[j].unitName;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#list4').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData.offer.itemName && com == jsonData.offer.companyName && packing == jsonData.offer.weight && unit == jsonData.offer.unitName) {
			    	ori_quantity = +rowdata[j].quantity+1;
			    	
			    	$("#list4").jqGrid("setCell", rowId, "quantity", ori_quantity);
			    	var grid = jQuery("#list4");
			    	grid.trigger("reloadGrid");
			    	newrow=false;
					//alert("Product Name Already Inserted !!!");
					var grid = jQuery("#list4");
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
					
				  //$("#list4").addRowData(i,jsonData[i]);
				  $("#list4").addRowData(count,jsonData.offer);
					
				 }
		
		
		$("#list4").jqGrid({
			datatype: "local",
			
			colNames:['cat_id','sub_cat_id','ItemName','CompanyName',"HSN",'Packing','Unit', 'UnitPrice','GST','Quantity','Total'],
			colModel:[ 
					     {
					    	 name:'cat_id',
					    	 hidden:true,
					     },

					     {
					    	 name:'sub_cat_id',
					    	hidden:true,
					     },
             
					    {	name:'itemName',
					    	 width:150,
							
						},
						
					     {	name:'companyName',
					    	 width:150,
							
						},
						{	name:'hsn',
							width:80,
							
							
						},      
					   
						{	name:'weight',
							width:70,
							
							
						},
						{	name:'unitName',
							width:70,
							
							
						},
						
		
						{	name:'salePrice',
							width:120,
							editable: true
							
						},
						{	name:'mrp',
							width:120,
							editable: true
							
						},
						
						{	name:'gst',
							width:80,
							//editable: true
							
						},
						{	name:'sGst',
							width:80,
							editable: true
							
						},
						{	name:'igst',
							width:80,
							//editable: true
							
						},
						{	name:'quantity',
							width:100,
							editable: true
							
						},
						{	name:'total',
							width:150,
							//formatter: sumFmatter
						},
						
						
					],
						
			
				sortorder : 'desc',
				loadonce: false,
				viewrecords: true,
				width: 1200,
	          shrinkToFit:true,
	          rowheight: 300,
	          hoverrows: true,
		        rownumbers: true,
	          rowNum: 10,
	          'cellEdit':true,
	           afterSaveCell: function () {
	        	   // $(this).trigger('reloadGrid');
	        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
              var rowData = jQuery("#list4").getRowData(rowId);
           	var quantity = rowData['quantity'];
           	var salePrice = rowData['salePrice'];
           	
           	var tota = quantity * salePrice;
           	
           	$("#list4").jqGrid("setCell", rowId, "total", tota);
	        	},
	        	
	        	
	        	 afterSaveCell: function  grossTotal() {
				        	Calculation of total after editing quantity
				        	   
				        	   // $(this).trigger('reloadGrid');
				        	   var rowId =$("#list4").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#list4").getRowData(rowId);
		                    	var quantity = rowData['quantity'];
		                    	var salePrice = rowData['salePrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	
		                    	productId = $('#proName').val();
		                    	
		                    	$("#proName option:selected").each(function() {
		                    		   selectedVal = $(this).text();
		                    		});
		                    	
		                    	var splitText = selectedVal.split(",");
		                    	
		                    	var stock = splitText[4];
		                    	
		                    	if ( Number(quantity) > Number(stock)){
		                    		
		                    		//alert("Available stock = "+stock);
	                    		
	                    	        }
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#list4").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#list4").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	document.getElementById("totalWithExpense").value = Total;
		        		        	document.getElementById("grossTotal").value = Total;
	        		        		//document.getElementById("duptotal").value = Total;
		                    	
		        	},
	        	
         
			pager: "#jqGridPager",
			
			
			
		});
		
	
		//$("#list4").addRowData(i+1,jsonData[i]);
		if(count==0 || count==null)
		{
			 // $("#list4").addRowData(i,jsonData[i]);
			  $("#list4").addRowData(0,jsonData.offer);
		}
		

   
		 $('#list4').navGrid('#jqGridPager',
	                
	                { edit: true, add: false, del: true, search: true, refresh: true, view: true, position: "left", cloneToTop: false },
	                
	                {
	                    editCaption: "The Edit Dialog",
	                   
	                    afterSubmit: function () {
							
	                      var grid = $("#list4"),
						  intervalId = setInterval(
							 function() {
							         grid.trigger("reloadGrid",[{current:true}]);
							   },
							   500);
	                         
	                      
						},
						
						 recreateForm: true,
						 checkOnUpdate : true,
						 checkOnSubmit : true,
		                 closeAfterEdit: true,
						
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                    closeAfterAdd: true,
	                    recreateForm: true,
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                },
	                
	                {
	                	closeAfterdel:true,
	                	checkOnUpdate : true,
						checkOnSubmit : true,
						recreateForm: true,
	                	
						
						afterComplete: function() {
	                		$('#list4').trigger( 'reloadGrid' );

	 				        	Calculation of total after editing quantity
	 				        	   
	 				        	   // $(this).trigger('reloadGrid');
	                		  var rowId =$("#list4").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#list4").getRowData(rowId);
		                    	var quantity = rowData['quantity'];
		                    	var salePrice = rowData['salePrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	
		                    	productId = $('#proName').val();
		                    	
		                    	$("#proName option:selected").each(function() {
		                    		   selectedVal = $(this).text();
		                    		});
		                    	
		                    	var splitText = selectedVal.split(",");
		                    	
		                    	var stock = splitText[4];
		                    	
		                    	if ( Number(quantity) > Number(stock)){
		                    		
		                    		alert("Available stock = "+stock);
	                    		
	                    	        }
		                    	
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*salePrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
			                    		var tota = quantity * salePrice;
			                    		$("#list4").jqGrid("setCell", rowId, "total", tota);
		                    	}
		                    	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*salePrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(salePrice);
		                    		var tota = quantity * salePrice;
		                    		$("#list4").jqGrid("setCell", rowId, "total", tota);
		                    		
		                    	}
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#list4").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#list4').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].total;
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	document.getElementById("totalWithExpense").value = Total;
		        		        	document.getElementById("grossTotal").value = Total;
	        		        		//document.getElementById("duptotal").value = Total;
		
						},
						afterSubmit: function() {
	                		$('#list4').trigger( 'reloadGrid' );
						},
						reloadAftersubmit:true,	
	                    errorTextFormat: function (data) {
	                        return 'Error: ' + data.responseText
	                    }
	                		
	                });
		 
		 
			   });
			
			
			
		
			
		})

	
	
	
	
}*/


/*************					Cash Customer Bill adding to fertilizerBilling table      ************************/
function fertilizerBill(){

	if (document.fertiBill.customerName.value == "" )
	 {
    alert("Please Enter Customer Name");
    return false;
	 }
	if(document.fertiBill.shopName.value == "" )
	 {
		alert("Please Select Shop Name")
		return false;
	 }
	 var letterNumber = /^[a-zA-Z, ]+$/;
	 /*if(document.fertiBill.shopName2.value.match(letterNumber))
	 {*/

	/*if ( document.fertiBill.village.value == "" )
	 {
     alert("Please Enter Village");
     return false;
	 }
	 var letterNumber = /^[a-zA-Z, ]+$/;
	 if(document.fertiBill.village.value.match(letterNumber))
	 {
	
	if ( document.fertiBill.contactNo.value == "" )
	 {
      alert("Please Enter Contact Number");
      return false;
	 }
	 var letterNumber = /^[0-9]{10}$/;
	 if(document.fertiBill.contactNo.value.match(letterNumber))
	 {*/
	/*if ( document.fertiBill.aadharNo.value == "" )
		 {
	       alert("Please Enter Aadhar Number");
	       return false;
		 }*/
		 if ( document.fertiBill.saleDate.value == "" )
		 {
	      alert("Please Enter Sale Date");
	      return false;
		 }
		 var letterNumber = /^[0-9]{12}$/;
		/* if(document.fertiBill.aadharNo.value.match(letterNumber))
		 {
			*/			   	  /*  if ( document.fertiBill.proName.value !== "" )
							   	       { */
											fertilizerBilling();
											
							   	      /*  }
										else	
											{
											alert("Please Select Product Name");
											return false;
											}*/
			
					   	        				/*if ( document.fertiBill.transExpence.value == "" )
						   	        			 {
										  	       alert("Please Enter Transportation Expense");
										  	       return false;
						   	        			 }
						   	        			 var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
						   	        			 var num = /^\d+$/;
						   	        			 if(document.fertiBill.transExpence.value.match(letterNumber) || document.fertiBill.transExpence.value.match(num) )
						   	        			 {*/
						   	        				/*if ( document.fertiBill.hamaliExpence.value == "" )
							   	        			 {
											  	       alert("Please Enter Hamali Expense");
											  	       return false;
							   	        			 }*/
							   	        			/* var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
							   	        			var num = /^\d+$/;
							   	        			 if(document.fertiBill.hamaliExpence.value.match(letterNumber) || document.fertiBill.hamaliExpence.value.match(num) )
							   	        			 {*/
						   	        				 
							   	        				
														/*}*/
										
							   	        			/*else
													{
														alert("Enter only Numbers upto 2 decimal in Hamali Expense field..!!");
														return false;
													} 
						   	        			 }*/
							   	        /*else
											{
												alert("Enter only Numbers upto 2 decimal in Transportation Expense field..!!");
												return false;
											}
										}*/
		  /*else
			{
				alert("Enter valid 12 digit Aadhar Number");
				return false;
			}
		}*/
	 /*else
		{
			alert("Enter valid 10 digit Contact Number");
			return false;
		}
	}
	 else
		{
			alert("Enter only Alphanumeric in Village field");
			return false;
		}
	}*/
	 /*else
		{
			alert("Enter only Alphanumeric in Customer Name field");
			return false;
		}*/
	}


function fertilizerBilling(){
	
	document.fertiBill.btn.disabled = true;
	var params = {};

	var customerName = $('#customerName').val();
	var village = $('#village').val();
	var contactNo = $('#contactNo').val();
	//var aadhar = $('#aadharNo').val();
	/*var transExpense = $('#transExpence').val();*/
	var hamaliExpense = $('#hamaliExpence').val();
	/*var transExpenseWithoutGST = $('#transExpence2').val();*/
	var hamaliExpenseWithourGST = $('#hamaliExpence2').val();
	var grossTotal = $('#grossTotal').val();
	var total = $('#totalWithExpense').val();
/*	var paymentMode = $('#paymentMode').val();
	var chequeNum = $('#chequeNum').val();*/
	var paymentMode = "NA";
	var chequeNum ="NA"
	
	var saleDate = $('#saleDate').val();
	var input = document.getElementById('shopName'),
    list = document.getElementById('shop_drop1'),
    i,shopName;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	shopName = list.options[i].getAttribute('data-value');
    	}
	}
	var gstNo = $('#gstNo').val();
/*	var nameOnCheck = $('#nameOnCheck').val();
	var cardNum = $('#cardNum').val();
	var accNum = $('#accNum').val();
	var bankName = $('#bankName').val();*/
	var nameOnCheck = "NA";
	var cardNum = 0;
	var accNum = 0;
	var bankName = "NA";
		
	var discount = $('#discount').val();
	var discountAmount = $('#discountAmount').val();
	
    productId = $('#proName').val();
	
	$("#proName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var fk_shop_id = splitText[12];
	var sub_cat_Id = splitText[2];
	
	var count = jQuery("#list4").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#list4').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {
		
		var cat_id = allRowsInGrid[i].cat_id;
		params["cat_id"+i] = cat_id;
		
		var sub_cat_id = allRowsInGrid[i].sub_cat_id;
		params["sub_cat_id"+i] = sub_cat_id;
	/*alert(sub_cat_id);*/
		
		var itemName = allRowsInGrid[i].itemName;
		params["itemName"+i] = itemName;
		
		
		var companyName = allRowsInGrid[i].companyName;
		params["companyName"+i] = companyName;
		
		var hsn = allRowsInGrid[i].hsn;
		params["hsn"+i] = hsn;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
		var quantity = allRowsInGrid[i].quantity;
		if(quantity !=undefined)
		{
			params["quantity" + i] = quantity;
		}
		else
		{
			alert("Enter Quantity In Grid");
			return false;
		}
		var salePrice = allRowsInGrid[i].salePrice;
		params["salePrice"+i] = salePrice;
		
		var gst = allRowsInGrid[i].gst;
		params["gst"+i] = gst;
		
		/*var igst = allRowsInGrid[i].igst;
		params["igst"+i] = igst;*/
		
		var total = allRowsInGrid[i].total;
		params["total"+i] = total;
	}
	
	params["customerName"] = customerName;
	params["count"] = count;
	params["village"] = village;
	params["contactNo"] = contactNo;
	//params["aadhar"] = aadhar;
	/*params["transExpense"] = transExpense;*/
	params["total"] = total;
	params["fk_shop_id"] = shopName;
	params["gstNo"] = gstNo;
	params["sub_cat_Id"] = sub_cat_Id;
	params["grossTotal"] = grossTotal;
	params["hamaliExpense"] = hamaliExpense;
	/*params["transExpenseWithoutGST"] = transExpenseWithoutGST;*/
	params["hamaliExpenseWithourGST"] = hamaliExpenseWithourGST;
	params["paymentMode"] = paymentMode;
	params["chequeNum"] = chequeNum;
	params["saleDate"] = saleDate;
	params["nameOnCheck"] = nameOnCheck;
	params["cardNum"] = cardNum;
	params["accNum"] = accNum;
	params["discount"] = discount;
	params["discountAmount"] = discountAmount;
	params["bankName"] = bankName;
	
	params["methodName"] = "addingFertilizerBill";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 				alert(data);
 				window.open("FertilizerBillPDF.jsp");
 				location.reload();
 				
 			}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});


}

/*************					Cash Customer Bill adding to fertilizerBilling table    28-5-17  ************************/
function fertilizerBill_28_5_17(){
	
	document.fertiBill.btn.disabled = true;
	var params = {};

	var customerName = $('#customerName').val();
	var village = $('#village').val();
	var contactNo = $('#contactNo').val();
	var aadhar = $('#aadharNo').val();
	var transExpense = $('#transExpence').val();
	var hamaliExpense = $('#hamaliExpence').val();
	var grossTotal = $('#grossTotal').val();
	var total = $('#totalWithExpense').val();
	var paymentMode = $('#paymentMode').val();
	var chequeNum = $('#chequeNum').val();
	var nameOnCheck = $('#nameOnCheck').val();
	var cardNum = $('#cardNum').val();
	var accNum = $('#accNum').val();
	var bankName = $('#bankName').val();
	
	
	
	var count = jQuery("#list4").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#list4').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var itemName = allRowsInGrid[i].itemName;
		params["itemName"+i] = itemName;
		
		var companyName = allRowsInGrid[i].companyName;
		params["companyName"+i] = companyName;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
		var quantity = allRowsInGrid[i].quantity;
		params["quantity"+i] = quantity;
		
		var salePrice = allRowsInGrid[i].salePrice;
		params["salePrice"+i] = salePrice;
		
		var mrp = allRowsInGrid[i].mrp;
		params["mrp"+i] = mrp;
		
		var vatPercentage = allRowsInGrid[i].vatPercentage;
		params["vatPercentage"+i] = vatPercentage;
		
		var total = allRowsInGrid[i].total;
		params["total"+i] = total;
	}
	
	params["customerName"] = customerName;
	params["count"] = count;
	params["village"] = village;
	params["contactNo"] = contactNo;
	params["aadhar"] = aadhar;
	params["transExpense"] = transExpense;
	params["total"] = total;
	params["grossTotal"] = grossTotal;
	params["hamaliExpense"] = hamaliExpense;

	params["paymentMode"] = paymentMode;
	params["chequeNum"] = chequeNum;
	params["nameOnCheck"] = nameOnCheck;
	params["cardNum"] = cardNum;
	params["accNum"] = accNum;
	params["bankName"] = bankName;
	params["discount"] = discount;
	params["discountAmount"] = discountAmount;
	
	params["methodName"] = "addingFertilizerBill_28_5_17";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 				alert(data);
 				window.open("FertilizerBillPDF.jsp");
 				location.reload();
 	    	}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});



	
	
	
}



/*************					Credit Customer Bill adding to fertilizerBilling table      ************************/
function fertilizerBillForCreditCustomer(){
	
	if ( document.creditFertiBill1.creditCustomer.value == "" )
	 {
    alert("Please Select Customer Name");
    return false;
	 }
	/*if(document.creditFertiBill1.shopName2.value == "" )
	 {
		alert("Please Select Shop Name")
		return false;
	 }*/

	 
	/*if ( document.creditFertiBill1.village1.value == "" )
	 {
     alert("Please Enter Village");
     return false;
	 }
	 var letterNumber = /^[a-zA-Z, ]+$/;
	 if(document.creditFertiBill1.village1.value.match(letterNumber))
	 {
	
	if ( document.creditFertiBill1.contactNo1.value == "" )
	 {
      alert("Please Enter Contact Number");
      return false;
	 }*/
	 /*var letterNumber = /^[0-9]{10}$/;
	 if(document.creditFertiBill1.contactNo1.value.match(letterNumber))
	 {*/
	/*if ( document.creditFertiBill1.aadharNo1.value == "" )
		 {
	       alert("Please Enter Aadhar Number");
	       return false;
		 }*/
	if ( document.creditFertiBill1.saleDate2.value == "" )
	 {
      alert("Please Enter Sale Date");
      return false;
	 }

		 var letterNumber = /^[0-9]{12}$/;
		/* if(document.creditFertiBill1.aadharNo1.value.match(letterNumber))
		 {*/
						   	  /*  if ( document.creditFertiBill1.proName1.value !="" )
							   	       {*/
						   	    		fertilizerBillForCredit();
							   	      /*  }
						   	    else
						   	    	{
						   	    	alert("Please Select Product Name");
									return false;
						   	    	}*/
						   	 	
					   	        
								}
								
									
							   	        			/*else
													{
														alert("Enter only Numbers upto 2 decimal in Hamali Expense field..!!");
														return false;
													} 
						   	        			 }*/
							   	       /* else
											{
												alert("Enter only Numbers upto 2 decimal in Transportation Expense field..!!");
												return false;
											}
										}
		  else
			{
				alert("Enter valid 12 digit Aadhar Number");
				return false;
			}
		}*/
	 /*else
		{
			alert("Enter valid 10 digit Contact Number");
			return false;
		}
	}
	 else
		{
			alert("Enter only Alphanumeric in Village field");
			return false;
		}
	}*/


function fertilizerBillForCredit(){
	document.creditFertiBill1.btn2.disable= true ;
	var params = {};
	
	var input = document.getElementById('creditCustomer'),
    list = document.getElementById('cust_drop1'),
    i,creditCustomer;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	creditCustomer = list.options[i].getAttribute('data-value');
    	}
	}
	
	var fkCreditCustomerID = creditCustomer;
	var creditCustomerName = $('#creditCustomer').val();
	var creditCustomerHiddenName = $('#customerNameHidden').val();
	var village = $('#village1').val();
	var contactNo = $('#contactNo1').val();
	var saleDate = $('#saleDate2').val();
	var input = document.getElementById('shopName2'),
    list = document.getElementById('shop_drop2'),
    i,shopName;

	for (i = 0; i < list.options.length; ++i) {
    if (list.options[i].value === input.value) {
    	shopName = list.options[i].getAttribute('data-value');
    	}
	}
	var gstNo = $('#gstNo2').val();
	//var aadhar = $('#aadharNo1').val();
	/*var transExpense = $('#transExpence1').val();*/
	var hamaliExpense = $('#hamaliExpence1').val();
	/*var transExpenseWithoutGST = $('#transExpence3').val();*/
	var hamaliExpenseWithourGST = $('#hamaliExpence3').val();
	var grossTotal = $('#grossTotal1').val();
	var total = $('#totalWithExpense1').val();
	var discount = $('#discount1').val();
	var discountAmount = $('#discountAmount1').val();
	
	var initialPayment = $('#initialPayment').val();
	var paymentMode = $('#paymentMode2').val();
	var chequeNum = $('#chequeNum2').val();
	var nameOnCheck = $('#nameOnCheck2').val();
	var cardNum = $('#cardNum2').val();
	var accNum = $('#accNum2').val();
	var bankName = $('#bankName2').val();
	 
	productId = $('#proName1').val();
		
		$("#proName1 option:selected").each(function() {
			   selectedVal = $(this).text();
			});
		
		var splitText = selectedVal.split(",");
		
		var fk_shop_id = splitText[12];
		var sub_cat_Id = splitText[2];
		
	var count = jQuery("#credit").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#credit').getGridParam('data');//to get all rows of grid
	var AllRows=JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var cat_id = allRowsInGrid[i].cat_id;
		params["cat_id"+i] = cat_id;
		
		var sub_cat_Id = allRowsInGrid[i].sub_cat_id;
		params["sub_cat_Id"+i] = sub_cat_Id;
	  
		
		var itemName = allRowsInGrid[i].itemName;
		params["itemName"+i] = itemName;
		
		
		var companyName = allRowsInGrid[i].companyName;
		params["companyName"+i] = companyName;
		
		var hsn = allRowsInGrid[i].hsn;
		params["hsn"+i] = hsn;
		
		var weight = allRowsInGrid[i].weight;
		params["weight"+i] = weight;
		
		var quantity = allRowsInGrid[i].quantity;
		if(quantity =="" ||quantity ==null ||quantity ==undefined )
		{
			alert("Please Enter Quantity\n-- RETURN QUANTITY MUST BE LESS THAN AVALABLE QUANTITY --");
			document.getElementById("btn").disabled = false;
			return false;
			
		}
		/*if(Number(quantity1) > Number(availbleQuantity))
		{
			alert("Please Enter Return Quantity less than Available Quantity");
			document.getElementById("save").disabled = false;
			return false;				
		}*/
		params["quantity" + i] = quantity;

		
		var salePrice = allRowsInGrid[i].salePrice;
		params["salePrice"+i] = salePrice;
		
		
		var gst = allRowsInGrid[i].gst;
		params["gst"+i] = gst;
		
		/*var igst = allRowsInGrid[i].igst;
		params["igst"+i] = igst;
		*/
		var total = allRowsInGrid[i].total;
		params["total"+i] = total;
	}
	
	params["creditCustomerHiddenName"] = creditCustomerHiddenName;
	params["fkCreditCustomerID"] = fkCreditCustomerID;
	params["count"] = count;
	params["village"] = village;
	params["saleDate"] = saleDate;
	params["gstNo"] = gstNo;
	params["contactNo"] = contactNo;
	params["sub_cat_Id"] = sub_cat_Id;
	//params["aadhar"] = aadhar;
	/*params["transExpense"] = transExpense;*/
	/*params["transExpenseWithoutGST"] = transExpenseWithoutGST;*/
	params["hamaliExpenseWithourGST"] = hamaliExpenseWithourGST;
	params["total"] = total;
	params["fk_shop_id"] = shopName;
	params["grossTotal"] = grossTotal;
	params["hamaliExpense"] = hamaliExpense;
	params["creditCustomerName"] = creditCustomerName;
	params["discount"] = discount;
	params["discountAmount"] = discountAmount
	params["paymentMode"] = paymentMode;
	params["chequeNum"] = chequeNum;
	params["nameOnCheck"] = nameOnCheck;
	params["cardNum"] = cardNum;
	params["accNum"] = accNum;
	params["bankName"] = bankName;
	params["initialPayment"] = initialPayment;
	
	params["methodName"] = "addingFertilizerBill";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
 	    	{
 		        alert(data);
 				window.open("FertilizerBillPDF.jsp");
 				location.reload();
 			}
 	    	).error(function(jqXHR, textStatus, errorThrown){
 	    		if(textStatus==="timeout") {
 	    			$(loaderObj).hide();
 	    			$(loaderObj).find('#errorDiv').show();
 	    		}
 	    	});

	
}

/*** +++ Fetching product Name FOR CASH CUSTOMER+++ *****/
function getProductName(){
		
	 var fk_cat_id = 1;
		$("#proName").empty();
		$("#proName").append($("<option></option>").attr("value","").text("Select product"));
		var params= {};
		
		params["methodName"] = "getAllProductByCategoriesForFertiBill";
		
		//params["fk_cat_id"]= fk_cat_id;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{ var count = 1;
				
			var jsonData = $.parseJSON(data);
			$.each(jsonData,function(i,v)
					{
				$("#proName").append($("<option></option>").attr("value",count).text(v.product + ","+ "SubCat=,"+v.fkSubCatId+","+"Containers =,"+v.quantityDouble+",cat =,"+v.catName+","+v.fkCatId+",PackingType =,"+v.fkPackTypeId+"Ltr,"+v.fkSubCatId)); 
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
	
}

/*** +++ Fetching product Name FOR CREDIT CUSTOMER+++ *****/
function getProductNameForCredit(){
		
	 var fk_cat_id = 1;
		$("#proName1").empty();
		$("#proName1").append($("<option></option>").attr("value","").text("Select product"));
		var params= {};
		
		params["methodName"] = "getAllProductByCategoriesForFertiBill";
		
		//params["fk_cat_id"]= fk_cat_id;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{ var count = 1;
				
			var jsonData = $.parseJSON(data);
			$.each(jsonData,function(i,v)
					{
				$("#proName1").append($("<option></option>").attr("value",count).text(v.product + ","+ "SubCat=,"+v.fkSubCatId+","+"Containers =,"+v.quantityDouble+","+"cat =,"+v.catName+","+v.fkCatId+",PackingType =,"+v.fkPackTypeId+"Ltr,"+v.fkSubCatId)); 
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
	
}



/* ++++++++++++++ Get credit customer details ++++*/
function customerDetail(){
	
	this.getVillageName = getVillageName;
	this.getContactNo = getContactNo;
	this.getName = getName;
	this.gstNo = gstNo;
	//this.getAadhar = getAadhar;
	
	function getVillageName()
	{
		
		var input = document.getElementById('creditCustomer'),
	    list = document.getElementById('cust_drop1'),
	    i,creditCustomer;

		for (i = 0; i < list.options.length; ++i) {
	    if (list.options[i].value === input.value) {
	    	creditCustomer = list.options[i].getAttribute('data-value');
	    }
	}
		
		var creditCustomerId = creditCustomer;
		$("#village1").empty();
		$("#village1").append($("<input/>").attr("value","").text());
		var params= {};
		params["methodName"] = "getVillageNameAndContactNoAndFirstNameByCustomer";
		params["creditCustomerId"]= creditCustomerId;
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			var jsonData = $.parseJSON(data);
			//var jsonData = jsonData.list;
			$.each(jsonData,function(i,v)
					{
				document.getElementById("village1").value = v.village;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});

	}
	
	function gstNo(){

		
		var input = document.getElementById('creditCustomer'),
	    list = document.getElementById('cust_drop1'),
	    i,creditCustomer;

		for (i = 0; i < list.options.length; ++i) {
	    if (list.options[i].value === input.value) {
	    	creditCustomer = list.options[i].getAttribute('data-value');
	    }
	}
		
		var creditCustomerId = creditCustomer;
		$("#gstNo2").empty();
		$("#gstNo2").append($("<input/>").attr("value","").text());
		var params= {};
		params["methodName"] = "getVillageNameAndContactNoAndFirstNameByCustomer";
		params["creditCustomerId"]= creditCustomer;
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			var jsonData = $.parseJSON(data);
			//var jsonData = jsonData.list;
			$.each(jsonData,function(i,v)
					{
				document.getElementById("gstNo2").value = v.gstNo;
				
					});
			
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});

	
		
	}
	
	function getContactNo()
	{
		
		var input = document.getElementById('creditCustomer'),
	    list = document.getElementById('cust_drop1'),
	    i,creditCustomer;

		for (i = 0; i < list.options.length; ++i) {
	    if (list.options[i].value === input.value) {
	    	creditCustomer = list.options[i].getAttribute('data-value');
	    }
	}
		
		var creditCustomerId = creditCustomer;
		$("#contactNo1").empty();
		$("#contactNo1").append($("<input/>").attr("value","").text());
		var params= {};
		params["methodName"] = "getVillageNameAndContactNoAndFirstNameByCustomer";
		params["creditCustomerId"]= creditCustomerId;
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			var jsonData = $.parseJSON(data);
			//var jsonData = jsonData.list;
			$.each(jsonData,function(i,v)
					{
				document.getElementById("contactNo1").value = v.contactNo;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});

	}
	
	
	
	function getName()
	{
		
		var input = document.getElementById('creditCustomer'),
	    list = document.getElementById('cust_drop1'),
	    i,creditCustomer;

		for (i = 0; i < list.options.length; ++i) {
	    if (list.options[i].value === input.value) {
	    	creditCustomer = list.options[i].getAttribute('data-value');
	    }
	}
		
		var creditCustomerId = creditCustomer;
		$("#customerNameHidden").empty();
		$("#customerNameHidden").append($("<input/>").attr("value","").text());
		var params= {};
		params["methodName"] = "getVillageNameAndContactNoAndFirstNameByCustomer";
		params["creditCustomerId"]= creditCustomerId;
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{
			var jsonData = $.parseJSON(data);
			//var jsonData = jsonData.list;
			$.each(jsonData,function(i,v)
					{
				document.getElementById("customerNameHidden").value = v.firstName;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
	}
}

var custDetail = new customerDetail();