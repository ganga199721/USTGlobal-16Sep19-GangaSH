package com.ustglobal.mailbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ustglobal.mailbackend.dto.Response;
import com.ustglobal.mailbackend.dto.UserBean;
import com.ustglobal.mailbackend.service.RegistrationService;

@RestController
public class RegisterController {

	@Autowired
	private RegistrationService service;
	
	
	@PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response register(@RequestBody UserBean bean) {
		Response resp = new Response();
		
		if(service.register(bean)) {
			resp.setStatusecode(201);
			resp.setMessge("Success");
			resp.setDiscription("Registration Done Successfully");
		}else {
			resp.setStatusecode(401);
			resp.setMessge("Failure");
			resp.setDiscription("Registration Failed");
		}
		return resp;
	}
	
	@PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Response login(@RequestParam("email") String email, @RequestParam("password") String password) {
		Response resp = new Response();
		UserBean beans = service.login(email, password);
		if(beans != null) {
			resp.setStatusecode(201);
			resp.setMessge("Success");
			resp.setDiscription("Login Successfully");
			
		}else {
			resp.setStatusecode(401);
			resp.setMessge("Failure");
			resp.setDiscription("Login Failed");
		}
		return resp;
	}
}
