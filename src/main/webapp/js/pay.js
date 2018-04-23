//起始金额
var price = 0;
$(function () {
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	$('#datagrid').datagrid('loadData', curindex);
	$("#datagrid").datagrid({
		onSelect: function (index, row) {
			var option = $("#option_" + index).html();
			price += parseInt(row.price.replace("￥", "")) * option;
			$("#cost").html(price);
		},
		onUnselect: function (index, row) {
			var option = $("#option_" + index).html();
			price -= parseInt(row.price.replace("￥", "")) * option;
			$("#cost").html(price);
		}
	});
	//只能通过点击checkbox选中
	var s = $("#datagrid").datagrid('getPanel');
	var rows = s.find('tr.datagrid-row td[field!=ck]');
	rows.unbind('click').bind('click', function (e) {
		return false;
	});
});
//加载图片效果
function imgFormatter(value, row, index) {
	return "<img style = 'width : 50px;height : 50px;' src = '" + value + "'/>";
};
//加载按钮效果
function optionFormatter(value, row, index) {
	var price = row.price.replace("￥", "");
	var id = row.id;
	return "<button class = \"opt-btn\" onclick = \"reduceOption(" + index + "," + price + ")\">-</button><span id = \"option_" + index + "\">" + value + "</span><button class = \"opt-btn\" onclick = \"addOption(" + index + "," + price + ")\">+</button>" +
	"<button class = \"opt-btn\" style = \"width : 50px;\" onclick = \"delProduct(" + index + "," + price + "," + id + ")\">删除</button>";
};
//数量+1
function addOption(index, pri) {
	//	var s= $("#datagrid").datagrid('getPanel');
	//	var rows = s.find('tr.datagrid-row td[field = option]');
	//	rows.unbind('click').bind('click', function(e) {
	//		return true;
	//	});
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	var option = $("#option_" + index).html();
	var allRows = $("#datagrid").datagrid('getChecked');
	if (option < 99) {
		option++;
		$("#option_" + index).html(option);
		for (var i = 0; i < curindex.rows.length; i++) {
			if (i == index) {
				curindex.rows[i].option = option;
				break;
			}
		}
		setCookie("product", JSON.stringify(curindex))
		if (allRows[index] != undefined) {
			price += parseInt(pri);
			$("#cost").html(price);
		}
	} else {
		$.messager.alert("提示", "商品最大选择数量为99");
	}
}
//数量-1
function reduceOption(index, pri) {
	//	var s= $("#datagrid").datagrid('getPanel');
	//	var rows = s.find('tr.datagrid-row td[field = option]');
	//	rows.unbind('click').bind('click', function(e) {
	//		return true;
	//	});
	//把修改后的参数，写入cookie
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	var option = $("#option_" + index).html();
	var allRows = $("#datagrid").datagrid('getChecked');
	if (option > 1) {
		option--;
		$("#option_" + index).html(option);
		for (var i = 0; i < curindex.rows.length; i++) {
			if (i == index) {
				curindex.rows[i].option = option;
				break;
			}
		}
		setCookie("product", JSON.stringify(curindex))
		if (allRows[index] != undefined) {
			price -= parseInt(pri);
			$("#cost").html(price);
		}
	} else {
		$.messager.alert("提示", "商品最小选择数量为1");
	}
}
//删除操作
function delProduct(index, data, id) {
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	//判断删除的数据是否为选中数据
	var rows = $('#datagrid').datagrid('getSelections');
	for (var j = 0; j < rows.length; j++) {
		if (rows[j].id == id) {
			var option = $("#option_" + index).html();
			price -= parseInt(data) * option;
			$("#cost").html(price);
		}
	}
	for (var i = 0; i < curindex.rows.length; i++) {
		if (i == index) {
			//删除 从i下标开始，指定长度的一个数据
			curindex.rows.splice(i, 1);
			break;
		}
	}
	setCookie("product", JSON.stringify(curindex));
	//暂时先留一个坑吧。。。
	$('#datagrid').datagrid('deleteRow', index);
}
