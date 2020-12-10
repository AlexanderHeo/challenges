/*
write a function that takes in a number, and console logs all numbers starting from 1 up to the input. If the number is divisible by 3, instead of the number log 'fizz'. If the number is divisible by 5, instead of the number log 'buzz'. If the number is divisible by both 3 and 5, instead of the number log 'fizzbuzz'.
*/

const fizzbuzz = num => {
	for (let i = 0; i <= num; i ++) {
		if (i % 15) {
			console.log('fizzbuzz')
		} else if (i % 3) {
			console.log('fizz')
		} else if (i % 5) {
			console.log('buzz')
		} else {
			console.log(i)
		}
	}
}

/* reverse a string input */

const reverseString = str => {
	return str.split('').reverse().join('')
}

/* reverse a sentence */
const reverseSentence = sentence => {
	return sentence.split(' ').reverse().join(' ')
}

/* find minimum value of a list */
const minValue = arr => {
	return Math.min(...arr)
}

/* find maximum value of a list */
const maxValue = arr => {
	return Math.max(...arr)
}

/* calculate remainder of two numbers */
const remainder = (numerator, denominator) => {
	return numerator % denominator
}

/* return distinct values of a list */
const uniqueValues = list => {
	const output = []
	for (let i = 0; i < list.length; i ++) {
		if (!output.includes(list[i])) {
			output.push(list[i])
		}
	}
	return output
}

/* return distinct values and their counts of a list */
const uniqueValuesAndCount = arr => {
	const output = []
	const values = []
	for (let i = 0; i < arr.length; i ++) {
		if (!values.includes(arr[i])) {
			values.push(arr[i])
			const obj = {}
			obj[arr[i]] = 1
			output.push(obj)
		} else if (values.includes(arr[i])) {
			const index = values.indexOf(arr[i])
			output[index][arr[i]] += 1
		}
	}
	return output
}

/* given a string of expressions (vars + -) and a set of
variable/value pairs (a=1, b=2, c=3, d=4) return the results
of the expression (a + b + c - d should return 2) */
