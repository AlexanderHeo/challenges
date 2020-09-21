/*

Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2, and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
5 ≤ n ≤ 109.

[input] integer l

A positive integer.

Guaranteed constraints:
1 ≤ l ≤ r.

[input] integer r

A positive integer.

Guaranteed constraints:
l ≤ r ≤ 109,
r - l ≤ 106.

[output] integer

*/

// no loop solution
// function countSumOfTwoRepresentations2(n, l, r) {
//   return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
// }


function countSumOfTwoRepresentations2(n, l, r) {
  let counter = 0;

  for (var i = l; i <= r; i++) {
    if (n - i >= i && n - i <= r) {
      counter++
    }
  }

  // const limit = n/2;
  // while (l++ <= r) {
  //     while (r-- >= limit) {
  //         if (n < l + r) break;
  //          if (n = l + r) {
  //             counter++
  //         }
  //     }
  // }

  // for (let lower = l; lower <= limit; lower++) {
  //     for (let upper = r; upper >= limit; upper--) {
  //         if (n > lower + upper) break;
  //         else if (n === lower + upper) {
  //             counter++;
  //         }

  //     }
  // }

  return counter
}

/*

Input:
n: 6
l: 2
r: 4
Expected Output:
2


Input:
n: 6
l: 3
r: 3
Expected Output:
1

Input:
n: 10
l: 9
r: 11
Expected Output:
0

Input:
n: 24
l: 8
r: 16
Expected Output:
5

Input:
n: 24
l: 12
r: 12
Expected Output:
1

Input:
n: 93
l: 24
r: 58
Expected Output:
12
