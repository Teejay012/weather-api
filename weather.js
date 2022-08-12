// /**
//  * Weather App
//  * TODO: Complete getWeatherData() to return json response Promise
//  * TODO: Complete searchCity() to get user input and get data using getWeatherData()
//  * TODO: Complete showWeatherData() to set the data in the the html file from response
//  */

// /* DIV ID's you'll need access to 👇
// "city-name"
// "weather-type"
// "temp"
// "min-temp"
// "max-temp"
// */

// const cityName = document.getElementById('city-name')
// const weatherType = document.getElementById('weather-type')
// const temperature = document.getElementById('temp')
// const minTemp = document.getElementById('min-temp')
// const maxTemp = document.getElementById('max-temp')

// // API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// /**
//  * Retrieve weather data from openweathermap
//  * HINT: Use fetch()
//  * HINT: URL should look like this: 
//  * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
//  */
// getWeatherData = (city) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '7566a3e8bemsh9f22dde14cebf7dp1e2823jsn6297310eb2b6',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://open-weather13.p.rapidapi.com/city/chicago', options)
//         .then(response => response.json())
//         .then(data => console.log(response))
//         .catch(err => console.error(err));
//   //HINT: Use template literals to create a url with input and an API key

//   //CODE GOES HERE
// }
// getWeatherData()

// /**
//  * Retrieve city input and get the weather data
//  * HINT: Use the promise returned from getWeatherData()
//  */
// const searchCity = () => {
//   const city = document.getElementById('city-input').value;
//   // CODE GOES HERE

// }

// /**
//  * Show the weather data in HTML
//  * HINT: make sure to console log the weatherData to see how the data looks like
//  */
// const showWeatherData = (weatherData) => {
//   //CODE GOES HERE
  
// }

        // temperature.innerText = `${data.city.main.temp}`
        // minTemp.innerText = `${data.city.main.temp_min}`
        // maxTemp.innerText = `${data.city.main.temp_max}`





        /**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

