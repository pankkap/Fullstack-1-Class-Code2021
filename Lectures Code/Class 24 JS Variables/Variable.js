// Variable Declaration and Initialization

var x = "Beta-Labs";
var y = "Beta-Labs";
var z = 9;
var a = 2,
  b = 3,
  c = 5;
var u;

// Variable can hold only one value and previous value will update
var x = "hello";
console.log(x);
x = "hola";
console.log(x);

// JavaScript Modes

// 1. Strict Mode
("use strict");
var x1 = "beta labs"; // allowed in strict mode
x2 = "javascript"; // not allowed in strict mode

// 2. Sloppy Mode
var x1 = "Beta Labs"; // allowed
x2 = "javascript"; // also allowed

//Variable Hoisting

console.log(x); // return undefined
var x = "hello js";

// Variable Scopes

// 1. Global Scope
// 2. Local | Function Scope
// 3. Block Scope

// Making local variable --> Global
{
  window.value = 90;
}

// Types of Variable
var x = 10;
let y = 10;
const z = 10;
