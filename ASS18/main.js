"use strict";
// ASSIGNMENT:18
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["capetown", "delhi", "faisalabad", "bankok", "ahemadabad"];
console.log("original: " + places);
console.log("copy " + [...places].sort());
console.log("original: " + places);
console.log("copy " + [...places].sort().reverse());
console.log("copy " + [...places].sort().reverse());
console.log("original: " + places.sort());
console.log("original: " + places.sort().reverse());
