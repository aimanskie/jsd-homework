/*
The Book List
Keep track of which books you read and which books you want to read!

Create a webpage with an h1 of "My Book List".
Add a script tag to the bottom of the page, where all your JS will go.
Copy this array of books (or create your own):

Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
If you have read it, make the text color green. If you haven't, make the text color red.
Bonus: Use a ul and li to display the books.
Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page
*/
const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
];

// add url of book covers to books[]
books[0].bookCover = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547125681i/24113.jpg";
books[1].bookCover = "https://m.media-amazon.com/images/I/51Pe5D36rML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
books[2].bookCover = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433086293i/21.jpg";
books[3].bookCover = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608723131i/53916142.jpg";
books[4].bookCover = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388620656i/55030.jpg";

//display as paragraph
for (i=0; i<books.length; i++){
  let pBook = document.createElement("p");
  pBook.innerText = books[i].title + " by " + books[i].author;
  if (books[i].alreadyRead){
    pBook.style.color = "green";
  } else {
    pBook.style.color = "red";
  }
  document.body.appendChild(pBook);
}

//display as list
let ul = document.createElement("ul");
document.body.appendChild(ul);
for (i=0; i<books.length; i++){
  let pBook = document.createElement("li");
  pBook.innerText = books[i].title + " by " + books[i].author;
  if (books[i].alreadyRead){
    pBook.style.color = "green";
  } else {
    pBook.style.color = "red";
  }
  document.body.insertBefore(pBook, ul);

  let imgBook = document.createElement("img");
  imgBook.src = books[i].bookCover;
  imgBook.style.width = "100px";
  imgBook.style.height = "150px";
  imgBook.style.display = "inline";
  document.body.appendChild(imgBook);

}