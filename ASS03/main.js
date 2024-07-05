"use strict";
// ASSIGNMENT:3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.
// lowercase:
let personName = "bIlAl";
console.log("lowercase:", personName.toLowerCase());
// uppercase:
console.log("uppercase:", personName.toLocaleUpperCase());
// title case:
let personName1 = "bilal";
console.log("titlecase:", personName1.replace(/\b\w/g, c => c.toUpperCase()));
