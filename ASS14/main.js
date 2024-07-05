"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_List = void 0;
// ASSIGNMENT:14
// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_List = ["ali", "imran", "moiz", "affan"];
exports.guest_List = guest_List;
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam  ${guest_List[i]} \n you are invited on dinner tomorrow.\n\n THANKYOU`);
}
