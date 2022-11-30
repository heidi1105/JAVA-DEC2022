package com.heidichen.abstractdemo;

public abstract class Payment {
	private double amount;
	
	public Payment(double amount) {
		this.amount = amount;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	public void pay() {
		System.out.println("Processing payment....");
		System.out.println("It was charged $" + amount);

	}
	
}
