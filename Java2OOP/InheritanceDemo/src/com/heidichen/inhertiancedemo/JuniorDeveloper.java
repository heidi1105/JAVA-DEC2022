package com.heidichen.inhertiancedemo;

// SUBCLASS
public class JuniorDeveloper extends Developer {
	// 1. attributes
	private boolean isIntern;
	
	// 2. constructor
	public JuniorDeveloper() {
		super("A junior developer", 90000); // run the constructor of the superclass
		this.setHasLife(false);
		this.isIntern = true;
	}
	
    public void display(){
    	super.display();
        System.out.println("isIntern: " + this.isIntern);   
    }
	
	
	// 3. getters/setters
	
	public boolean isIntern() {
		return isIntern;
	}

	public void setIntern(boolean isIntern) {
		this.isIntern = isIntern;
	}

	
}
