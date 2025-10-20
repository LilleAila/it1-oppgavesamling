// Enkelt eksempel på bruk av Chart.js
// Det første eksemeplet er eit såkalla bar chart, dette er ein type søylediagram
// Sjå ein nærare forklaring her: https://www.chartjs.org/docs/latest/getting-started/ 

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Det andre eksempelet er eit såkalla line chart, dette er ein type linjediagram
// Sjå ein nærare forklaring her: https://www.chartjs.org/docs/latest/charts/line.html

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });