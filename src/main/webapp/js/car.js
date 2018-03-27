//前往结算页面
function gotoPay(){
	location.href = "/pay.jsp"
}
//添加到购物车
function addCar(data){
	console.log(data)
	$.messager.alert("提示","添加成功！")
}
//好像好了
