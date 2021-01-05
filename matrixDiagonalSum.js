/*

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:

Input: mat = [[5]]
Output: 5

*/

const diagonalSum = matrix => {
	if (matrix.length === 1) {
		return matrix[0][0]
	}
	let sum = 0
	for (var i = 0, j = matrix.length - 1;
		i < matrix.length, j >= 0;
		i++, j--) {
		sum += matrix[i][i]
		sum += matrix[i][j]
	}
	if (matrix.length % 2 !== 0) {
		sum -= matrix[Math.ceil(matrix.length / 2) - 1][Math.ceil(matrix.length / 2) - 1]
	}
	return sum
}

console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]))

console.log(diagonalSum([[5]]))

console.log(diagonalSum([[7,3,1,9],[3,4,6,9],[6,9,6,6],[9,5,8,5]]))
// console.log(7+4+6+5+9+6+9+9)
