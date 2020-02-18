/*
Your task is to write a function that takes a number and writes the digits in
reverse order into an array.

Example: reverseArray(12345) should return [5,4,3,2,1].
If your function is correct you should be seeing two logged "true" in the output
*/

function reversedArray(input) {
  // Please write your function which returns an array here
  return input.toString().split('').reverse().map(x => Number(x) );
  /*
  input is a multiple digit integer ex. 12345
  toString turns the inputted number into a string ex. '12345'
  split takes that string and separates it at the set delimiter into an array
    ex. ['1', '2', '3', '4', '5']
  reverse reverses the array ex. ['5', '4', '3', '2', '1']
  map takes each element of the array and turns it into a number
    ex. [5, 4, 3, 2, 1]
  */
}

console.log(isEqualArray([5, 4, 3, 2, 1], reversedArray(12345)));
console.log(isEqualArray([7, 3, 9, 5, 1], reversedArray(15937)));
console.log(isEqualArray([6, 4, 6, 8, 7], reversedArray(78646)));

function isEqualArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let same = true;
  arr1.forEach((element, key) => {
    if (element !== arr2[key]) {
      same = false
    }
  });
  return same;
}
