package com.ustglobal.didemo.util;

public class Manger {
	A a= null;
	public I getI() {
		if(a==null) {
			a= new A();
		}
		return a;
	}
}
