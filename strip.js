/*
Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

  Examples
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
*/

const stripSentence = (str, chars) => {
  const strArr = str.split('')
  const charsArr = chars.split('')
  console.log(strArr, charsArr)
  let ret = ''
  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < charsArr; j++) {
      if (strArr[i] !== charsArr[j]) {
        ret += strArr[i]
      }
    }
  }
  return ret
}
