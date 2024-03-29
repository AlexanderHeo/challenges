/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const trips = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (array[i] !== array[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          trips.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === array[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return trips;
};
