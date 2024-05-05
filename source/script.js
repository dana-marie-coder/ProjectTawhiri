function updateCityTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let cityTitle = document.querySelector("#weather-city");
  cityTitle.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "5f66a5061f6to1243b6a5681aa6334d6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCityTemperature);
}

function searchFormSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormSubmit);

searchCity("Redcliffe");
