/*$(document).ready(function() {
    // YOUR CODE HERE!
    $.ajax({
        url: "https://api.myjson.com/bins/2sadq?pretty=1",
        dataType: "json",
        sucess: function(response){
            console.log(response);
            $.each(response.apartments, function(i, apartment) {
                console.log(apartment);
              });
        },
        error: function(response){
              console.log(response);
        }
    })
});

*/
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
   })
   