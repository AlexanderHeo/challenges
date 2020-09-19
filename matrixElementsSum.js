/*
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9
*/

function matrixElementsSum(matrix) {
  var totalSum = 0;
  var topRow = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (i === 0 && matrix[i][j] > 0) {
        totalSum += matrix[i][j];
        // console.log('first sum:', totalSum);
        topRow.push(j);
      }
    }

    if (i > 0) {
      const topRowCopy = [...topRow];
      for (var k = 0; k < topRow.length; k++) {
        if (matrix[i][topRow[k]] > 0 && matrix[i - 1][topRow[k]] > 0) {
          totalSum += matrix[i][topRow[k]];
        } else if (matrix[i][topRow[k]] === 0) {
          topRowCopy.splice(k, 1);
        }
      }
      topRow = [...topRowCopy];
    }
  }
  return totalSum;
}

/*
matrix: [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]
Output:
9

matrix:
[[1,1,1,0],
 [0,5,0,1],
 [2,1,3,10]]
Output:
9

matrix:
[[1,1,1],
 [2,2,2],
 [3,3,3]]
Output:
18

matrix: [[0]]
Output:
0

matrix:
[[1,0,3],
 [0,2,1],
 [1,2,0]]
Output:
5

matrix:
[[1],
 [5],
 [0],
 [2]]
Output:
6

matrix: [[1,2,3,4,5]]
Output:
15

matrix:
[[2],
 [5],
 [10]]
Output:
17

matrix:
[[4,0,1],
 [10,7,0],
 [0,0,0],
 [9,1,2]]
Output:
15

matrix: [[1]]
Output:
1
*/
