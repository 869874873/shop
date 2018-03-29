var price = 0;
var arr = [];
// 前往结算页面
function gotoPay() {
	location.href = "pay.jsp";
}
// 设置为cookie
function setCookie(name, value) {
	document.cookie = name + "=" + escape(value);
}
// 读取cookie
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}

}
// 添加到购物车
function addCar(id) {
	// 图片路径
	var img = $("#img_" + id)[0].src;
	// 商品名称
	var name = $("#name_" + id).html();
	// 商品价格
	var price = $("#price_" + id).html();
	// json对象
	var product = {
		id : id,
		name : name,
		img : img,
		price : price,
		option : 1
	};
	if(arr.length !=0){
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].id == id){
				arr[i].option++;
				break;
			}else if(arr[arr.length-1].id != id && i+1 == arr.length){
				arr.push(product);
				break;
			}
		}
	}else{
		arr.push(product);
	}
	var rows = {
		total : arr.length,
		rows : arr
	}
	setCookie("product", JSON.stringify(rows))
	//$.messager.alert("提示", "添加成功");
}
$(function() {
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	$('#datagrid').datagrid('loadData', curindex);
	$("#datagrid").datagrid({
		onSelect : function(index,row){
			var option = $("#option_"+index).html();
			price += parseInt(row.price.replace("￥","")) * option;
        	$("#cost").html(price);
		},
		onUnselect : function(index,row){
			var option = $("#option_"+index).html();
			price -= parseInt(row.price.replace("￥","")) * option;
        	$("#cost").html(price);
		}
	});
	var s= $("#datagrid").datagrid('getPanel');
	var rows = s.find('tr.datagrid-row td[field!=ck]');
	rows.unbind('click').bind('click', function(e) {
		return false;
	});
});
function imgFormatter(value,row,index){
	return "<img style = 'width : 50px;height : 50px;' src = '"+value+"'/>";
};
function optionFormatter(value,row,index){
	var price = row.price.replace("￥","");
	return "<button class = \"opt-btn\" onclick = \"reduceOption("+index+","+price+")\">-</button><span id = \"option_"+index+"\">"+value+"</span><button class = \"opt-btn\" onclick = \"addOption("+index+","+price+")\">+</button>";
};
function addOption(index,pri){
	var option = $("#option_" + index).html();
	var allRows = $("#datagrid").datagrid('getChecked');
	if (option < 99) {
		option++;
		$("#option_" + index).html(option);
		if (allRows[index] != undefined) {
			price += parseInt(pri);
			$("#cost").html(price);
		}
	} else {
		$.messager.alert("提示", "商品最大选择数量为99");
	}
}
function reduceOption(index,pri){
	var option = $("#option_" + index).html();
	var allRows = $("#datagrid").datagrid('getChecked');
	if (option > 1) {
		option--;
		$("#option_" + index).html(option);
		if (allRows[index] != undefined) {
			price -= parseInt(pri);
			$("#cost").html(price);
		}
	} else {
		$.messager.alert("提示", "商品最大选择数量为99");
	}
}
