// JavaScript Function
function myFunction() {
  console.log("This is a Function");
}
 myFunction();


// Function with Parameters
function myFunction(x, y) {
  console.log("Sum of Numbers: ", x+y);
}
myFunction(5,10);


// Function with return statement
function myFunction(x, y) {
  return (x+y);
}
var z = myFunction(5, 10);
console.log(z)
console.log(myFunction(15, 10));


// Function with default arguments
function myFunction(x, y=0) {
  return (x+y);
}
console.log(myFunction(15));


// Function with variable arguments
function myFunction() {
  var sum = 0
  for(var i=0;i<arguments.length;i++)  
    sum+=arguments[i];
  return sum;
}
console.log(myFunction(10));
console.log(myFunction(15,10));
console.log(myFunction(15,10,20));
console.log(myFunction(15,10,20,25));




