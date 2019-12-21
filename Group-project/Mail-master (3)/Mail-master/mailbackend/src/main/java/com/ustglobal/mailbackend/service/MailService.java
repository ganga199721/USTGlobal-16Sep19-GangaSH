package com.ustglobal.mailbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ustglobal.mailbackend.dto.MailInfo;

public interface MailService {
	
	public boolean deletemail(int from_id);
	public boolean compose(MailInfo mailbean);
	public  List<MailInfo> sent(int from_id,int to_id,String subject);
}
