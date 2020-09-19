/*
given an array of numbers,
return the sum of the cube of
all numbers
*/

const sumOfCubes = nums => {
  let total = 0
  var cubed = nums.map(x => Math.pow(x, 3))
  cubed.map(x => total += x)
  return total
}

// function sumOfCubes(nums) {
//   return nums.reduce((p, c) => p + Math.pow(c, 3), 0);
// }
