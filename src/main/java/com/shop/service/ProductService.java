package com.shop.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.shop.model.Product;

public interface ProductService {
	
	/**
	 * 查询所有用户信息
	 * 含分页
	 * 
	 * @param params
	 * @return
	 */
	public List<Product> selectAllProduct(JSONObject params);
	
	/**
	 * 查询指定id用户信息
	 * 
	 * @param id
	 * @return
	 */
	public List<Product> selectProductById(Integer id);
	
	/**
	 * 保存或更新用户信息
	 * 
	 * @param product
	 */
	public void saveOrUpdateProduct(Product product);
	
	/**
	 * 删除用户信息
	 * 
	 * @param id
	 */
	public void deleteProduct(Integer id);

	/**
	 * 查询数据总条数
	 * 
	 * @param params
	 * @return
	 */
	public List<Product> countProduct(JSONObject params);



}
