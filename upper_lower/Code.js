/************************************
use case

function text1(){
  var text = "AbC";
  var lower = to_lower(text);
  Logger.log(lower);
}
=> abc

function text2(){
  var text = "AbC";
  var upper = to_upper(text);
  Logger.log(upper);
}
=> ABC
************************************/
function to_lower(text){
  var lower = text.toLowerCase();
  return lower;
}

function to_upper(text){
  var upper = text.toUpperCase();
  return upper;
}
