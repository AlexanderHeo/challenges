/*

Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

*/
const oddCells = (n, m, indices) => {
	const output = []
	let count = 0
	while (n > 0) {
		const inner = new Array(m).fill(0)
		output.push(inner)
		n--
	}

	for (let i = 0; i < indices.length; i++) {
		const row = indices[i][0]
		const col = indices[i][1]

		for (let r = 0; r < output[row].length; r++) {
			output[row][r] += 1
		}
		for (let c = 0; c < output.length; c++) {
			output[c][col] += 1
		}

	}
	for (let j = 0; j < output.length; j++) {
		for (let k = 0; k < output[j].length; k++) {
			if (output[j][k] % 2 === 1) {
				count ++
			}
		}
	}
	return count
}

console.log(oddCells(2, 3, [[0,1], [1,1]]))
