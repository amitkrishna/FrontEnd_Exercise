$(document).ready(function () {
    // YOUR CODE HERE!
    $("#list-items").html(localStorage.getItem("listItems"));// load any previously stored data item 
    $(".add-items").submit(function ( $event ){
        $event.preventDefault();
        var item = $("#todo-list-item").val();
        console.log($("#todo-list-item").val());
        console.log(typeof(item));
        console.log(typeof(item.val));// undefined
        if (Boolean(item)) {// run only if condition is true
            console.log(Boolean(item.val));// gets the value of the item
        $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a></li>");
        localStorage.setItem("listItems", $("#list-items").html());// get the raw html so that it can be rendered
        $("#todo-list-item").val("");
        }
    });
    $(document).on("change", ".checkbox", function(){// adding list
        console.log("Hello World");
        $(this).attr("checked","checked");
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItem", $("#list-items").html());
    });
    $(document).on("click",".remove",function(){// removing in list
        $(this).attr("checked","checked");
       $(this).parent().remove(); 
       console.log($(this).parent());
       localStorage.setItem("listItem",$("#list-items").html());

    });
});
