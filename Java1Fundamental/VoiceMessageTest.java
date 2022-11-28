class VoiceMessageTest {
    public static void main(String[] args){
        // create an instance for util
        String name = "Pepper";
         // 6. dependency injection (using methods in another file)
        VoiceMessageUtil newBot = new VoiceMessageUtil();
        System.out.println(newBot.greetMessage());

        System.out.println(newBot.greetMessage("Pepper"));
        System.out.println(newBot.greetMessage(30));

    }
}