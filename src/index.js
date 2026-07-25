function updateTime() {
  //Houston
  let currentDate = moment().format("MMMM Do, YYYY");
  let timeFormat = "h:mm:ss [<small>]A[</small>]";
  let houstonElement = document.querySelector("#houston");

  if (houstonElement) {
    let houstonDate = houstonElement.querySelector(".date");
    let houstonTime = houstonElement.querySelector(".time");
    let houstonCurrentTime = moment().tz("America/Chicago").format(timeFormat);

    houstonDate.innerHTML = currentDate;
    houstonTime.innerHTML = houstonCurrentTime;
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");

  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTime = sydneyElement.querySelector(".time");
    let sydneyCurrentTime = moment().tz("Australia/Sydney").format(timeFormat);

    sydneyDate.innerHTML = currentDate;
    sydneyTime.innerHTML = sydneyCurrentTime;
  }

  //Bangui
  let banguiElement = document.querySelector("#bangui");

  if (banguiElement) {
    let banguiDate = banguiElement.querySelector(".date");
    let banguiTime = banguiElement.querySelector(".time");
    let banguiCurrentTime = moment().tz("Africa/Bangui").format(timeFormat);

    banguiDate.innerHTML = currentDate;
    banguiTime.innerHTML = banguiCurrentTime;
  }

  //Tahiti
  let tahitiElement = document.querySelector("#tahiti");

  if (tahitiElement) {
    let tahitiDate = tahitiElement.querySelector(".date");
    let tahitiTime = tahitiElement.querySelector(".time");
    let tahitiCurrentTime = moment().tz("Pacific/Tahiti").format(timeFormat);

    tahitiDate.innerHTML = currentDate;
    tahitiTime.innerHTML = tahitiCurrentTime;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/" class="home">🏠</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
