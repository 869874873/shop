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
	var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)){
		return unescape(arr[2]);
	}else{
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
		price : price
	}
	arr.push(product);
	setCookie("product", JSON.stringify(arr))
	$.messager.alert("提示", "添加成功");
}
// 好像好了
