var arr = [];
$(function() {
	$.ajax({
		url: 'ctrl/user/selectUserById',
		success: function (data) {
			$("#panal").accordion('add', {  
		        title: '商品展示',  
		        content: "<div style = \"float:left;margin-left : 20px;margin-top: 20px;\">" +
		        		"<img id=\"img_1\" src = \"images/20170619160710.gif\" style = \"width:200px;height:200px;\">" +
		        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
		        		"name : <span id = \"name_1\">商品1</span></div>" +
		        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;color : red;\">" +
		        		"price : <span id  = \"price_1\">￥50</span></div>" +
		        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
		        		"<a onclick = \"addCar(1)\">加入购物车</a></div></div>"  
		    });
		}
	})
});
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
	var curindex = getCookie("product");
	curindex = JSON.parse(curindex);
	var rows = {};
	if(curindex.rows.length !=0){
		for (var i = 0; i < curindex.rows.length; i++) {
			if(curindex.rows[i].id == id){
				curindex.rows[i].option++;
				break;
			}else if(curindex.rows[curindex.rows.length-1].id != id && i+1 == curindex.rows.length){
				curindex.rows.push(product);
				break;
			}
		};
		rows = {
			total : curindex.rows.length,
			rows : curindex.rows
		}
	}else{
		arr.push(product);
		rows = {
			total : arr.length,
			rows : arr
		}
	}
	setCookie("product", JSON.stringify(rows))
	//$.messager.alert("提示", "添加成功");
}

