$(document).ready(function () {
    // YOUR CODE HERE!
    $(".add-items").submit(function ( $event ){
        $event.preventDefault();
        var item = $("#todo-list-item").val();
        console.log($("#todo-list-item").val());
        console.log(typeof(item));
        console.log(typeof(item.val));// undefined
        if (Boolean(item)) {// run only if condition is true
            console.log(Boolean(item.val));// gets the value of the item
            console.log(typeof(item));
            console.log("Hit");
        $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a></li>");
        $("#todo-list-item").val("");
        }
    });
    $(document).on("change", ".checkbox", function(){
        console.log("Hello World");
        $(this).parent().toggleClass("completed");
    });

});
