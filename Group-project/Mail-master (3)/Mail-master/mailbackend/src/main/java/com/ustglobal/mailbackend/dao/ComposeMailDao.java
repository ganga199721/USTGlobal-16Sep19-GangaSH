package com.ustglobal.mailbackend.dao;

import java.util.List;

import com.ustglobal.mailbackend.dto.MailInfo;

public interface ComposeMailDao {

	public  boolean compose(MailInfo mailbean);
	public  List<MailInfo> sent(int from_id,int to_id,String subject);
}
