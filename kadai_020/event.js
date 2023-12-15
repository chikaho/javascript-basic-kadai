// btnというid要素を取得し定数に代入する
const outputbtn = document.getElementById('btn');

// textというid要素を取得し定数に代入する
const outputext = document.getElementById('text') ;

 // HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {

 // text要素を新しく作成する
  const outputexttext = document.createElement('text');

  // 制作したtext要素に「ボタンをクリックしました」というテキストを追加する
  outputext.textContent = 'ボタンをクリックしました';

 
 
});