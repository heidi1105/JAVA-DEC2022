package com.heidichen.interfacedemo;

public class Pet {
	// 1. private/protected attributes
	private String name;
	private String type;
	
	// 2. constructor
	public Pet() {
	}

	public Pet(String type) {
		this.type = type;
	}

	// 3. getters/setters

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public void display() {
		System.out.println("------- DISPLAY ---------");
		System.out.println("Name: " + this.name);
		System.out.println("Type: " + this.type);
	}

}
