import java.util.ArrayList;

public class Developer{
    // 1. private member variables/attributes (what it has)
    private String name;
    private ArrayList<String> languages;
    private int happiness;
    private boolean hasLife;
    private double salary;

    // 2. Constructor
    public Developer(){
        this.name = "A random developer";
        this.languages = new ArrayList<String>();
        this.happiness = 8;
        this.hasLife = false;
        this.salary = 100000;
    }

    public Developer(String name){
        this.name = name;
        this.languages = new ArrayList<String>();
        this.languages.add("Java");
        this.happiness = 7;
        this.hasLife = true;
        this.salary = 120000;
    }

    public Developer(String name, double salary){
        this.name = name;
        this.languages = new ArrayList<String>();
        this.languages.add("Java");
        this.languages.add("Python");
        this.happiness = 9;
        this.hasLife = true;
        this.salary = salary;
    }

    // 3. getters/setters
    // getter - to get information (with return, no argument)
    public String getName(){
        return this.name;
    }

    // setters - to change info (no return, with arugment)
    public void setName(String name){
        this.name = name;
    }

    // getter
    public ArrayList<String> getLanguages(){
        return this.languages;
    }
    //setter
    public void setLanguages(ArrayList<String> languages){
        this.languages = languages;
    }

    // getter
    public int getHappiness(){
        return this.happiness;
    }
    //setter
    public void setHapiness(int happiness){
        this.happiness = happiness;
    }

    // getter
    public boolean getHasLife(){
        return this.hasLife;
    }
    //setter
    public void setHasLife(boolean hasLife){
        this.hasLife = hasLife;
    }

    // getter
    public double getSalary(){
        return this.salary;
    }
    //setter
    public void setSalary(double salary){
        this.salary = salary;
    }

    // OTHER METHODS
    public void display(){
        System.out.println("-------" + this.name+ "---------");
        System.out.println("Happiness: " + this.happiness);
        System.out.println("hasLife: " + this.hasLife);
        System.out.println("Salary: " + this.salary);
        System.out.println("Languages: " + this.languages);        
    }






}