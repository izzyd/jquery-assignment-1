// Do your work in this file.


var i = 0;
for (i = 0; i <= 196; i++) {
    $("<div>").addClass("box type-1").appendTo(document.body);
    "<br>";
    $("<div>").addClass("box type-2").appendTo(document.body);
    "<br>";
}

// function boxClicked()

$(".box").click(function () {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
    }
    else {
        $(this).addClass("clicked");
    }
}); 

// addEventListener 