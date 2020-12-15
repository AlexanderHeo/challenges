/*

*/

const sumZero = n => {
	const output = []
	if (n % 2 !== 0) {
		output.push(0)
	}
	for (let i = 0; i < Math.floor(n / 2); i++) {
		output.push(i + 1, -(i + 1))
	}
	return output
}

console.log(sumZero(5))
console.log(sumZero(3))
console.log(sumZero(1))
console.log(sumZero(4))
