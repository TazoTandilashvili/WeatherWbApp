'use strict'

const container = document.querySelector('.container')
const searchbtn = document.getElementById('search_btn');
const weatherInfo = document.querySelector('.weater_info')
const weatherDetails = document.querySelector('.weather-detail')

weatherInfo.style.display = 'none';
weatherDetails.style.display = 'none';


searchbtn.addEventListener('click', function(){
    const apiKey = '9491276f987aaed0c12b9c6bad9171a5';
    const city = document.querySelector('.search_box input').value;

    if(city === '')
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(json => {

            
            const image = document.getElementById('weathe_img');
            const temperature = document.querySelector('.temoerature');
            const description = document.querySelector('.description');
            const probability = document.querySelector('.text span');
            const wind = document.querySelector('.wind-speed');

            if(json.weather[0].main === 'Clear'){
                image.src = './images/clear.png'
            }else if(json.weather[0].main === 'Clouds'){
                image.src = './images/clouds.png'
            }else if(json.weather[0].main === 'Drizzle'){
                image.src = './images/drizzle.png'
            }else if(json.weather[0].main === 'Mist'){
                image.src = './images/mist.png'
            }
            else if(json.weather[0].main === 'Rain'){
                image.src = './images/rain.png'
            }else if(json.weather[0].main === 'Snow'){
                image.src = './images/snow.png'
            }

            temperature.innerHTML = Math.trunc(json.main.temp) + " °C";
            description.innerHTML = json.weather[0].description
            probability.innerHTML = Math.trunc(json.main.humidity) + " %";
            wind.innerHTML = Math.trunc(json.wind.speed) + " Km/h"







            weatherInfo.style.display = 'flex';
            weatherDetails.style.display = 'flex'
            container.style.height = '590px';
        } )
})