const twoNumberSum = (arr, target) => {
	for (let i = 0; i < arr.length; i ++) {
		for (let j = i + 1; j < arr.length; j ++) {
			if (arr[i] + arr[j] === target) {
				return [arr[i], arr[j]]
			}
		}
	}
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
