/*
(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
Iterate through each li and change the class to "list-item". 
Add a style tag that sets a rule for "list-item" to make the color "red".
Create a new img element and set its src attribute to a picture of you. Append that element to the page.
*/

document.body.style.fontFamily="Arial, sans-serif"
document.querySelectorAll("span")[0].innerText="Wan Noor Ezannizan"
document.querySelectorAll("span")[1].innerText="Listen to podcasts"
document.querySelectorAll("span")[2].innerText="Bangi"

let list = document.getElementsByTagName("li");
for (let item of list){
    item.classList.add("list-item")
}

let liStyle = ".list-item {color:red}"
let addStyleTag = document.createElement("style");
addStyleTag.setAttribute("type", "text/css");
addStyleTag.innerHTML = liStyle;
document.head.appendChild(addStyleTag);

let addImageTag = document.createElement("img");
addImageTag.setAttribute("src","https://picsum.photos/400/500");
addImageTag.style.width="100px";
addImageTag.style.height="150px";
document.body.appendChild(addImageTag);