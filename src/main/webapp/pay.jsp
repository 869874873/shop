<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="jquery-easyui-1.5.4.2/themes/default/easyui.css"
	rel="stylesheet" />
<link href="jquery-easyui-1.5.4.2/themes/icon.css" rel="stylesheet" />
<!-- <link href="css/demo.css" rel="stylesheet" /> -->
<script type="text/javascript" src="jquery-easyui-1.5.4.2/jquery.min.js"></script>
<script type="text/javascript"
	src="jquery-easyui-1.5.4.2/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="jquery-easyui-1.5.4.2/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/car.js"></script>
<script type="text/javascript">
	$(function() {
		var IsCheckFlag = false;
		var price = 0;
		var curindex = getCookie("product");
		curindex = JSON.parse(curindex);
		$('#datagrid').datagrid('loadData',curindex);
		$("#datagrid").datagrid({  
	        onClickRow: function (index, row) {  //easyui封装好的时间（被单机行的索引，被单击行的值）
	        	price += parseInt(row.price.replace("￥","")) * parseInt(row.option);
	        	$("#cost").html(price)
	        },
	        onUnselect: function (index, row) {
	        	if (!IsCheckFlag) {
	        		IsCheckFlag = false;
	        		console.log(row)
	        		price -= parseInt(row.price.replace("￥","")) * parseInt(row.option);
	        		console.log(price)
	        		$("#cost").html(price)
	        	}
	       	}
	    });
	});
	function imgFormatter(value,row,index){
		return "<img style = 'width : 50px;height : 50px;' src = '"+value+"'/>";
	};
    
</script>
<title>Insert title here</title>
</head>
<body>
	<div>
		<table class="easyui-datagrid" style="width: 1000px; height: 500px;" rownumbers = "true" data-options = "collapsible:true, fitColumns : true,striped : true"
			id="datagrid" rownumbers="false">
			<thead>
				<tr >
					<th data-options="field:'name',width:180,align:'center'">商品名称</th>
					<th data-options="field:'img',width:380,align:'center',formatter:imgFormatter">图片</th>
					<th data-options="field:'price',width:180,align:'center'">价格</th>
					<th data-options="field:'option',width:180,align:'center'">操作</th>
				</tr>
			</thead>
		</table>
	</div>
	<div style="bottom: 0; position: fixed; width: 1000px;">
		<div style="font-size: 20px;">
			金额： <span id="cost"></span>
		</div>
	</div>
</body>
</html>