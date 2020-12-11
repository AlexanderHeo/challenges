/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if (words.length === 1) {
        return 1
    }
    const morsified = []
    for (let i = 0; i < words.length; i ++) {
        const morse = morsify(words[i])
        morsified.push(morse)
		}
		const unique = []
    for (let j = 0; j < morsified.length; j++) {
      if (!unique.includes(morsified[j])) {
				unique.push(morsified[j])
			}
    }
    return unique.length
};

var morsify = word => {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const output = []
    for (let i = 0; i < word.length; i ++) {
        const ascii = word[i].charCodeAt(0)
        output.push(morseCode[ascii-97])
    }
    return output.join('')
}

console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]))
