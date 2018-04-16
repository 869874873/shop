<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isErrorPage="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="jquery-easyui-1.5.4.2/themes/default/easyui.css" rel="stylesheet" />
<link href="jquery-easyui-1.5.4.2/themes/icon.css" rel="stylesheet" />
<link href="css/demo.css" rel="stylesheet" />
<script type="text/javascript" src="jquery-easyui-1.5.4.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery-easyui-1.5.4.2/jquery.easyui.min.js"></script>
<script type="text/javascript" src="jquery-easyui-1.5.4.2/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/car.js"></script>
<!-- <script type="text/javascript" src="js/userController.js"></script>
<script type="text/javascript" src="js/managerController.js"></script>
<script type="text/javascript" src="js/loginController.js"></script> -->
<title>购物车</title>
</head>
<body>
    <div id = "panel">
    	
    	<div style = "float:left;margin-left : 20px;margin-top: 20px;">
    		<img id="img_2" src = "images/20170717135122.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			name : <span id  = "name_2">商品2</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			price : <span id  = "price_2">￥74</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a  onclick = "addCar(2)">加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;margin-top: 20px;">
    		<img id="img_3" src = "images/20171013133846.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			name : <span id  = "name_3">商品3</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			price : <span id  = "price_3">￥63</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a  onclick = "addCar(3)">加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;margin-top: 20px;">
    		<img id="img_4" src = "images/20180110132354.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			name : <span id  = "name_4">商品4</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			price :<span id  = "price_4">￥15</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a  onclick = "addCar(4)">加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;margin-top: 20px;">
    		<img id="img_5" src = "images/20180110132402.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			name : <span id  = "name_5"> 商品5</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			price :<span id  = "price_5">￥2</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a  onclick = "addCar(5)">加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;margin-top: 20px;">
    		<img id="img_6" src = "images/20180131144647.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			name : <span id  = "name_6">商品6</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			price :<span id  = "price_6">￥98</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a  onclick = "addCar(6)">加入购物车</a>
    		</div>
    	</div>
    </div>
    <div style = "bottom: 0;position: fixed;width: 1000px;">
    	<div>
	    	<button class = "btn" onclick = "gotoPay()">结算</button>
    	</div>
    </div>
</body>
</html>