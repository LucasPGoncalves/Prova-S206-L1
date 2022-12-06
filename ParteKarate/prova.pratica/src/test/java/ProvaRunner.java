import com.intuit.karate.junit5.Karate;

class ProvaRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("prova").relativeTo(getClass());
    }    

}