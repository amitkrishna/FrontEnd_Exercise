$( ".question" ).click(function($event) {
    // console.log($("#q1"));// DOM Node
    console.log($(this).next());
    console.log($(this).children());
    $(this).next().fadeToggle("fast");
    $(this).children().toggleClass("collapse");
    console.log($(this).next().next().animate({
        opacity: 1.25,
        height: "200px"
      },2000, function() {
        // Animation complete.
      }
    ));
    // $( "#a1").fadeToggle("slow");
    // $("#arrow1-down,  #arrow1-up").addClass("collapse");
  });
/*$( "#q2" ).click(function($event) {
console.log($("#q1"));// DOM Node
    $( "#a2").fadeToggle("slow", function (){
        console.log($("#a1"));
});
$("#arrow2-down,  #arrow2-up").addClass("collapse");
});

$( "#q3" ).click(function($event) {
    console.log($("#q1"));// DOM Node
    $( "#a3").fadeToggle("slow", function (){
        console.log($("#a1"));
    });
    $("#arrow3-down,  #arrow3-up").addClass("collapse");
  });*/
/*
 $("#q2").click(function(){
   $("#a2").slideToggle("slow",function (){
     console.log("Animate completed");
 })
 }); 
*/
  // $() is short-end for jquery()