import java.util.ArrayList;
public class DeveloperTest{
    public static void main(String[] args){
        System.out.println("---- Developer Test ----");
        Developer dev1 = new Developer();
        dev1.setName("A contract developer");
        dev1.display();

        Developer dev2 = new Developer("Pepper");
        dev2.display();

        Developer dev3 = new Developer("David", 150000);
        dev3.display();



        
    }
}