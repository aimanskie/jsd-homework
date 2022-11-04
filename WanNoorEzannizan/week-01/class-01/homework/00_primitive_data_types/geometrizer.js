/*
The Geometrizer
Calculate the properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

let radius = prompt("Please key in radius");
const pi = Math.PI;

let diameter = radius * 2;
let circumference = diameter * pi;
console.log("The circumference is " + circumference);

let area = pi * Math.pow(radius,2);
console.log("The area is " + area);
