package com.ustglobal.mailbackend.dao;

import java.util.List;

import com.ustglobal.mailbackend.dto.MailInfo;

public interface DraftMailDao {
	public List<MailInfo> draft(int from_id,String status);
}
