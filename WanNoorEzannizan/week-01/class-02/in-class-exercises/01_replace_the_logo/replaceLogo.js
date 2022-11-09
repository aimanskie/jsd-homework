/* 
Exercises: Working with the CSSOM
Replace the Logo
Visit Google's website in Chrome, and open up the console.
Find the Google logo and store it in a variable using DOM traversal
Save the current src attribute into a variable
Modify the source of the logo IMG so that it's a Yahoo logo instead.
You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
Hint: You may need to figure out how to remove the srcset attribute for this!
Find the Google search button and store it in a variable.
Modify the text of the button so that it says "Yahooo!" instead
*/

let logo = document.querySelector(".lnXdpd");
let source = logo.getAttribute("src") //logo.src
logo.setAttribute("src","https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png") // logo.srcset = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png";
logo.removeAttribute("srcset")

/*
let image = document.querySelectorAll("img")
let srcImage = image[1].src
image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
*/

let btn = document.querySelectorAll(".gNO89b") 
btn[1].setAttribute("value","Yahoo!")
