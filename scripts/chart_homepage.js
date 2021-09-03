var chart1 = document.getElementById('myChart');
var myChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['เมื่อวาน', 'วันนี้'],
        datasets: [{
            label: 'จำนวนผู้ติดเชื้อ',
            data: [16536, 15972],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var chart2 = document.getElementById('myChart2');
var myChart2 = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['สัปดาห์ที่แล้ว', 'สัปดาห์นี้'],
        datasets: [{
            label: 'จำนวนผู้ติดเชื้อ',
            data: [16536, 10000],
            backgroundColor: [
                'rgba(200, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});