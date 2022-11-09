/*
A Transit Application
Start with this data...

const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
Create a function called travelFrom that receives a start station and an end station.

Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
Bonus: A Transit Application
Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
Make it error-tolerant. E.g.:
Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
If someone passes in a station that doesn't exist, tell them
Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
Look at the hints below
*/

const stations = [
    "Museum", 
    "St. James", 
    "Circular Quay", 
    "Wynyard", 
    "Townhall", 
    "Central", 
    "Redfern", 
    "Macdonaldtown", 
    "Newtown"
];

stationNames();
let firstStation = prompt("Travelling from: ");
let secondStation = prompt("Travelling to:")
checkStations(firstStation, secondStation);

function checkStations(firstStation, secondStation){
    let validateFirst = false;
    let validateSecond = false;

    for (i=0; i<stations.length; i++){
        if(stations[i].toLowerCase() == firstStation.toLowerCase()){
            validateFirst = true;
        }

        if(stations[i].toLowerCase() == secondStation.toLowerCase()){
            validateSecond = true;
        }

    }

    if (validateFirst && validateSecond){
        noOfStops(firstStation, secondStation);
    } else {
        console.log("The station selected is invalid");
    }
}

function noOfStops(firstStation, secondStation){
    let num = 0;

    let firstIndex = stations.indexOf(firstStation);
    let secondIndex = stations.indexOf(secondStation);

    let start = 0;
    let end = 0;

    if (firstIndex < secondIndex) {
        start = firstIndex;
        end = secondIndex;
    } else {
        start = secondIndex;
        end = firstIndex;
    }

    for (i=start; i<end; firstIndex < secondIndex ? i++ : i--)
    {
        num = i;
    }

    console.log("To go from '" + firstStation + "' to '" + secondStation + "' - you'll need to go through " + num + " stops");

}

function stationNames(){
    let text = "";

    for (const x of stations){
        text += "- " + x + "\n";
    }
    console.log(text);
}