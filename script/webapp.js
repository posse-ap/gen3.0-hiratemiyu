const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const modalBody = document.getElementById('modalbody');
const completeMark = document.getElementById('completebox');
const modalContent = document.querySelector(".modal_content");
const date = document.getElementById("date");
const calenderContent = document.getElementById("modal_calender");


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

// カレンダーを出せ
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
	modal.style.display = 'block';
	completeMark.style.display = 'none';
	modalBody.style.display = 'block';
}


//openTwitter(投稿文、シェアするURL、ハッシュタグ、提供元アカウント)

function openTwitter() {
	const comment = document.getElementById("twitter_comment").value;
	var turl = "https://twitter.com/intent/tweet?text="+comment;
	window.open(turl,'_blank');
}


	// ローディング画面
	$('.spinner-box').hide()
	$('.complete-box').hide()
    $('#modal_record').click(function () {
		//呼び出し例：
		if(document.getElementById("checkbox_share").checked){openTwitter();}
			$('.modal-body').fadeOut()
			$('.calender').fadeOut()
			$('.spinner-box').fadeIn()
			setTimeout(function () {
				$('.spinner-box').fadeOut()
				$('.complete-box').fadeIn()
			}, 3000);
		});
		


// カレンダー
date.addEventListener('click', calenderOpen);
function calenderOpen() {
	modal.style.display = 'block';
	completeMark.style.display = 'none';
	modalBody.style.display = 'none';
    calenderContent.style.display = 'block';
	modalContent.style.display = 'none';
};

const check = document.getElementById("check");

check.addEventListener('click', calenderClose);
function calenderClose() {
	calenderContent.style.display = 'none';
	modalContent.style.display = 'block';
	modalBody.style.display = 'block';
}

console.clear();
{
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    function getCalendarHead() {
        const dates = [];
        const d = new Date(year, month, 0).getDate();
        const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      // 30
      // 29, 30
      // 28, 29, 30
        dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
        });
    }

    return dates;
    }

    function getCalendarBody() {
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
        dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
        });
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
        dates[today.getDate() - 1].isToday = true;
    }

    return dates;
    }

    function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
        dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
        });
    }

    return dates;
    }

    function clearCalendar() {
    const tbody = document.querySelector('tbody');

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    }

    function renderTitle() {
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.getElementById('title').textContent = title;
    }

    function renderWeeks() {
    const dates = [
        ...getCalendarHead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
        weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
        const tr = document.createElement('tr');
// 1個1個
        week.forEach(date => {
        const td = document.createElement('td');

// 仮引数.value date(peoperty)の中の項目(number)
        td.textContent = date.date;
        if (date.isToday) {
            td.classList.add('today');
        }
        if (date.isDisabled) {
            td.classList.add('disabled');
        }

        tr.appendChild(td);
		td.addEventListener('click',()=>{
			const yearMonth = document.getElementById("title");
			console.log(yearMonth);
			console.log(yearMonth.innerHTML);
			console.log(yearMonth.innerHTML+"/"+td.innerHTML);
            // yearMonth.innerHTML;
			const date = document.getElementById("date");
			date.value = yearMonth.innerHTML+"/"+td.innerHTML
		})
        });
        document.querySelector('tbody').appendChild(tr);
    });
    }

    function createCalendar() {
        clearCalendar();
        renderTitle();
        renderWeeks();
    }

    document.getElementById('prev').addEventListener('click', () => {
    month--;
    if (month < 0) {
        year--;
        month = 11;
    }

    createCalendar();
    });

    document.getElementById('next').addEventListener('click', () => {
    month++;
    if (month > 11) {
        year++;
        month = 0;
    }

    createCalendar();
    });

    createCalendar();
}


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
		
	},
})

//ドーナツグラフ2
var options = {
	chart: {
		type: 'donut',
		width:'35%',
		height:'80%',
	},
	series: [42, 18, 10, 8, 7, 5, 5, 5],
	labels: ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識（その他）',],
	plotOptions: {
		donut: {
			offsetY: 20,

		}
	},
	legend: {
		position: 'bottom',
		horizontalAlign: 'left',

	},
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				type: 'donut',
				width:'80%',
				height:'90%',
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'left',
				fontSize: '10px',
			},
		},
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



// ドーナツグラフ3
var options = {
	series: [42, 33, 25,],
	labels: ['ドットインストール', 'Ｎ予備校', 'POSSE課題',],
	chart: {
		type: 'donut',
		width:'35%',
		height:'80%',
	},
	legend: {
		position: 'bottom',
		horizontalAlign: 'left',
		fontsize: "10px",
	},
	responsive: [{
		breakpoint: 768,
		options: {
			chart: {
				type: 'donut',
				width:'70%',
				height:'80%',
			},
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
	},
};

var chart = new ApexCharts(document.querySelector("#myChart3"), options);
chart.render();







