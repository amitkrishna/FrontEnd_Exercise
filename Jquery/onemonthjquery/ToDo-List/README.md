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
## Insert Here
[Resource -Manipulation -DOM Insertion](http://api.jquery.com/category/manipulation/dom-insertion-inside/)
DOM Manipulation is a feature in Jquery.
1. Add new selector
index.html
'''
<ul id="list-items">
'''
2. Append input from item variable into list
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 $("#list-items").append("<li>" + item + "</li>");
 });
});
'''
3. Add checkbox and x (for later removal of item)
index.js
'''
$("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a></li>");
 });'''
4. Add <hr> for separation styling
index.js
'''
$("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
 });'''
5. Clear input field after each new item is added to our list
index.js
'''
 $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");

 $("#todo-list-item").val(""); //  to make the text input null

 });
'''
## Dynamic Changes

1. Add checkbox class to jQuery file
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 if (item) {
  $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
  $("#todo-list-item").val("");
 }

 });

 $(".checkbox")

});'''
2. Add console logging to see if checkbox has changed
index.js
'''
$(".checkbox").change(function() {
 console.log("Checkbox checked!");
 })'''
3. Comment out unusable code, target the dynamically created checkbox
index.js
'''
 // $(".checkbox").change(function() {
 // console.log("Checkbox checked!");
 // })

 $(document).on("change", ".checkbox", function() {

 });
'''
## Add completed functionality to check items off the list with the checkbox
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 if (item) {
  $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
  $("#todo-list-item").val("");
 }

 });

 // $(".checkbox").change(function() {
 // console.log("Checkbox checked!");
 // })

 $(document).on("change", ".checkbox", function() {
  $(this).parent().toggleClass("completed");
 });

});
'''
## DOM Removal
Make the little x actually remove the list item. (Link)[http://api.jquery.com/category/manipulation/dom-removal/]
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 if (item) {
  $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
  $("#todo-list-item").val("");
 }

 });

 // $(".checkbox").change(function() {
 // console.log("Checkbox checked!");
 // })

 $(document).on("change", ".checkbox", function() {
  $(this).parent().toggleClass("completed");
 });

 $(document).on("click", ".remove", function() {
  $(this).parent().remove();
 });

});'''

## <<--::Web Local Storage::-->>
Resources:
(Local Storage API:)[https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API]
(Local Storage and how to use it on Websites:)[http://www.smashingmagazine.com/2010/10/]local-storage-and-how-to-use-it/
1. Save list items to Local Storage
index.js
'''
$(document).ready(function () {
 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 if (item) {
   $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
   localStorage.setItem("listItems", $("#list-items").html());
   $("#todo-list-item").val("");
 }

 });

 // $(".checkbox").change(function() {
 // console.log("Checkbox checked!");
 // })

 $(document).on("change", ".checkbox", function() {
   $(this).parent().toggleClass("completed");
 });

 $(document).on("click", ".remove", function() {
   $(this).parent().remove();
 });

});'''
2. Tell page to load any previously-added list items from Local Storage
index.js
'''
$(document).ready(function () {
 
 $("#list-items").html(localStorage.getItem("listItems"));

 $(".add-items").submit(function (event) {
 event.preventDefault();
'''
---
Resources:
(Manipulation - General Attributes - .attr():)[http://api.jquery.com/attr/]
(Manipulation - General Attributes - .removeAttr():)[http://api.jquery.com/removeAttr/]
1. Make removed and checked items persist in Local Storage after page refresh
index.js
'''
$(document).ready(function () {
 
 $("#list-items").html(localStorage.getItem("listItems"));

 $(".add-items").submit(function (event) {
 event.preventDefault();

 var item = $("#todo-list-item").val();

 if (item) {
   $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
   localStorage.setItem("listItems", $("#list-items").html());
   $("#todo-list-item").val("");
 }

 });

 // $(".checkbox").change(function() {
 // console.log("Checkbox checked!");
 // })

 $(document).on("change", ".checkbox", function() {
   $(this).parent().toggleClass("completed");
   localStorage.setItem("listItems", $("#list-items").html());
 });

 $(document).on("click", ".remove", function() {
   $(this).parent().remove();
   localStorage.setItem("listItems", $("#list-items").html());
 });

});'''
2. Keep checked checkbox checked, and unchecked checkbox unchecked!
index.js
'''
 $(document).on("change", ".checkbox", function() {
   if ($(this).attr("checked")) {
     $(this).removeAttr("checked");
   } else {
     $(this).attr("checked", "checked");
   }
 
   $(this).parent().toggleClass("completed");
   localStorage.setItem("listItems", $("#list-items").html());
 })
'''
## Animations:
#### Complete these two challenges 
Add an interesting animation to the item removal. You can use a fadeOut()  or slideDown() method like we did in Project 2. Or any other type of interactive you like. 
Add an "easter egg" to the project. So for example, if the listItem === "dance", append a dance GIF to the todo list. Have fun with it!
