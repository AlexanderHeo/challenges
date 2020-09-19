/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/

const allLongestStrings = (inputArray) => {
  let longestLength = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
    }
  }
  const outputArray = [];
  for (var j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longestLength) {
      outputArray.push(inputArray[j]);
    }
  }
  return outputArray;
};

/*

Input:
inputArray:
["aba",
 "aa",
 "ad",
 "vcd",
 "aba"]
Expected Output:
["aba",
 "vcd",
 "aba"]

 Input:
inputArray: ["aa"]
Expected Output:
["aa"]

Input:
inputArray:
["abc",
 "eeee",
 "abcd",
 "dcd"]
Expected Output:
["eeee",
 "abcd"]

 Input:
inputArray:
["a",
 "abc",
 "cbd",
 "zzzzzz",
 "a",
 "abcdef",
 "asasa",
 "aaaaaa"]
Expected Output:
["zzzzzz",
 "abcdef",
 "aaaaaa"]

 Input:
inputArray:
["enyky",
 "benyky",
 "yely",
 "varennyky"]
Expected Output:
["varennyky"]

Input:
inputArray:
["abacaba",
 "abacab",
 "abac",
 "xxxxxx"]
Expected Output:
["abacaba"]

Input:
inputArray:
["young",
 "yooooooung",
 "hot",
 "or",
 "not",
 "come",
 "on",
 "fire",
 "water",
 "watermelon"]
Expected Output:
["yooooooung",
 "watermelon"]

 Input:
inputArray:
["onsfnib",
 "aokbcwthc",
 "jrfcw"]
Expected Output:
["aokbcwthc"]

Input:
inputArray: ["lbgwyqkry"]
Expected Output:
["lbgwyqkry"]

Input:
inputArray: ["i"]
Expected Output:
["i"]

*/
