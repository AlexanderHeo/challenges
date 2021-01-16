/*
Given an integer n, return an array of all possible permutations of arrays [0, 1, ..., n]

Example 1:

Input
n = 2

Output
[ [1,2], [2,1] ]

Example 2:

Input
n = 3

Output
[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]


Input
n = 4

Output
[[1,2,3,4],[1,2,4,3],[1,4,2,3],[1,4,3,2],[1,3,2,4],[1,3,4,2],[2,1,3,4],[2,1,4,3],[2,4,1,3],[2,4,3,1],[2,3,1,4],[2,3,4,1],[3,1,2,4],[3,1,4,2],[3,4,1,2],[3,4,2,1],[3,2,1,4],[3,2,4,1],[4,1,2,3],[4,1,3,2],[4,3,1,2],[4,3,2,1],[4,2,1,3],[4,2,3,1]]

1 >= n >= 5
*/


var permArr = []
var usedChars = []
function permute (input) {
	var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
}

console.log(permute([1,2,3,4]))
