import java.util.ArrayList;
public class DeveloperTest{
    public static void main(String[] args){
        System.out.println("---- Developer Test ----");
        Developer dev1 = new Developer();
        dev1.name = "Pepper";
        dev1.languages.add("Java");

        System.out.println(dev1.name);
        System.out.println(dev1.languages);

        Developer dev2 = new Developer();
        dev2.languages.add("Python");
        
    }
}