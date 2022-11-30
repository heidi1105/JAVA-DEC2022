package com.heidichen.inhertiancedemo;

public class SeniorDeveloper extends Developer {


	public SeniorDeveloper() {
		super("Senior Developer", 150000);
	}

	public SeniorDeveloper(String name) {
		super(name, 200000);
		// TODO Auto-generated constructor stub
	}

	public SeniorDeveloper(String name, int happiness, boolean hasLife, double salary) {
		super(name, happiness, hasLife, salary);
		// TODO Auto-generated constructor stub
	}
	
	public SeniorDeveloper yellAtOthers() {
		this.setHappiness(this.getHappiness()+1);
		return this;
	}
	
	public SeniorDeveloper yellAtOthers(JuniorDeveloper jun) {
		this.setHappiness(this.getHappiness()+1);
		jun.setHappiness(jun.getHappiness()-3);
		return this;
	}
	
	public SeniorDeveloper learnLanguage(String language) {
		this.languages.add(language);
		return this;
	}
	
	

}
