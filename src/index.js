function updateTime() {
  //Houston
  let houstonElement = document.querySelector("#houston");

  let houstonDate = houstonElement.querySelector(".date");
  let houstonCurrentDate = moment().format("MMMM Do, YYYY");

  let houstonTime = houstonElement.querySelector(".time");
  let houstonCurrentTime = moment()
    .tz("America/Chicago")
    .format("h:mm:ss [<small>]A[</small>]");

  houstonDate.innerHTML = houstonCurrentDate;
  houstonTime.innerHTML = houstonCurrentTime;

  //Sydney
  let sydneyElement = document.querySelector("#sydney");

  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyCurrentDate = moment().format("MMMM Do, YYYY");

  let sydneyTime = sydneyElement.querySelector(".time");
  let sydneyCurrentTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  sydneyDate.innerHTML = sydneyCurrentDate;
  sydneyTime.innerHTML = sydneyCurrentTime;
}

updateTime();
setInterval(updateTime, 1000);
