package com.ustglobal.springmvc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.springmvc.dao.ProductDAO;
import com.ustglobal.springmvc.dto.ProductBean;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDAO dao;
	
	@Override
	public ProductBean login(int id, String password) {
		return dao.login(id, password);
	}
	
	@Override
	public int register(ProductBean bean) {
		return dao.register(bean);
	}

	@Override
	public boolean retrieve(int id) {
		return dao.retrieve(id);
	}

	@Override
	public ProductBean searchProduct(int id) {
		return dao.searchProduct(id);
	}

	
	@Override
	public boolean changePassword(int id, String password) {
		return dao.changePassword(id, password);
	
	}

}
	

