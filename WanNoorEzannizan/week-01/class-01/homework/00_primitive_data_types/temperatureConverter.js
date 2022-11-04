/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store the temperature (in celsius) into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

// celsius to fahrenheit
let celsius = prompt("Key in temperature (in celsius)");
let convertToFahrenheit = (celsius * 9/5) + 32;
console.log(celsius + decodeURIComponent("\u2103") + " is " + convertToFahrenheit + decodeURIComponent("\u2109"));

// fahrenheit to celsius
let fahrenheit = prompt("Key in temperature (in fahrenheit)");
let convertToCelsius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + decodeURIComponent("\u2109") + " is " + convertToCelsius + decodeURIComponent("\u2103"));
