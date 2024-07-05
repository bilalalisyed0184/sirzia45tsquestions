"use strict";
// ASSIGNMENT:13
// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["civic", "honda", "corolla", "suzuki"];
for (let index = 0; index < transportation.length; index++) {
    console.log(`I would like to own a ${transportation[index]}`);
}
