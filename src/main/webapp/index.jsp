<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isErrorPage="true"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
<title>购物车</title>
</head>
<body>
    <div id = "panel"></div>
    <div >
    	<div style = "margin:0 auto;width: 700px;margin-top: 100px;">
	    	<button class = "page-btn">上一页</button>
	    	<c:forEach begin="1" end="10" var="item">
	    		<button class = "page-btn">${item }</button>
	    	</c:forEach>
	    	<button class = "page-btn">下一页</button>&emsp;共<span id = "total"></span>页
    	</div>
    </div>
    <div style = "bottom: 0;position: fixed;width: 1000px;">
    	<div>
	    	<button class = "btn" onclick = "gotoPay()">结算</button>
    	</div>
    </div>
</body>
</html>