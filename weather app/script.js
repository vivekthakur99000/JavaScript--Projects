const API_KEY = "d00f3da445dc15db21e1c2f379e3b8ae";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.getElementById("cityname");
const searchBtn = document.getElementById("sear");
let image = document.getElementById("temp-img");




async  function checkWeather(city){
    const response = await fetch(url + city +`&appid=${API_KEY}`);
    let data = await response.json();


    console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.getElementById("humi").innerHTML = Math.round(data.main.humidity) + "%";
    document.getElementById("windd").innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main ==  "Clouds"){
            image.src = "images/clouds.png";
    }else if(data.weather[0].main == "rain"){
        image.src = "images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        image.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        image.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Clear"){
        image.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        image.src = "images/mist.png";
    }else{
        img.src = "images/snow.png"
    }

}

searchBtn.addEventListener('click', ()=>{checkWeather(city.value)});