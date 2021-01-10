/*

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.



Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

*/

const replaceElements = arr => {
	const output = []
	for (let i = 0; i < arr.length; i ++) {
		output.push(arr[i])
	}
	return output
}

console.log(replaceElements([17,18,5,4,6,1]), [18,6,6,6,1,-1])
