/*
A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.

Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The boy performs the following operations from right to left:

6 + 4 = 10 but he forgets about carrying the 1 and just writes down the 0 in the last column
5 + 3 = 8
4 + 7 = 11 but he forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one, so the boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.
*/

const additionWithoutCarrying = (param1, param2) => {
    const par1 = param1.toString().split('')
    const par2 = param2.toString().split('')
    const output = []

    if (par1.length > par2.length) {
        const need = par1.length - par2.length
        for (let a = 0; a < need; a++) {
            par2.unshift('0')
        }
    }

    if (par2.length > par1.length) {
        const need = par2.length - par1.length
        for (let b = 0; b < need; b++) {
            par1.unshift('0')
        }
    }

    for (let i = 0; i < par1.length; i ++) {
        let add = parseInt(par1[i]) + parseInt(par2[i])
        if (add >= 10) {
            output.push(add - 10)
        } else {
            output.push(add)
        }
    }
    return parseInt(output.join(''))
}
