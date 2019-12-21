package com.ustglobal.mailbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ustglobal.mailbackend.dto.Response;
import com.ustglobal.mailbackend.service.ChangePassService;

@RestController
public class ChangePasController {
	
	@Autowired
	private ChangePassService service;
	
	
	@PutMapping(path = "/changepassword", produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE )
	public Response changePassword(@RequestBody String email,String password) {
	Response responce = new Response();
	if(service.changePassword(email,password)) {
	responce.setStatusecode(201);
	responce.setMessge("Success");
	responce.setDiscription("Data modify from the DB");
	}else {
	responce.setStatusecode(401);
	responce.setMessge("Failure");
	responce.setDiscription("Data Not modefy from the DB");
	}

	return responce;
	
	}
}
