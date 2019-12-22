package com.ustglobal.lms.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.lms.dto.AdminResponse;
import com.ustglobal.lms.dto.Book;
import com.ustglobal.lms.dto.Student;
import com.ustglobal.lms.dto.TrackBook;
import com.ustglobal.lms.dto.Users;
import com.ustglobal.lms.service.StudentService;

@RestController
@CrossOrigin(origins = "*" , allowedHeaders = "*",allowCredentials = "true")
public class StudentController {
	@Autowired
	private StudentService service;
	
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		CustomDateEditor editor = new CustomDateEditor(format, true);
		binder.registerCustomEditor(Date.class, editor);
	}
	/********************view book available ****************/

	@GetMapping(path="/view-all-books", produces = MediaType.APPLICATION_JSON_VALUE)
	public AdminResponse viewAllBooks() {//sending entire responce not logical view
		AdminResponse response = new AdminResponse();
		List<Book> beans = service.viewAllBook();
		if(!beans.isEmpty()) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("ALL Books Found");
			response.setBook(beans);
		}
		else {
			response.setStatusCode(401);//if successfully added then success status code
			response.setMessage("Failure");
			response.setDescription("Data Not found");

		}
		return response;
	}

	/******************* Request Book ***************/

	@GetMapping(path="/requestbook/{status}/{sid}/{bid}" ,
			produces = MediaType.APPLICATION_JSON_VALUE)

	public AdminResponse requestBook(
			@PathVariable("status") int status, 
			@PathVariable("sid")int sid,
			@PathVariable("bid")int bid) {
		AdminResponse response = new AdminResponse();

		TrackBook bean = new TrackBook();
		
		
		Users user = new Users();
		user.setUser_id(sid);
		user.setUser_id(sid);
		bean.setStatus(status);
		bean.setReturn_date(LocalDate.of(LocalDate.now().getYear(), LocalDate.now().getMonth(),LocalDate.now().getDayOfMonth()+7));
		bean.setIssue_date(LocalDate.now());
		bean.setBid(bid);
		bean.setStudent_id(sid);

		if(service.requestBook(bean)) {
			response.setStatusCode(201);//ifsuccessfully added then success status code
			response.setMessage("success");
			response.setDescription("Request success");
		}
		else {
			response.setStatusCode(401);//if successfully added then success status code
			response.setMessage("Failure");
			response.setDescription("Data Not added to db");
		}
		return response;
	}


	@GetMapping(path="/search-book/{bname}", produces = MediaType.APPLICATION_JSON_VALUE)
	public AdminResponse searchBook(@PathVariable("bname")String bname) {//sending entire responce not logical view
		AdminResponse response = new AdminResponse();
		Book beans = service.searchBook(bname);
		if(beans!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Book Found");
			response.setBook(Arrays.asList(beans));
		}
		else {
			response.setStatusCode(401);//if successfully added then success status code
			response.setMessage("Failure");
			response.setDescription("No books Found");

		}
		return response;
	}

}



