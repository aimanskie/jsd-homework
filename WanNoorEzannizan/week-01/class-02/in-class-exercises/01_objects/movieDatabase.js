/*
The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: 
title (a string), 
duration (a number), 
director (a string) and 
stars (an array of strings).
Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
Maybe the join method will be helpful
*/

const movie = {
    title: "The Life Aquatic",
    duration: 118,
    director: "Wes Anderson",
    casts:[
        "Bill Murray", 
        "Cate Blanchett", 
        "Anjelica Huston", 
        "Jeff Goldblum",
        "Willem Dafoe"
    ]
}

var stars = movie.casts.join(', ');
stars = stars.replace(/,(?=[^,]+$)/,' and');

console.log("'" + movie.title + "' lasts for about " + movie.duration + " minutes, and was directed by " + movie.director + ". Stars: " + stars)