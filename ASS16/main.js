"use strict";
// ASSIGNMENT:16
// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_List = ["ali", "khan", "moiz", "affan"];
let not_present = "khan";
let new_guest = "zafar";
guest_List[1] = new_guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam  ${guest_List[i]} \n you are invited on dinner tomorrow.\n THANKYOU\n`);
}
guest_List.unshift("shaheen", "sarfaraz", "rizwan");
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam  ${guest_List[i]} \n you are invited on dinner tomorrow. we found big table.\n THANKYOU\n`);
}
