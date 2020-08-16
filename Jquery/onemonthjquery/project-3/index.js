$(document).ready(function () {
    // YOUR CODE HERE!
    $(".add-items").submit(function ( $event ){
        console.log("Hit");
        $event.preventDefault();
        console.log($event);
        var item = $("#todo-list-item").val();
        console.log(item);
        if(item){// run only if condition is true
            $("#todo-list-item").val("");

        $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a></li>");
        }
    });

});
