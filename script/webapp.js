const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const modalBody = document.getElementById('modalbody');
const completeMark = document.getElementById('completebox');




// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
	modal.style.display = 'block';
	completeMark.style.display = 'none';
	modalBody.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
	modal.style.display = 'none';

}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

// twitterにシェア→記録投稿→twitter画面→アニメーション
// twitterにシェアする
const checkbox = document.getElementByname('checkbox');
if(checkbox,checked){
	function OnButtonClick() {
		target = document.getElementById("modal_record");
		
		timerid = window.setTimeout(function () {
			let twitterShare = document.getElementById('checkbox_share');
			const textarea = document.getElementById('twitter_comment').value;
			if (twitterShare.addEventListener('click',function()) {
				window.open('https://twitter.com/intent/tweet?text=${textarea}')
			};
		}, 3000);
	}
}

	// ローディング画面
	$('.spinner-box').hide()
	$('.complete-box').hide()
    $('#modal_record').click(function () {
		$('.modal-body').fadeOut()
		$('.spinner-box').fadeIn()
		setTimeout(function () {
			$('.spinner-box').fadeOut()
			$('.complete-box').fadeIn()
		}, 3000);
	});




// 棒グラフ
var bar_ctx = document.getElementById('my_bar_chart').getContext('2d');

var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
purple_orange_gradient.addColorStop(0, '#3BCFFF');
purple_orange_gradient.addColorStop(1, '#1174BD');

var bar_chart = new Chart(bar_ctx, {
	type: 'bar',
	data: {
		labels: [, 2, , 4, , 6, , 8, , 10, , 12, , 14, , 16, , 18, , 20, , 22, , 24, , 26, , 28, , 30],
		datasets: [{
			data: [0, 2, 4, 6, 8, 3, 3, 3, 4,],
			backgroundColor: purple_orange_gradient,
			hoverBackgroundColor: purple_orange_gradient,
			hoverBorderWidth: 2,
			hoverBorderColor: 'purple'
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					// min: 0,
					// max: 400
					suggestedMin: 0,
					suggestedMax: 8,
					stepSize: 2,
					callback: function (value, index, values) {
						return value + 'h';
					}
				},
				gridLines: {
					display: false,
					drawBorder: false,
				}
			}],
			xAxes: [{
				gridLines: {
					display: false,
					drawBorder: false,
				}
			}],
		},
		legend: {
			display: false,

		}
	}
})

//ドーナツグラフ
var options = {
	chart: {
		type: 'donut',
	},
	series: [42, 18, 10, 8, 7, 5, 5, 5],
	labels: ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識（その他）',],
	plotOptions: {
		pie: {
			offsetY: 20,
			donut: {
				size: "50px",
			}
		}
	},
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 100
			},
			legend: {
				position: 'bottom'
			}
		}
	}],
	colors: ['#0345EC', '#0F72BD', '#20BDDE', '#3DCEFE', '#B29EF3', '#6D46EC', '#4A18EF', '#3105C0',],
	yaxis: {
		labels: {
			formatter: function (value) {
				return value + "%";
			}
		},
	},
	xaxis: {
		labels: {
			formatter: function (value) {
				return value;
			}
		}
	},
};

var chart = new ApexCharts(document.querySelector("#myChart2"), options);
chart.render();

// ドーナツグラフ2
var options = {
	series: [42, 33, 25,],
	labels: ['ドットインストール', 'Ｎ予備校', 'POSSE課題',],
	chart: {
		type: 'donut',
	},
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: 200
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'left',
				fontsize: "15px",
			}
		}
	}],
	colors: ['#0345EC', '#0F72BD', '#20BDDE',],
	yaxis: {
		labels: {
			formatter: function (value) {
				return value + "%";
			}
		},
	},
	xaxis: {
		labels: {
			formatter: function (value) {
				return value;
			}
		}
	}
};

var chart = new ApexCharts(document.querySelector("#myChart3"), options);
chart.render();






