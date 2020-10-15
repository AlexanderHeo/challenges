/*
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].
*/

const alternatingSums = a => {
    const team1 = [];
    const team2 = [];
    for (let i = 0; i < a.length; i ++) {
        if (i%2 !== 0) {
            team2.push(a[i])
        }
        if (i%2 === 0) {
            team1.push(a[i])
        }
    }
    return [team1.reduce((a,b)=>a+b,0), team2.reduce((a,b)=>a+b,0)];
}

/*
Input:
a: [50, 60, 60, 45, 70]
Expected Output:
[180, 105]

Input:
a: [100, 50]
Expected Output:
[100, 50]

Input:
a: [80]
Expected Output:
[80, 0]

Input:
a: [100, 50, 50, 100]
Expected Output:
[150, 150]

Input:
a: [100, 51, 50, 100]
Expected Output:
[150, 151]
*/

/*
function alternatingSums(a) {
    var team1 = 0;
    var team2 = 0;

    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            team1 += a[i];
        } else {
            team2 += a[i];
        }
    }

    return [team1, team2];
}
*/
