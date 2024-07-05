"use strict";
// ASSIGNMENT:38
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are
// large by default with a message that reads I love TypeScript. Make a
// large shirt and a medium shirt with the default message, and a shirt
// of any size with a different message.
function describe_city(nameofCity, country = "Paistan") {
    return `${nameofCity} is in ${country}`;
}
;
let city1 = describe_city("south africa", "cape town");
let city2 = describe_city("India", "delhi");
let city3 = describe_city("Pakistan", "Hyderabad");
let city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
