/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C".
*/

// celsius to fahrenheit
let celsius = prompt("Key in temperature (in celsius)");
celsiusToFahrenheit(celsius);

function celsiusToFahrenheit(celsius){
    let valFahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + decodeURIComponent("\u2103") + " is " + valFahrenheit + decodeURIComponent("\u2109"));
} 

// fahrenheit to celsius
let fahrenheit = prompt("Key in temperature (in fahrenheit)");
fahrenheitToCelsius(fahrenheit);

function fahrenheitToCelsius(fahrenheit){
    let valCelsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + decodeURIComponent("\u2109") + " is " + valCelsius + decodeURIComponent("\u2103"));
}
