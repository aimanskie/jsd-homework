/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat in total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
Bonus: Get the details with prompt
*/

let age = prompt("What is your current age?");
let meals = prompt("How much do you eat this snack per day?");
const maxAge = 75;
const snackPrice = 1.00;

// expenditure = (maximum age - current age) * no of days in a year * snack price * total meals eat daily
let expenditure = (maxAge - parseInt(age)) * 365 * snackPrice * meals;
console.log("You will need RM "+ expenditure + " to last until the ripe old age of "+ maxAge);