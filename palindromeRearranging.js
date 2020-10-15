/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
*/

const palindromeRearranging = string => {
    const arrd = string.split('')
    const chars = []
    const charCount = {}
    for (let i = 0; i < arrd.length; i ++) {
        if (!chars.includes(arrd[i])) {
            chars.push(arrd[i])
        }
    }
    for (let j = 0; j < chars.length; j ++) {
        charCount[chars[j]] = 0
    }
    arrd.forEach(x => {
        charCount[x] = charCount[x] + 1
    })
    const values = Object.values(charCount)
    const oddCount = values.filter(x => x%2 !== 0)
    return oddCount.length < 2
}

/*
Input:
inputString: "aabb"
Expected Output:
true

Input:
inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"
Expected Output:
false

Input:
inputString: "abbcabb"
Expected Output:
true

Input:
inputString: "zyyzzzzz"
Expected Output:
true

Input:
inputString: "z"
Expected Output:
true

Input:
inputString: "zaa"
Expected Output:
true

Input:
inputString: "abca"
Expected Output:
false

Input:
inputString: "abcad"
Expected Output:
false

Input:
inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"
Expected Output:
false

Input:
inputString: "abdhuierf"
Expected Output:
false

Input:
inputString: "aaacbbc"
Expected Output:
true
*/
