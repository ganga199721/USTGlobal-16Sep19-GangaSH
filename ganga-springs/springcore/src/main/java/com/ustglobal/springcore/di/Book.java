package com.ustglobal.springcore.di;

public class Book {
	
	private Authar authar;
	private String name;
	private double price;

	/*
	 * public Book(Authar authar) { 
	 * super(); 
	 * this.authar = authar;
	 *  } autowiring using constructor
	 */
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public Authar getAuthar() {
		return authar;
	}
	public void setAuthar(Authar authar) {
		this.authar = authar;
	}
	
	
}
