/*
The Reading List
Keep track of which books you have read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the 
title (a string), 
author (a string), and 
alreadyRead (a boolean indicating if you have read it yet).
Iterate through that array of books
For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
Now use an if/else statement to change the output depending on whether you read it yet or not.
If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"
*/

const readingList = [
    {
        title: "Sapiens", 
        author: "Yuval Noah Harari",
        alreadyRead: false
    },
    {
        title: "A Life on Our Planet", 
        author: "David Attenborough",
        alreadyRead: true
    }
]

for (i=0; i < readingList.length; i++){
    let book = readingList[i].title;
    let author = readingList[i].author;

    console.log("'" + book + "', by " + author);
}

for (i=0; i < readingList.length; i++){
    let book = readingList[i].title;
    let author = readingList[i].author;

    if(readingList[i].alreadyRead){
        console.log("You have already read \"" + book + "\", by " + author)
    } else{
        console.log("You still need to read \"" + book + "\", by " + author)
    }
}

// Method 2
// readingList.forEach(e => { 
//     if (e.alreadyRead){
  
//         console.log("You have already read \""+e.title + "\", by "+  e.author);
//     }else{
//         console.log("You still need to read \""+e.title + "\", by "+  e.author);
//     }
//   });