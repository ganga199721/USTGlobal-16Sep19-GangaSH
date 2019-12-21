package com.ustglobal.mailbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ustglobal.mailbackend.dao.IndexDAO;
import com.ustglobal.mailbackend.dto.MailInfo;

@Service
public class IndexServiceImpl implements IndexService{
	
	@Autowired
	private IndexDAO dao;

	@Override
	 public List<MailInfo> displayMail(){
		
		return dao.displayMail();
	}

}
