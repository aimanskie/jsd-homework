/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

Takes 2 arguments: age, and amountPerDay.
Calculates the amount consumed for rest of the life (based on a constant max age).
Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amountPerDay, and round the result to a round number.
*/

let age = prompt("What is your current age?");
let amountPerDay = prompt("How much do you eat this snack per day?");
const maxAge = 75;
const snackPrice = 1.00;

// expenditure = (maximum age - current age) * no of days in a year * snack price * total meals eat daily
let expenditure = (maxAge - parseInt(age)) * 365 * snackPrice * amountPerDay;
console.log("You will need RM "+ expenditure + " to last until the ripe old age of "+ maxAge);