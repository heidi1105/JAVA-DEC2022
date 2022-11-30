package com.heidichen.inhertiancedemo;

import java.util.ArrayList;

public class Developer { // SUPERCLASS
	// 1. private member variables/ attributes
    private String name;
    protected ArrayList<String> languages;
    private int happiness;
    private boolean hasLife;
    private double salary;
    private static int devCount;
    private static double totalSalary;
	
    // 2. Constructor
    public Developer(){
        this.name = "A random developer";
        this.languages = new ArrayList<String>();
        this.happiness = 8;
        this.hasLife = false;
        this.salary = 100000;
        devCount++;
        totalSalary += this.salary;
    }

    public Developer(String name){
        this.name = name;
        this.languages = new ArrayList<String>();
        this.languages.add("Java");
        this.happiness = 7;
        this.hasLife = true;
        this.salary = 120000;
        devCount++;
        totalSalary += this.salary;
    }

    public Developer(String name, double salary){
        this.name = name;
        this.languages = new ArrayList<String>();
        this.languages.add("Java");
        this.languages.add("Python");
        this.happiness = 9;
        this.hasLife = true;
        this.salary = salary;
        devCount++;
        totalSalary += this.salary;
    }

	public Developer(String name, int happiness, boolean hasLife, double salary) {
		this.name = name;
		this.languages =  new ArrayList<String>();;
		this.happiness = happiness;
		this.hasLife = hasLife;
		this.salary = salary;
        devCount++;
        totalSalary += this.salary;
	}

    // OTHER METHODS
    public void display(){
        System.out.println("-------" + this.name+ "---------");
        System.out.println("Happiness: " + this.happiness);
        System.out.println("hasLife: " + this.hasLife);
        System.out.println("Salary: " + this.salary);
        System.out.println("Languages: " + this.languages);        
    }

    // To chain the methods, return this and don't forget to specify the return datatype. 
    public Developer raiseSalary(int raise){
        System.out.println(this.name + " is having a salary raise of "+ raise);
        this.salary += raise;
        totalSalary += raise;
        return this;
    }
	
	
	
	// 3. getters/setters
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<String> getLanguages() {
		return languages;
	}

	public void setLanguages(ArrayList<String> languages) {
		this.languages = languages;
	}

	public int getHappiness() {
		return happiness;
	}

	public void setHappiness(int happiness) {
		this.happiness = happiness;
	}

	public boolean isHasLife() {
		return hasLife;
	}

	public void setHasLife(boolean hasLife) {
		this.hasLife = hasLife;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public static int getDevCount() {
		return devCount;
	}

	public static void setDevCount(int devCount) {
		Developer.devCount = devCount;
	}

	public static double getTotalSalary() {
		return totalSalary;
	}

	public static void setTotalSalary(double totalSalary) {
		Developer.totalSalary = totalSalary;
	}
    

	

}
