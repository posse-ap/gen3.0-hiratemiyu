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
			data: [1, 2, 4, 6, 8, 3, 3, 3, 4,],
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
					suggestedMax: 10,
					stepSize: 2,
					callback: function (value, index, values) {
						return value + 'h';
					}
				}
			}],
			xAxes: [{
				ticks: {
					stepSize: 2,
				}
			}],
		},
		legend: {
			display: false,
		}
	}
})

// 円グラフ



