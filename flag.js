                       
const countries = [  
  {

    image: "https://flagpedia.net/data/flags/w580/de.png",
    country: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/au.png",
    country: "Australia",
    population: "91,657,312",
    region: "Aus",
    capital: "Canberra"
  },

  {
    image: "https://flagpedia.net/data/flags/w580/in.png",
    country: "India",
    population: "1,3179,984,812",
    region: "Asia",
    capital: "New Delhi"
  },

  {
    image: "https://flagpedia.net/data/flags/w580/kr.png",
    country: "South Korea",
    population: "40,400,000",
    region: "Asia",
    capital: "Seoul"
  },

  {
    image: "https://flagpedia.net/data/flags/w580/us.png",
    country: "United States of America",
    population: "323,947,000",
    region: "North America",
    capital: "Washington,D.C"
  },

  {
      image:"https://flagpedia.net/data/flags/w580/sa.png",
      country:"Saudi Arabia",
      population: "34,218,169",
      region:"Western Asia",
      capital:"Riyadh"  
  },

  {

    image: "https://flagpedia.net/data/flags/w580/ru.png",
    country : "Russia",
    population:"104,750,607",
    region:"Eastern Europe & Northern Asia",    
    capital:"Moscow" 

  },

  {
    image: "https://flagpedia.net/data/flags/w580/fr.png",
    country : "France", 
     population:"67,450,108",
     region:"Western Europe",
     capital:"Paris"                         
                            
  }

];
document.body.innerHTML = `
<section class="container">
    <div id="flags" class="row">
    </div>
</section> 
  `;      
    countries.forEach((data)=> {
     
const flags = document.querySelector("#flags");

    flags.innerHTML+=`
    <div class="col-xs-12 col-sm-6 col-md-3">
    <div class= "flag-container">
    <img 
    src = ${data.image}
    class="flag" 
    />
    <div class="details">
    <h3>${data.country}</h3>
    <p><b>Population:</b>${data.population}<p>
    <p><b>Region:</b>${data.region}<p>
    <p><b>Capital:</b>${data.capital}<p>
</div>
</div>
</div>

`;

});