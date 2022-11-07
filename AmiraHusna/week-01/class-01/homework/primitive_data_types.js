//*The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// Bonus: Get the current year with JavaScript

const d = new Date();
let currentyear = d.getFullYear();
let birthyear = 1999;
let age = currentyear - birthyear;

console.log(`They are either ${age} or ${age-1}.`);

//*The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt

let currentAge = parseInt(prompt("Current age"));
let maxAge = parseInt(prompt("Maximum age"));
let amountPerDay = parseInt(prompt("Estimated amount of snack per pack for a day"));

let year = maxAge - currentAge;
let estimateSnack = year * 365 * amountPerDay;
console.log(`You will need ${estimateSnack} packs of snack to last you until the ripe old age of ${maxAge}`);

//*The Geometrizer
// Calculate the properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 5;
let circumference = 2 * Math.PI * radius;
console.log(`The circumference of a circle is ${circumference}`);
let area = Math.PI * Math.pow(radius, 2);
console.log(`The area of a circle is ${area}`);

//*The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celciusTemp = 30;
var celciusToFahrenheit = celciusTemp * 9 / 5 + 32
console.log(`${celciusTemp}°C is ${celciusToFahrenheit}°F`);
let fahrenheitTemp = 80;
var farenheitToCelcius = (fahrenheitTemp - 32) * 5 / 9;
console.log(`${fahrenheitTemp}°F is ${farenheitToCelcius}°C`);
