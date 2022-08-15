// let correct = document.getElementById("Q1_correct");
// //  ＝１個 右側を左側に代入 idを取得するには""または''が必要
// console.log(correct);
// // デバック処理の時に使う デバック処理：バグを解決すること

// document.getElementById("Q1_correct").onclick=function(){
//     document.getElementById("Q1_correctbox").style.display="block";
// }

// /**
// * 折り畳み表示
// * 'openHere'というクラスに属するオブジェクトをインライン要素or非表示に変更する。
// */
// function openClose(){
//     var obj = document.getElementsByClassName('openHere');
//     for(var i=0;i<obj.length;i++){
//         //非表示ならインライン要素に変更。表示状態なら非表示に変更。
//         if(obj[i].style.display == "inline-block"){
//             obj[i].style.display = "none";
//         }
//         else{
//             obj[i].style.display = "inline-block";
//         }
//     }
// }

/**
// * 折り畳み表示
// * 'openHere'というクラスに属するオブジェクトをインライン要素or非表示に変更する。
// */
function openClose(){
    var obj = document.getElementsByClassName('Q1_correctbox');
    for(var i=0;i<obj.length;i++){
        //非表示ならインライン要素に変更。表示状態なら非表示に変更。
        if(obj[i].style.display == "block"){
            obj[i].style.display = "none";
        }
        else{
            obj[i].style.display = "block";
        }
    }
}

const list = document.getElementById('list');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {

  //li要素を生成する
  const li = document.createElement('li');
    //li要素にテキストを追加する
  li.textContent = 'これはリスト要素です';
    //li要素をul要素内に追加して表示する
  list.appendChild(li);

  })