package com.heidichen.interfacedemo;

public interface Keepable {
	
	// default methods are complete methods that all implemented classes can use
	public default void play() {
		System.out.println("Playing.....");
	}
	
	// abstract -- incomplete method that the implemented classes need to complete
	abstract void begForFood();

}
