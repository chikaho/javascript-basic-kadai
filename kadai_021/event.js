// textというid要素を取得し定数に代入する
const outputText = document.getElementById('text');
// btnというid要素を取得し定数に代入する
const outputBtn = document.getElementById('btn');

// btn要素がクリックされた時にイベントを処理を実行する
btn.addEventListener('click', () => {

// 2秒（2000ミリ秒）の待ち時間を設定し非同期処理を実行する
setTimeout(() => {
  console.log('ボタンをクリックしました');

  // 要素を新しく作成する
  const outputTextnew = document.createElement('text');

  // 制作っしたtext要素に「ボタンをクリックしました」というテキストを追加する
  outputText.textContent = 'ボタンをクリックしました'
}, 2000);
});
 



