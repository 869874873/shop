package com.shop.dao;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.shop.model.Product;

public interface ProductMapper {
	
	/**
	 * 查询所有用户
	 * 
	 * @param params
	 * @return
	 */
	public List<Product> selectAllProduct(JSONObject params);
	
	/**
	 * 根据id查询指定用户
	 * 
	 * @param id
	 * @return
	 */
	public List<Product> selectProductById(Integer id);
	
	/**
	 * 保存用户信息
	 * 
	 * @param product
	 */
	public void insertProduct(Product product);
	
	/**
	 * 更新用户信息
	 * 
	 * @param product
	 */
	public void updateProduct(Product product);
	
	/**
	 * 删除用户信息
	 * 
	 * @param id
	 */
	public void deleteProduct(Integer id);

	/**
	 * 查询数据条数
	 * 
	 * @param params
	 * @return
	 */
	public List<Product> countProduct(JSONObject params);


}
