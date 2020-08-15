$( "#q1" ).click(function($event) {
    console.log($("#q1"));
    $( "#a1").slideToggle("slow", function (){
        console.log("Animation completed");
    })
  });

 $("#q2").click(function(){
     $("a2").fadeToggle("slow", function(){
         console.log("Animate");
     });
 }) 

  // $() is short-end for jquery()