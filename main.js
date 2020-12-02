/*
Execute function after x times

Create a function "after" that returns a new function where this
new function executes the original function only after
it has been executed x times
*/
function after(num, func) {
  // 2 start with a tracker to count how
  // many times this function has been called
  let tracker = 0;

  if (tracker > num) {
    // 1 need to return a new function
    return function (...args) {
      // 3 check if tracker exceeds num
      if (tracker >= num) {
        // 4 call the function
        func(...args);
        // func.apply()
      } else {
        // 5 otherwise increment tracker
        tracker++;
      }
    };
  }
}

//Sample calls
var func1 = () => console.log("first one");
var func2 = (x) => console.log("the 2nd", x);

var newFunc1 = after(3, func1);
var newFunc2 = after(2, func2);

newFunc1();
newFunc1();
newFunc1();
newFunc1(); // actually calls func1()

newFunc2("a");
newFunc2("a");
newFunc2("a"); // actually calls func2()
newFunc1(); // calls func1() again
