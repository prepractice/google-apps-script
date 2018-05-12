/************************************
use case

function text1(){
  var text = "漢字ひらカナabc123";
  var regexp = /[a-zA-Z0-9]+/g;
  var array = text_split(text, regexp);
  Logger.log(array);
}
=> [abc123]

function text2(){
  var text = "漢字ひらカナabc123";
  var array = text_split_with_hira(text);
  Logger.log(array);
}
=> [漢字, ひら, カナ, abc123]

function text3(){
  var text = "漢字ひらカナabc123";
  var array = text_split_without_hira(text);
  Logger.log(array);
}
=> [漢字, カナ, abc123]

regexp examples
/[〇〆々㐂-頻]+/g　//漢字(including JIS level1-4)
/[ぁ-ゟー]+/g //ひらがな
/[゠-ヿ]+/g //カタカナ
/[ｦ-ﾟ]+/g //半角カタカナ
/[a-zA-Z]+/g //半角英語
/[0-9]+/g //半角数字
/[ａ-ｚＡ-Ｚ]+/g //全角英語
/[０-９]+/g //全角数字
/[a-zA-Z0-9]+/g //半角英数字
/[ａ-ｚＡ-Ｚ０-９]+/g //全角英数字
/[!-\/:-@[-`{-~]+/g //半角記号
/[！-／：-＠［-｀｛-～]+/g //全角記号

FYI
http://www.pre-practice.net/p/contents.html#regexp
************************************/
function text_split(text, regexp) {
  var match_words = text.match(regexp);
  return match_words;
}

function text_split_with_hira(text) {
  var regexp = /[〇〆々㐂-頻]+|[ぁ-ゟー]+|[゠-ヿ]+|[ｦ-ﾟ]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+/g;
  var match_words = text.match(regexp);
  return match_words;
}

function text_split_without_hira(text) {
  var regexp = /[〇〆々㐂-頻]+|[゠-ヿ]+|[ｦ-ﾟ]+|[a-zA-Z0-9-]+|[ａ-ｚＡ-Ｚ０-９]+/g;
  var match_words = text.match(regexp);
  return match_words;
}
