# Project 3: Todo List

Simple todo list app, using local storage to persist data.

## Links

jQuery: http://jquery.com/

localStorage: http://www.w3schools.com/html/html5_webstorage.asp

## Challenge
* Create a custom animation using `animate()`
* Add a 4th question to the FAQ
* Replace the text of one of the answers with an image or gif

## Lessons
* We will learn to persist data.
- document is entire webpage.
'''
$(document).ready(function () {
    // YOUR CODE HERE!
    console.log("Hit");
});
'''
1. Bind submit functionality to add-items selector and add console logging
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function() {
 console.log("HI!";)
 });
});
'''
2. Prevent default behavior to retain logging information
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function(event) {
 event.preventDefault();
 console.log("HI!");
 });
});
'''
3. Get Value from input element from html forms
Making use of [val](http://api.jquery.com/val/) function in Jquery
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 console.log($("#todo-list-item").val());
 });
});'''
index.js
'''
 var item = $("#todo-list-item").val();
 });'''

---
