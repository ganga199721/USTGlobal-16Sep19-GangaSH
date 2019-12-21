package com.ustglobal.mailbackend.dto;

import java.util.List;

public class Response {

	private int statusecode;
	private String messge;
	private String discription;
	
	private List<MailInfo> mailb;
	
	private List<UserBean> Userb;

	public int getStatusecode() {
		return statusecode;
	}

	public void setStatusecode(int statusecode) {
		this.statusecode = statusecode;
	}

	public String getMessge() {
		return messge;
	}

	public void setMessge(String messge) {
		this.messge = messge;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public List<MailInfo> getMailb() {
		return mailb;
	}

	public void setMailb(List<MailInfo> mailb) {
		this.mailb = mailb;
	}

	public List<UserBean> getUserb() {
		return Userb;
	}

	public void setUserb(List<UserBean> userb) {
		Userb = userb;
	}
	

}
