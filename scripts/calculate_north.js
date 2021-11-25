fetch(
  "https://api-lab-covid.mindbase.co.th/v2/stats/provinces/daily?key=2f082573-f921-4441-9838-202108a3f4b5116e9c"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var ul = document.getElementById("myUL");
    ul.style.listStyleType = "none";

    list_north_no = ["12", "2", "13", "34", "31", "8", "10", "48", "25"];
    let sum_today = 0;
    data.data.provinces.forEach((province) => {
      if (list_north_no.includes(province.no)) {
        var li = document.createElement("li");
        var today_sum = document.getElementById("sum_today");
        sum_today += province.count;
        today_sum.innerHTML = sum_today.toLocaleString("en");
        li.innerHTML = `<a href="#">${province.name_th}</a>`;
        ul.appendChild(li);
        // console.log(province.count);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    list_north_name = [
      "เชียงใหม่",
      "แม่ฮ่องสอน",
      "เชียงราย",
      "อุตรดิตถ์",
      "พะเยา",
      "แพร่",
      "ลำปาง",
      "ลำพูน",
      "น่าน",
    ];
    var array = [];
    for (let i = 0; i < data.length - 1; i++) {
      var li = document.createElement("li");
      var province = data[i].province;
      li.innerHTML += province;
      array.push(province);
    }

    let sum_total_case = 0;
    let sum_today_death = 0;
    let sum_total_death = 0;
    let new_case_excludeabroad = 0;
    let check_today_case = 0;
    let sum_abroad_case = 0;
    let date_update_day;
    data.forEach((north_name) => {
      // console.log(array.includes(north_name));
      if (list_north_name.includes(north_name.province)) {
        var date_update = document.getElementById("date_update");
        date_update_day = ": " + north_name.update_date + " น.";
        date_update.innerHTML = date_update_day;

        //calculate sum_total_case ผู้ป่วยสะสม
        var today_total_case = document.getElementById("sum_total_case");
        sum_total_case += north_name.total_case;
        today_total_case.innerHTML = sum_total_case.toLocaleString("en");
        console.log(sum_total_case);

        //calculate sum_today_death เสียชีวิตเพิ่มวันนี้
        var today_death = document.getElementById("sum_today_death");
        sum_today_death += north_name.new_death;
        today_death.innerHTML = sum_today_death.toLocaleString("en");

        //calculate sum_total_death เสียชีวิตสะสม
        var today_total_death = document.getElementById("sum_total_death");
        sum_total_death += north_name.total_death;
        today_total_death.innerHTML = sum_total_death.toLocaleString("en");

        //calculate ติดเชื้อวันนี้
        check_today_case += north_name.new_case;
        console.log(check_today_case);

        //calculate new_case_excludeabroad ในประเทศ
        var today_new_case_excludeabroad = document.getElementById(
          "sum_new_case_excludeabroad"
        );
        new_case_excludeabroad += north_name.new_case_excludeabroad;
        today_new_case_excludeabroad.innerHTML =
          new_case_excludeabroad.toLocaleString("en");

        //abroad
        var today_abroad_case = document.getElementById("abroad_case");
        sum_abroad_case = check_today_case - new_case_excludeabroad;
        today_abroad_case.innerHTML = sum_abroad_case.toLocaleString("en");
      }
    });
  })

  .catch((err) => {
    console.log(err);
  });
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}
var ul = document.getElementById("myUL");
var div = document.getElementById("test");
var table = document.getElementById("table");
var back = document.getElementById("back");

ul.onclick = function (event) {
  var target = getEventTarget(event);
  console.log(event);
  table.style.display = "none";

  const goback = document.createElement("a");
  goback.innerHTML = "ย้อนกลับ";
  goback.href = "./region-north.html";
  back.appendChild(goback);

  var province = document.createElement("h3");
  province.innerHTML = target.innerHTML;
  document.getElementById("headProvince").appendChild(province);
  // console.log(array);
  console.log();
  const p = document.createElement("p");
  p.innerHTML = "ติดเชื้อเพิ่มวันนี้";
  const newcase = document.createElement("div");
  newcase.style =
    "background-color: red;margin:1%;color: white;height: 200px;width: 400px;";
  console.log(p);
  newcase.appendChild(p);

  const b = document.createElement("p");
  b.innerHTML = "เสียชีวิตเพิ่มวันนี้";
  const newdeath = document.createElement("div");
  newdeath.style =
    "background-color: gray;margin: 1%;color: white;height: 200px;width: 400px;";
  newdeath.appendChild(b);

  const a = document.createElement("p");
  a.innerHTML = "เสียชีวิตสะสม";
  const totalcase = document.createElement("div");
  totalcase.style =
    "height:45%;background-color: black;color: white;width: 400px;";
  totalcase.appendChild(a);

  const c = document.createElement("p");
  c.innerHTML = "ผู้ป่วยสะสม";
  const totaldeath = document.createElement("div");
  totaldeath.style =
    "height:45%;background-color: black;color: white;width: 400px;";
  totaldeath.appendChild(c);

  const total = document.createElement("div");
  total.style = "height:200px;margin:0 1% 0 1%";
  total.appendChild(totalcase);
  total.appendChild(totaldeath);

  div.style = "display: flex;padding: 0;justify-content: space-around;";
  div.appendChild(newcase);
  div.appendChild(newdeath);
  div.appendChild(total);
};
