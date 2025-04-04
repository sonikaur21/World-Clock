function updateTime() {
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridElementDate = madridElement.querySelector(".date");
    let madridElementTime = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");
    madridElementDate.innerHTML = madridTime.format("MMMM Do YYYY");
    madridElementTime.innerHTML = `${madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoElementDate = tokyoElement.querySelector(".date");
    let tokyoElementTime = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoElementDate.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoElementTime.innerHTML = `${tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  let atlantaElement = document.querySelector("#atlanta");
  if (atlantaElement) {
    let atlantaElementDate = atlantaElement.querySelector(".date");
    let atlantaElementTime = atlantaElement.querySelector(".time");
    let atlantaTime = moment().tz("America/New_York");
    atlantaElementDate.innerHTML = atlantaTime.format("MMMM Do YYYY");
    atlantaElementTime.innerHTML = `${atlantaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}
updateTime();
setInterval(updateTime, 100);

function displaySelect(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        </div>`;
}
let cityselectElement = document.querySelector("#cityselect");

cityselectElement.addEventListener("change", displaySelect);
