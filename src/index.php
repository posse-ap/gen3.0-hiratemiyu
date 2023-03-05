<?php
$dsn = 'mysql:dbname=webapp;host=db';
$user = 'root';
$password = 'root';

$dbh = new PDO($dsn, $user, $password);

// CREATE TABLE webapp.studies
// (   created_at DATE ,
//     study_hour INT,
//     content VARCHAR(255),
//     study_language VARCHAR(255));

$month = $dbh->query("SELECT date_format(created_at,'%Y %m') as 月ごとの学習時間 ,SUM(study_hour) FROM studies  group by 月ごとの学習時間")->fetchAll(PDO::FETCH_ASSOC);
$year = $dbh->query("SELECT date_format(created_at,'%Y') as 年ごとの学習時間 ,SUM(study_hour)  FROM studies  group by 年ごとの学習時間")->fetchAll(PDO::FETCH_ASSOC);
$all = $dbh->query("SELECT SUM(study_hour) as 合計時間 FROM studies")->fetchAll(PDO::FETCH_ASSOC);

    // 日ごとの時間を表示
    class Study {
        public $day;
        public $hours;
    
        public function get_day() {
            return $this->day;
        }
    
        public function get_hours() {
            return (int)$this->hours;
        }
    }

    $sql = "SELECT DATE_FORMAT(studies.created_at, '%Y-%m-%d') as day, sum(studies.study_hour) as hours FROM studies group by day";
    $studies = $dbh->query($sql)->fetchAll(\PDO::FETCH_CLASS, Study::class);
    $formatted_study_data = array_map(function($study) {
        return [$study->get_day(), $study->get_hours()];
    }, $studies);
    $chart_data = json_encode($formatted_study_data);

// print_r($month);
// print_r($year);
// print_r($all);
// print_r($chart_data);

?> 


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- googlFonts読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&amp;family=Plus+Jakarta+Sans:wght@400;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css"> 
    <link rel="stylesheet" href="./css/reset.css"> 
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous" defer></script>    
    <script src="https://unpkg.com/apexcharts/dist/apexcharts.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" defer></script>
    <script src="./script/webapp.js" defer></script>
</head>

<body>
    <header class="header">
        <div class="header_item">
            <div class="header_logo">
                <img class="header_logo_img" src="../img/logo.svg" alt="POSSE">
            </div>
            <div class="header_week">4th week</div>
            <div class="header_btn_box">
                <button id="modalOpen" class="header_btn" type="button">記録・投稿</button>
            </div>
            <!-- modal -->
            <div id="easyModal" class="modal">
                <div class="modal-content modal_content">
                        <!-- loading -->
                        <div class="spinner-box">
                            <div class="circle-border">
                                <div class="circle-core"></div>
                            </div>
                        </div>
    
                        <!-- complete -->
                        <div class="complete-box" id="completebox">
                            <div class="complete-mark"><img src="./img/チェックポイントのアイコン 1.png" class="complete-mark_img"
                                    alt="alt"></div>
                            <div class="complete-message">記録・投稿<br>完了しました</div>
                        </div>
                    <div class="modal-header">
                        <span class="modalClose">×</span>
                    </div>
                    <div class="modal-body" id="modalbody">
                        <div class="modal_both">
                            <div class="modal_left">
                                <div class="modal_title">学習日</div>
                                <input type="text" name="date" id="date">
                                <div class="modal_title">学習コンテンツ（複数選択可</div>
                                <div class="checkboxes">
                                    <input type="checkbox"> N予備校
                                    <input type="checkbox">ドットインストール
                                    <br>
                                    <input type="checkbox">POSSE課題
                                </div>

                                <div class="modal_title">学習言語</div>
                                <div class="checkboxes">
                                    <!-- idでinputとlabelを対応させる -->
                                    <input type="checkbox" id="check1"><label for="check1">HTML</label>
                                    <input type="checkbox" id="check2"><label for="check2">CSS</label>
                                    <input type="checkbox" id="check3"><label for="check3">JavaScript</label>
                                    <br>
                                    <input type="checkbox" id="check4"><label for="check4">PHP</label>
                                    <input type="checkbox" id="check5"><label for="check5">Laravel</label>
                                    <input type="checkbox" id="check6"><label for="check6">SQL</label>
                                    <input type="checkbox" id="check7"><label for="check7">SHELL</label>
                                    <br>
                                    <input type="checkbox">情報システム基礎知識（その他）
                                </div>
                            </div>

                            <div class="modal_right">
                                <div class="modal_title">学習時間
                                    <div>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="modal_title">Twitter用コメント
                                    <div>
                                        <textarea id="twitter_comment" name="Twitter_comment" rows="10"
                                            cols="30"></textarea>
                                    </div>
                                    <input id="checkbox_share" type="checkbox" name="checkbox">Twitterにシェアする
                                </div>
                            </div>
                        </div>
                        <button id="modal_record" class="header_btn modal_btn" type="button">記録・投稿</button>
                    </div>
                </div>

                <!-- カレンダー -->
                <div class="modal" id="modal_calender">
                    <div class="modal-content">
                        <div class="calender" id="calender_content">
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th id="prev">&laquo;</th>
                                            <th id="title" colspan="5">2020/05</th>
                                            <th id="next">&raquo;</th>
                                        </tr>
                                        <tr>
                                            <th>Sun</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                <div id="check">決定</div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </header>

    <main class="container">
        <!-- <div class="tofixed-wrapper"> -->
            <div class="box-wrapper1">
                <ul class="box1">
                    <li class="box-item">
                        <div class="box_item_title">Today</div>
                        <div class="box_item_inputhour">3</div>
                        <div class="box_item_hour">hour</div>
                    </li>
                    <li class="box-item">
                        <div class="box_item_title">Month</div>
                        <div class="box_item_inputhour">120</div>
                        <div class="box_item_hour">hour</div>
                    </li>
                    <li class="box-item">
                        <div class="box_item_title">Total</div>
                        <div class="box_item_inputhour">1348</div>
                        <div class="box_item_hour">hour</div>
                    </li>
                </ul>
                <!-- 棒グラフ -->
                <div class="box2">
                    <canvas class="bar_graph" id="my_bar_chart"></canvas>
                </div>
            </div>
            <div class="box-wrapper2">
                <div class="box3">
                    <h2>学習言語</h2>
                    <div id="myChart2" class="myChart2"></div>
                </div>
                <div class="box3">
                    <h2>学習コンテンツ</h2>
                    <div id="myChart3" class="myChart3"></div>
                </div>
            </div>
        </div>
    </main>
    <div class="date_box">
        <div class="arrow_left"></div>
        <div class="date">2020年 10月</div>
        <div class="arrow_right"></div>
    </div>
</body>

</html>

