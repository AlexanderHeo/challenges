/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.
*/
const chessBoardCellColor = (cell1, cell2) => {
    const one = cell1.split('')
    const two = cell2.split('')
    let oneColor, twoColor


    if ((one[0].charCodeAt() % 2 === 0) === (one[1] % 2 === 0)) {
        oneColor = 'light'
    } else {
        oneColor = 'dark'
    }
    if ((two[0].charCodeAt() % 2 === 0) === (two[1] % 2 === 0)) {
        twoColor = 'light'
    } else {
        twoColor = 'dark'
    }
    return oneColor === twoColor
}
