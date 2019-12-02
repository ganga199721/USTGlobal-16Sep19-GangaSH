package com.ustglobal.springmvc.service;

import com.ustglobal.springmvc.dto.ProductBean;

public interface ProductService {
	
	public ProductBean login(int id, String password);
	public ProductBean searchProduct(int id);
	public boolean retrieve(int id);
	public int register(ProductBean bean);
	public boolean changePassword(int id,String password);

}
