package com.shop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.shop.dao.ProductMapper;
import com.shop.model.Product;
import com.shop.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductMapper productMapper;


	@Override
	public List<Product> selectProductById(Integer id) {
		List<Product> selectProductById = productMapper.selectProductById(id);
		return selectProductById;
	}

	@Override
	public void saveOrUpdateProduct(Product product) {
		if(product.getId()==null){
			productMapper.insertProduct(product);
		}else{
			productMapper.updateProduct(product);
		}
	}


	@Override
	public void deleteProduct(Integer id) {
		productMapper.deleteProduct(id);
	}

	@Override
	public List<Product> selectAllProduct(JSONObject params) {
		List<Product> selectAllProduct = productMapper.selectAllProduct(params);
		return selectAllProduct;
	}

	@Override
	public List<Product> countProduct(JSONObject params) {
		List<Product> countProduct = productMapper.countProduct(params);
		return countProduct;
	}



}
