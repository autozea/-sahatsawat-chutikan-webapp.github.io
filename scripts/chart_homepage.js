fetch(
  "https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=e4c8dc0e-b89f-45f1-baac-2021109c7709a02ca5"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var dailyCov = data.data.daily_covid_cases;
    var yesterdayCov = data.data.yesterday_covid_general;
    var chart1 = document.getElementById("myChart");
    var myChart = new Chart(chart1, {
      type: "bar",
      data: {
        labels: ["เมื่อวาน", "วันนี้"],
        datasets: [
          {
            label: "จำนวนผู้ติดเชื้อ",
            data: [yesterdayCov, dailyCov],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((err) => {
    console.log(err);
  });

fetch(
  "https://api-lab-covid.mindbase.co.th/v2/stats/dailies?key=e4c8dc0e-b89f-45f1-baac-2021109c7709a02ca5&limit=14"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var nowweekCov = 0;
    var lastweekCov = 0;
    for (let i = 0; i < 7; i++) {
        var dailyforweekCov = data.data.details[i].daily_covid_general;
        nowweekCov += dailyforweekCov
        //console.log(nowweekCov)
    }
    for (let i = 7; i < 14; i++) {
        var dailyforlastweekCov = data.data.details[i].daily_covid_general;
        lastweekCov += dailyforlastweekCov
        //console.log(lastweekCov)
    }

    var chart2 = document.getElementById("myChart2");
    var myChart2 = new Chart(chart2, {
      type: "bar",
      data: {
        labels: ["สัปดาห์ที่แล้ว", "สัปดาห์นี้"],
        datasets: [
          {
            label: "จำนวนผู้ติดเชื้อ",
            data: [lastweekCov, nowweekCov],
            backgroundColor: [
              "rgba(200, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((err) => {
    console.log(err);
  });
