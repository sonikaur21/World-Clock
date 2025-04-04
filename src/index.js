function updateTime() {
  let madridElement = document.querySelector("#madrid");
  let madridElementDate = madridElement.querySelector(".date");
  let madridElementTime = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");
  madridElementDate.innerHTML = madridTime.format("MMMM Do YYYY");
  madridElementTime.innerHTML = `${madridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoElementDate = tokyoElement.querySelector(".date");
  let tokyoElementTime = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoElementDate.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoElementTime.innerHTML = `${tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let atlantaElement = document.querySelector("#atlanta");
  let atlantaElementDate = atlantaElement.querySelector(".date");
  let atlantaElementTime = atlantaElement.querySelector(".time");
  let atlantaTime = moment().tz("America/New_York");
  atlantaElementDate.innerHTML = atlantaTime.format("MMMM Do YYYY");
  atlantaElementTime.innerHTML = `${atlantaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 100);
