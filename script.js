let searchedCities = document.getElementById('searched-cities');
let searchBtn = document.getElementById('search-btn');
let dayOneDate = document.getElementById('day-one-date');
let dayOneIcon = document.getElementById('day-one-icon');
let dayOneTemp = document.getElementById('day-one-temp');
let dayOneWind = document.getElementById('day-one-wind');
let dayOneHumidity = document.getElementById('day-one-humidity');
let dayTwoDate = document.getElementById('day-two-date');
let dayTwoIcon = document.getElementById('day-two-icon');
let dayTwoTemp = document.getElementById('day-two-temp');
let dayTwoWind = document.getElementById('day-two-wind');
let dayTwoHumidity = document.getElementById('day-two-humidity');
let dayThreeDate = document.getElementById('day-three-date');
let dayThreeIcon = document.getElementById('day-three-icon');
let dayThreeTemp = document.getElementById('day-three-temp');
let dayThreeWind = document.getElementById('day-three-wind');
let dayThreeHumidity = document.getElementById('day-three-humidity');
let dayFourDate = document.getElementById('day-four-date');
let dayFourIcon = document.getElementById('day-four-icon');
let dayFourTemp = document.getElementById('day-four-temp');
let dayFourWind = document.getElementById('day-four-wind');
let dayFourHumidity = document.getElementById('day-four-humidity');
let dayFiveDate = document.getElementById('day-five-date');
let dayFiveIcon = document.getElementById('day-five-icon');
let dayFiveTemp = document.getElementById('day-five-temp');
let dayFiveWind = document.getElementById('day-five-wind');
let dayFiveHumidity = document.getElementById('day-five-humidity');
let bigTemp = document.getElementById('temp');
let bigWind = document.getElementById('wind');
let bigHumidity = document.getElementById('humidity');
let uv = document.getElementById('uv-index');
var listEl = document.createElement('ul');
var apiKey = '32f1797748f6e574493cff3f4beac840';

function callStorage() {
    var storage = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) {
        storage.push(localStorage.getItem(keys[i]));
    }
    return storage;
}

function searchHistory() {
    listEl.innerHTML = "";
    for (let i = 0; i < callStorage().length; i++) {
        var pastCity = document.createElement('button');
        pastCity.textContent = callStorage()[i];
        pastCity.value = callStorage()[i];
        pastCity.classList.add('searched-city');
        searchedCities.appendChild(pastCity);

        pastCity.addEventListener('click', function(e) {
            getWeather(e.target.value);
        });
    }
}

searchBtn.addEventListener('click', function() {
    let city = document.querySelector('#city-search').value;
    localStorage.setItem(city, city);

    if (city) {
        city = city.toLowerCase().replace(/ /g, '');
    } else {
        alert('PLEASE ENTER A VALID CITY!');
    }
    getWeather(city);
    searchHistory();
});

function getWeather(city) {
    let api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly,daily&units=imperial&appid=${apiKey}`;
    fetch(api_url)
    .then(response => {
        if (!response.ok) {
            console.log(response.json);
        }
        return response.json();
    })
    .then(city => {
        dayOneDate.innerHTML = moment().add(i, 'days').format('M/D/YYYY');
        dayOneTemp.innerHTML = `Temperature: ${city.list[0].main.temp} F`;
        dayOneWind.innerHTML = `Wind Speed: ${city.list[0].wind.speed} mph`;
        dayOneHumidity.innerHTML = `Humidity: ${city.list[0].main.humidity} %`;

        dayTwoDate.innerHTML = moment().add(2, 'days').format('M/D/YYYY');
        dayTwoTemp.innerHTML = `Temperature: ${city.list[8].main.temp} F`;
        dayTwoWind.innerHTML = `Wind Speed: ${city.list[8].wind.speed} mph`;
        dayTwoHumidity.innerHTML = `Humidity: ${city.list[8].main.humidity} %`;
        
        dayThreeDate.innerHTML = moment().add(3, 'days').format('M/D/YYYY');
        dayThreeTemp.innerHTML = `Temperature: ${city.list[16].main.temp} F`;
        dayThreeWind.innerHTML = `Wind Speed: ${city.list[16].wind.speed} mph`;
        dayThreeHumidity.innerHTML = `Humidity: ${city.list[16].main.humidity} %`;
        
        dayFourDate.innerHTML = moment().add(4, 'days').format('M/D/YYYY');
        dayFourTemp.innerHTML = `Temperature: ${city.list[24].main.temp} F`;
        dayFourWind.innerHTML = `Wind Speed: ${city.list[24].wind.speed} mph`;
        dayFourHumidity.innerHTML = `Humidity: ${city.list[24].main.humidity} %`;

        dayFiveDate.innerHTML = moment().add(5, 'days').format('M/D/YYYY');
        dayFiveTemp.innerHTML = `Temperature: ${city.list[32].main.temp} F`;
        dayFiveWind.innerHTML = `Wind Speed: ${city.list[32].wind.speed} mph`;
        dayFiveHumidity.innerHTML = `Humidity: ${city.list[32].main.humidity} %`;

        bigTemp.innerHTML = `Temperature: ${city.list[0].main.temp} F`;
        bigWind.innerHTML = `Wind Speed: ${city.list[0].wind.speed} mph`;
        bigHumidity.innerHTML = `Humidity: ${city.list[0].main.humidity} %`;
        uv.innerHTML = 10;
    });
}