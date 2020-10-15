/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

const addBorder = picture => {
    const len = picture[0].length
    const ast = '*'
    const output = [ast.repeat(len + 2)]
    for (let i = 0; i < picture.length; i ++) {
        output.push(`${ast}${picture[i]}${ast}`)
    }
    output.push(ast.repeat(len + 2))
    return output
}

/*
picture:
["abc",
 "ded"]
Output:
["*****",
 "*abc*",
 "*ded*",
 "*****"]

 picture: ["a"]
Output:
["***",
 "*a*",
 "***"]

 picture:
["aa",
 "**",
 "zz"]
Output:
["****",
 "*aa*",
 "****",
 "*zz*",
 "****"]

 picture:
["abcde",
 "fghij",
 "klmno",
 "pqrst",
 "uvwxy"]
Output:
["*******",
 "*abcde*",
 "*fghij*",
 "*klmno*",
 "*pqrst*",
 "*uvwxy*",
 "*******"]

 picture: ["wzy**"]
Output:
["*******",
 "*wzy***",
 "*******"]
 */

 /*
 function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}
*/
