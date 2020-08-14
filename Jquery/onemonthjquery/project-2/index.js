$( "#q1" ).click(function($event) {
    console.log($("#q1"));
    $( "#a1").slideToggle("slow", function (){
        console.log("Animation completed");
    })
  });

  // $() is short-end for jquery()