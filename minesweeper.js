/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
											 [1, 1, 1]]
*/
const minesweeper= matrix => {
    const output = []
    for (let y = 0; y < matrix.length; y ++) {
        const row = []
        for (let x = 0; x < matrix[y].length; x ++) {
            let square = 0
            if (matrix[y][x-1]) {
                square ++
            }
            if (matrix[y][x+1]) {
                square ++
            }
            if (matrix[y-1] && matrix[y-1][x]) {
                square ++
            }
            if (matrix[y-1] && matrix[y-1][x-1]) {
                square ++
            }
            if (matrix[y-1] && matrix[y-1][x+1]) {
                square ++
            }
            if (matrix[y+1] && matrix[y+1][x]) {
                square ++
            }
            if (matrix[y+1] && matrix[y+1][x-1]) {
                square ++
            }
            if (matrix[y+1] && matrix[y+1][x+1]) {
                square ++
            }
            row.push(square)
        }
        output.push(row)
    }
    return output
}
