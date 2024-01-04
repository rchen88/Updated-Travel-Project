public class attributes{

    private int price;
    private String food;
    private double population;
    private String continent;
    private String activity;
    private String climate;
    private String language;
    private int simScore;

    public attributes(){}

    public attributes(int price, String food, double population, String continent
    String activity, String climate, String language, int simScore){
        this.price = price;
        this.food = food;
        this.population = population;
        this.continent = continent;
        this.actvity = activty;
        this.climate = climate;
        this.language = language;
        this.simScore = simScore;
    }

    public int getPrice(){
        return this.price;
    }

    public String getFood(){
        return this.food;
    }

    public double getPopulation(){
        return this.population;
    }

    public String getContinent(){
        return this.continent;
    }

    public String getActivity(){
        return this.activity;
    }

    public String getClimate(){
        return this.climate;
    }

    public String getLanguage(){
        return this.language;
    }
}