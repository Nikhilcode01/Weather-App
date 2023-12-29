function FindDateAndTime(){
  let dt = new Date();
  let ti= dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
  document.getElementById("time").innerHTML=ti;
  window.setTimeout("FindDateAndTime()",1000);
  let mon = dt.getMonth();
  mon++;
  let day = dt.getDate()+" / "+mon+" / "+dt.getFullYear();
  document.getElementById("date").innerHTML=day;
}

let cityName;

const apiKey="b385fbe681906aa2891744ef273172bf";

function SearchWeather(){
    inputName = document.getElementById('city').value;
      const firstWord = inputName.charAt(0);
      const firstCapitalLetter = firstWord.toUpperCase();
      const reaminingWord = inputName.slice(1);
      cityName = firstCapitalLetter + reaminingWord;
    getweatherData(cityName);
}

async function getweatherData(cityName){
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

console.log(url);
const response=await fetch(url);
const data=await response.json();
showWeatherInfo(data);
}

function showWeatherInfo(data){
  if(cityName!= data.name){
  window.alert("Invalid Location :-(");
  }
  else{
    document.getElementById('country_name').innerText=cityName;
    document.getElementById('degree').innerText = Math.round(data.main.temp-273.15);
    document.getElementById('country_code').innerText = data.sys.country;
    document.getElementById('pressure').innerText = `${data.main.temp}hPa`;
    document.getElementById('sunrise').innerText = data.sys.sunrise;
    document.getElementById('sunset').innerText = data.sys.sunset;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('longtitude').innerHTML = `${data.coord.lon}&deg`;
    document.getElementById('latitude').innerHTML = `${data.coord.lat}&deg`;
    document.getElementById('wind_speed').innerText = `${data.wind.speed}m/s`;
  }
}