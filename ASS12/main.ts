// ASSIGNMENT:12
// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names: string[] = ["moiz" , "affan", "bilal"];
let message: string = "assalam-u-alaikum";
for (let index = 0; index < names.length; index++) {
 console.log(`${message} ${names[index]}`);
}