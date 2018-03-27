//前往结算页面
function gotoPay() {
	location.href = "/pay.jsp"
}
// 添加到购物车
function addCar() {
	var $radio = $(this).find("input[type=radio]"),$flag = $radio.is(":checked");
	console.log($flag)
	if (!$flag) {
		$radio.prop("checked", true);
	}
	//$.messager.alert("提示", "添加成功！")
}
// 好像好了
