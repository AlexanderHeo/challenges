/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string name

Guaranteed constraints:
1 ≤ name.length ≤ 10.

[output] boolean

true if name is a correct variable name, false otherwise.
*/

const variableName = name => {
    if (!isNaN(name[0])) {
        return false
    }
    for (let i = 0; i < name.length; i ++) {
        const code = name.charCodeAt(i)
        console.log(code)
        if (code !== 95 &&
            !(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)
        ) {
            return false
        }
    }
    return true
}
