// ASSIGNMENT:24
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car: string = "subaro";
let age: number = 25;
let number: number[] = [1 , 2 , 3, 4];

// string test

// test:1 equality (True)

console.log("Is car == 'Subaro'? I predict True.");
console.log(car == 'Subaru');//True (case-insensitive)

// test:2 strict equality (False)

console.log("Is car === 'Subaro'? I predict False.");
console.log(car === 'Subaru');//False (case-sensitive)

// test:3 inequality (True)

console.log("Is car != 'Subaro'? I predict True.");
console.log(car != 'Subaru');//True

// test:4 in equality (False)

console.log("Is car !== 'Subaro'? I predict False.");
console.log(car !== 'Subaru');//False (case-sensitive)

// test:5 Lowercase conversion (True)

console.log("Is car.toLowerCase() == 'subaru? I predict True.");
console.log(car.toLowerCase());//True (converted to lowercase)

// test:6 LowerCase conversion (False)

console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase());//False (original value remains uppercase)

// test:7 Equality (True)

console.log("Is age == 25? I predict True. ");
console.log(age == 25);//True

// test:8 Inequality (True)

console.log("Is age != 30? I predict True.");
console.log(age != 30);

// test:9 Greater than (False)

console.log("Is age > 30? I predict False.");
console.log(age> 30);//False

// test:10 Less than or equal (True)

console.log("Is age <= 25? I predict True.");
console.log(age <= 25);//True

// test:11 AND (True)

console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30);//True (both conditions met)

// test:12 OR (False)

console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18);//False (neither condition met)

// test:13 In array (True)

console.log("Is 3 in number? I predict True.");
console.log(3 in number);//True (checks for index existence)

// test:14 Not in array (False)

console.log("Is 5 not in numbers? I predict True.");
console.log(5 not in number);//True (negation of "in" operator)