/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
*/
const areSimilar =(a, b) => {
    if (a.length !== b.length) return false;
    if (a.reduce((a,b)=>a+b,0) !== b.reduce((a,b)=>a+b,0)) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i ++) {
        if (a[i] !== b[i]) {
            diff++
        }
        if (diff > 2) return false
    }
    a.sort(); b.sort();
    for (let j = 0; j < a.length; j ++) {
        if (a[j] !== b[j]) {
            return false
        }
    }
    return true
}

/*
Input:
a: [1, 2, 3]
b: [1, 2, 3]
Expected Output:
true

Input:
a: [1, 2, 3]
b: [2, 1, 3]
Expected Output:
true

Input:
a: [1, 2, 2]
b: [2, 1, 1]
Expected Output:
false

Input:
a: [1, 1, 4]
b: [1, 2, 3]
Expected Output:
false

Input:
a: [1, 2, 3]
b: [1, 10, 2]
Expected Output:
false

Input:
a: [2, 3, 1]
b: [1, 3, 2]
Expected Output:
true

Input:
a: [2, 3, 9]
b: [10, 3, 2]
Expected Output:
false

Input:
a: [4, 6, 3]
b: [3, 4, 6]
Expected Output:
false

Input:
a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
b: [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
Expected Output:
true

Input:
a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
b: [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
Expected Output:
false
*/
