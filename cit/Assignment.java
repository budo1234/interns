public class Assignment {

    public static void main(String[] args) {
     
        computeAreaOfCircle(200);  

        System.out.println();

        computeAreaOfCircleSector(32, 907); 
    }

    private static void computeAreaOfCircle(int radius){
        double area = Math.PI * Math.pow(radius, 2 );
        
        System.out.printf("%.2f", area);

        //System.out.println(area);
    }

    private static void computeAreaOfCircleSector(int radius, int angle){
        double angleRad = Math.toRadians(angle);
        double area = 0.5 *  Math.pow(radius, 2 ) * angleRad;

        System.out.printf("%.2f", area);

    }



}
