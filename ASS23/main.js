"use strict";
// ASSIGNMENT:23
// 23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';
// test: 1 equality comparision (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
// test: 2 strict equality comparison (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
// test: 3 Inequality comparison (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); //false
// test:4 strict inequality comparison (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //false
// test:5 less than comparison (false)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //false (lexicographic comparison)
// test:6 greater than comparison (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false (lexicographic comparison)
// test:7 less than or equal comparison (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); //true
// test:8 greater than or equal comparison (true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //true
// test:9 checking truthiness (true)
console.log("Is car ? 'subaru'? I predict true.");
console.log(car); //true (non-empty string is truthy)
// test:10 checking falsiness (false)
console.log("Is !car ? 'subaru'? I predict false.");
console.log(!car); //false (negation of a truthy value)
