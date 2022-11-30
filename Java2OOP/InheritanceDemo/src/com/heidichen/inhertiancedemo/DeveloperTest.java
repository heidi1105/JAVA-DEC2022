package com.heidichen.inhertiancedemo;

public class DeveloperTest {

	public static void main(String[] args) {
        System.out.println("---- Developer Test ----");
        System.out.println("Developer count:  " + Developer.getDevCount());
        System.out.println("Total Salary:  " + Developer.getTotalSalary());


        Developer dev1 = new Developer();
        dev1.setName("A contract developer");
        dev1.display();

        Developer dev2 = new Developer("Pepper");
        dev2.display();

        Developer dev3 = new Developer("David", 150000);
        dev3.display();

        System.out.println("Developer count:  " + Developer.getDevCount());
        System.out.println("Total Salary:  " + Developer.getTotalSalary());

        dev3.raiseSalary(1).raiseSalary(10).display();
        dev3.display();
        System.out.println("Total Salary:  " + Developer.getTotalSalary());

        System.out.println("---- Inheritance Test ----");
        JuniorDeveloper jun1 = new JuniorDeveloper();
        jun1.display();
        
        SeniorDeveloper senior1 = new SeniorDeveloper();
        senior1.display();
        
        SeniorDeveloper senior2 = new SeniorDeveloper("Emmanuel");
        senior2.display();
        
        senior2.yellAtOthers(jun1).yellAtOthers(jun1).yellAtOthers(jun1).display();
        jun1.display();
        
        senior1.learnLanguage("JavaScript")
        .learnLanguage("Assembly Language")
        .display();
        
	}

}
