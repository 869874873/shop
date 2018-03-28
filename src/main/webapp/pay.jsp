<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
	$(function(){
		var curindex = getCookie("product");
		curindex = JSON.parse(curindex);
		for(var i = 0;i<curindex.length;i++){
			console.log(curindex[i].id)
		}
	})
</script>
<title>Insert title here</title>
</head>
<body>
<div></div>
	
 	<div style = "bottom: 0;position: fixed;width: 1000px;">
    	<div style = "font-size:20px;">金额：
	    	<span id = "cost">****</span>
    	</div>
    </div>
</body>
</html>