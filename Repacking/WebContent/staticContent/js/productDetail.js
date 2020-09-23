//sale price compaire with MRP
function salePriceCompaireWithMRP(){
	var salePrice=$('#salePrice').val();
	var mrp = $('#mrp').val();
	
	if(salePrice>mrp){
		alert("Sale Price Should be less than MRP")
	}
}	
//Credit sale price compaire with MRP
	/*function creditSalePriceCompaireWithMRP(){
		var salePrice=$('#creditSalePrice').val();
		var mrp = $('#mrp').val();
		
		if(salePrice>mrp){
			alert("Credit Sale Price Should be less than MRP")
		}
	
}*/
	
	

function productDetails(){
	
	
	document.getElementById("save").disabled = false;
	
	if(document.prd.fk_cat_id.value == "")
	{
		alert("Please select Product Category");
		return false;
	}	
	

		if(document.prd.subCat.value == "")
		{
			alert("Please select Product Sub Category");
			return false;
		}	
	

			/*if(document.prd.fk_tax_id.value == "selected")
			{
				alert("Please select Product Gst Tax Type");
				return false;
			}*/		
	
				if(document.prd.productName.value == "")
					{
						alert("Please Enter Product Name.");
						return false;
					}	
						var letterNumber = /^[a-zA-Z0-9\\.;,:()' ]{0,100}$/;
						if(document.prd.productName.value.match(letterNumber))
						{
			/*	if(document.prd.manufacturingCompany.value == "")
				{
					alert("Enter Manufacturing Company Name.");
					return false;
				}*/
				/*
				var letterNumber = /^[a-zA-Z, ]+$/;
				if(document.prd.manufacturingCompany.value.match(letterNumber))
				{*/
					
					if ( document.prd.taxPercentage.value == "" )
	        			 {
			  	       alert("Please Enter Tax Percentage");
			  	       return false;
	        			 }
	        			/* var letterNumber = /^\s*-?[0-9]\d*?\s*$/;
	        			 var num = /^\d+$/;
	        			 if(document.prd.weight.value.match(letterNumber) || document.prd.weight.value.match(num))
	        			 {*/
	        				 
	        				 if(document.prd.fk_unit_id.value == "")
	        					{
	        						alert("Please select unit");
	        						return false;
	        					}	
									if(document.prd.shopName.value == "")
									{
										alert("Please Select Shop Name");
										return false;
									}
									/*if ( document.prd.buyPrice.value == "" )
					   	        			 {
									  	       alert("Please Enter Buy price");
									  	       return false;
					   	        			 }
					   	        			 var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
					   	        			 var num = /^\d+$/;
					   	        			 if(document.prd.buyPrice.value.match(letterNumber) || document.prd.buyPrice.value.match(num))
					   	        			 {
					   	     				
					   	        				if ( document.prd.mrp.value == "" )
						   	        			 {
										  	       alert("Please Enter M.R.P price");
										  	       return false;
						   	        			 }
						   	        			 var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
						   	        			 var num = /^\d+$/;
						   	        			 if(document.prd.mrp.value.match(letterNumber) || document.prd.mrp.value.match(num))
						   	        			 {
					   	        				 
					   	        				 
					   	        				if ( document.prd.salePrice.value == "" )
						   	        			 {
										  	       alert("Please Enter Sale price");
										  	       return false;
						   	        			 }
						   	        			 var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
						   	        			 var num = /^\d+$/;
						   	        			 if(document.prd.salePrice.value.match(letterNumber) || document.prd.salePrice.value.match(num) )
						   	        			 {*/
						   	        				/*if ( document.prd.creditSalePrice.value == "" )
							   	        			 {
											  	       alert("Please Enter Credit Sale price");
											  	       return false;
							   	        			 }
							   	        			 var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
							   	        			 var num = /^\d+$/;
							   	        			 if(document.prd.creditSalePrice.value.match(letterNumber) || document.prd.creditSalePrice.value.match(num) )
							   	        			 {
						   	        				 
										   	        		 prdctDetails();
														}*/
						   	        				prdctDetails();
						   	        			 }
							   	        			/*else
													{
														alert("Enter only Numbers upto 2 decimal in Credit sale price field..!!");
														return false;
													} 
						   	        			 }*/
							   	        /*else
											{
												alert("Enter only Numbers upto 2 decimal in sale price field..!!");
												return false;
											}
										}	
						   	            else
						   	            	{
						   	            	alert("Enter only Numbers upto 2 decimal in M.R.P price field..!!");
											return false;
						   	            	}
						   	            	}
						   	        	 
						   	        	 else
										{
												alert("Enter only Numbers upto 2 decimal in buy price field..!!");
												return false;
											}
										}*/
									
				        			 /*else
										{
												alert("Enter Only Numbers upto 3 decimal  in Weight field..!!");
												return false;
											}*/
										
	   	        				/*else
									{
										alert("Enter Alphabates Only in Manufacturing company field..!!");
										return false;
									}*/	
                   
                   

										
			   else
				{
					alert("Enter Alphabets And Numbers Only in Product Name field..!!");
					return false;
				}
			}
											
function prdctDetails(){
	
	document.prd.btn.disabled = true;
	
				var i,fk_cat_id;
				var productName= $('#productName').val();
				var manufacturingCompany= $('#manufacturingCompany').val();
				/*var weight=$('#weight').val();*/
				/*var buyPrice=$('#buyPrice').val();
				var salePrice=$('#salePrice').val();*/
				/*var creditSalePrice=$('#creditSalePrice').val();*/
				var taxpercentage = $('#taxPercentage').val();
			/*	var mrp = $('#mrp').val();*/
				var unit = $('#fk_unit_id').val();
				var fk_tax_id = $('#fk_tax_id').val();
				var hsn = $('#hsn').val();
				
				//alert(hsn);
				
				productId = $('#subCat').val();
				
				$("#subCat option:selected").each(function() {
					   selectedVal = $(this).text();
					});
				
				var splitText = selectedVal.split(",");
				
				var fk_subCat_id = splitText[1];
				
                productId = $('#shopName').val();
				
				$("#shopName option:selected").each(function() {
					   selectedVal = $(this).text();
					});
				
				var splitText = selectedVal.split(",");
				
				var fk_shop_id = splitText[1];

				var input1 = document.getElementById('fk_cat_id');
				list = document.getElementById('cat_drop'),
				i,fk_cat_id;
				for (i = 0; i < list.options.length; ++i) {
					if (list.options[i].value === input1.value) {
						fk_cat_id = list.options[i].getAttribute('data-value');
					}
				}
				
				
				
				var input3 = document.getElementById('fk_unit_id'),
				list3 = document.getElementById('unit_drop'),
				i,fk_unit_id;
				for (i = 0; i < list3.options.length; ++i) {
					if (list3.options[i].value === input3.value) {
						fk_unit_id = list3.options[i].getAttribute('data-value');
					}
				}
					
				var params = {};
				params["fkTaxId"] = fk_tax_id;
				params["taxPercentage"] = taxpercentage;
				/*params["mrp"] = mrp;*/
				params["fk_cat_id"] = fk_cat_id;
				params["fk_subCat_id"]= fk_subCat_id;
				params["productName"] =productName;
				params["manufacturingCompany"] = manufacturingCompany;
				/*params["weight"] =weight;*/
				params["fk_unit_id"] = fk_unit_id;
				params["unit"] = unit;
		//		alert("unit & ID "+fk_unit_id+unit);
				/*params["buyPrice"] = buyPrice;
				params["salePrice"] = salePrice;*/
				params["fk_shop_id"]= fk_shop_id;
				/*params["creditSalePrice"] = creditSalePrice;*/
				params["hsn"] = hsn;
				params["methodName"] = "proDetails";
				//alert(hsn);
				$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			 	    	{
			 				alert(data);
			 				if(document.prd)
			 				{
			 					document.prd.reset();
			 				}	
			 				document.prd.btn.disabled =false;
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
   document.prd.reset();	

}


/******************* For reports ***************/

 function getProductDetailAsperCategory(){
	
	
	var params= {};
	
	var input1 = document.getElementById('fk_cat_id'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}
	
	
	
	params["cat"]= fk_cat_id;
	params["methodName"] = "getProductDetailForReportAsPerCat";

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
			{
	
	$('#example1').dataTable().fnClearTable();
	
	var jsonData = $.parseJSON(data);
	var catmap = jsonData.list;
	
	
	
	$(document).ready(function() {
	 var total =   $('#example1').DataTable( {
		 
		 fnRowCallback : function(nRow, aData, iDisplayIndex){
                $("th:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
		
	/*"footerCallback": function ( row, data, start, end, display ) {
	            var api = this.api(), data;
	 
	            // Remove the formatting to get integer data for summation
	            var intVal = function ( i ) {
	                return typeof i === 'string' ?
	                    i.replace(/[\$,]/g, '')*1 :
	                    typeof i === 'number' ?
	                        i : 0;
	            };
	 
	            // Total over all pages
	             total = api
	                .column( 7 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 ); 
	 			console.log(total); 
	            // Total over this page
	            pageTotal = api
	                .column( 5 )
	                .data()
	                .reduce( function (a, b) {
	                    return intVal(a) + intVal(b);
	                }, 0 );
	 
	         
	            // Update footer
	            $( api.column( 7 ).footer() ).html(
	              //  'Rs'+' '+pageTotal.toFixed(2)
	            		 str = pageTotal.toFixed(0)
	            );
	            console.log( pageTotal);
	            
	            // Total over this page       
	         		         
	            
	            
	        },*/
	    	
	    	
	    	destroy: true,
	        searching: false,
	        
	      
	columns: [
	            
	            {"data": "productName", "width": "5%"},
				{"data": "ManufacturingCompany", "width": "5%"},
				{"data": "buyPrice" , "width": "5%"},
				{"data": "salePrice" , "width": "5%"}
	        ],
	      
	        
	    } );
	} );
	
var mydata = catmap;
$('#example1').dataTable().fnAddData(mydata);

	}

);
	
	
	
}

 
 
 
/****************** For Edit Product Details ********************/
 function getAllProductDetails(){
	 var params= {};
	 var input1 = document.getElementById('fk_product_id'),
		list = document.getElementById('pro_drop'),
		i,fk_product_id;
		for (i = 0; i < list.options.length; ++i) {
			if (list.options[i].value === input1.value) {
				fk_product_id = list.options[i].getAttribute('data-value');
			}
		}
	
		$("#manufacturingCompany").append($("<input/>").attr("value","").text());
		$("#existedTax").append($("<input/>").attr("value","").text());
		$("#existedUnit").append($("<input/>").attr("value","").text());
		$("#existedTaxPercentage").append($("<input/>").attr("value","").text());
		$("#buyPrice").append($("<input/>").attr("value","").text());
		$("#mrp").append($("<input/>").attr("value","").text());
		$("#existedHsn").append($("<input/>").attr("value","").text());
		$("#creditSalePrice").append($("<input/>").attr("value","").text());
		$("#shopName").append($("<input/>").attr("value","").text());
		
		
		params["productId"]= fk_product_id;
		
		params["methodName"] = "getProuctDetailsToEdit";
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
			
			var jsonData = $.parseJSON(data);
			var catmap = jsonData.list;
			$.each(jsonData,function(i,v)
					{
					  document.getElementById("manufacturingCompany").value = v.manufacturer;
				      document.getElementById("existedTax").value = v.taxType;
				      document.getElementById("existedTaxPercentage").value = v.taxPercentage;
				      document.getElementById("existedUnit").value = v.unitName;
				      document.getElementById("existedHsn").value = v.hsn;
				      document.getElementById("shopName").value = v.shopName;
				   
			      
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
 }
 
 // update/edit product details
 function updateProductDetails(){
		
			if(document.prd1.fk_product_id.value == "")
				{
					alert("Select Product Name.");
					return false;
				}	

					if(document.prd1.manufacturingCompany.value == "")
					{
						alert("Enter Manufacturing Company Name.");
						return false;
					}	
					var letterNumber = /^[a-zA-Z]+$/;
					if(document.prd1.manufacturingCompany.value.match(letterNumber))
					{
		        				 if(document.prd1.fk_tax_id.value == "" || document.prd1.fk_tax_id.value == "selected" )
		        					{
		        						alert("Please select New Tax type");
		        						return false;
		        					}
		        				 if(document.prd1.taxPercentage.value == "")
		        					{
		        						alert("Please Enter New Tax Percentage");
		        						return false;
		        					}
		        				 if(document.prd1.shopName.value == "")
		        					{
		        						alert("Please Select Shop Name");
		        						return false;
		        					}
		        				 var letterNumber = /^[0-9]+([.][0-9]+)?$/;
		   	        			 if(document.prd1.taxPercentage.value.match(letterNumber))
		   	        			 {
							   	        				addEditedProductDetails();
															}
											
										
			   	        			 else
										{
												alert("Enter Numbers Only in Tax Percentage field..!!");
												return false;
											}
										}
			   	        			 
			   	        			 
		   	        				else
										{
											alert("Enter Alphabates Only in Manufacturing company field..!!");
											return false;
										}	
									}
											
 function addEditedProductDetails(){
		document.prd1.btn.disabled = true;
		
		 var input1 = document.getElementById('fk_product_id'),
			list = document.getElementById('pro_drop'),
			i,fk_product_id;
			for (i = 0; i < list.options.length; ++i) {
				if (list.options[i].value === input1.value) {
					fk_product_id = list.options[i].getAttribute('data-value');
				}
			}
		
			
		//var customerId = document.getElementById("customerId").value;
		
		var manufacturingCompany = $('#manufacturingCompany').val();
		var fk_tax_id = $('#fk_tax_id').val();				
		var taxPercentage = $('#taxPercentage').val();
		/*var buyPrice = $('#buyPrice').val();
		var mrp = $('#mrp').val();
		var salePrice = $('#salePrice').val();
		var creditSalePrice = $('#creditSalePrice').val();*/
		var existedTax = $('#existedTax').val();
		var existedTaxPercentage = $('#existedTaxPercentage').val();
		var newHsn = $('#newHsn').val();
		var productName = $('#productName').val();
		
		
		var params = {};
		
		params["productId"] = fk_product_id;
		params["manufacturingCompany"] = manufacturingCompany;	
		params["fk_tax_id"] = fk_tax_id;
		params["taxPercentage"] = taxPercentage;
		/*params["buyPrice"] =buyPrice;
		params["mrp"] = mrp;
		params["salePrice"] = salePrice;
		params["creditSalePrice"] = creditSalePrice;*/
		
		params["existedTaxPercentage"] = existedTaxPercentage;
		params["existedTax"] = existedTax;
		params["newHsn"] = newHsn;
		params["productName"] = productName;
		
		
		
		params["methodName"] = "updateProductDetails";

		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
				alert(data);
					if(document.prd1)
					{
						document.prd1.reset();
					}	
					document.prd1.btn.disabled =false;
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
		function getAllSubCat(){
			
			var input = document.getElementById('fk_cat_id'),
		    list1 = document.getElementById('cat_drop'),
		    i,fk_cat_id;

			for (i = 0; i < list1.options.length; ++i) {
		    if (list1.options[i].value === input.value) {
		    	fk_cat_id = list1.options[i].getAttribute('data-value');
		    }
			}
			
			$("#subCat").empty();
			$("#subCat").append($("<option></option>").attr("value","").text("Select Sub Category"));
			var params = {};
			
			params["fk_cat_id"] =fk_cat_id;
			
			
			params["methodName"] = "getSubCategoryDetails";

			$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
					{
				var count = 1;
				
				var jsonData = $.parseJSON(data);
				//var jsonData = jsonData.list;
				$.each(jsonData,function(i,v)
						{
					$("#subCat").append($("<option></option>").attr("value",count).text(v.subcategoryName+","+v.subcatId));
					count++;
						});
					}).error(function(jqXHR, textStatus, errorThrown){
						if(textStatus==="timeout") {

						}
					});
		}


function getAllShopName(){
			
			
			
			$("#shopName").empty();
			//$("#shopName").append($("<option></option>").attr("value","").text("Select Shop Name"));
			var params = {};
			
			
			params["methodName"] = "getShopDetails";

			$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
					{
				var count = 1;
				
				var jsonData = $.parseJSON(data);
				//var jsonData = jsonData.list;
				$.each(jsonData,function(i,v)
						{
					$("#shopName").append($("<option></option>").attr("value",count).text(v.shopName+","+v.shopId));
					count++;
						});
					}).error(function(jqXHR, textStatus, errorThrown){
						if(textStatus==="timeout") {

						}
					});
		}
	 
	 
	 
 