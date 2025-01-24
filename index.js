function searchacity(event) {
  event.preventDefault();
  let city = document.querySelector("#headerCity");
  let cityInput = document.querySelector("#input-a-city");
  city.innerHTML = cityInput.value;
}
let searchFormElement = document.querySelector("#forma");
searchFormElement.addEventListener("submit", searchacity);

function changeDate() {
  let now = newDate();
  let day = now.getDate();
  let minute = now.getMinutes.toString().padStart(2, "0");
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
  let formatDate = `${days[day]} ${hour}:${minute}`;
  let dateNow = document.querySelector("#my-date");
  dateNow.innerHTML = formatDate;
}
