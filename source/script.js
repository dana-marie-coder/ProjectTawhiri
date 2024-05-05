function updateCityTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  let cityTitle = document.querySelector("#weather-city");
  let city = response.data.city;
  let currentCondition = document.querySelector("#description");
  let description = response.data.condition.description;
  let humidity = `${response.data.temperature.humidity}%`;
  let currentHumidity = document.querySelector("#humidity");
  let currentWindSpeed = document.querySelector("#wind-speed");
  let windSpeed = `${response.data.wind.speed}km/h`;
  let date = new Date(response.data.time * 1000);
  let currentTime = document.querySelector("#time");
  let icon = document.querySelector("#weather-icon");

  cityTitle.innerHTML = city;
  currentTime.innerHTML = formatDate(date);
  console.log(response.data.time);
  currentWindSpeed.innerHTML = windSpeed;
  currentHumidity.innerHTML = humidity;
  currentCondition.innerHTML = description;
  currentTemperature.innerHTML = Math.round(temperature);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}"
                class="weather-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes} `;
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
