$(document).ready(function () {
    // YOUR CODE HERE!
    $(".add-items").submit(function ( $event ){
        console.log("Hit");
        $event.preventDefault();
        console.log($event);
    });

});
