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
}