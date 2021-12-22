/**
 * 
 */
/*

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January',
				  'February',
				  'March',
				  'April',
				  'May',
				  'June',],
        datasets: [{
		    label: 'My First dataset',
		    backgroundColor: 'rgb(255, 99, 132)',
		    borderColor: 'rgb(255, 99, 132)',
		    data: [0, 10, 5, 2, 20, 30, 45],
		  }]
    },
    options: {
        /*scales: {
            y: {
                beginAtZero: true
            }
        }*/
/*    }
});
*/




const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, -10000, 5002, 19242, 20000, 30000, 45000],
  }]
};

const config = {
  	type: 'line',
 	 data: data,
 	options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );