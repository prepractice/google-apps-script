/************************************
use case

function test(){
  var match_words = ["hello", "world"];
  var and_regexp = get_and_regexp(match_words);
  Logger.log(and_regexp);
}
************************************/
function get_and_regexp(match_words) {
  var and_pattern = "";
  for (var i = 0; i < match_words.length; i++) {
    and_pattern += "(?=.*" + match_words[i] + ")";
  }
  var and_regexp = new RegExp("^" + and_pattern);
  return and_regexp;
}
