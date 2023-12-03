// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

function greet(username) {
  return `Hello ${username}`;
}

console.log(greet("lokesh"));

// arrow fuction
const greeet = (name) => `good morning ${name}`;
console.log(greeet("loekshhhhh"));

// ES5 code
const lib = {
  sum: (a, b) => {
    a + b;
  },
  mult: (a, b) => {
    a * b;
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// -------------------------------
function getPersionES6(name, age, height) {
  return {name,age,height,};
}

getPersionES5("Zachary", 23, 195);
// output: { name: 'Zachary', age: 23, height: 195 }
