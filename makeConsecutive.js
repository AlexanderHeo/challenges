/*
Ratiorg got statues of different sizes as a present from CodeMaster for his
birthday, each statue having an non-negative integer size. Since he likes to
make things perfect, he wants to arrange them from smallest to largest so that
each statue will be bigger than the previous one exactly by 1. He may need some
additional statues to be able to accomplish that. Help him figure out the
minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

given an array called statues, return the number of missing numbers
*/

function makeArrayConsecutive2(statues) {
  var counter = 0;
  var diff;
  var sorted = statues.sort((a, b) => a - b);
  console.log('sorted:', sorted);
  for (var i = 0; i <= sorted.length; i++) {
    if (!sorted[i + 1]) {
      return counter;
    }
    if (sorted[i] + 1 !== sorted[i + 1]) {
      console.log(sorted[i + 1], sorted[i]);
      diff = sorted[i + 1] - sorted[i] - 1;
      console.log('diff:', diff);
      counter += diff;
      console.log('counter:', counter);
    }
  }
  return counter;
}
