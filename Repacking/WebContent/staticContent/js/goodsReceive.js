/*function addGoodsRecieve(){

 //document.getElementById("btn").disabled = true;
 var params = {};


 var input = document.getElementById('fk_godown_id'),
 list1 = document.getElementById('godown_drop'),
 i,fk_godown_id;

 for (i = 0; i < list1.options.length; ++i) {
 if (list1.options[i].value === input.value) {
 fk_godown_id = list1.options[i].getAttribute('data-value');
 }
 }


 var input = document.getElementById('fkExpenseDescriptionId'),
 list1 = document.getElementById('exp_drop'),
 i,fk_expense_id;

 for (i = 0; i < list1.options.length; ++i) {
 if (list1.options[i].value === input.value) {
 fk_expense_id = list1.options[i].getAttribute('data-value');
 }
 }

 //var fkExpenseId = fk_expense_id;

 var input = document.getElementById('supplier'),
 list = document.getElementById('sup_drop'),
 i,supplier;

 for (i = 0; i < list.options.length; ++i) {
 if (list.options[i].value === input.value) {
 supplier = list.options[i].getAttribute('data-value');
 }
 }


 var supplier = supplier;

 var input1 = document.getElementById('fk_cat_id'),
 list = document.getElementById('cat_drop'),
 i,fk_cat_id;
 for (i = 0; i < list.options.length; ++i) {
 if (list.options[i].value === input1.value) {
 fk_cat_id = list.options[i].getAttribute('data-value');
 }
 }

 var catName = document.getElementById("fk_cat_id").value;
 var dcNum = $('#dcNum').val();
 //var expenses = $('#extraExpence').val();
 var grossTotal = $('#grossTotal').val();
 var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
 var allRowsInGrid = $('#jqGrid').getGridParam('data');//to get all rows of grid
 var AllRows=JSON.stringify(allRowsInGrid);
 for (var i = 0; i < count; i++) {

 var productID = allRowsInGrid[i].productID;
 params["productID"+i] = productID;

 var companyName = allRowsInGrid[i].manufacturer;
 params["companyName"+i] = companyName;

 var productName = allRowsInGrid[i].productName;
 params["productName"+i] = productName;

 var buyPrice = allRowsInGrid[i].buyPrice;
 params["buyPrice"+i] = buyPrice;

 var salePrice = allRowsInGrid[i].salePrice;
 params["salePrice"+i] = salePrice;

 var weight = allRowsInGrid[i].weight;
 params["weight"+i] = weight;

 var quantity = allRowsInGrid[i].quantity;
 params["quantity"+i] = quantity;

 var batchNo = allRowsInGrid[i].batchNo;
 params["batchNo"+i] = batchNo;

 var expiryDate = allRowsInGrid[i].expiryDate;
 params["expiryDate"+i] = expiryDate;

 var taxPercentage = allRowsInGrid[i].taxPercentage;
 params["taxPercentage"+i] = taxPercentage;

 var mrp = allRowsInGrid[i].mrp;
 params["mrp"+i] = mrp;

 }

 //var catName = $('#catName').val();
 var purchaseDate = $('#purchaseDate').val();
 //var billtype = $('#billtype').val();
 //var expensesDescription = $('#expensesDescription').val();
 var discount = $('#discount').val();
 var discountAmount = $('#discountAmount').val();
 var billNum = $('#billNum').val();
 var transExpence = $('#transExpence').val();
 var hamaliExpence = $('#hamaliExpence').val();


 $("#proName option:selected").each(function() {
 selectedVal = $(this).text();
 });

 var splitText = selectedVal.split(",");

 var proName = splitText[0];
 var company = splitText[1];
 var weight = splitText[2];


 params["company"]= company;


 params["catName"] = catName;
 params["dueDate"] = dueDate;
 params["purchaseDate"] = purchaseDate;
 //params["billtype"] = billtype;
 params["fk_godown_id"] = fk_godown_id;
 params["billNum"] = billNum;
 params["fk_cat_id"] = fk_cat_id;
 params["supplier"] = supplier;
 params["dcNum"] = dcNum;
 params["count"] = count;
 params["discount"] = discount;
 params["discountAmount"] = discountAmount;
 //	params["fkExpenseId"] = fkExpenseId;
 params["transExpence"] = transExpence;
 params["hamaliExpence"] = hamaliExpence;
 params["grossTotal"] = grossTotal;

 params["methodName"] = "addingGoodsReceive";

 $.post('/Fertilizer/jsp/utility/controller.jsp',params,function(data)
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


 }*/


//Add goods receive
function addingGoodsReceive() {
	if (document.goodsReceiveForm.supplier.value == "") {
		alert("Please select Supplier Name !!! ");
		return false;
	}
	if (document.goodsReceiveForm.billNum.value == "") {
		alert("Please Enter Bill Number !!! ");
		return false;
	}
	var letterNumber = /^[a-zA-Z0-9/\, ]+$/;
	if (document.goodsReceiveForm.billNum.value.match(letterNumber)) {
		if (document.goodsReceiveForm.fk_cat_id.value == "") {
			alert("Please Select Product Category !! ");
			return false;
		}
		if (document.goodsReceiveForm.subCat.value == "") {
			alert("Please Select Product sub-category");
			return false;
		}
		if (document.goodsReceiveForm.proName.value == "") {
		//	alert("Please Select Product subccategory");
		//	return false;
		}
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

/*function validation()
{
	var allRowsInGrid = $('#jqGrid').getGridParam('data');// to get all rows
	// of grid
var AllRows = JSON.stringify(allRowsInGrid);
for (var i = 0; i < count; i++) {
	var buyPrice = allRowsInGrid[i].buyPrice;
	var buyPrice; 
	if(buyPrice == undefined || buyPrice == 0 || buyPrice == null || buyPrice == '')
	{	
		addGoodsRecieve();
	}	
	else{
		
		alert("Please Enter buyPrice");
		return false;
	}
//}	
}*/

function addGoodsRecieve() {
	//document.goodsReceiveForm.btn.disabled = true;
	/*document.getElementById("btn").disabled = true;*/
	var params = {};

	/*var input = document.getElementById('fk_godown_id'), list1 = document
			.getElementById('godown_drop'), i, fk_godown_id;

	for (i = 0; i < list1.options.length; ++i) {
		if (list1.options[i].value === input.value) {
			fk_godown_id = list1.options[i].getAttribute('data-value');
		}
	}*/

	/*
	 * var input = document.getElementById('fkExpenseDescriptionId1'), list1 =
	 * document.getElementById('exp_drop1'), i,fk_expense_id;
	 * 
	 * for (i = 0; i < list1.options.length; ++i) { if (list1.options[i].value
	 * === input.value) { fk_expense_id =
	 * list1.options[i].getAttribute('data-value'); } }
	 */
	// var fkExpenseId = fk_expense_id;
	var input = document.getElementById('supplier'), list = document
			.getElementById('sup_drop'), i, supplier;

	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input.value) {
			supplier = list.options[i].getAttribute('data-value');
		}
	}

	var supplier = supplier;

	var input1 = document.getElementById('fk_cat_id'), list = document
			.getElementById('cat_drop'), i, fk_cat_id;
	for (i = 0; i < list.options.length; ++i) {
		if (list.options[i].value === input1.value) {
			fk_cat_id = list.options[i].getAttribute('data-value');
		}
	}

	var catName = document.getElementById('fk_cat_id').value;
	productId = $('#subCat').val();

	
	$("#subCat option:selected").each(function() {
		selectedVal = $(this).text();
	});

	var splitText = selectedVal.split(",");

	var fk_subCat_id = splitText[1];
	var subcat = splitText[0];
	// alert(fk_subCat_id);

	productId = $('#shopName').val();

	$("#shopName option:selected").each(function() {
		selectedVal = $(this).text();
	});

	var splitText = selectedVal.split(",");

	var fk_shop_id = splitText[1];

	var cat  = $('#fk_cat_id').val();
//	var subcat = $('#subCat').val();
	

	
	var dcNum = $('#dcNum').val();
	var expenses = $('#extraExpence').val();
	var grossTotal = $('#grossTotal').val();
	var count = jQuery("#jqGrid").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid').getGridParam('data');// to get all rows
															// of grid
	var AllRows = JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var productID = allRowsInGrid[i].productID;
		params["productID" + i] = productID;

		var productName = allRowsInGrid[i].productName;
		params["productName" + i] = productName;

		var companyName = allRowsInGrid[i].manufacturer;
		params["companyName" + i] = companyName;

		var buyPrice = allRowsInGrid[i].buyPrice;
		if(buyPrice == undefined || buyPrice == 0 || buyPrice == null || buyPrice == '')
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
				params["buyPrice" + i] = buyPrice;				
			}
			else
			{
				alert("Please Enter Valid buyPrice");
				document.getElementById("save").disabled = false;
				return false;
			}
		}
		
		
		/*if(buyPrice !="" && buyPrice != undefined)
		{
			params["buyPrice" + i] = buyPrice;
		}
		else
		{
			alert("Enter buyPrice In Grid");
			document.getElementById("save").disabled = false;
			return false;
		}*/

		var salePrice = allRowsInGrid[i].salePrice;
		/*params["salePrice" + i] = salePrice;*/
		if(salePrice == undefined || salePrice == 0 || salePrice == null || salePrice == '')
		{	
			alert("Please Enter salePrice");
			document.getElementById("save").disabled = false;
			return false;
		}
		else if(salePrice != '')
		{
			var numbers = /^[0-9]+$/;
			if(salePrice.match(numbers))
			{
				params["salePrice" + i] = salePrice;				
			}
			else
			{
				alert("Please Enter Valid salePrice");
				document.getElementById("save").disabled = false;
				return false;
			}
		}

//		var weight = allRowsInGrid[i].weight;
		var weight = 0;
		params["weight" + i] = weight;
		
		var unit = allRowsInGrid[i].unit;
		params["unit" + i] = unit;

		var quantity = allRowsInGrid[i].quantity;
		/*if(quantity!="")
		{
			params["quantity" + i] = quantity;
		}
		else
		{
			alert("Enter Quantity In Grid");
			return false;
		}*/
		
			
		
		if(quantity == undefined || quantity == 0 || quantity == null || quantity == '')
		{	
			alert("Please Enter Quantity");
			/*var msg="Please Enter Quantity<br>For Product => "+(count+1)+" "+productName;;
			var dialog = bootbox.dialog({
				//title: "Embel Technologies Says :",
			    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'<img src="/Repacking/staticContent/images/s1.jpg" height="50" width="50"/></p>',
			    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'</p>',
			    closeButton: false
			});
			
			setTimeout(function() {
				dialog.modal('hide');
			}, 1500);*/				
			document.getElementById("save").disabled = false;
			return false;
		}
		else if(quantity != '')
		{
			var numbers = /^[0-9]+$/;
			if(quantity.match(numbers))
			{
				params["quantity" + i] = quantity;				
			}
			else
			{
				alert("Please Enter Valid Quantity");
				/*var msg="Please Enter Valid Quantity<br>For Product => "+(count+1)+" "+productName;;
				var dialog = bootbox.dialog({
					//title: "Embel Technologies Says :",
				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'<img src="/Repacking/staticContent/images/s1.jpg" height="50" width="50"/></p>',
				    message: '<p class="text-center">'+msg.fontcolor("red").fontsize(5)+'</p>',
				    closeButton: false
				});
				
				setTimeout(function() {
					dialog.modal('hide');
				}, 1500);				*/
				document.getElementById("save").disabled = false;
				return false;
			}
		}
		
		
		/*var batchNo = allRowsInGrid[i].batchNo;
		params["batchNo" + i] = batchNo;*/

		var expiryDate = allRowsInGrid[i].expiryDate;
		params["expiryDate" + i] = expiryDate;

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

		var mrp = allRowsInGrid[i].mrp;
		params["mrp" + i] = mrp;

		var dcNum = allRowsInGrid[i].dcNum; // dcNum used for Shortage
		params["dcNum" + i] = dcNum;

//		var weightAftShortMinus = allRowsInGrid[i].weightAftShortMinus;
		var weightAftShortMinus = 0;
		params["weightAftShortMinus" + i] = weightAftShortMinus;

	}

	var total = $('#total').val();
	var transExpence = $('#transExpence').val();
	var hamaliExpence = $('#hamaliExpence').val();
	/*var dueDate = $('#dueDate').val();*/
	var purchaseDate = $('#purchaseDate').val();
	/* var billtype = $('#billtype').val(); */
	/* var expensesDescription = $('#expensesDescription').val(); */
	var discount = $('#discount').val();
	var discountAmount = $('#discountAmount').val();
	var billNum = $('#billNum').val();

	params["cat"] = cat;
	params["subcat"]  = subcat;
	
	params["catName"] = catName;
	/*params["dueDate"] = dueDate;*/
	params["purchaseDate"] = purchaseDate;
	/* params["billtype"] = billtype; */
	/*params["fk_godown_id"] = fk_godown_id;*/
	params["billNum"] = billNum;
	params["fk_cat_id"] = fk_cat_id;
	params["fk_subCat_id"] = fk_subCat_id;
	params["fk_shop_id"] = fk_shop_id;
	params["supplier"] = supplier;
	// params["dcNum"] = dcNum;
	params["count"] = count;
	params["total"] = total;
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
	var count = jQuery("#jqGrid1").jqGrid('getGridParam', 'records');
	var allRowsInGrid = $('#jqGrid1').getGridParam('data');// to get all rows
															// of grid
	var AllRows = JSON.stringify(allRowsInGrid);
	for (var i = 0; i < count; i++) {

		var productID = allRowsInGrid[i].productID;
		params["productID" + i] = productID;

		var productName = allRowsInGrid[i].productName;
		params["productName" + i] = productName;

		var companyName = allRowsInGrid[i].manufacturer;
		params["companyName" + i] = companyName;

		var buyPrice = allRowsInGrid[i].buyPrice;
		params["buyPrice" + i] = buyPrice;

		var salePrice = allRowsInGrid[i].salePrice;
		params["salePrice" + i] = salePrice;

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
		if(catmap == "" || catmap== null || catmap == undefined){
			alert("No data avaliable for selected date !");
			return false;
		}
		
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
	            
	        },
	        

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
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Datewise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Datewise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Datewise '+fDate,
			                messageTop: 'Purchase Reports Datewise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Datewise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Datewise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
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
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected dates !");
			return false;
		}
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
	            
	        },
				
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
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Range Wise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Range Wise '+fDate,
			                messageTop: 'Purchase Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
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
		if(catmap =="" || catmap==null || catmap==undefined){
			alert("No data available for selected supplier");
			return false;
		}
		
		$(document).ready(function() {
			var total = $('#purchase3').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
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

				dom : 'Bfrtip',
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Suplier Wise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Supplier Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Supplier Wise '+fDate,
			                messageTop: 'Purchase Reports Supplier Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports supplier Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Supplier Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
				
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
		if(catmap=="" || catmap==null || catmap==undefined){
			alert("No data available for selected shop and dates");
			return false;
		}
		
		$(document).ready(function() {
			var total = $('#purchase4').DataTable({

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
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

				dom : 'Bfrtip',
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Shop Wise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Shop Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Shop Wise '+fDate,
			                messageTop: 'Purchase Reports Shop Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Shop Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Shop Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
				
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
	/*params["company"] = company;
	params["weight"] = weight;*/

	params["methodName"] = "getPurchaseDetailsAsPerProduct";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {

		$('#purchaseAsPerProduct').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == null || catmap =="" || catmap== undefined){
			alert("No data available for selected product !");
			return false;
		}
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

				dom : 'Bfrtip',
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Product Wise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Product Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Product Wise '+fDate,
			                messageTop: 'Purchase Reports Product Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Product Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Product Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		
				
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
	$("#subCat").append($("<option></option>").attr("value", "").text("Select Sub Category"));
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
function getSupName(){
	var params= {};
	
	var input = document.getElementById('supplier'), list1 = document
	.getElementById('sup_drop'), i, fk_sup_id;

		for (i = 0; i < list1.options.length; ++i) {
			if (list1.options[i].value === input.value) {
				fk_sup_id = list1.options[i].getAttribute('data-value');
				}
		}
	
	$("#supplierName").append($("<input/>").attr("value","").text());
	params["fk_sup_id"]= fk_sup_id;
	params["methodName"] = "getSupName";
	
	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data){
		
		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		$.each(jsonData,function(i,v)
				{
				  document.getElementById("supplierName").value = v.dealerName;
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

	$.post('/Repacking/jsp/utility/controller.jsp',params,function(data) {
						$('#gstPurchaseReportTable').dataTable().fnClearTable();

						var jsonData = $.parseJSON(data);
						var catmap = jsonData.list;
						if(catmap == "" || catmap ==null ||catmap == undefined){
							alert("No data available for selected dates");
							return false;
						}
						$(document).ready(function() {
											var total = $('#gstPurchaseReportTable')
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
															           //'print',
															           				           
															           {	extend: 'print',
															        	    orientation: 'landscape',
															        	   	title: 'Purchase Reports GST Wise '+fDate,
															        	   	footer:true,
															        	   	pageSize: 'LEGAL' },
															           
														               { 	extend: 'copyHtml5',
															                orientation: 'landscape',
															                title: 'Purchase Reports GST Wise '+fDate,
															                footer:true,
															                pageSize: 'LEGAL' },

															           { 	extend: 'excelHtml5',
															                orientation: 'landscape',
															                title: 'Purchase Reports GST Wise '+fDate,
															                messageTop: 'Purchase Reports GST Wise '+fDate,
															                footer:true,
															                pageSize: 'LEGAL' },
															                
															           { 	extend: 'csvHtml5',
															                orientation: 'landscape',
															                title: 'Purchase Reports GST Wise '+fDate,
															                footer:true,
															                pageSize: 'LEGAL' },
															           
															           
																	 //{ extend: 'copyHtml5', footer: true },
																	 //{ extend: 'excelHtml5', footer: true },
																	 //{ extend: 'csvHtml5', footer: true },
																	 { extend: 'pdfHtml5',
															                orientation: 'landscape',
															                title: 'Purchase Reports GST Wise '+fDate,
															                footer:true,
															                pageSize: 'LEGAL' } ]
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
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected supplier");
			return false;
		}
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
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Purchase Reports Purchase ReturnWise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Purchase ReturnWise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Purchase ReturnWise '+fDate,
			                messageTop: 'Purchase Reports Purchase ReturnWise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Purchase ReturnWise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Purchase Reports Purchase ReturnWise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});


		var mydata = catmap;
		$('#purchaseReturnTable').dataTable().fnAddData(mydata);

	}

	);
}


/** ************* Container Purchase ********** */

function containerPurchase() {

	var params = {};
	var startDate = $("#fisDate4").val();
	var endDate = $("#endDate4").val();

	params["fisDate"] = startDate;
	params["endDate"] = endDate;
	params["methodName"] = "getcontainerPurchase";

	$.post('/Repacking/jsp/utility/controller.jsp', params, function(data) {
		$('#containerRange').dataTable().fnClearTable();

		var jsonData = $.parseJSON(data);
		var catmap = jsonData.list;
		if(catmap == "" || catmap == null || catmap == undefined){
			alert("No data available for selected dates");
			return false;
		}
		$(document).ready(function() {
			var total = $('#containerRange').DataTable({
				dom : 'Bfrtip',
				buttons : [ 'copy', ' csv', ' excel', 'pdf', 'print' ],

				fnRowCallback : function(nRow, aData, iDisplayIndex) {
					$("th:first", nRow).html(iDisplayIndex + 1);
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
				
				destroy : true,
				searching : false,

				columns : [ {
					"data" : "billNum",
					"width" : "5%"
				}, {
					"data" : "purchaseDate",
					"width" : "5%"
				}, {
					"data" : "containerName",
					"width" : "5%"
				}, {
					"data" : "capacity",
					"width" : "5%"
				}, {
					"data" : "salePrice",
					"width" : "5%"
				},  {
					"data" : "unit",
					"width" : "5%"
				},{
					"data" : "quantity",
					"width" : "5%"
				}, {
					"data" : "totalAmount",
					"width" : "5%"
				} ],
				dom : 'Bfrtip',
				buttons : [
			           //'print',
			           				           
			           {	extend: 'print',
			        	    orientation: 'landscape',
			        	   	title: 'Container Reports Range Wise '+fDate,
			        	   	footer:true,
			        	   	pageSize: 'LEGAL' },
			           
		               { 	extend: 'copyHtml5',
			                orientation: 'landscape',
			                title: 'Container Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },

			           { 	extend: 'excelHtml5',
			                orientation: 'landscape',
			                title: 'Container Reports Range Wise '+fDate,
			                messageTop: 'Container Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			                
			           { 	extend: 'csvHtml5',
			                orientation: 'landscape',
			                title: 'Container Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' },
			           
			           
					 //{ extend: 'copyHtml5', footer: true },
					 //{ extend: 'excelHtml5', footer: true },
					 //{ extend: 'csvHtml5', footer: true },
					 { extend: 'pdfHtml5',
			                orientation: 'landscape',
			                title: 'Container Purchase Reports Range Wise '+fDate,
			                footer:true,
			                pageSize: 'LEGAL' } ]
		});
	});


		var mydata = catmap;
		$('#containerRange').dataTable().fnAddData(mydata);

	}

	);

}

///}
