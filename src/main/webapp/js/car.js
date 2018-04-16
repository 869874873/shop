var arr = [];
var a = 1;
$(function() {
	var str = "";
	$.ajax({
		url: 'ctrl/product/selectAllProduct',
		success: function (data) {
			for (var i = 0; i < data.rows.length; i++) {
				var product = data.rows[i];
				str += "<div style = \"float:left;margin-left : 20px;margin-top: 20px;\">" +
        		"<img id=\"img_"+product.id+"\" src = \""+product.img+"\" style = \"width:200px;height:200px;\">" +
        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
        		"name : <span id = \"name_"+product.id+"\">"+product.name+"</span></div>" +
        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;color : red;\">" +
        		"price : <span id  = \"price_"+product.id+"\">￥"+product.price+"</span></div>" +
        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
        		"<a onclick = \"addCar("+product.id+")\">加入购物车</a></div></div>";
			}
			$("#panel").html(str);
			if(data.total%data.rows.length == 0){
				$("#total").html(data.total/data.rows.length)
				$("#end").html(data.total/data.rows.length)
			} else{
				$("#total").html(parseInt(data.total/data.rows.length)+1)
				$("#end").html(parseInt(data.total/data.rows.length)+1)
			}
			$("#btn_1").attr("style","background:red;color:white;");
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
	if(curindex != null && curindex.rows.length != 0){
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

function nextPage(){
	if(a < 3){
		var str = "";
		$.ajax({
			url: 'ctrl/product/selectAllProduct',
			data : {
				page :++a
			},
			success: function (data) {
				for (var i = 0; i < data.rows.length; i++) {
					var product = data.rows[i];
					str += "<div style = \"float:left;margin-left : 20px;margin-top: 20px;\">" +
	        		"<img id=\"img_"+product.id+"\" src = \""+product.img+"\" style = \"width:200px;height:200px;\">" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
	        		"name : <span id = \"name_"+product.id+"\">"+product.name+"</span></div>" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;color : red;\">" +
	        		"price : <span id  = \"price_"+product.id+"\">￥"+product.price+"</span></div>" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
	        		"<a onclick = \"addCar("+product.id+")\">加入购物车</a></div></div>";
				}
				$("#panel").html(str);
				$("#btn_"+(a-1)).attr("style","");
				$("#btn_"+a).attr("style","background:red;color:white;");
			}
		})
	}else{
		
	}
}
function lastPage(){
	if(a > 1){
		var str = "";
		$.ajax({
			url: 'ctrl/product/selectAllProduct',
			data : {
				page:--a
			},
			success: function (data) {
				for (var i = 0; i < data.rows.length; i++) {
					var product = data.rows[i];
					str += "<div style = \"float:left;margin-left : 20px;margin-top: 20px;\">" +
	        		"<img id=\"img_"+product.id+"\" src = \""+product.img+"\" style = \"width:200px;height:200px;\">" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
	        		"name : <span id = \"name_"+product.id+"\">"+product.name+"</span></div>" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;color : red;\">" +
	        		"price : <span id  = \"price_"+product.id+"\">￥"+product.price+"</span></div>" +
	        		"<div style = \"text-align: center;font-size : 15px;margin-top:10px;\">" +
	        		"<a onclick = \"addCar("+product.id+")\">加入购物车</a></div></div>";
				}
				$("#panel").html(str);
				$("#btn_"+(a+1)).attr("style","");
				$("#btn_"+a).attr("style","background:red;color:white;");
			}
		})
	}else{
		
	}
}


