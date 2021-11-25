fetch(
  "https://api-lab-covid.mindbase.co.th/v2/stats/dailies?key=e4c8dc0e-b89f-45f1-baac-2021109c7709a02ca5&limit=14"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var dailyCov = data.data.details[0].daily_covid_cases;
    var yesterdayCov = data.data.details[1].daily_covid_cases;
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
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,

        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    var nowweekCov = 0;
    var lastweekCov = 0;
    for (let i = 0; i < 7; i++) {
      var dailyforweekCov = data.data.details[i].daily_covid_cases;
      nowweekCov += dailyforweekCov;
      // console.log(nowweekCov);
    }
    for (let i = 7; i < 14; i++) {
      var dailyforlastweekCov = data.data.details[i].daily_covid_cases;
      lastweekCov += dailyforlastweekCov;
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
        plugins: {
          legend: {
            display: false,
          },
        },
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

fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var stweekCov = 0;
    var ndweekCov = 0;
    var rdweekCov = 0;
    var thweekCov = 0;
    var len = data.length;
    // console.log(data[len-1].new_case);

    for (let i = 1; i <= 7; i++) {
      var stforweekCov = data[len - i].new_case;
      stweekCov += stforweekCov;
      // console.log(stweekCov);
    }
    for (let i = 8; i <= 14; i++) {
      var ndforweekCov = data[len - i].new_case;
      ndweekCov += ndforweekCov;
      // console.log(ndweekCov)
    }
    for (let i = 15; i <= 21; i++) {
      var rdforweekCov = data[len - i].new_case;
      rdweekCov += rdforweekCov;
      // console.log(rdweekCov)
    }
    for (let i = 22; i <= 28; i++) {
      var thforweekCov = data[len - i].new_case;
      thweekCov += thforweekCov;
      // console.log(thweekCov)
    }

    var chart3 = document.getElementById("myChart3");
    var myChart3 = new Chart(chart3, {
      type: "bar",
      data: {
        labels: ["สัปดาห์ที่1", "สัปดาห์ที่2", "สัปดาห์ที่3", "สัปดาห์ที่4"],
        datasets: [
          {
            label: "จำนวนผู้ติดเชื้อ",
            data: [thweekCov, rdweekCov, ndweekCov, stweekCov],
            backgroundColor: [
              "rgba(200, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(200, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    var stmonthCov = 0;
    var ndmonthCov = 0;
    var rdmonthCov = 0;
    for (let i = 1; i <= 30; i++) {
      var stformontCov = data[len - i].new_case;
      stmonthCov += stformontCov;
      // console.log(stmonthCov);
    }
    for (let i = 31; i <= 60; i++) {
      var ndformontCov = data[len - i].new_case;
      ndmonthCov += ndformontCov;
      // console.log(ndmonthCov)
    }
    for (let i = 61; i <= 90; i++) {
      var rdformontCov = data[len - i].new_case;
      rdmonthCov += rdformontCov;
      // console.log(rdmonthCov)
    }
    var chart4 = document.getElementById("myChart4");
    var myChart4 = new Chart(chart4, {
      type: "bar",
      data: {
        labels: ["เดือนก่อนหน้า", "เดือนที่แล้ว", "เดือนนี้"],
        datasets: [
          {
            label: "จำนวนผู้ติดเชื้อ",
            data: [rdmonthCov, ndmonthCov, stmonthCov],
            backgroundColor: [
              "rgba(200, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(200, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
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
