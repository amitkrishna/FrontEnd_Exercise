# Project 4: Launch Pads

Apartment marketplace app with city filtering, and rendering JSON data using AJAX.

## Links

jQuery: http://jquery.com/

Bootstrap: http://getbootstrap.com/

Arrays: http://www.w3schools.com/js/js_arrays.asp

Objects: http://www.w3schools.com/js/js_objects.asp

## Challenge
* Add [Bootstrap JS](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js) to your application
* Following the Bootstrap documentation, use a Bootstrap modal or alert to notify the user when a listing has been clicked that a new tab has been opened in Google Maps

## JSON :Javascript Object Notation->

Meet JSON, an easy language in which we can transfer data. In this video, we familiarize ourselves with the objects and arrays which JSON can return to our site - he's super sweet that way.
(Link to JSON file:)[https://api.jsonbin.io/b/5e99f36b5fa47104cea282ff/4]
// json has objects and arrays

## Bootstrap
Creating easy to use bootstrap using css.Linked using CDN.Its Responsive .

In this lesson, we cover bootstrap and how to take advantage of the types of front-end frameworks and streamlined html and css. Don't be late to the third party(s).

## AJAX

No need to reload the page. In this lesson we cover how AJAX allows us to use the most current version of libraries and server information.

Resources:
(jQuery - Ajax:)[http://api.jquery.com/jQuery.ajax/]
The source code and JSON link are in lesson 2 of this week.


## Each and every object in Json

Resources:
Utilities - (jQuery.each():)[http://api.jquery.com/jQuery.each/]
The source code and JSON link are in lesson 2 of this week.
Create an HTML element from each apartment object
index.js
'''
$(document).ready(function() {
 $.ajax({
   url: "https://api.myjson.com/bins/2sadq?pretty=1",
   dataType: "json",
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       debugger;
     });
    }
 })
})'''

## Buliding More with Bootstrap:-


(Bootstrap - Components:)[http://getbootstrap.com/components/]
Custom Content section
'''
<div class="list-group">
  <a href="#" class="list-group-item active">
    <h4 class="list-group-item-heading">List group item heading</h4>
    <p class="list-group-item-text">...</p>
  </a>
</div>
'''

## Display The Data:-

