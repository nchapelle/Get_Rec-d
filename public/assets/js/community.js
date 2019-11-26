$(document).ready(function() {
	var chartNames = [];
	var chartData = [];
//This is a call to update the database
	$("#updateOne").on("click", function(event) {
		event.preventDefault();
		var updateName = {
			id: 12,
			league_name: $("#updateSelection").val().trim()
		};
		$.ajax("/api/chart", {
		type: "PUT",
		data: updateName
		}).then(
		function() {
			console.log("Updated")
//			location.reload();
		}
		);
	});
//This is the call to create a new database entry
	$("#create").on("click", function(event) {
		event.preventDefault();
		var newLeague = {
			stat1: $("#league1").val().trim(),
			stat2: $("#league2").val().trim(),
			stat3: $("#league3").val().trim(),
			stat4: $("#league4").val().trim(),
			stat5: $("#league5").val().trim(),
			leagename: $("#league").val().trim(),
			teamname: $("#league6").val().trim(),
			username: $("#league7").val().trim()
		};
		console.log(newLeague)
		$.post("/api/chart", newLeague)
		//.then(getLeagues);
	});
//This is the call to get something from the database
//	function getLeagues() {
	$("#getAll").on("click", function(event) {
		event.preventDefault();
		$.get("/api/chart", function(data) {
		console.log(data)
		chartData.push(data[0].stat1);
		chartData.push(data[0].stat2);
		chartData.push(data[0].stat3);
		chartData.push(data[0].stat4);
		chartData.push(data[0].stat5);
		console.log(chartData)
		createChart2(chartData);
		// var rowsToAdd = [];
		// for (var i = 0; i < data.length; i++) {
		// 	chartData.push(data[i]);
		// }
		})
	});
//	};
	$("#getOne").on("click", function(event) {
		event.preventDefault();
		var id=12;
		var getName = {
			id: 12,
			league_name: $("#selectOne").val().trim()
			};	
		var getCategory = $("#selectOne").val().trim();
		console.log(getCategory)
		$.get("/api/chart/" + getCategory, function(data) {
		console.log(data)
		var rowsToAdd = [];
		for (var i = 0; i < data.length; i++) {
			rowsToAdd.push(data[i]);
		}
		})
	});
//This is the call to delete something from the database 
	$("#destroyAll").on("click", function(event) {
		event.preventDefault();
			$.ajax({
			method: "DELETE",
			url: "/api/chart"
			})
			.then(function() {
			console.log("Deleted");
			});
	});

function createChart2 (chartData) {
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
});