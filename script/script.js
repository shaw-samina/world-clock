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

setInterval(function () {
  let mexicoCity = document.querySelector("#mexico-city");
  let mexDate = document.querySelector("#mexico-city .date");
  let mexTime = document.querySelector("#mexico-city .time");
  let mexTz = moment().tz("America/Mexico_City");
  mexDate.innerHTML = moment().format("MMMM Do, YYYY");
  mexTime.innerHTML = mexTz.format("h:mm:ss [<small>]a[<small>]");
}, 1000);

function displaySelectedCity(event) {
  let currentCity = event.target.value;
  if (currentCity === "current") {
    currentCity = moment.tz.guess();
  }
  let cityName = currentCity.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(currentCity);
  let listedCities = document.querySelector("#listed-cities");
  listedCities.innerHTML = `
   <div class="city-list">
          <div>
            <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">Back to City List</a>
  `;
}

let selectedCity = document.querySelector("#city");
selectedCity.addEventListener("change", displaySelectedCity);
