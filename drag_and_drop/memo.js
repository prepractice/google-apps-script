/************************************
参考
HTML ドラッグ＆ドロップ API
https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API

ドラッグ操作
https://developer.mozilla.org/ja/docs/DragDrop/Drag_Operations#drageffects

推奨されるドラッグのデータ型
https://developer.mozilla.org/ja/docs/DragDrop/Recommended_Drag_Types

複数の項目のドラッグ＆ドロップ
https://developer.mozilla.org/ja/docs/DragDrop/Dragging_and_Dropping_Multiple_Items

DataTransfer
https://developer.mozilla.org/ja/docs/Web/API/DataTransfer#setData.28.29


ドラッグデータは「データの型」と「データの値」を持つ
データの型は「text/plain」などで指定してデータの値は文字列で指定する

setData(String type, String data)
getData(String type)
clearData([optional] String type)


preventDefault()
ドロップを許可したい場合はpreventDefault()で既定の動作を無効にできる。
dragenter, dragover も preventDefault() でその場所がドロップ可能な場所であることを示す。
特定の状況でのみpreventDefault() を実行したい場合は条件判定を入れると良い。


var cards = document.querySelectorAll('.card');//document.querySelectorAllセレクタにマッチするエレメントをすべて取得する
console.log(cards);
var cards_array = [];
cards_array.forEach.call(cards, function(card) {
  card.addEventListener('dragstart', drag_start, false);
  card.addEventListener('dragenter', drag_enter, false);
  card.addEventListener('dragover', drag_over, false);
  card.addEventListener('dragleave', drag_leave, false);
  card.addEventListener('drop', drag_drop, false);
  card.addEventListener('dragend', drag_end, false);
});
************************************/