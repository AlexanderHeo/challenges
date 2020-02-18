/*
Create a function that takes two strings and returns true if the first string
ends with the second string
*/
function checkEnding(str1, str2) {
  var length = str1.length - str2.length;
  var spliced = str1.slice(length, str1.length);
  if (spliced === str2) {
    return true;
  } return false;
}

console.log(checkEnding("abc", "bc")) //➞ true
console.log(checkEnding("abc", "d")) //➞ false
console.log(checkEnding("samurai", "zi")) //➞ false
console.log(checkEnding("feminine", "nine")) //➞ true
console.log(checkEnding("convention", "tio")) //➞ false
