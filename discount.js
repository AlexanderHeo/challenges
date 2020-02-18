/*
Create a function that applies a discount d to every number in the array.
*/

function getDiscounts(arr, disc) {
   return arr.map(x => parseInt(x) * (parseInt(disc) / 100));
/*
  map through arr
  take each element of arr (x) and parseInt to guarantee it is integer
  parseInt the disc so it eliminates the % sign, then
    divide it by 100 to get decimal representation of percentage
  multiple both numbers to get the percentage of each element
*/
}


getDiscounts([2, 4, 6, 11], "50%") //➞[1, 2, 3, 5.5];
getDiscounts([10, 20, 40, 80], "75%") //➞[7.5, 15, 30, 60];
getDiscounts([100], "45%") //➞[45];

Test.assertSimilar(getDiscounts([2, 4, 6, 11], "50%"), [1, 2, 3, 5.5])
Test.assertSimilar(getDiscounts([10, 20, 40, 80], "75%"), [7.5, 15, 30, 60])
Test.assertSimilar(getDiscounts([100], "45%"), [45])
