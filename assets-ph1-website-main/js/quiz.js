"use strict" ;

// 3をxに代入する（右から左） const=constant,1つしか代入できない
// const x = 3 ; 

// 各問題の中での処理
// const x = 指示（'.クラス名'）(# id名) (属性）←何も書いてない
//   allQuiz.forEach(quiz => {
//     const answers = quiz.querySelectorAll('.js-answer');
//     const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
//     const answerBox = quiz.querySelector('.js-answerBox');
//     const answerTitle = quiz.querySelector('.js-answerTitle');
//     const answerText = quiz.querySelector('.js-answerText');

// 指示するやつ
// getElementById (Id名（属性そのものではない）id = a)のa の方
// getElementByClassName（class名）

// getAttribute(属性（classとか、idとか、data（jsの時に出てくる）とか）)

// get系＝取得する https://web-tsuku.life/getattribute/
// answerの設定方法 cocnstを使って定義 document htmlのid名 属性を取得したら値を返される

// classは同じ名前を何回も使える（同時多発テロになる）、idでやるとミスが少ない（同時に1発）

// Q1
const choice = document.getElementById('Q1_correct');
const answer = document.getElementById('correctbox');
const wrongchoice = document.getElementById('Q1_incorrect_1');
const wronganswer = document.getElementById('incorrectbox');

choice.addEventListener('click', () => {
    choice.classList.add('is-clicked');
    answer.classList.add('is-selected');
    wrongchoice.classList.add('another_is-selected') ;
    wrongchoice_2.classList.add('another_is-selected') ;
    // clickしたら表示には関係ない、data-answer = 1 正解、不正解で数字を分けると処理の違いを数字で分けられる 正解→1の処理、不正解→0の処理かも
    const selectedAnswer = Number(answer.getAttribute('data-answer'));})

wrongchoice.addEventListener('click', () => {
        wrongchoice.classList.add('is-clicked');
        wronganswer.classList.add('is-selected');
        choice.classList.add('another_is-selected') ;
        wrongchoice_2.classList.add('another_is-selected') ;
    })

const wrongchoice_2 = document.getElementById('Q1_incorrect_2');
const wronganswer_2 = document.getElementById('incorrectbox');

    wrongchoice_2.addEventListener('click', () => {
        wrongchoice_2.classList.add('is-clicked');
        wronganswer_2.classList.add('is-selected');
        choice.classList.add('another_is-selected') ;
        wrongchoice.classList.add('another_is-selected') ;
    })

// Q2
    const Q2_choice = document.getElementById('Q2_correct');
    const Q2_answer = document.getElementById('Q2_correctbox');
    
    Q2_choice.addEventListener('click', () => {
        Q2_answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));})

    