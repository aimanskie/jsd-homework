/*
Exercise: The DOM Detective
Visit General Assembly's website in Google Chrome, and open up the JavaScript console.

You'll have to do this all in the JavaScript console, so keep track of what you have written!

Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

The title of the page
The logo in the nav
The "Find Your Course" button in the nav
The heading that says "Learning Today, Leading Tomorrow"
All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
The amount of campuses around the world
The number of instructors
The logos of GA's featured clients and hiring partners
GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
The input where you add your email to sign up for the newsletter (in the footer)
*/

// title of the page
let title = document.querySelector("title").innerHTML;

// The logo in the nav
let logo = document.querySelector(".navi_banner_logo")

// The "Find Your Course" button in the nav
let nav = document.querySelector(".navi_menu .highlight a")

// The heading that says "Learning Today, Leading Tomorrow"
let heading = document.querySelector("h1")

//All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
let list = document.querySelectorAll(".course-name")

// The amount of campuses around the world
document.querySelector(".facts_list_item_quantity")[0].innerText
document.querySelectorAll(".home-facts .facts_list_item_quantity")[2].innerText

// The number of instructors
document.querySelectorAll(".facts_list_item_quantity")[2].innerHTML
document.querySelectorAll(".home-facts .facts_list_item_quantity")[2].innerHTML

// The logos of GA's featured clients and hiring partners
document.querySelector(".Employers__list___1cuG_")

// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
document.querySelectorAll(".navi_footer-social-icons_youtube, .navi_footer-social-icons_googleplus, .navi_footer-social-icons_instagram, .navi_footer-social-icons_linkedin, .navi_footer-social-icons_twitter, .navi_footer-social-icons_facebook")

// The input where you add your email to sign up for the newsletter (in the footer)
document.querySelector(".navi_footer-signup input[type=\"email\"]")