<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isErrorPage="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <link href="jquery-easyui-1.5.4.2/themes/default/easyui.css" rel="stylesheet" />
<link href="jquery-easyui-1.5.4.2/themes/icon.css" rel="stylesheet" /> -->
<link href="css/demo.css" rel="stylesheet" />
<script type="text/javascript" src="jquery-easyui-1.5.4.2/jquery.min.js"></script>
<!-- <script type="text/javascript" src="jquery-easyui-1.5.4.2/jquery.easyui.min.js"></script>
<script type="text/javascript" src="jquery-easyui-1.5.4.2/locale/easyui-lang-zh_CN.js"></script> -->
<!-- <script type="text/javascript" src="js/userController.js"></script>
<script type="text/javascript" src="js/managerController.js"></script>
<script type="text/javascript" src="js/loginController.js"></script> -->
<title>购物车</title>
</head>
<body>
    <div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20170619160710.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥50</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20170717135122.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥74</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20171013133846.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥63</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20180110132354.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥15</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20180110132402.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥2</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    	<div style = "float:left;margin-left : 20px;">
    		<img src = "images/20180131144647.gif" style = "width:200px;height:200px;">
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;color : red;">
    			<span>price : ￥98</span>
    		</div>
    		<div style = "text-align: center;font-size : 15px;margin-top:10px;">
    			<a href = "" >加入购物车</a>
    		</div>
    	</div>
    </div>
    <div style = "bottom: 0;background: red;height : 100px;width : 100%;position: fixed;">
    	<div>
	    	<button onclick = "gotoPay()">结算</button>
    	</div>
    </div>
</body>
</html>