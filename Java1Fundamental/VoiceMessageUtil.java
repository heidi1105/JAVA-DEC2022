import java.util.*;

class VoiceMessageUtil {
    // 5. methods (overloading methods)
    public String greetMessage(){
        return "Hi!";
    }

    public String greetMessage(String name){
        return "Hi, "+ name;
    }

    public String greetMessage(int count){
        return "Hi2, "+ count;
    }

    public String greetWithDate(){
        Date currentTime = new Date();
        return "Hi, it is "+currentTime;
    }

    public void printArray(int[] intArr){
        for(int i = 0; i<intArr.length; i++){
             System.out.println(i + " : " + intArr[i]);
        }
    }

    public void printArray(String[] arr){
        for(String element : arr){
            System.out.println(element);
        }
    }

    public void printArrayWithIdx(ArrayList<String> strArr){
        for(int i= 0; i<strArr.size(); i++){
            System.out.println(i + " : " + strArr.get(i));
        }
    }


}