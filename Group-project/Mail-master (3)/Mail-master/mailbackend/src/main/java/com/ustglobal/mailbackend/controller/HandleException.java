package com.ustglobal.mailbackend.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ustglobal.mailbackend.dto.Response;


//@ControllerAdvice// it use to handle the exception in sprngmvc @ResponseBody+ControllerAdvice= @RestControllerAdvice
@RestControllerAdvice
public class HandleException {
	
	@ExceptionHandler(Exception.class)
	
	public  Response getException(Exception e){
		e.printStackTrace();
		Response response = new Response();
		response.setStatusecode(501);
		response.setMessge("Error in code");
		response.setDiscription("Get Exception");
		return response;
		
	}
}
