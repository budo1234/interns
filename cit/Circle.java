public class Circle {

    public static void main(String[] args) {

        Man vincent = new Man();
        vincent.hasEyes = true;
        vincent.name = "budo";
        vincent.numberOfLegs = 2;
        vincent.numberOfHands = 2;
        vincent.laugh();
        System.out.println(vincent.sayMyName());
        System.out.println(vincent.hasEyes);
        System.out.println(vincent);
    }

}

class Man {
    String name;
    int numberOfLegs;
    int numberOfHands;
    boolean hasEyes;

    String sayMyName() {
        return "my name is " + name;
    }

    void laugh() {
        System.out.println("Hahahahahaha");
    }

    @Override
    public String toString() {
        return "Man [name=" + name + ", numberOfLegs=" + numberOfLegs + ", numberOfHands=" + numberOfHands
                + ", hasEyes=" + hasEyes + "]";
    }
    

}
