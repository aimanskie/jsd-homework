// # Homework: Variables and Primitive Data Types

// ## The Age Calculator

// Forgot how old someone is? Calculate it!

// - Store the current year in a variable.
// - Store their birth year in a variable.
// - Calculate their 2 possible ages based on the stored values.
// - Output them to the screen like so: "They are either NN or NN", substituting the values.

// **Bonus**: Get the current year with JavaScript

// ---

console.log("==================\nThe Age Calculator\n==================")
const DATE = new Date();
let currYear = DATE.getFullYear();
let birthYear = 1993;
let age1 = currYear - birthYear;
let age2 = birthYear + currYear;
console.log(`They are either ${age1} or ${age2}`);
console.log("=========================\nEnd of The Age Calculator\n=========================")

// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// - Store your current age into a variable.
// - Store a maximum age into a variable.
// - Store an estimated amount per day (as a number).
// - Calculate how many you would eat in total for the rest of your life.
// - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// **Bonus**: Get the details with `prompt`

// ---

console.log("==============================\nThe Lifetime Supply Calculator\n==============================")
let myAge = parseInt(prompt("My Age?", 30));
let maxAge = parseInt(prompt("Maximum Age?", 100));
let snackAmt = parseInt(prompt("Snack Supply?", 3));
let totalSupply = (snackAmt * 365) * (maxAge - myAge); 
console.log(`You will need ${totalSupply} to last you until the ripe old age of ${maxAge}`);
console.log("=====================================\nEnd of The Lifetime Supply Calculator\n=====================================")


// ## The Geometrizer

// Calculate the properties of a circle, using the definitions here.

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

// ---

console.log("===============\nThe Geometrizer\n===============")
let r = 30;
let circumference = 2 * Math.PI * r;
let area = Math.PI * Math.pow(r, 2);
console.log(`The circumference is  ${circumference}`);
console.log(`The circumference is  ${area}`);
console.log("======================\nEnd of The Geometrizer\n======================")


// ## The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// - Store the temperature (in celsius) into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

console.log("=========================\nThe Temperature Converter\n=========================")
let tempCelcius = 100;
let convertFahrenhiet = tempCelcius * 1.8 + 32;
console.log(`${tempCelcius}°C is ${convertFahrenhiet}°F`);
let tempFahrenheit = 32;
let convertCelsius = (tempFahrenheit - 32) / 1.8;
console.log(`${tempFahrenheit}°C is ${convertCelsius}°F`);
console.log("================================\nEnd of The Temperature Converter\n================================")