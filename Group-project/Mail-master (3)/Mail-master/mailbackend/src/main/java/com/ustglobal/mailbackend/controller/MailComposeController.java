package com.ustglobal.mailbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.mailbackend.dto.MailInfo;
import com.ustglobal.mailbackend.dto.Response;
import com.ustglobal.mailbackend.service.MailService;

@CrossOrigin(origins = "*",allowedHeaders = "*",allowCredentials = "true")
@RestController
public class MailComposeController {
	@Autowired
	private MailService service;
	@PostMapping(path = "/deleteMail",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public boolean deletemail(@PathVariable("from_id")int from_id) {
		if(service.deletemail(from_id))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	@PostMapping(path="/composeMail",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Response compose(@RequestBody MailInfo mailbean) {
		Response respon = new Response();
		if (service.compose(mailbean)) {
			respon.setStatusecode(201);
			respon.setMessge("sucess");
			respon.setDiscription("mail composed");
			
		} else {
			respon.setStatusecode(401);
			respon.setMessge("fail");
			respon.setDiscription("mail composed");
			
		}
		return respon;
	}

	@GetMapping(path = "/sentMail/{from_id}/{to_id}/{subject}",
			
			produces = MediaType.APPLICATION_JSON_VALUE)
	public  Response sent(@PathVariable("from_id")int from_id,@PathVariable("to_id")int to_id,@PathVariable("subject")String subject){
		Response respon = new Response();
		List<MailInfo> sentinfo = service.sent(from_id, to_id, subject);
		if(sentinfo!=null) {
			respon.setStatusecode(201);
			respon.setMessge("sucess");
			respon.setDiscription("mail are present");
			respon.setMailb(sentinfo);
		}
		else
		{
			respon.setStatusecode(401);
			respon.setMessge("failed");
			respon.setDiscription("mail are not present");
		}
		return respon;
	}
}
