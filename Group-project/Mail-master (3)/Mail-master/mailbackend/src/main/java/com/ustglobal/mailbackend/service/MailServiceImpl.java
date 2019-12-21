package com.ustglobal.mailbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.mailbackend.dao.ComposeMailDao;
import com.ustglobal.mailbackend.dao.DeleteMailDAO;
import com.ustglobal.mailbackend.dto.MailInfo;
@Service
public class MailServiceImpl implements MailService {
    @Autowired
	private DeleteMailDAO dao;
    @Autowired
    private ComposeMailDao dao1;
    
	@Override
	public boolean deletemail(int from_id) {
	return	dao.deletemail(from_id);
	}
	@Override
	public boolean compose(MailInfo mailbean) {
		return dao1.compose(mailbean);
	}
	@Override
	public List<MailInfo> sent(int from_id, int to_id, String subject) {
		return dao1.sent(from_id, to_id, subject);
	}

}
