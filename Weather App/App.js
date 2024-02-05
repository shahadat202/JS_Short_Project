
const apiKey = "38c2095204318a709e31c8bfff560935";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";
        
        if(data.weather[0] == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0] == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0] == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0] == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})