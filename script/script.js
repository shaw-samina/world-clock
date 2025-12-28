setInterval(function () {
  let losAngeles = document.querySelector("#los-angeles");
  let laDate = document.querySelector("#los-angeles .date");
  let laTime = document.querySelector("#los-angeles .time");
  let laTz = moment().tz("America/Los_Angeles");
  laDate.innerHTML = moment().format("MMMM Do, YYYY");
  laTime.innerHTML = laTz.format("h:mm:ss [<small>]a[<small>]");
}, 1000);

setInterval(function () {
  let sydney = document.querySelector("#sydney");
  let sydDate = document.querySelector("#sydney .date");
  let sydTime = document.querySelector("#sydney .time");
  let sydTz = moment().tz("Australia/Sydney");
  sydDate.innerHTML = moment().format("MMMM Do, YYYY");
  sydTime.innerHTML = sydTz.format("h:mm:ss [<small>]a[<small>]");
}, 1000);
