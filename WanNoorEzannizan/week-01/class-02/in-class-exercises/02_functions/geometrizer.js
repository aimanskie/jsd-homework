/*
The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

let radius = prompt("Please key in radius");
calcCircumference(radius);

function calcCircumference(radius){
    const pi = Math.PI;
    let diameter = radius * 2;
    let circumference = diameter * pi;

    calcArea(radius, pi);
    console.log("The circumference is " + circumference);
}

function calcArea(radius, pi){
    let area = pi * Math.pow(radius,2);
    console.log("The area is " + area);
}



