// 1. compile java (javac & java)
// ------------- First Java Program ------------
class JavaBasic {
    public static void main(String[] args){
        System.out.println("Hello Java");

    // 2. variables (int, double, boolean, char, String )
    // Primitive VS Wrapper Class
    String projectTitle = "Cafe Java";
    String developer = "Heidi";
    int totalFiles = 2;
    boolean isDone = false;
    double requiredTime = 1;
    char difficulty = 'B';
    

    System.out.println("Project Title: " + projectTitle);
    System.out.println("Number of files: " + totalFiles);
    System.out.println("Is done?: " + isDone);
    System.out.println("Difficulty: " + difficulty);
    System.out.println("Required time: " + requiredTime + " hour");
    System.out.println("Max integer:" + Integer.MAX_VALUE);    
    // 3. conditionals & ternary

    if(isDone){
        System.out.println(projectTitle + " is complete");
    }else{
        System.out.println(projectTitle + " is not complete");
    }

    if(totalFiles > 1){
        System.out.println("You need to zip your project to submit your project");
    }

    System.out.println(totalFiles > 1?
        "You need to zip your project to submit your project!":
        "There is only one file in this project" );

    // ------------- Cafe Java ------------
    // 4. String (length, indexOf, format, trim(), .equals )
    System.out.println("Title length: " + projectTitle.length());
    String projectDetails = projectTitle.concat(" ---- ").concat(developer); // title + ---- + developer
    String projectDetails2 = projectTitle + "-----" + developer;
    System.out.println(projectDetails2);

    String projectDetails3 = String.format("Project Title : %s | Required Time: %.2f", projectTitle, requiredTime);
    System.out.println(projectDetails3);

    String name1 = "Heidi";
    String name2 = "Heidi";
    String name3 = new String("Heidi");

    System.out.println(name1 == name2);
    System.out.println(name1 == name3);
    // .equals!!!!!!!!!!!
    System.out.println(name1.equals(name3));


    

    // -------------- Cafe Business Logic --------------

    // 7. Casting (implicit & explicit, Null VALUE)

    // implicit: int --> double , no loss of data 
    int intAge = 14; //14
    double intToDoubleAge = intAge; // 14.000
    System.out.println(intToDoubleAge);

    // explicit: double --> int , loss of data 
    double doubleAge = 14.5; // 14.5
    int doubleToIntAge = (int) doubleAge; // 14, 15
    System.out.println(doubleToIntAge);

    }
}

