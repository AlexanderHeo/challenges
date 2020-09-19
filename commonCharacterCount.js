/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer

*/

const commonCharacterCount = (s1, s2) => {
  const s1Sorted = s1.split("").sort();
  const s2Sorted = s2.split("").sort();
  let counter = 0;
  s1Sorted.map((x) => {
    if (s2Sorted.includes(x)) {
      counter++;
      s2Sorted.splice(s2Sorted.indexOf(x), 1);
    }
  });
  return counter;
};

/*

Input:
s1: "aabcc"
s2: "adcaa"
Expected Output:
3

Input:
s1: "zzzz"
s2: "zzzzzzz"
Expected Output:
4

Input:
s1: "abca"
s2: "xyzbac"
Expected Output:
3

Input:
s1: "a"
s2: "b"
Expected Output:
0

Input:
s1: "a"
s2: "aaa"
Expected Output:
1



*/
