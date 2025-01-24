function searchacity(event) {
  event.preventDefault();
  let city = document.querySelector("#headerCity");
  let cityInput = document.querySelector("#input-a-city");
  city.innerHTML = cityInput.value;
}
let searchFormElement = document.querySelector("#forma");
searchFormElement.addEventListener("submit", searchacity);

function showUser(response) {
  alert(`The user name is ${response.data.name}`);
}
let city = "Sydney";
let apiKey = "eafo3c54a06d9f77ba3t96121805c98f";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
axios.get(apiUrl).then(showUser);

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
  let formatDate = `${days[day]} ${date} ${hour}:${minute}`;
  let dateNow = document.querySelector("#my-date");
  dateNow.innerHTML = formatDate;
}
changeDate();
