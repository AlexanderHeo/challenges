/*
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.



Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams.
Example 4:

Input: s = "xxyyzz", t = "xxyyzz"
Output: 0
Example 5:

Input: s = "friend", t = "family"
Output: 4
*/

const minSteps = (s, t) => {

	const map = Array(26).fill(0);

	for(const l of s) {
		map[l.charCodeAt(0) - 97] += 1;
	}
	console.log(map)
	let steps = 0;
	for(const l of t) {
		if(map[l.charCodeAt(0) - 97]-- <= 0) {
				steps++;
		}
	}
	return steps;

	// let count = 0
	// const tArr = t.split('')
	// const sArr = s.split('')
	// sArr.forEach(char => {
	// 	if(tArr.includes(char)) {
	// 		count ++
	// 		const index = tArr.indexOf(char)
	// 		tArr.splice(index, 1)
	// 	}
	// })
	// return s.length - count

	// const sArr = s.split('').sort()
	// const tArr = t.split('').sort()
	// for (let i = 0; i < sArr.length; i ++) {
	// 	for (let j = 0; j < sArr.length; j ++) {
	// 		if (sArr[i] === tArr[j]) {
	// 			sArr.splice(i, 1)
	// 			tArr.splice(j, 1)
	// 			i --
	// 			j --
	// 		}
	// 	}
	// }
	// return sArr.length
}

console.log(minSteps('bab', 'aba'), 1)
console.log(minSteps('leetcode', 'practice'), 5)
console.log(minSteps('anagram', 'mangaar'), 0)
console.log(minSteps('xxyyzz', 'xxyyzz'), 0)
