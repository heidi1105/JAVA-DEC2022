# JAVA Fundamentals
### First Java Program
1. Naming convension 
    - FileName / ClassName : PascalCase
    - variableName/ methodName : camelCase
    - *DO NOT USE snake_case *
    
2. compile java (javac JavaBasic.java   & java JavaBasic)
    - javac FileName.java : to compile the Java file
    - java FileName : to run the compiled file (.class)
    - javac -version and java -version to check the versions

### Cafe Java
3. variables (int, double, boolean, char, String )
    - primitive type vs Wrapper class
4. conditionals & ternary - if(condition)
    - conditions MUST BE a boolean
### Alfred Bot
5. String 
    - .concat, .format, .equals, new String() 
6. methods (overloading methods)
7. dependency injection (using methods in another file)
    - instantiate the class of another file using the keyword "new"
8. Casting (implicit & explicit)
    - implicit:  int --> double (no loss of data)
    - explitcit : double --> int (loss of data) 
    - ```(int) price```
### Cafe Business Logic & Puzzling
9. Fixed Array
    - ```String[] arr = new String[5];```
10. Dynamic array: ArrayList
    - ```ArrayList<String> arr = new ArrayList<String>(); ```
11. For-loop & enhanced for-loop
    - for-loop: ```for(int i = 0; i < arr.length; i++)```
    - enhanced-for-loop: ```for(String msg: msgArr)```
### Map of the Hashmatique
12. Maps 
    - ```Map<String, String> map = new HashMap<>()```