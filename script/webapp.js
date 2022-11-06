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
(function () {
	'use strict';

	var type = 'bar';

	var data = {
		labels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,],
		datasets: [{
			data: [0, 2, 4, 6, 8],

		}]
	};

	var options = {
		scales: {
			yAxes: [{
				ticks: {
					// min: 0,
					// max: 400
					suggestedMin: 0,
					suggestedMax: 8,
					stepSize: 2,
					callback: function (value, index, values) {
						return  value + 'h' ;
					}
				}
			}]
		}
	};

	var ctx = document.getElementById('my_chart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: type,
		data: data,
		options: options
	});
})();


