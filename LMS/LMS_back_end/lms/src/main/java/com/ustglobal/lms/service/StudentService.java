package com.ustglobal.lms.service;

import java.util.List;

import com.ustglobal.lms.dto.Book;
import com.ustglobal.lms.dto.TrackBook;

public interface StudentService {
	public List<Book> viewAllBook();
	public boolean requestBook(TrackBook bean);
	public Book searchBook(String name);
}
