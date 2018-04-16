package com.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.shop.model.Product;
import com.shop.service.ProductService;

/**
 *
 * @author cz
 * @date 2018年3月25日 上午9:35:44
 *
 *
 */
@Controller
@RequestMapping("/ctrl/product")
public class ProductController {

	@Autowired
	private ProductService productService;

	/**
	 * 查询所有用户（含分页）
	 * 
	 * @param page
	 * @param rows
	 * @param paramName
	 * @param createTime
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/selectAllProduct")
	public JSONObject selectAllProduct(@RequestParam(required = false, defaultValue = "1") Integer page, // 第几页
			@RequestParam(required = false, defaultValue = "12") Integer rows, // 页数大小
			@RequestParam(required = false, defaultValue = "") String name){
		JSONObject params = new JSONObject();
		params.put("pageSize", rows);
		params.put("name", name);
		params.put("pageIndex", (page - 1) * rows);
		List<Product> selectAllProduct = productService.selectAllProduct(params);
		JSONObject result = new JSONObject();
		List<Product> countProduct = null;
		result.put("rows", selectAllProduct);
		if (name.equals(""))
			countProduct = productService.countProduct(null);
		else
			countProduct = productService.countProduct(params);
		result.put("total", countProduct.size());
		return result;
	}

	/**
	 * 删除一条用户信息
	 * 
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "deleteProduct")
	public JSONObject deleteProduct(@RequestParam(required = false, defaultValue = "") Integer id) {
		productService.deleteProduct(id);
		JSONObject obj = new JSONObject();
		obj.put("success", true);
		obj.put("msg", "删除成功！");
		return obj;
	}

	/**
	 * 根据id查询指定信息
	 * 
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "selectProductById")
	public JSONObject selectProductById(@RequestParam(required = false, defaultValue = "") Integer id) {
		List<Product> selectProductById = productService.selectProductById(id);
		JSONObject obj = new JSONObject();
		obj.put("success", true);
		obj.put("rows", selectProductById);
		return obj;
	}

	/**
	 * 保存or更新用户信息
	 * 
	 * @param product
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "saveOrUpdateProduct")
	public JSONObject saveOrUpdateProduct(Product product) {
		productService.saveOrUpdateProduct(product);
		JSONObject obj = new JSONObject();
		obj.put("success", true);
		obj.put("msg", "保存成功");
		return obj;
	}
}
