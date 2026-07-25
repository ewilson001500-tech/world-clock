function updateTime() {
  //Houston
  let houstonElement = document.querySelector("#houston");

  if (houstonElement) {
    let houstonDate = houstonElement.querySelector(".date");
    let houstonCurrentDate = moment().format("MMMM Do, YYYY");

    let houstonTime = houstonElement.querySelector(".time");
    let houstonCurrentTime = moment()
      .tz("America/Chicago")
      .format("h:mm:ss [<small>]A[</small>]");

    houstonDate.innerHTML = houstonCurrentDate;
    houstonTime.innerHTML = houstonCurrentTime;
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");

  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyCurrentDate = moment().format("MMMM Do, YYYY");

    let sydneyTime = sydneyElement.querySelector(".time");
    let sydneyCurrentTime = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");

    sydneyDate.innerHTML = sydneyCurrentDate;
    sydneyTime.innerHTML = sydneyCurrentTime;
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
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
