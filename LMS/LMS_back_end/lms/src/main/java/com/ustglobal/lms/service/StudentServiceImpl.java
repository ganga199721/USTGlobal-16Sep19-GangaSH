package com.ustglobal.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.lms.dao.AdminDAO;
import com.ustglobal.lms.dao.StudentDAO;
import com.ustglobal.lms.dto.Book;
import com.ustglobal.lms.dto.TrackBook;

@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	private StudentDAO dao;

	@Override
	public boolean requestBook(TrackBook bean) {
		// TODO Auto-generated method stub
		return dao.requestBook(bean);
	}

	@Override
	public List<Book> viewAllBook() {
	return	dao.viewAllBook();
	}

	@Override
	public Book searchBook(String name) {
		// TODO Auto-generated method stub
		return dao.searchBook(name);
	}
}
