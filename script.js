const apikey = "9e13be02a53ca80676c0f6c3b11acc00";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?20&units=metric&q=";


const input = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-img i')

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        alert("enter valid city name")
    }
    const data = await response.json();

   

    


    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity-percentage').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind-perc').innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main.toLowerCase() === "clouds") {
        weathericon.className = 'fa-solid fa-cloud';
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weathericon.className = 'fa-solid fa-sun';
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weathericon.className = 'fa-solid fa-cloud-rain';
    } else if (data.weather[0].main.toLowerCase() === "snow") {
        weathericon.className = 'fa-solid fa-snowflake';
    } else if (data.weather[0].main.toLowerCase() === "thunderstorm") {
        weathericon.className = 'fa-solid fa-bolt';
    } else {
        weathericon.className = 'fa-solid fa-cloud';
    }
}

searchbtn.addEventListener('click', ()=>{
    checkweather(input.value);
});
