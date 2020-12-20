/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

Example 1:

Input: nums = [3,4,5,2]
Output: 12
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:

Input: nums = [3,7]
Output: 12


Constraints:

2 <= nums.length <= 500
1 <= nums[i] <= 10^3
*/

const maxProduct = nums => {
	let product = 0
	const arr = []
	for (let i = 0; i < nums.length; i ++) {
		for (let j = i + 1; j < nums.length; j ++) {
			if (nums[i] * nums[j] > product) {
				product = nums[i] * nums[j]
				arr[0] = nums[i]
				arr[1] = nums[j]
			}
		}
	}
	return (arr[0] - 1) * (arr[1] - 1)
}

console.log(maxProduct([3,4,5,2]))
console.log(maxProduct([1,5,4,5]))
console.log(maxProduct([3,7]))
