function searchacity(event) {
  event.preventDefault();
  let city = document.querySelector("#headerCity");
  let cityInput = document.querySelector("#input-a-city").value;
  city.innerHTML = cityInput;
  fetchWeather(cityInput);
}
let searchFormElement = document.querySelector("#forma");
searchFormElement.addEventListener("submit", searchacity);

function fetchWeather(city) {
  let apiKey = "eafo3c54a06d9f77ba3t96121805c98f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector(
    ".weather-app-temperature-value"
  );
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function changeDate() {
  let now = new Date();
  let date = now.getDate();
  let day = now.getDay();
  let minute = now.getMinutes().toString().padStart(2, "0");
  let hour = now.getHours().toString().padStart(2, "0");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDate = `${days[day]}, ${date} ${hour}:${minute}`;
  let dateNow = document.querySelector("#my-date");
  dateNow.innerHTML = formatDate;
}
changeDate();
