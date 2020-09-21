/*
You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

Example

For a = 1, b = 2, and n = 2, the output should be
magicalWell(a, b, n) = 8.

You will cast your first marble and get $2, after which the numbers will become 2 and 3. When you cast your second marble, the well will give you $6. Overall, you'll make $8. So, the output is 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
1 ≤ a ≤ 2000.

[input] integer b

Guaranteed constraints:
1 ≤ b ≤ 2000.

[input] integer n

The number of magic marbles in your possession, a non-negative integer.

Guaranteed constraints:
0 ≤ n ≤ 5.

[output] integer
*/

const magicalWell = (a, b, n) => {
  let sum = 0;
  for (var i = 0; i < n; i++) {
    sum += a * b;
    a++;
    b++;
  }
  return sum;
}

/*
Input:
a: 1
b: 2
n: 2
Expected Output:
8

Input:
a: 1
b: 1
n: 1
Expected Output:
1

Input:
a: 6
b: 5
n: 3
Expected Output:
128

Input:
a: 1601
b: 337
n: 0
Expected Output:
0

Input:
a: 1891
b: 352
n: 0
Expected Output:
0

Input:
a: 1936
b: 1835
n: 5
Expected Output:
17800540

Input:
a: 957
b: 57
n: 2
Expected Output:
110113

Input:
a: 687
b: 1337
n: 0
Expected Output:
0

Input:
a: 491
b: 1552
n: 4
Expected Output:
3060400

Input:
a: 1275
b: 362
n: 2
Expected Output:
924738
*/
