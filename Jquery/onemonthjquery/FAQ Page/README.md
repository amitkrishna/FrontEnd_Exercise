# Project 2: FAQ Page

Basic FAQ Page, using an animated accordion drop down. When a question is clicked, the corresponding answer is revealed.

## Links

jQuery: http://jquery.com/
The DOM:

https://css-tricks.com/dom/

http://www.w3schools.com/js/js_htmldom.asp

## Slide Show:
1. **Add console logging to see what selector returns**
index.js
'''
$("#q1").click(function() {
 console.log($("#q1"));
})'''
2. **Find target we want to use**
index.html
'''
<div id="a1" class="answer collapse">'''
3. **Add answer selector to JavaScript file**
index.js
'''
$("#q1").click(function() {
 $("#a1");
})'''
4. **Add "sliding" option to answer selector**
index.js
'''
$("#q1").click(function() {
 $("#a1").slideDown("slow");
})'''
5. **Make it a toggle instead of a one-time event**
index.js
'''
$("#q1").click(function() {
 $("#a1").slideToggle("slow");
})'''
## Animations
[Jquery](https://api.jquery.com/category/effects/custom-effects/) allows to do custom animations in UI.
1. Identify toggle selectors
index.html
'''
<img id="arrow1-down" class="arrow down" src ="assets/arrow-down.svg">
<img id="arrow1-up" class="arrow up" src ="assets/arrow-up.svg">
'''

2. Add collapse functionality to up and down arrows
index.js
'''
$("#q1").click(function() {
 $("#a1").fadeToggle("fast");
 $("#arrow1-down").toggleClass("collapse");
 $("#arrow1-up").toggleClass("collapse");
})
'''
3. Combine functionality for the same class
index.js
'''
$("#q1").click(function() {
 $("#a1").fadeToggle("fast");
 $("#arrow1-down, #arrow1-up").toggleClass("collapse");
})'''

4. Add functionality to each FAQ question, answer and arrows
index.js
'''
$("#q1").click(function() {
 $("#a1").fadeToggle("fast");
 $("#arrow1-down, #arrow1-up").toggleClass("collapse");
})

$("#q2").click(function() {
 $("#a2").fadeToggle("fast");
 $("#arrow2-down, #arrow2-up").toggleClass("collapse");
})

$("#q3").click(function() {
 $("#a3").fadeToggle("fast");
 $("#arrow3-down, #arrow3-up").toggleClass("collapse");
})
'''
## DOM in Depth:-



## Challenge
* Create a custom animation using `animate()`
* Add a 4th question to the FAQ
* Replace the text of one of the answers with an image or gif
