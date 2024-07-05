// ASSIGNMENT:14
// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_List: string[] = ["ali" , "imran" , "moiz" , "affan"];
for (let i = 0; i < guest_List.length; i++) {
   console.log(`Respected Sir/Madam  ${guest_List[i]} \n you are invited on dinner tomorrow.\n\n THANKYOU`);
}
export{guest_List}