/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

const isLucky = (n) => {
  const arr = n.toString().split("");
  const length = arr.length;
  const half = length / 2;
  const firstHalf = [];
  const secondHalf = [];
  for (var i = 0; i < half; i++) {
    firstHalf.push(arr[i]);
  }
  for (var j = half; j < length; j++) {
    secondHalf.push(arr[j]);
  }

  const firstSum = firstHalf.reduce((a, b) => parseInt(a) + parseInt(b));
  const secondSum = secondHalf.reduce((a, b) => parseInt(a) + parseInt(b));

  return firstSum === secondSum;
};

/*
Input:
n: 1230
Expected Output:
true

Input:
n: 239017
Expected Output:
false

Input:
n: 134008
Expected Output:
true

Input:
n: 10
Expected Output:
false

Input:
n: 11
Expected Output:
true

Input:
n: 1010
Expected Output:
true

Input:
n: 261534
Expected Output:
false

Input:
n: 100000
Expected Output:
false

Input:
n: 999999
Expected Output:
true

Input:
n: 123321
Expected Output:
true
*/
