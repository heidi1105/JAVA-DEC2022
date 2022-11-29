import java.util.ArrayList;

class VoiceMessageTest {
    public static void main(String[] args){
        // create an instance for util
        String name = "Pepper";
         // 6. dependency injection (using methods in another file)

        // -------------- Alfred Bot ------------------
        VoiceMessageUtil newBot = new VoiceMessageUtil();
        System.out.println(newBot.greetMessage());

        System.out.println(newBot.greetMessage("Pepper"));
        System.out.println(newBot.greetMessage(30));
        System.out.println(newBot.greetWithDate());
        // 8. Fixed Array
        int[] messagesPerDay = new int[3];
        int[] messagesPerDay2 = { 8, 6, 9, 4, 7}; // create a fixed array with the numbers
        System.out.println(messagesPerDay2.length);
        newBot.printArray(messagesPerDay);
        newBot.printArray(messagesPerDay2);

        String[] messages = {"Please call back!", 
            "Make sure you install jdk", 
            "DO NOT INSTALL VS CODE EXTENSION!"};
        newBot.printArray(messages);

        // 9. ArrayList
        ArrayList<String> reminders = new ArrayList<String>();
        reminders.add("DO NOT INSTALL VS CODE EXTENSION");
        reminders.add("Do the assignments");
        reminders.add("Stay hydrated!");
        System.out.println(reminders);
        reminders.set(1, "Study before Kahoot!");

        reminders.remove(1);
        reminders.remove("Stay hydrated!");
        newBot.printArrayWithIdx(reminders);
        System.out.println("ArrayList size :" +reminders.size());

        



    }
}