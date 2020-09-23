/*$(function() {
	$(".example-1").height($(document).height() - 110);
	$(window).resize(function() {
		$(".example-1").height($(document).height() - 110);
	});
	var lid = "";
	var role = "";
	var userId = "";
	$.getJSON("authenticate", {}, function(result) {
		lid = result.account.lobId;
		role = result.account.role;
		userId = result.account.id;
		$.getJSON("manageprocess", {}, function(result) {
			$.each(result, function(index, item) {
				if (role == "Administrator") {
				if(item.parentId == 0 && item.required == 0){
					$.get("templates/process_accordian.html", function(tmp_data) {
						$.tmpl(tmp_data, item).appendTo("#accordion");
					});
					var ProcessId = item.id;
					$.getJSON("subprocess", {ProcessId: ProcessId}, function(result) {
						$.each(result, function(index, item) {
								$.get("templates/subprocess_accordian.html", function(t_data) {
									$.tmpl(t_data, item).appendTo("#accordion_"+item.parentId);
								});
								var subprocesId = item.id;	
								$.getJSON("activity", {subprocesId : subprocesId}, function(result) {
									console.log(result)
									$.each(result, function(index, item) {
										$.get("templates/activity_tableAccordian.html", function(tm_data) {
											$.tmpl(tm_data, item).appendTo("#tbody__"+item.processId);
										});
									});
								});
						});	
					});	
				  }
				}
				else{
					if(item.lobId == lid && item.parentId == 0 && item.required == 0){
						$.get("templates/process_accordian.html", function(tmp_data) {
							$.tmpl(tmp_data, item).appendTo("#accordion");
						});
						var ProcessId = item.id;
						$.getJSON("subprocess", {ProcessId: ProcessId}, function(result) {
							$.each(result, function(index, item) {
									$.get("templates/subprocess_accordian.html", function(t_data) {
										$.tmpl(t_data, item).appendTo("#accordion_"+item.parentId);
									});
									var subprocesId = item.id;	
									$.getJSON("activity", {subprocesId : subprocesId}, function(result) {
										//console.log(result)
										$.each(result, function(index, item) {
											$.get("templates/activity_tableAccordian.html", function(tm_data) {
												$.tmpl(tm_data, item).appendTo("#tbody__"+item.processId);
											});
										});
									});
							});	
						});	
					  }
				  }
			});	
		});
	});
	
	$.getJSON("authenticate", {}, function(result) {
		
	var	rolename = result.account.role;
		if (rolename == "Administrator") {
			$.getJSON("function", {}, function(data) {
				$("#FunctionId").empty();
				$("#FunctionId").append(
						"<option value=''>Select Function</option>")
	
				$.each(data, function(index, item) {
	
					$("#FunctionId").append(
							"<option value='" + item.id + "'>" + item.name
									+ "</option>")
	
				});
			});
		} 	
	});
	
	// Administrator LOB Against FUNCTION
	$("#FunctionId").change(
			function() {
				$( "#tableArea1" ).empty();
				var fid = $(this).val();
				$.getJSON("lobs", {}, function(data) {

					$("#LobId").empty();
					$("#LobId").append("<option value=''>Select Lob</option>")
					$.each(data, function(index, item) {
						if (item.functionId == fid) {
							$("#LobId").append(
									"<option value='" + item.id + "'>"
											+ item.name + "</option>")
						}
					});
				});
	      })
	      
	  $("#FunctionId").change(
			function() {
				$( "#accordion" ).empty();
				var fid = $(this).val();
				$.getJSON("manageprocess", {}, function(result) {
				//	console.log(result)
					$.each(result, function(index, item) {
						if(item.functionId == fid && item.parentId == 0 && item.required == 0){
							$.get("templates/process_accordian.html", function(tmp_data) {
								$.tmpl(tmp_data, item).appendTo("#accordion");
							});
							var ProcessId = item.id;
							$.getJSON("subprocess", {ProcessId: ProcessId}, function(result) {
								$.each(result, function(index, item) {
										$.get("templates/subprocess_accordian.html", function(t_data) {
											$.tmpl(t_data, item).appendTo("#accordion_"+item.parentId);
										});
										var subprocesId = item.id;	
										$.getJSON("activity", {subprocesId : subprocesId}, function(result) {
											//console.log(result)
											$.each(result, function(index, item) {
												$.get("templates/activity_tableAccordian.html", function(tm_data) {
													$.tmpl(tm_data, item).appendTo("#tbody__"+item.processId);
												});
											});
										});
								});	
							});	
						  }						  
					});	
				});
	      })    
	      
	 $("#LobId").change(
				function() {
					$( "#accordion" ).empty();
					var fid = $(this).val();
					var lid = $(this).val();
					
					$.getJSON("manageprocess", {}, function(result) {
						$.each(result, function(index, item) {
							if(item.lobId == lid && item.parentId == 0 && item.required == 0){
								$.get("templates/process_accordian.html", function(tmp_data) {
									$.tmpl(tmp_data, item).appendTo("#accordion");
								});
								var ProcessId = item.id;
								$.getJSON("subprocess", {ProcessId: ProcessId}, function(result) {
									$.each(result, function(index, item) {
											$.get("templates/subprocess_accordian.html", function(t_data) {
												$.tmpl(t_data, item).appendTo("#accordion_"+item.parentId);
											});
											var subprocesId = item.id;	
											$.getJSON("activity", {subprocesId : subprocesId}, function(result) {
												//console.log(result)
												$.each(result, function(index, item) {
													$.get("templates/activity_tableAccordian.html", function(tm_data) {
														$.tmpl(tm_data, item).appendTo("#tbody__"+item.processId);
													});
												});
											});
									});	
								});	
							  }						  
						});	
					});
	})     
	
	var chkArray = [];
	var selected;
	var orderId;
	
	$('#accordion').on('click', '.subparent', function(e){
		var subprocesId = $(this).data("id");
		var order;
		orderId = $(this).data("orderid");
		$.getJSON("executeHistoryUpdate", {subprocesId : subprocesId, name : "checkData",}, function(result) {
			//alert(result)
			$.each(result, function(index, temp) {
				order = temp.order;
				orderId = temp.id;
			});
			
			if(result == ""){
				var jsonForm = {subprocesId : subprocesId};
				//console.log(jsonForm);
				$.ajax({
					data : jsonForm,
					method : "POST",
					url : "executeHistoryUpdate?type=6&subprocesId="+subprocesId,
					success : $.getJSON("executeHistoryUpdate", {subprocesId : subprocesId, name : "checkData",}, function(result) {
						//console.log(result)
						$.each(result, function(index, data) {
							order = data.order;
							orderId = data.id;
						});
					})
				});
			}
			
			var resOrder = order.split(",");
			var chkArr = resOrder;
			
			
			chkArray = chkArr;
			$("tr.item_"+subprocesId).each(function() {
		        var id = $(this).find("input.chk").val();
		        jQuery.each(chkArr,function(i,item){
					if(chkArr[i] == id) {
						$("#"+id).prop( 'checked', true );
					}
				});
			});
		});
    });
	
	$('#accordion').on('change', 'input[type=checkbox]', function (e) {
		var arr = chkArray;
		var checkedId = $(this).attr('id');
		var processId = $(this).attr('data-pid');
		if($(this).prop('checked')){
			chkArray.push(checkedId);
			arr=chkArray;
			selected = chkArray.join(',');
		}
		else
		{
			jQuery.each(chkArray,function(i,item){
				if(arr[i] == checkedId) {
					arr.splice(i, 1);
				}
			});
			chkArray = arr;
			selected = chkArray.join(',');
		}
		if (chkArray.length > 0) {
			alert("You have selected " + chkArray);
			//alert("Process ID" + processId);
		} else {
			alert("Please at least one of the checkbox");
		}
		var jsonForm = {chkArray : chkArray, processId : processId, name : "updateOrder"};
		//console.log(jsonForm);
		$.ajax({
			data : jsonForm,
			method : "POST",
			url : "executeHistoryUpdate?type=4&chkArray="+chkArray+"&processId="+processId+"&orderId="+orderId,
			success : function(result) {
				$("#func_tbody").empty();
				$.each(result, function(index, item) {
					$.get("templates/func_item.html", function(tmp_data) {
						$.tmpl(tmp_data, item).appendTo("#func_tbody");
					});
				});
				$("#functionModal").modal("hide");
			}
		});
	});  
	
	// to move up and down the row
	$('#accordion').on('click', '.up,.down', function(){
	      var row = $(this).parents('tr:first');
	      if ($(this).is('.up')) {
	            row.insertBefore(row.prev());
	      }
	      else {
	            row.insertAfter(row.next());
	      }
	});
	
	// New Code
	$('#accordion').on('click', '.saveActivityInputs', function(){
	     // alert("hiiii");
		var id = $(this).data("id");
		var y = document.getElementById("item_"+id);
		var newArray = new Array();
		
		$("tr.item_"+id).each(function() {
			var $tds = $(this).find('td');
			var Act = $tds.eq(0).find('input').is(':checked');
			var ActvityId = $tds.eq(2).text();
			var ActvityName = $tds.eq(3).text();
			var ProcessId = $tds.eq(4).text();
			
		//	alert(ActvityId)
		//	delay(5000);
			if($tds.eq(0).find('input').is(':checked')){
				Act = "1";
			}
			else{
				Act = "0";
			}
			var jsonForm = {type : "5", Act : Act, ActvityId : ActvityId, ActvityName : ActvityName, ProcessId : ProcessId};
			
        	 newArray.push(jsonForm)

	    });
		//console.log(newArray);
		var tempArray = new Array();
		$.ajax({
			data : {
				loadProds: 1,
				test:JSON.stringify(newArray)
				},
			method : "POST",
			url : "activity",
		});
	});

	
	
	//$('#accordion').sortable();
	
	// $('#addProp').attr('disabled',true);
	 
	 $("#propertiesForm .user").change(function() {
		var userId = $(this).val();
		if(userId == null || userId == "" || userId == undefined){
			$('#addProp').attr('disabled',true);
		}else{
			$('#addProp').attr('disabled',false);
			var id = $("#processid").val();
			console.log(id);
			$("#propertiesModal").modal("show");
			$("#propertiesModal .processid").val(id);
			
			//alert(userId)
			$.getJSON("processproperties", {ProcessId: id, userId: userId, role : role}, function(result) {
				console.log(result);
				$("#properties_tbody").empty();
				$.each(result, function(index, item) {
					$.get("templates/properties_item.html", function(tmp_data) {
						$.tmpl(tmp_data, item).appendTo("#properties_tbody");
					});
				});
			});
		}
					
	});
	
	$("#accordion").on('click', '.properties', function() {
		var id = $(this).attr("id");
		console.log(id);
		$("#propertiesModal").modal("show");
		$("#propertiesModal .processid").val(id);
		
		//alert(userId)
		$.getJSON("processproperties", {ProcessId: id, userId: userId, role : role}, function(result) {
			console.log(result);
			$("#properties_tbody").empty();
			$.each(result, function(index, item) {
				$.get("templates/properties_item.html", function(tmp_data) {
					$.tmpl(tmp_data, item).appendTo("#properties_tbody");
				});
			});
		});
		
		$.getJSON("users", {}, function(result) {
			//console.log(result)
			//alert(role+"  role  "+ lid +"  lOb ")
			$("#propertiesForm .user").empty();
			$("#propertiesForm .user").append(
					"<option value=''>Select User</option>");
			$.each(result, function(index, item) {
				if (role == "Administrator") {
					$("#propertiesForm .user").append(
							"<option value=" + item.id + ">"
									+ item.username + "</option>");
				}if (role == "LOBAdmin") {
					if (item.lobId == lid) {
						$("#propertiesForm .user").append(
								"<option value=" + item.id + ">"
										+ item.username + "</option>");
					}
				}
			});
			$("#propertiesForm .user").val(userId);
		});
	});
	
	$("#propertiesModal").on('click', '.addProp', function() {
		var id = $("#propertiesModal .processid").val();
		console.log(id);
		$("#propertiesAdd").modal("show");
		$("#propertiesAdd .processid1").val(id);
		$("#propertiesAdd .type").val(1);
		$("#propertiesAdd .createdUserName").val("");
		$("#propertiesAdd .DateCreated").val("");
		$("#propertiesAdd .caption").val("");
		$("#propertiesAdd .value").val("");
		var User = $("#propertiesForm .user").val();
		$("#propertiesAdd .userid").val(User);
		
	});
	
	$("#propertiesAdd").on('change', '.inputType', function() {
		$("#propertiesAdd .value").remove();
		var type = $(this).val();
		if(type == "")
			$("#propertiesAdd .value").remove();	
		else	
		$("#propertiesAdd #demo").append("<input type='"+type+"' name='captionValue' class='form-control input-sm value'/>");
		
	});
	
	$("#SaveProperties").click(function() {
		
		var jsonForm = $("#propertiesAddForm").serializeObject();
		
		var tmpData = "";
		$.get("templates/properties_item.html",
				function(tmp_data) {
					tmpData = tmp_data;
				});
		
		if ($("#propertiesAddForm")[0].checkValidity()) {
			$.ajax({
				data : jsonForm,
				method : "POST",
				url : "processproperties",
				success : function(result) {
					$("#properties_tbody").empty();
					$.each(result, function(index, item) {
						$.tmpl(tmpData, item).appendTo("#properties_tbody");
					});
					$("#propertiesAdd").modal("hide");
				}
			});
			return false;
		}
	});
	
	$("#properties_tbody").on('click', '.edit', function() {
		var id = $(this).data("id");
		var name = $(this).data("name");
		var value1 = $(this).data("value");
		var processId = $(this).data("pid");
		var DateCreated = $(this).data("date");
		var createdUserName = $(this).data("by");
		var type = $(this).data("type");
	
		var User = $("#User").val();
		
		$("#propertiesModal .type").val(2);
		$("#propertiesModal .id").val(id);
		$("#propertiesModal .processid1").val(processId);
		$("#propertiesModal .DateCreated").val(DateCreated);
		$("#propertiesModal .createdUserName").val(createdUserName);
		$("#propertiesModal .userid").val(User);
		
		var par = $(this).parent().parent(); 
	    var tdName = par.children("td:nth-child(1)"); 
		var tdValue = par.children("td:nth-child(2)");
		
		if (role == "Administrator" || role == "LOBAdmin") {
			tdName.html("<input type='text' name='caption' class='form-control input-sm caption' value='"+tdName.html()+"'/>"); 
			tdValue.html("<input type='"+type+"' id='captionValue' name='captionValue' class='form-control input-sm value'/>");
			$("#propertiesForm #captionValue").val(value1);
	 
		}else{
			tdName.html("<input type='text' name='caption' class='form-control input-sm caption' readonly value='"+tdName.html()+"'/>");
			tdValue.html("<input type='"+type+"' id='captionValue' name='captionValue' class='form-control input-sm value' />");
			$("#propertiesForm #captionValue").val(value1);
		}
		
 
		$(".edit").hide();
		$(".delete").hide();
		$("#properties_tbody #"+id).show();
		$("#properties_tbody #cancel_"+id).show();
	});
	
	$("#properties_tbody").on('click', '.cancel', function() {
		var id = $(this).data("pid");
		var user = $("#User").val();
		if(user == undefined){
		user = userId;
		}
		console.log(id);
		$("#propertiesModal").modal("show");
		$("#propertiesModal .processid").val(id);
		
		$.getJSON("processproperties", {ProcessId: id, userId: user, role : role}, function(result) {
			console.log(result);
			$("#properties_tbody").empty();
			$.each(result, function(index, item) {
				$.get("templates/properties_item.html", function(tmp_data) {
					$.tmpl(tmp_data, item).appendTo("#properties_tbody");
				});
			});
		});
	});
	
	$("#properties_tbody").on('click', '.delete', function() {
		if (confirm("Are you sure, want to delete?")) {
			var key = $(this).data("id");
			var ProcessId = $(this).data("pid");
			var user = $("#User").val();
			if(user == undefined){
			   user = userId;
			}
			var jsonForm = {
				type : 3,
				id : key
			};
			$.ajax({
				date : jsonForm,
				method : "POST",
				url : "processproperties?type=3&id="+key+"&ProcessId="+ProcessId+"&userId="+user+"&role="+role,
				success : function(result) {
					$("#properties_tbody").empty();
					$.each(result, function(index, item) {
						$.get("templates/properties_item.html", function(tmp_data) {
							$.tmpl(tmp_data, item).appendTo("#properties_tbody");
						});
					});
					//$("#propertiesAdd").modal("hide");
				}
			});
		}
	});
	
	$("#properties_tbody").on('click', '.save', function() {
		var jsonForm = $("#propertiesForm").serializeObject();
	//	console.log(jsonForm)
		var capvalue = $("#propertiesForm #captionValue").val();
		var capname = jsonForm.caption;
		var userId = jsonForm.User;
		var DateCreated = jsonForm.DateCreated;
		var caption = jsonForm.caption;
		var captionValue = $("#propertiesForm #captionValue").val();
		var createdUserName = jsonForm.createdUserName;
		var id = jsonForm.id;
		var processid = jsonForm.processid;
		var processid1 = jsonForm.processid1;
		var type = jsonForm.type;
		
		if(capname == ""){
			alert("Enter Name");
			return false;
		}
		else{
			if(capvalue == ""){
				alert("Enter Value");
				return false;
			}
			else{
				var tmpData = "";
				$.get("templates/properties_item.html",
						function(tmp_data) {
							tmpData = tmp_data;
						});
				
				if ($("#propertiesForm")[0].checkValidity()) {
					var jsonForm = {
							DateCreated : DateCreated,
							caption : caption,
							captionValue : captionValue,
							createdUserName : createdUserName,
							id : id,
							processid : processid,
							processid1 : processid1,
							type : type,
							userId : userId
						};
					$.ajax({
						data : jsonForm,
						method : "POST",
						url : "processproperties",
						success : function(result) {
							$("#properties_tbody").empty();
							$.each(result, function(index, item) {
								$.tmpl(tmpData, item).appendTo("#properties_tbody");
							});
						}
					});
					return false;
				}
			}
		}
		
	});
	
});*/