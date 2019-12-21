package com.ustglobal.mailbackend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ustglobal.mailbackend.dto.MailInfo;
import com.ustglobal.mailbackend.dto.Response;
import com.ustglobal.mailbackend.service.IndexService;

@RestController
public class IndexController {
	@Autowired
	private IndexService service;
	
	
	@GetMapping(path="/displayindedx",
			produces = MediaType.APPLICATION_JSON_VALUE )
	public Response displayall(){
		Response respon = new Response();
		List<MailInfo> info = service.displayMail();
	    if(info!=null){
		respon.setStatusecode(201);
		respon.setMessge("sucess");
		respon.setDiscription("mail are present");
		respon.setMailb(info);
	  }else{
		  respon.setStatusecode(401);
			respon.setMessge("failed");
			respon.setDiscription("mail are not present");
	  }
		return respon;
	
		
		
	}

}