// Way -1
function myFunction1() {
  console.log("This is a Function");
}
myFunction1();

// Way -2
// Function Expression

var myFunction2 = function (x, y) {
  console.log("This is a Function Expression");
  console.log(x + y);
};
myFunction2();

// Way -3
// Arraow Function

var myFunction3 = () => {
  console.log("This is a Arrow Function");
};
myFunction3();

// Way -4
// Self Invoking Fucntion
(function (x, y) {
  console.log("Self Invoking Function", x + y);
})(5, 10);
