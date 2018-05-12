/************************************
use case

function test1(){
  var zen = "ａｂｃＡＢＣ１２３";
  var han = to_han(zen);
  Logger.log(han);
}
=> abcABC123

function test2(){
  var han = "abcABC123";
  var zen = to_zen(han);
  Logger.log(zen);
}
=> ａｂｃＡＢＣ１２３
************************************/
function to_han(zen) {
  var han = "";
  var pattern = /[！-～]/;
  for (var i = 0; i < zen.length; i++) {
    if(pattern.test(zen[i])){
      var letter = String.fromCharCode(zen[i].charCodeAt(0) - 65248);
      han += letter;
    }else{
      han += zen[i];
    }
  }
  return han;
}

function to_zen(han) {
  var zen = "";
  var pattern = /[!-~]/;
  for (var i = 0; i < han.length; i++) {
    if(pattern.test(han[i])){
      var letter = String.fromCharCode(han[i].charCodeAt(0) + 65248);
      zen += letter;
    }else{
      zen += han[i];
    }
  }
  return zen;
}
