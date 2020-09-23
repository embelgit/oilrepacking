//Add goods receive
function addingGoodsReceive() {
	if (document.goodsReceiveForm.supplier.value == "") {
		alert("Please select Supplier Name");
		return false;
	}
	if (document.goodsReceiveForm.billNum.value == "") {
		alert("Please Enter Bill Number");
		return false;
	}
	var letterNumber = /^[a-zA-Z0-9/\, ]+$/;
	if (document.goodsReceiveForm.billNum.value.match(letterNumber)) {
		if (document.goodsReceiveForm.fk_cat_id.value == "") {
			alert("Please Select Product Category");
			return false;
		}
		if (document.goodsReceiveForm.subCat.value == "") {
			alert("Please Select Product sub-category");
			return false;
		}
	/*	if (document.goodsReceiveForm.proName.value == "") {
			alert("Please Select Product Name");
			return false;
		}*/
		/*
		 * if(document.goodsReceiveForm.dcNum.value == "") { alert("Please Enter
		 * DC Number"); return false; }
		 */
		if (document.goodsReceiveForm.purchaseDate.value == "") {
			alert("Please Select purchase Date");
			return false;
		}
		if (document.goodsReceiveForm.shopName.value == "") {
			alert("Please Select Shop");
			return false;
		}
		/*if (document.goodsReceiveForm.discount.value == "") {
			alert("Please Enter Discount in % ");
			return false;
		}
		var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
		var num = /^\d+$/;
		if (document.goodsReceiveForm.discount.value.match(letterNumber)
				|| document.goodsReceiveForm.discount.value.match(num)) {
			if (document.goodsReceiveForm.transExpence.value == "") {
				alert("Please Enter Transportation Expense ");
				return false;
			}*/
			/*var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
			var num = /^\d+$/;
			if (document.goodsReceiveForm.transExpence.value
					.match(letterNumber)
					|| document.goodsReceiveForm.transExpence.value.match(num)) {*/
				/*if (document.goodsReceiveForm.dueDate.value == "") {
					alert("Please Select Payment Due Date ");
					return false;
				}*/
				/*if (document.goodsReceiveForm.hamaliExpence.value == "") {
					alert("Please Enter Hamali Expense ");
					return false;
				}
				var letterNumber = /^\s*-?[0-9]\d*(\.\d{1,2})?\s*$/;
				var num = /^\d+$/;
				if (document.goodsReceiveForm.hamaliExpence.value
						.match(letterNumber)
						|| document.goodsReceiveForm.hamaliExpence.value
								.match(num)) {*/

					addGoodsRecieve();
				} /*else {
					alert("Enter only Numbers upto 2 decimal in Hamali Expense field..!!");
					return false;
				}
			}*/ /*else {
				alert("Enter only Numbers upto 2 decimal in Transportation Expense field..!!");
				return false;
			}
		} *//*else {
			alert("Enter only Numbers upto 2 decimal in Discount field..!!");
			return false;
		}
	}*/
      else {
		alert("Enter only Alphanumeric in Bill Number field..!!");
		return false;
	}
}
function addingContainerGoodsReceiveValidation()
{
	if (document.containerPurchaseForm.supplier1.value != "") 
	{
		if (document.containerPurchaseForm.purchaseDate1.value != "") 
		{
			if (document.containerPurchaseForm.billNum1.value != "") 
				{
				/*	if (document.containerPurchaseForm.containerName.value == "") 
					{*/
						addingContainerGoodsReceive();
				/*	}
					else
					{
						alert("Please Select Container Name ");  
						return false;
					}*/
				}
				else
				{
					alert("Please Enter Bill Number ");  
					return false;
				}
		}
		else
		{
			alert("Please Select Date ");  
			return false;
		}
	}
	else
	{
		alert("Please Select Supplier ID ");  
		return false;
	}
}
			
	
function addingContainerGoodsReceive() {
	document.containerPurchaseForm.btn2.disabled = true;
	//document.getElementById("save").disabled = true;
	var params = {};

	var input = document.getElementById('supplier1'), list = document
			.getElementById('sup_drop1'), i, supplier;

	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input.value) {
			supplier = list.options[i].getAttribute('data-value');
		}
	}

	productId = $('#containerName').val();

	$("#productId option:selected").each(function() {
		selectedVal = $(this).text();
	});

	var splitText = selectedVal.split(",");

	
	var containerName = splitText[0];
	var capacity = splitText[2];
	var unit = splitText[3];
	var contid = splitText[4];
//	alert(contid);
	var grossTotal1 = $('#grossTotal1').val();
	var purchaseDate1 = $('#purchaseDate1').val();
	var billNum1 = $('#billNum1').val();
	
	

	var count = jQuery("#jqGrid2").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid2').getGridParam('data');// to get all rows
															// of grid
	var AllRows = JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var packing_Id = allRowsInGrid[i].packing_Id;
		params["packing_Id" + i] = packing_Id;
		
		var containerName = allRowsInGrid[i].containerName;
		params["containerName" + i] = containerName;
		
		var packing_Type = allRowsInGrid[i].packing_Type;
		params["packing_Type" + i] = packing_Type;

		var unitName = allRowsInGrid[i].unitName;
		params["unitName" + i] = unitName;

		var salePrice = allRowsInGrid[i].salePrice;
		if(salePrice!="")
		{
			params["salePrice" + i] = salePrice;params["salePrice" + i] = salePrice;
		}
		else
		{
			alert("Enter Buy Price In Grid");
			return false;
		}
		

		var quantity = allRowsInGrid[i].quantity;
		if(quantity!="")
		{
			params["quantity" + i] = quantity;
		}
		else
		{
			alert("Enter Quantity In Grid");
			return false;
		}


		var gst = allRowsInGrid[i].gst;
		if (gst == undefined || gst == null || gst == "") {
			params["gst" + i] = 0;
		} else if (gst != undefined || gst != null || gst != "") {
			params["gst" + i] = gst;
		}

		var igst = allRowsInGrid[i].igst;
		if (igst == undefined || igst == null || igst == "") {
			params["igst" + i] = 0;
		} else if (igst != undefined || igst != null || igst != "") {
			params["igst" + i] = igst;
		}
		
		var taxAmount = allRowsInGrid[i].taxAmount;
		params["taxAmount" + i] = taxAmount;
	//	alert("taxAmount - "+taxAmount);
		var Total = allRowsInGrid[i].Total;
		params["Total" + i] = Total;
	//	alert("Total - "+Total);
	}

	var total1 = $('#total1').val();
	
	params["containerName"] = containerName;
	params["capacity"] = capacity;
//	params["unit"] = unit;
	params["count"] = count;
	params["billNum1"] = billNum1;
	params["purchaseDate1"] = purchaseDate1;
	params["supplier"] = supplier;
	params["total1"] = total1;
	params["grossTotal1"] = grossTotal1;

	params["methodName"] = "addingContainerGoodsReceive";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {
		alert(data);
		location.reload();
	}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {
			$(loaderObj).hide();
			$(loaderObj).find('#errorDiv').show();
		}
	});

}

/*
 * ++++++++++++ Advance Booked Goods Receive adding to goods recive table
 * +++++++++++
 */
function addBookedGoodsReceive() {
	if (document.advanceGoodsReceive.supplier1.value == "") {
		alert("Please select Supplier Name");
		return false;
	}
	if (document.advanceGoodsReceive.billNum1.value == "") {
		alert("Please Enter Bill Number");
		return false;
	}
	if (document.advanceGoodsReceive.fk_cat_id1.value == "") {
		alert("Please Select Product Category");
		return false;
	}
	if (document.advanceGoodsReceive.proName1.value == "") {
		alert("Please Select Product Name");
		return false;
	}
	if (document.advanceGoodsReceive.dcNum1.value == "") {
		alert("Please Enter DC Number");
		return false;
	}
	if (document.advanceGoodsReceive.purchaseDate1.value == "") {
		alert("Please Select purchase Date");
		return false;
	}
	if (document.advanceGoodsReceive.fk_godown_id1.value == "") {
		alert("Please Select Godown");
		return false;
	}
	if (document.advanceGoodsReceive.discount1.value == "") {
		alert("Please Enter Discount in % ");
		return false;
	}
	if (document.advanceGoodsReceive.transExpence1.value == "") {
		alert("Please Enter Transportation Expense ");
		return false;
	}
	if (document.advanceGoodsReceive.hamaliExpence1.value == "") {
		alert("Please Enter Hamali Expense ");
		return false;
	}
	if (document.advanceGoodsReceive.dueDate1.value == "") {
		alert("Please Select Payment Due Date ");
		return false;
	}

	addbookedGoodReceive();

}

function addbookedGoodReceive() {

	document.getElementById("btn1").disabled = true;
	var params = {};

	var input = document.getElementById('fk_godown_id1'), list1 = document
			.getElementById('godown_drop1'), i, fk_godown_id;

	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input.value) {
			fk_godown_id = list1.options[i].getAttribute('data-value');
		}
	}

	/*
	 * var input = document.getElementById('fkExpenseDescriptionId1'), list1 =
	 * document.getElementById('exp_drop1'), i,fk_expense_id;
	 * 
	 * for (i = 0; i < list1.options.length; ++i) { if (list1.options[i].value
	 * === input.value) { fk_expense_id =
	 * list1.options[i].getAttribute('data-value'); } }
	 */
	// var fkExpenseId = fk_expense_id;
	var input = document.getElementById('supplier1'), list = document
			.getElementById('sup_drop1'), i, supplier;

	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input.value) {
			supplier = list.options[i].getAttribute('data-value');
		}
	}

	var supplier = supplier;

	var input1 = document.getElementById('fk_cat_id1'), list = document
			.getElementById('cat_drop1'), i, fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}

	var catName = document.getElementById('fk_cat_id1').value;
	var dcNum = $('#dcNum1').val();
	var expenses = $('#extraExpence1').val();
	var grossTotal = $('#grossTotal1').val();
	var count = jQuery("#jqGrid2").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid2').getGridParam('data');// to get all rows
															// of grid
	var AllRows = JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var productID = allRowsInGrid[i].productID;
		params["productID" + i] = productID;

		var productName = allRowsInGrid[i].productName;
		params["productName" + i] = productName;

		var companyName = allRowsInGrid[i].manufacturer;
		params["companyName" + i] = companyName;

		var salePrice = allRowsInGrid[i].salePrice;
		params["salePrice" + i] = salePrice;
		
		var gst = allRowsInGrid[i].gst;
		params["gst" + i] = gst;

		var weight = allRowsInGrid[i].weight;
		params["weight" + i] = weight;

		var quantity = allRowsInGrid[i].quantity;
		params["quantity" + i] = quantity;

		var batchNo = allRowsInGrid[i].batchNo;
		params["batchNo" + i] = batchNo;

		var expiryDate = allRowsInGrid[i].expiryDate;
		params["expiryDate" + i] = expiryDate;

		var taxPercentage = allRowsInGrid[i].taxPercentage;
		params["taxPercentage" + i] = taxPercentage;

		var mrp = allRowsInGrid[i].mrp;
		params["mrp" + i] = mrp;

	}

	var transExpence = $('#transExpence1').val();
	var hamaliExpence = $('#hamaliExpence1').val();
	var dueDate = $('#dueDate1').val();
	var purchaseDate = $('#purchaseDate1').val();
	var billtype = $('#billtype1').val();
	/* var expensesDescription = $('#expensesDescription1').val(); */
	var discount = $('#discount1').val();
	var discountAmount = $('#discountAmount1').val();
	var billNum = $('#billNum1').val();

	params["catName"] = catName;
	params["dueDate"] = dueDate;
	params["purchaseDate"] = purchaseDate;
	/* params["billtype"] = billtype; */
	params["fk_godown_id"] = fk_godown_id;
	params["billNum"] = billNum;
	params["fk_cat_id"] = fk_cat_id;
	params["supplier"] = supplier;
	params["dcNum"] = dcNum;
	params["count"] = count;
	params["discount"] = discount;
	params["discountAmount"] = discountAmount;
	params["transExpence"] = transExpence;
	params["hamaliExpence"] = hamaliExpence;
	params["grossTotal"] = grossTotal;

	params["methodName"] = "addingGoodsReceive";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {
		alert(data);
		location.reload();
	}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {
			$(loaderObj).hide();
			$(loaderObj).find('#errorDiv').show();
		}
	});

}

/** ******************Purchase Reports ************ */

/** ******* Single Date ******** */

function purchaseReportForSingleDate() {

	var params = {};
	var fDate = $("#fDate").val();

	params["fDate"] = fDate;

	params["methodName"] = "getPurchaseDetailsForSingleDate";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchase1').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchase1').DataTable({
				dom : 'Bfrtip',
				buttons : [ 'copy', ' csv', ' excel', 'pdf', 'print' ],

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				/*
				 * "footerCallback": function ( row, data, start, end, display ) {
				 * var api = this.api(), data;
				 *  // Remove the formatting to get integer data for summation
				 * var intVal = function ( i ) { return typeof i === 'string' ?
				 * i.replace(/[\$,]/g, '')*1 : typeof i === 'number' ? i : 0; };
				 *  // Total over all pages total = api .column( 7 ) .data()
				 * .reduce( function (a, b) { return intVal(a) + intVal(b); }, 0 );
				 * console.log(total); // Total over this page pageTotal = api
				 * .column( 5 ) .data() .reduce( function (a, b) { return
				 * intVal(a) + intVal(b); }, 0 );
				 * 
				 *  // Update footer $( api.column( 7 ).footer() ).html( //
				 * 'Rs'+' '+pageTotal.toFixed(2) str = pageTotal.toFixed(0) );
				 * console.log( pageTotal);
				 *  // Total over this page
				 * 
				 * 
				 *  },
				 */

				destroy : true,
				searching : false,

				columns : [ {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				},/* {
					"data" : "batchNo",
					"width" : "5%"
				},*/ {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],
				dom : 'Bfrtip',
				buttons : [ 'copy', 'csv', 'excel', 'pdf', 'print' ]

			});
		});

		var mydata = catmap;
		$('#purchase1').dataTable().fnAddData(mydata);

	}

	);

}

/** ************* Between Two Dates ********** */

function purchaseReportBetweenTwoDates() {

	var params = {};
	var startDate = $("#fisDate2").val();
	var endDate = $("#endDate2").val();

	params["fisDate"] = startDate;
	params["endDate"] = endDate;
	params["methodName"] = "getPurchaseReportBetweenTwoDates";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {
		$('#purchaseRange').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchaseRange').DataTable({
				dom : 'Bfrtip',
				buttons : [ 'copy', ' csv', ' excel', 'pdf', 'print' ],

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				/*
				 * "footerCallback": function ( row, data, start, end, display ) {
				 * var api = this.api(), data;
				 *  // Remove the formatting to get integer data for summation
				 * var intVal = function ( i ) { return typeof i === 'string' ?
				 * i.replace(/[\$,]/g, '')*1 : typeof i === 'number' ? i : 0; };
				 *  // Total over all pages total = api .column( 7 ) .data()
				 * .reduce( function (a, b) { return intVal(a) + intVal(b); }, 0 );
				 * console.log(total); // Total over this page pageTotal = api
				 * .column( 5 ) .data() .reduce( function (a, b) { return
				 * intVal(a) + intVal(b); }, 0 );
				 * 
				 *  // Update footer $( api.column( 7 ).footer() ).html( //
				 * 'Rs'+' '+pageTotal.toFixed(2) str = pageTotal.toFixed(0) );
				 * console.log( pageTotal);
				 *  // Total over this page
				 * 
				 * 
				 *  },
				 */

				destroy : true,
				searching : false,

				columns : [ {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				},/* {
					"data" : "batchNo",
					"width" : "5%"
				},*/ {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],
				dom : 'Bfrtip',
				buttons : [ 'copy', 'csv', 'excel', 'pdf', 'print' ]

			});
		});

		var mydata = catmap;
		$('#purchaseRange').dataTable().fnAddData(mydata);

	}

	);

}
/* Supplier wise purchase report */

function supplierWisePurchaseReport() {

	var params = {};

	var input11 = document.getElementById('fkSupplierId'), list1 = document
			.getElementById('sup_drop'), i, fk_supplier_id;
	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input11.value) {
			fk_supplier_id = list1.options[i].getAttribute('data-value');
		}
	}

	params["supplier"] = fk_supplier_id;

	params["methodName"] = "getPurchaseDetailsAsPerSupplier";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchase3').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchase3').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				destroy : true,
				searching : false,

				columns : [ {
					"data" : "supplier",
					"width" : "5%"
				}, {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				}, /*{
					"data" : "batchNo",
					"width" : "5%"
				},*/ {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],

			});
		});

		var mydata = catmap;
		$('#purchase3').dataTable().fnAddData(mydata);

	}

	);

}

/* Shop wise purchase report */

function shopWisePurchaseReport() {

	var params = {};
	var startDate = $("#fisDate3").val();
	var endDate = $("#endDate3").val();

	var input11 = document.getElementById('fkShopId'), list1 = document
			.getElementById('shp_drop'), i, fk_supplier_id;
	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input11.value) {
			fk_shop_id = list1.options[i].getAttribute('data-value');
		}
	}

	params["shop"] = fk_shop_id;
	params["fisDate"] = startDate;
	params["endDate"] = endDate;

	params["methodName"] = "getPurchaseDetailsAsPerShop";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchase4').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchase4').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				destroy : true,
				searching : false,

				columns : [ {
					"data" : "supplier",
					"width" : "5%"
				}, {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				}, /*{
					"data" : "batchNo",
					"width" : "5%"
				},*/ {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],

			});
		});

		var mydata = catmap;
		$('#purchase4').dataTable().fnAddData(mydata);

	}

	);

}

/* product wise Purchase report */

/* product wise Purchase report */

function purchaseReportAsPerProductName() {

	var params = {};

	var input1 = document.getElementById('fk_cat_id'), list = document
			.getElementById('cat_drop'), i, fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}

	
	productId = $('#proName').val();

	$("#proName option:selected").each(function() {
		selectedVal = $(this).text();
	});

	var splitText = selectedVal.split(",");

	var proName = splitText[0];
	var company = splitText[1];
	var weight = splitText[2];


	params["cat"] = fk_cat_id;
	params["proName"] = proName;
	params["company"] = company;
	params["weight"] = weight;

	params["methodName"] = "getPurchaseDetailsAsPerProduct";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchaseAsPerProduct').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchaseAsPerProduct').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				/*
				 * "footerCallback": function ( row, data, start, end, display ) {
				 * var api = this.api(), data;
				 *  // Remove the formatting to get integer data for summation
				 * var intVal = function ( i ) { return typeof i === 'string' ?
				 * i.replace(/[\$,]/g, '')*1 : typeof i === 'number' ? i : 0; };
				 *  // Total over all pages total = api .column( 8 ) .data()
				 * .reduce( function (a, b) { return intVal(a) + intVal(b); }, 0 );
				 * console.log(total); // Total over this page pageTotal = api
				 * .column( 5 ) .data() .reduce( function (a, b) { return
				 * intVal(a) + intVal(b); }, 0 );
				 * 
				 *  // Update footer $( api.column( 8 ).footer() ).html( //
				 * 'Rs'+' '+pageTotal.toFixed(2) str = pageTotal.toFixed(0) );
				 * console.log( pageTotal);
				 *  // Total over this page
				 * 
				 * 
				 *  },
				 * 
				 */
				destroy : true,
				searching : false,

				columns : [ {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "expense",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],

			});
		});

		var mydata = catmap;
		$('#purchaseAsPerProduct').dataTable().fnAddData(mydata);

	}

	);

}

/* Category Wise Purchase report */

function purchaseReportAsPerCat() {

	var params = {};

	var input1 = document.getElementById('fk_cat_id6'), list = document
			.getElementById('cat_drop6'), i, fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}

	var fk_cat_id = fk_cat_id;
	params["cat"] = fk_cat_id;
	params["methodName"] = "getPurchaseDetailsAsPerCategory";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchase4').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchase4').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				destroy : true,
				searching : false,

				columns : [

				{
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				}, {
					"data" : "batchNo",
					"width" : "5%"
				}, {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],

			});
		});

		var mydata = catmap;
		$('#purchase4').dataTable().fnAddData(mydata);

	}

	);

}

// sub category dropdown by rk
function getAllSubCat() {

	var input = document.getElementById('fk_cat_id'), list1 = document
			.getElementById('cat_drop'), i, fk_cat_id;

	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input.value) {
			fk_cat_id = list1.options[i].getAttribute('data-value');
		}
	}

	$("#subCat").empty();
	$("#subCat").append(
			$("<option></option>").attr("value", "")
					.text("Select Sub Category"));
	var params = {};

	params["fk_cat_id"] = fk_cat_id;

	params["methodName"] = "getSubCategoryDetails";

	$.post(
			'/Repacking/jsp/utility/controller.jsp',
			params,
			function(data) {
				var count = 1;

				var jsonData = $.parseJSON(data);
				// var jsonData = jsonData.list;
				$.each(jsonData, function(i, v) {
					$("#subCat").append(
							$("<option></option>").attr("value", count).text(
									v.subcategoryName + "," + v.subcatId));
					count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {

		}
	});
}

/*function getSupName() {

	var input = document.getElementById('supplier'), list1 = document
			.getElementById('sup_drop'), i, fk_sup_id;

	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input.value) {
			fk_sup_id = list1.options[i].getAttribute('data-value');
		}
	}

	$("#supplierName").empty();
	$("#supplierName").append( $("<option></option>").attr("value", "").text(""));
	var params = {};

	params["fk_sup_id"] = fk_sup_id;

	params["methodName"] = "getSupName";

	$.post(
			'/Repacking/jsp/utility/controller.jsp',
			params,
			function(data) {
				var count = 1;

				var jsonData = $.parseJSON(data);
				// var jsonData = jsonData.list;
				$.each(jsonData, function(i, v) {
					$("#supplierName").append(
							$("<option></option>").attr("value", i).text(
									v.dealerName));
					count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {

		}
	});
}
*/

function getSupName1(){
	var params= {};
	
	var input = document.getElementById('supplier1'), list1 = document
	.getElementById('sup_drop1'), i, fk_sup_id;

		for (i = 0; i < list1.options.length; ++i) {
			if (list1.options[i].value === input.value) {
				fk_sup_id = list1.options[i].getAttribute('data-value');
				}
		}
	
	$("#supplierName1").append($("<input/>").attr("value","").text());
	params["fk_sup_id"]= fk_sup_id;
	params["methodName"] = "getSupName";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				  document.getElementById("supplierName1").value = v.dealerName;
				});
			}).error(function(jqXHR, textStatus, errorThrown){
				if(textStatus==="timeout") {

				}
			});
 
}

/*** +++ Fetching product Name FOR CASH CUSTOMER+++ *****/
function getContainerName(){
		
	 var fk_cat_id = 1;
		$("#containerName").empty();
		$("#containerName").append($("<option></option>").attr("value","").text("Select Container"));
		var params= {};
		
		params["methodName"] = "getContainerName";
		
		//params["fk_cat_id"]= fk_cat_id;
		
		$.post('/Repacking/jsp/utility/controller.jsp',params,function(data)
				{ var count = 1;
				
			var jsonData = $.parseJSON(data);
			$.each(jsonData,function(i,v)
					{
				$("#containerName").append($("<option></option>").attr("value",count).text(v.containerName + ","+ "Capacity=,"+v.packing_Type+","+v.unitName+" ,"+v.packing_Id)); 
					count++;
					});
				}).error(function(jqXHR, textStatus, errorThrown){
					if(textStatus==="timeout") {

					}
				});
		
	
}


// Product name dropdown by rk
function getProductName() {

	var input = document.getElementById('fk_cat_id'), list1 = document
			.getElementById('cat_drop'), i, fk_cat_id;

	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input.value) {
			fk_cat_id = list1.options[i].getAttribute('data-value');
		}
	}

	productId = $('#subCat').val();

	$("#subCat option:selected").each(function() {
		selectedVal = $(this).text();
	});

	var splitText = selectedVal.split(",");

	var fk_subCat_id = splitText[1];
	// alert(fk_subCat_id);

	$("#proName").empty();
	$("#proName").append(
			$("<option></option>").attr("value", "")
					.text("Select Product Name"));
	var params = {};

	params["fk_cat_id"] = fk_cat_id;
	params["fk_subCat_id"] = fk_subCat_id;

	params["methodName"] = "getProductNameDetails";

	$.post(
			'/Repacking/jsp/utility/controller.jsp',
			params,
			function(data) {
				var count = 1;

				var jsonData = $.parseJSON(data);
				// var jsonData = jsonData.list;
				$.each(jsonData, function(i, v) {
					$("#proName").append(
							$("<option></option>").attr("value", i).text(
									v.productName));
					count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {

		}
	});
}

function getAllShopName() {

	$("#shopName").empty();
	//$("#shopName").append($("<option></option>").attr("value", "").text("Select Shop Name"));
	var params = {};

	params["methodName"] = "getShopDetails";

	$.post(
			'/Repacking/jsp/utility/controller.jsp',
			params,
			function(data) {
				var count = 1;

				var jsonData = $.parseJSON(data);
				// var jsonData = jsonData.list;
				$.each(jsonData, function(i, v) {
					$("#shopName").append(
							$("<option></option>").attr("value", count).text(
									v.shopName + "," + v.shopId));
					count++;
				});
			}).error(function(jqXHR, textStatus, errorThrown) {
		if (textStatus === "timeout") {

		}
	});
}

/* GST purchase Report */
function purchaseReportAsPerGST() {

	var params = {};
	var startDate = $("#gstFisDate").val();
	var endDate = $("#gstEndDate").val();

	params["gstFisDate"] = startDate;
	params["gstEndDate"] = endDate;
	params["methodName"] = "getGSTPurchaseReport";

	$
			.post(
					'/Repacking/jsp/utility/controller.jsp',
					params,
					function(data) {
						$('#gstPurchaseReportTable').dataTable().fnClearTable();

						var jsonData = $.parseJSON(data);
						var catmap = jsonData.list;

						$(document)
								.ready(
										function() {
											var total = $(
													'#gstPurchaseReportTable')
													.DataTable(
															{

																fnRowCallback : function(
																		nRow,
																		aData,
																		iDisplayIndex) {
																	$(
																			"th:first",
																			nRow)
																			.html(
																					iDisplayIndex + 1);
																	return nRow;
																},

																"footerCallback" : function(
																		row,
																		data,
																		start,
																		end,
																		display) {
																	var api = this
																			.api(), data;

																	// Remove
																	// the
																	// formatting
																	// to get
																	// integer
																	// data for
																	// summation
																	var intVal = function(
																			i) {
																		return typeof i === 'string' ? i
																				.replace(
																						/[\$,]/g,
																						'') * 1
																				: typeof i === 'number' ? i
																						: 0;
																	};

																	// Total
																	// over all
																	// pages
																	total = api
																			.column(
																					6)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);
																	console
																			.log(total);
																	// Total
																	// over this
																	// page
																	// for item
																	// Rate
																	// total
																	pageTotal = api.column(7)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							7)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					8)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							8)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					9)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							9)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	pageTotal = api
																			.column(
																					10)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							10)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					11)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							11)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					12)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							12)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	pageTotal = api
																			.column(
																					13)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							13)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					14)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							14)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					15)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							15)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	pageTotal = api
																			.column(
																					16)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							16)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					17)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							17)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					18)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							18)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																	// Quantity
																	// total
																	pageTotal = api
																			.column(
																					19)
																			.data()
																			.reduce(
																					function(
																							a,
																							b) {
																						return intVal(a)
																								+ intVal(b);
																					},
																					0);

																	// Update
																	// footer
																	$(
																			api
																					.column(
																							19)
																					.footer())
																			.html(

																					parseFloat(
																							pageTotal)
																							.toFixed(
																									2)

																			);
																	console
																			.log(pageTotal);

																},

																destroy : true,
																searching : false,

																columns : [
																		{
																			"data" : "serialnumber",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "saleDate",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "supplierName",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "billNo",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "gstNumber",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "hsnNumber",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "itemName",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "buyPrice",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "quanti",
																			"width" : "5%",
																			"defaultContent" : ""
																		},

																		{
																			"data" : "totalAmount",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "fivePercentageGST",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "twelwePercentageGST",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "eighteenPercentageGST",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "twentyEightPercentageGST",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "iGSTFivePercentage",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "iGSTTwelwePercentage",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "iGSTEighteenPercentage",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "iGSTTwentyeightPercentage",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "totalTaxAmount",
																			"width" : "5%",
																			"defaultContent" : ""
																		},
																		{
																			"data" : "netAmount",
																			"width" : "5%",
																			"defaultContent" : ""
																		} ],

																dom : 'Bfrtip',
																buttons : [
																		'copy',
																		'csv',
																		'excel',
																		'pdf',
																		'print' ]
															});
										});

						var mydata = catmap;
						$('#gstPurchaseReportTable').dataTable().fnAddData(
								mydata);

					}

			);

}

function supplierWisePurchaseReturnReport() {
	var params = {};

	var input11 = document.getElementById('fkSupplierId_Purchase_Return'), list1 = document
			.getElementById('sup_drop_Purchase_return'), i, fk_supplier_id_purchase_return;
	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input11.value) {
			fk_supplier_id_purchase_return = list1.options[i]
					.getAttribute('data-value');
		}
	}


	params["supplier"] = fk_supplier_id_purchase_return;

	params["methodName"] = "getPurchaseReturnDetailsAsPerSupplierBetweenTwoDate";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchaseReturnTable').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;

		$(document).ready(function() {
			var total = $('#purchaseReturnTable').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
					return nRow;
				},

				destroy : true,
				searching : false,

				columns : [ {
					"data" : "supplier",
					"width" : "5%"
				}, {
					"data" : "billNo",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "productName",
					"width" : "5%"
				}, {
					"data" : "companyName",
					"width" : "5%"
				}, {
					"data" : "dcNo",
					"width" : "5%"
				}, /*{
					"data" : "batchNo",
					"width" : "5%"
				},*/ {
					"data" : "barcodeNo",
					"width" : "5%"
				}, {
					"data" : "buyPrice",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				}, {
					"data" : "mrp",
					"width" : "5%"
				}, {
					"data" : "weight",
					"width" : "5%"
				}, {
					"data" : "quantity2",
					"width" : "5%"
				}, {
					"data" : "returnQuantity",
					"width" : "5%"
				}, {
					"data" : "remainingQuantity",
					"width" : "5%"
				}, ],

				dom : 'Bfrtip',
				buttons : [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
			});
		});

		var mydata = catmap;
		$('#purchaseReturnTable').dataTable().fnAddData(mydata);

	}

	);

}

function productDetailInGridForContainer(){
	
	var itemparams = {};
	/*var input1 = document.getElementById('containerName'),
	list = document.getElementById('cat_drop'),
	i,fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}*/
	
	
	containerName = $('#containerName').val();
	
	$("#containerName option:selected").each(function() {
		   selectedVal = $(this).text();
		});
	
	var splitText = selectedVal.split(",");
	
	var containerName = splitText[0];
	var capacity = splitText[2];
	
	itemparams["containerName"]= containerName;
	itemparams["capacity"]= capacity;
	
	
	var count=0;
	var newrow;
	var rowId;
	var	taxPercentage;
	itemparams["methodName"] = "getproductDetailInGridForContainer";
	$.post('/Repacking/jsp/utility/controller.jsp',itemparams,
			function(data)
			{ 
		var jsonData = $.parseJSON(data);
		
		$.each(jsonData,function(i,v)
				{
	/*		  count = jQuery("#jqGrid2").jqGrid('getGridParam','records'); 
			     var rowdata =$("#jqGrid2").jqGrid('getGridParam','data');
			var idd;*/
			
			 
/*			 for (var j = 0; j < count; j++) {
			  idd = rowdata[j].containerName;
			  
			//  var rowId = ids[j];
			  if(idd == containerName){	
					newrow=false;
					alert("item Name Already Inserted !!!");
					var grid = jQuery("#jqGrid2");
				    grid.trigger("reloadGrid");
			    	break;
				}  
				else
				{
					newrow = true;
				}
			 }*/
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
			document.getElementById("containerName").value = "";
			
			$("#jqGrid2").jqGrid({
				
			
			
				datatype:"local",

				colNames: [	"Packing ID","Container Name","Capacity","Unit","Buy Price","Extra Pcking","GST %","IGST %","Quantity","Tax Amount","Total" ],

				colModel: [
							
				           { 	
				        	   name: "productID",
				        	   hidden:true
				        	   //resizable: true,


				           },
				           { 	
				        	   name: "containerName",
				        	   width:120,

				           },
				           { 	
				        	   name: "packing_Type",
				        	   width:80
				        	  
				           },
				           { 	
				        	   name: "unitName",
				        	   width:80
				        	  
				           },
				           
				           
				          /* {
				        	   name: "mrp",
				        	   width: 140,
				        	   editable: true
				           },*/
				           {
				        	   name:  "salePrice",
				        	   width: 100,
				        	   editable: true
				           },
				           {
				        	   name: "extraPacking",
				        	   hidden:true				           
				        	},	
				           
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
				        	   width: 80,
				        	   editable: true


				           },
				           
				           {
				        	   name: "taxAmount",
				        	   width: 80,
				        	  editable: true
				           },
				           
				           {
				        	   name : 'Total',
				        	  // name: "",
				        	  //formatter: sumFmatter,
				        	   width: 100,
				        	  
				           }
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
						        	   var rowId =$("#jqGrid2").jqGrid('getGridParam','selrow');  
				                       var rowData = jQuery("#jqGrid2").getRowData(rowId);
				                    	
				                    	var quantity = rowData['quantity'];
				                    	var buyPrice = rowData['salePrice'];
				                    	var igst = rowData['igst'];
				                    	var gst = rowData['gst'];
				                    	var taxAmount = rowData['taxAmount'];
				                    	var tota = 0;
				                    	
				                    	
				                    	if(buyPrice != "")
					                       {
					                    	   var checkprice = /^[0-9]+\.?[0-9]*$/;
					                    	   if(buyPrice.match(checkprice))
					                    	   {}
					                    	   else
					                    	   {
					                    		   alert("Please Enter Valid Buy Price");
				                    				
			                    				   var setZero = 0;
				 		                    	   $("#jqGrid2").jqGrid("setCell", rowId, "buyPrice", setZero);
						                    		
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
		                                  		 $("#jqGrid2").jqGrid("setCell", rowId, "quantity", setZero);
			                    			 }
			                    			 
			                    		}
				                    	
				                    	/*if (Gst != "0"){
			                    			var gstAmt = Gst;
				                    		var taxAmount = ((gstAmt/100)*buyPrice);
				                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
				                    		tota = quantity * BuyPriceWithTaxAmount;
				                    		$("#jqGrid2").jqGrid("setCell", rowId, "taxAmount", taxAmount);
				                    	//	$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
			                    	}
			                    	else if (iGst != "0") {
			                    		var  igstAmt = Number(iGst);
			                    		var taxAmount = ((igstAmt/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
			                    	    tota = quantity * BuyPriceWithTaxAmount;
			                    	    $("#jqGrid2").jqGrid("setCell", rowId, "taxAmount", taxAmount);
			                    		//$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
									} */
			                    	
				                    	
			                    	
				                    	
				                    		/*if (iGst != 0){
				                    			var taxPercentage = iGst;
					                    		var taxAmount = ((taxPercentage/100)*buyPrice);
					                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
					                    		tota = quantity * BuyPriceWithTaxAmount;
					                    	//	$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
				                    	}
				                    	else if(iGst == 0){
				                    		var  taxPercentage = Number(Gst);
				                    		var taxAmount = ((taxPercentage/100)*buyPrice);
				                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
				                    	    tota = quantity * buyPrice;
				                    		//$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
				                    		
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
											$("#jqGrid2").jqGrid("setCell",rowId, "igst", abc);

											$("#jqGrid2").jqGrid("setCell",rowId, "gst", abc);
											$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", setZero);
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
											$("#jqGrid2").jqGrid("setCell",rowId, "igst", abc);

											$("#jqGrid2").jqGrid("setCell",rowId, "gst", abc);
											$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", setZero);
											return false;
											}
										
										}
										if(igst >0 && gst > 0 )
										{
										var abc ="0";
										alert(" Please Enter GST Number OR IGST Number");
										$("#jqGrid2").jqGrid("setCell",rowId, "igst", abc);

										$("#jqGrid2").jqGrid("setCell",rowId, "gst", abc);
										//$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", gstAmnt);
										return false;
										}
									
									
										/*var setZero = 0;
			                    		$("#list4").jqGrid("setCell", rowId, "total", setZero);
*/
										var gst1 = 0;
										var igst1 = 0;
											
										if(gst!="0")
										{	
										var tax = ((+gst / 100) * 100) + buyPrice ;
										var taxAmount = ((+gst / 100) * 100) * quantity;
										var totAmt = quantity * tax;
										}
										if(igst != "0")
										{
												var tax = ((+igst / 100) * 100) + buyPrice;
												var taxAmount = ((+igst / 100) * 100) * quantity;
												var totAmt = +quantity * tax;
										}
										
	/*									else
										{
											var tax = ((+igst / 100) * 100) + buyPrice;
											var taxAmount = ((+igst / 100) * 100) * quantity;
											var totAmt = +quantity * tax;
										}*/
								
								
									
									

										var TotalGst = 0;
										var TotalIgst = 0;
										var sGstAmt = 0;
										var cGstAmt = 0;

										var rowData = jQuery("#jqGrid2").getRowData(rowId);

										tota = quantity * buyPrice;
								
											
											
										if(gst > Number(0)){
											gstAmnt = ((tota * gst) / 100);
											$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", gstAmnt)
											totAmt1 = tota	+ gstAmnt;
											}
										/*else
										{
										gstAmnt  = ((tota * gst) / 100);
										$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", gstAmnt)
										totAmt1 = tota	+ gstAmnt;
										}*/
										
										if(igst > Number(0))
										{
											gstAmnt  = ((tota * igst) / 100);
											$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", gstAmnt)
											totAmt1 = tota	+ gstAmnt;
										}
										/*	else
											{
											gstAmnt  = ((tota * igst) / 100);
											$("#jqGrid2").jqGrid("setCell",rowId, "taxAmount", gstAmnt)
											totAmt1 = tota	+ gstAmnt;
											}*/
				                    	
				                    	if(gst == "" && igst == ""){
				                    		totAmt1 = quantity * buyPrice;
				                    	}
				                    	
				                    	
				                    		$("#jqGrid2").jqGrid("setCell", rowId, "Total", Math.round(totAmt1));
				                    		/*var tota = quantity * buyPrice;
				                    		$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);*/
				                    		
				                    		var Total =0;
				                    		var count = jQuery("#jqGrid2").jqGrid('getGridParam', 'records');
				        		        	var allRowsInGrid1 = $('#jqGrid2').getGridParam('data');
				        		        	var AllRows=JSON.stringify(allRowsInGrid1);
				        		        	for (var k = 0; k < count; k++) {
				        		        		var Total1 = allRowsInGrid1[k].Total;
				        		        		if(Total1 != null){
				        		        		Total = +Total + +Total1;
				        		        		}
				        		        	}
				        		        	
				        		        	
				        		        	document.getElementById("total1").value = Total;
			        		        		document.getElementById("grossTotal1").value = Total;
			        		        		
			        		        		
				        		        	
				        	},
				           
				           viewrecords: true,
				           width: 1200,
				           rowNum: 10,
				           pager: "#jqGridPager2",
				           sortorder: "desc",
				       /*	onSelectRow: function(productID){
				       		if(productID && productID!==lastsel){
				       			jQuery('#jqGrid2').jqGrid('restoreRow',lastsel);
				       			jQuery('#jqGrid2').jqGrid('editRow',productID,true);
				       			
				       			//jQuery('#jqGrid').jqGrid('editRow',productID,true,pickdates);
				       			lastsel=productID;
				       		}
				       	},*/
				       	
			});

			count = jQuery("#jqGrid2").jqGrid('getGridParam', 'records'); 
		     var rowdata =$("#jqGrid2").jqGrid('getGridParam','data');
		     var ids = jQuery("#jqGrid2").jqGrid('getDataIDs');
	//		 var idd;		     
			  var prodName,cap;
	  
			  for (var j = 0; j < count; j++) 
			  {
				  prodName = rowdata[j].containerName;
				  cap = rowdata[j].packing_Type;
			//	  packing = rowdata[j].weight;
				
				 var rowId = ids[j];
				 var rowData = jQuery('#jqGrid2').jqGrid ('getRowData', rowId);
				
				if (prodName == jsonData[i].containerName && cap == jsonData[i].packing_Type) {
			    	
			    	newrow=false;
					alert("Container Name Already Inserted !!!");
					var grid = jQuery("#jqGrid2");
				    grid.trigger("reloadGrid");
			    	break;
				}
				else
				{
					newrow = true;
				}
			   }

//		  newrow = true;
			  if(newrow == true)
				 {
					
				 // $("#credit").addRowData(i,jsonData[i]);
				  $("#jqGrid2").addRowData(count,jsonData[i]);
					
				 } 
		        
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			if(count==0 || count==null)
			{
				// $("#credit").addRowData(i,jsonData[i]);
				 $("#jqGrid2").addRowData(0,jsonData[i]);
			}
			
			
			
			
			//$("#jqGrid").addRowData(i,jsonData[i]);
			/*function pickdates(productID){
				jQuery("#"+productID+"_expiryDate","#jqGrid").datepicker({dateFormat:"yyyy-mm-dd"});
			}*/
			/*jQuery("#jqGrid").jqGrid('navGrid',"#jqGridPager",{edit:false,add:false,del:true});*/


			
			$('#jqGrid2').navGrid('#jqGridPager2',
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
	                		$('#jqGrid2').trigger( 'reloadGrid' );
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
	                		$('#jqGrid2').trigger( 'reloadGrid' );
						},
						
						 */
						afterComplete: function() {
	                		$('#jqGrid2').trigger( 'reloadGrid' );

	 				       /* 	Calculation of total after editing quantity*/
	 				        	   
	 				        	   // $(this).trigger('reloadGrid');
	                		   var rowId =$("#jqGrid2").jqGrid('getGridParam','selrow');  
		                       var rowData = jQuery("#jqGrid2").getRowData(rowId);
		                    	
		                    	var quantity = rowData['quantity'];
		                    	var buyPrice = rowData['salePrice'];
		                    	var iGst = rowData['igst'];
		                    	var Gst = rowData['gst'];
		                    	var tota = 0;
		                    	
		                    	
		                    	
		                    		if (Gst != 0){
		                    			var taxPercentage = Gst;
			                    		var taxAmount = ((taxPercentage/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
			                    		tota = quantity * buyPrice;
			                    	//	$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
		                    			}
		                    /*	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*buyPrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
		                    	    tota = quantity * buyPrice;
		                    		//$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
		                    		
		                    	}*/
		                    		if (iGst != 0){
		                    			var taxPercentage = iGst;
			                    		var taxAmount = ((taxPercentage/100)*buyPrice);
			                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
			                    		tota = quantity * buyPrice;
			                    	//	$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
		                    			}
		                    /*	else if(iGst == 0){
		                    		var  taxPercentage = Number(Gst);
		                    		var taxAmount = ((taxPercentage/100)*buyPrice);
		                    		var BuyPriceWithTaxAmount = Number(taxAmount) + Number(buyPrice);
		                    	    tota = quantity * buyPrice;
		                    		//$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
		                    		
		                    	}*/
		                    		
		                    		
		                    		$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);
		                    		/*var tota = quantity * buyPrice;
		                    		$("#jqGrid2").jqGrid("setCell", rowId, "Total", tota);*/
		                    		
		                    		var Total =0;
		                    		var count = jQuery("#jqGrid2").jqGrid('getGridParam', 'records');
		        		        	var allRowsInGrid1 = $('#jqGrid2').getGridParam('data');
		        		        	var AllRows=JSON.stringify(allRowsInGrid1);
		        		        	for (var k = 0; k < count; k++) {
		        		        		var Total1 = allRowsInGrid1[k].Total;
		        		        		Total = +Total + +Total1;
		        		        	}
		        		        	
		        		        	
		        		        	document.getElementById("total1").value = Total;
	        		        		document.getElementById("grossTotal1").value = Total;
	        		
						},
						onSelectRow: function(id) {
							if (id && id !== lastSel) {
								jQuery("#jqGrid2").saveRow(lastSel, true, 'clientArray');
								jQuery("#jqGrid2").editRow(id, true);
								
								lastSel = id;
								console.log(id);
							}
						},
						
						
					});
			
		// grid refresh code	
			
				});
       

			}); 
}
