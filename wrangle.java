import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

public class wrangle extends attributes implements wrangleInterface{

    private HashTable<String, attributes>() table = new HashTable<>();
    private int simScore;

    public void readCSV(String filePath){
        String pathToCsv = filePath;
        String line = "";

        try (BufferedReader br = new BufferedReader(new FileReader(pathToCsv))) {

            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                attributes attribute = new attributes(values[1], values[2], values[3], values[4], values[5], values[6], values[7], 0);
                table.put(values[0], attribute);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public int calcSimScore(attributes d1, attributes d2){
        int count = 0;

        if(d1.getPrice() == d2.getPrice()) count++;
        if(d1.getFood() == d2.getFood()) count++;
        if(d1.getPopulation() == d2.getPopulation()) count++;
        if(d1.getContinent() == d2.getContinent()) count++;
        if(d1.getActivity() == d2.getActivity()) count++;
        if(d1.getClimate() == d2.getClimate()) count++;
        if(d1.getLanguage() == d2.getLanguage()) count++;

        return count;
    }
}