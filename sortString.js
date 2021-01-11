/*
Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Example 1:

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

Example 3:

Input: s = "leetcode"
Output: "cdelotee"

Example 4:

Input: s = "ggggggg"
Output: "ggggggg"

Example 5:

Input: s = "spo"
Output: "ops"


Constraints:

1 <= s.length <= 500
s contains only lower-case English letters.
*/

const sortString = str => {
	let output = []
	const arr = []
	const letters = []
	for (let i = 0; i < str.length; i ++) {
		letters.push(str[i])
		arr.push(str.charCodeAt(i))
	}
	letters.sort()
	arr.sort((a, b) => a - b)
	while (arr.length !== 0) {
		if (arr.length > 0) {
			output.push(arr[0])
			arr.splice(0,1)
			for (let i = 0; i < arr.length; i ++) {
				if (arr[i] > output[output.length - 1]) {
					output.push(arr[i])
					arr.splice(i, 1)
					i --
				}
			}
			arr.reverse()
			output.push(arr[0])
			arr.splice(0,1)
			for (let j = 0; j < arr.length; j ++) {
				if (arr[j] < output[output.length - 1]) {
					output.push(arr[j])
					arr.splice(j, 1)
					j --
				}
			}
			arr.reverse()
		}
	}
	let outputStr = ''
	for (let i = 0; i < output.length; i ++) {
		outputStr += String.fromCharCode(output[i])
	}
	return outputStr
}

console.log(sortString('ccccbbbbaaaa'), "abccbaabccba")
console.log(sortString('rat'), "art")
console.log(sortString('leetcode'), "cdelotee")
console.log(sortString('ggggggg'), "ggggggg")
console.log(sortString('spo'), "ops")
