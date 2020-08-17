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
1. Add Bootstrap styling
index.js
'''
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       <a href="#" class="list-group-item active">
       <h4 class="list-group-item-heading">List group item heading</h4>
       <p class="list-group-item-text">...</p>
       </a>
      });
    }
  })
})'''

2. Add variable and change " to '

'''
$.each(response.apartments, function(i, apartment) {
  var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'></h4><p class='list-group-item-text'></p></a>"
'''
3. Add variable input and concatenation so it displays properly

''' $.each(response.apartments, function(i, apartment) {
 var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>" + apartment.description + "</h4><p class='list-group-item-text'></p></a>";
   $(".apartments").append(listing);'''

4. Extra styling

''' $.each(response.apartments, function(i, apartment) {
 var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
   $(".apartments").append(listing);'''

## Plan of Attack:-->

1. Add error logging and "BR" to apartment listing

index.js
'''
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
         $(".apartments").append(listing);
     }); 
   },
   error: function(error) {
       console.log(error);
   }
 });
})'''
2. Start using borough ID to create a class and filter listings
'''
   error: function(error) {
      console.log(error);
    }
  });
  $(".filter").click(function() {

  });
})'''

## Filter Your Hear Out:->
Resources:

jQuery - Traversing -(Filtering:)[http://api.jquery.com/category/traversing/filtering/]
1. Implement city ID as class for filtering

index.js
'''
 $(".filter").click(function() {
   var city = $(this).attr("id");
 });
});'''
2. Filter out cities that DON'T match our selected borough, add listings class, and apartmentClass variable.
'''
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
       var listing = "<a href='#' class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
         $(".apartments").append(listing);
     }); 
   },
   error: function(error) {
     console.log(error);
   }
  });

  $(".filter").click(function() {
   var city = $(this).attr("id");

   $(".listings").not("." + city).css("display", "none");
 });
});
'''


## Filtering 2

Resources:

(JavaScript Comparison and Logical Operators:)[http://www.w3schools.com/js/js_comparisons.asp]
(Link to JSON file:)[https://api.myjson.com/bins/2sadq?pretty=1]
1. Show all listings before hiding filtered listings

index.js
'''
 $(".filter").click(function() {
   var city = $(this).attr("id");
   $(".listings").show();
 
   $(".listings").not("." + city).css("display", "none");
 });
});'''
2. Add conditional so all listings can be displayed
'''
 $(".filter").click(function() {
   var city = $(this).attr("id");
   $(".listings").show();
   if (city !== "all") {
     $(".listings").not("." + city).css("display", "none");
   }
 });
});'''
3. Remove active class when new filter is clicked, add it to correct filter, tidy up code
'''
 $(".filter").click(function() {
   $(".filter").removeClass("active");
   $(this).addClass("active");

   $(".listings").show();
 
   var city = $(this).attr("id");
   if (city !== "all") {
     $(".listings").not("." + city).css("display", "none");
   }
 });
});
'''


## You're So Clickeable::->

Do you have your IDs on you? In this video, we go through how to make each listing clickable.

Resources:

(jQuery - jQuery.grep():)[http://api.jquery.com/jQuery.grep/]
(Google Maps Parameters:)[http://asnsblues.blogspot.com/2011/11/google-maps-query-string-parameters.html]
1. Add skeleton of function that happens when a listing is clicked

index.js
'''
$(document).ready(function() {
 $.ajax({
   url: "###JSON—URL-GOING_HERE###",
   dataType: "json",
   success: function(response) {
     $.each(response.apartments, function(i, apartment) {
       var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
       var listing = "<a href='#' class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";
         $(".apartments").append(listing);
     }); 
   },
   error: function(error) {
   console.log(error);
   }
 });

 $(".filter").click(function() {
   $(".filter").removeClass("active");
   $(this).addClass("active");

   $(".listings").show();
 
   var city = $(this).attr("id");
   if (city !== "all") {
     $(".listings").not("." + city).css("display", "none");
   }
 });
 
 $(document).on("click", ".listings", function(){

 });
});'''
2. Add unique identifier to each apartment listing
'''
var listing = "<a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>";'''
3. Find the apartment info that matches the ID of the listing that was clicked, add debugging
'''
 $(document).on("click", ".listings", function(){
   var id = $(this).attr("id");
   $.ajax({
     url: "https://api.myjson.com/bins/2sadq?pretty=1",
     dataType: "json",
     success: function(response) {
       var selectedApartment = $.grep(response.apartments, function(apartment){
         return apartment.id == id;
       })
       debugger;
     },
     error: function(error) {
       console.log(error);
     }
   });
 });
});'''
4. Add address variable which stores the address of the clicked apartment
'''
success: function(response) {
 var selectedApartment = $.grep(response.apartments, function(apartment){
   return apartment.id == id;
 })
 var address = selectedApartment[0].address;
}'''
5. Open selected address using Google Maps in a new browser tab
'''
success: function(response) {
 var selectedApartment = $.grep(response.apartments, function(apartment){
   return apartment.id == id;
 })
 var address = selectedApartment[0].address;

 window.open("http://maps.google.com/?q=" + address);
},'''