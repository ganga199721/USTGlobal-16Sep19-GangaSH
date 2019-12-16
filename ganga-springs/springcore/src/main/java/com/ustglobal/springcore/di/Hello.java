package com.ustglobal.springcore.di;

import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.stereotype.Component;

@Component("hello")		//spring consider it as  bean class if we annotate any class as @component("   ")
public class Hello {
	public Hello() {
		System.out.println("Hello Object created");
	}
	private String msg;
	
	
	private Map<String, Integer> map;
	
		public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {	//getters n setters for map
		this.msg = msg;
	}
	public Map<String, Integer> getMap() {
		return map;
	}
	public void setMap(Map<String, Integer> map) {
		this.map = map;
	}

		@PostConstruct
	public void init() {
		System.out.println("Init method executing from hello");
	}
	@PreDestroy
	public void destroy() {
		System.out.println("Destroy method executing from Hello");
	}
	
	
}
