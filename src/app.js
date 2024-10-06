function weatherInfo(response) {
  let temperatureElement = document.querySelector("#weather-app-temperature");
  let temp = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temp);

  let weatherAppCityElement = document.querySelector("#weather-app-city");
  weatherAppCityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "676a8c8ft5f8032bo39a17f1f2f6754f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weatherInfo);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherAppCityElement = document.querySelector("#weather-app-city");
  weatherAppCityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
