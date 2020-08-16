$(document).ready(function () {
    // YOUR CODE HERE!
    $(".add-items").submit(function ( $event ){
        console.log("Hit");
        $event.preventDefault();
        console.log($event);
        var item = $("#todo-list-item").val();
        console.log(item);
    });

});
