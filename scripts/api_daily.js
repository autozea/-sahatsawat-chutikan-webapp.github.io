fetch(
  "https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=e4c8dc0e-b89f-45f1-baac-2021109c7709a02ca5"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var dailyCov = data.data.daily_covid_cases;
    var dailyRec = data.data.daily_recovered;
    var dailyDead = data.data.daily_deaths;
    var cumulativeCovid = data.data.cumulative_covid_cases;
    var cumulativeRecovered = data.data.cumulative_recovered_cases;
    var date = data.data.updated_date;
    var lens = data.data.dictionary.sources.length;
    document.getElementById("sourceTopic").innerHTML = "&nbsp ที่มา";
    for (let i = 0; i < lens; i++) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      var link = data.data.dictionary.sources[i];
      a.innerHTML = link;
      a.href = link;
      li.appendChild(a);

      document.getElementById("source").appendChild(li);
      // console.log(stmonthCov);
    }
    document.getElementById("source").style.textAlign = "left";
    dailyCov = dailyCov.toLocaleString("en");
    dailyRec = dailyRec.toLocaleString("en");
    dailyDead = dailyDead.toLocaleString("en");
    cumulativeCovid = cumulativeCovid.toLocaleString("en");
    cumulativeRecovered = cumulativeRecovered.toLocaleString("en");

    document.getElementById("dailyCovid").innerHTML = dailyCov;
    document.getElementById("dailyRecovered").innerHTML = dailyRec;
    document.getElementById("dailyDead").innerHTML = dailyDead;
    document.getElementById("cumulativeCovid").innerHTML = cumulativeCovid;
    document.getElementById("cumulativeRecovered").innerHTML =
      cumulativeRecovered;
    document.getElementById("update").innerHTML =
      "อัพเดตข้อมูลล่าสุด : " + date + " น.";
  })
  .catch((err) => {
    console.log(err);
  });
