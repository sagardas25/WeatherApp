
     const API_KEY = `be03a6d971bc920ab8c31ce8adbbc136`
     const form = document.querySelector(".form")
     const search = document.querySelector(".search")
     
    

     const getWeather = async (city) => {

         
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
         const response = await fetch(url); 
         const data = await response.json();
         return displayWeather(data);
     }


     const displayWeather = (data) => {

      console.log(data);

      const{ name } = data;
      const { icon, description} = data.weather[0];
      const{temp,humidity} = data.main;
      const{speed}= data.wind;

      document.querySelector("#elem").innerText = name ;
      document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText= description;
      document.querySelector(".tempTxt").innerText= temp + " °C";
      document.querySelector(".humiTxt").innerText= humidity + "%";
      document.querySelector(".windTxt").innerText = speed + " Km/h";
      
     

     }


   
 document.querySelector("form").addEventListener("submit", function(event){

   getWeather(search.value); 
   event.preventDefault(); })

 getWeather("durgapur");







 