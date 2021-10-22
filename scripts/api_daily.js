fetch("https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=e4c8dc0e-b89f-45f1-baac-2021109c7709a02ca5")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var dailyCov = document.getElementById("dailyCovid");
    var dailyRec = document.getElementById("dailyRecovered");
    var dailyDead = document.getElementById("dailyDead");
    var cumulativeCovid = document.getElementById("cumulativeCovid");
    var cumulativeRecovered = document.getElementById("cumulativeRecovered");
    dailyCov.innerHTML = data.data.daily_covid_cases;
    dailyRec.innerHTML = data.data.daily_recovered;
    dailyDead.innerHTML = data.data.daily_deaths;
    cumulativeCovid.innerHTML = data.data.cumulative_covid_cases;
    cumulativeRecovered.innerHTML = data.data.cumulative_recovered_cases;

  })
  .catch((err) => {
    console.log(err);
  });
