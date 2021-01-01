/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.



Example 1:

Input: [1,2,3,3]
Output: 3
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5


Note:

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even
*/

const repeatedNTimes = arr => {
	const len = arr.length / 2
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++
			}
			if (count === len) {
				return arr[i]
			}
		}
		count = 0
	}
}

console.log(repeatedNTimes([1,2,3,3]), 3)
console.log(repeatedNTimes([2,1,2,5,3,2]), 2)
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]), 5)
