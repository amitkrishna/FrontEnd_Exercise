/*$(document).ready(function () {
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
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        } else{
            $(this).attr("checked","checked");
        }
        console.log("Hello World");

        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
    });
    $(document).on("click",".remove",function(){// removing in list
        $(this).attr("checked","checked");
       $(this).parent().remove(); 
       localStorage.setItem("listItems",$("#list-items").html());

    });
});
*/
$(document).ready(function () {
 
    $("#list-items").html(localStorage.getItem("listItems"));
   
    $(".add-items").submit(function (event) {
    event.preventDefault();
   
    var item = $("#todo-list-item").val();
   
    if (item) {
      $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    }
   
    });
   
    // $(".checkbox").change(function() {
    // console.log("Checkbox checked!");
    // })
   /*
    $(document).on("change", ".checkbox", function() {
      $(this).parent().toggleClass("completed");
      localStorage.setItem("listItems", $("#list-items").html());
    });*/
    $(document).on("change", ".checkbox", function() {// call back functions
        if ($(this).attr("checked")) {
          $(this).removeAttr("checked");
        } else {
          $(this).attr("checked", "checked");
        }
      
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
      })
    $(document).on("click", ".remove", function() {

    //  $(".checked").slideDown("slow",function(){
        console.log("Animation");
        $(this).parent().remove();
        localStorage.setItem("listItems", $("#list-items").html());
    //  });
    });
   
   });