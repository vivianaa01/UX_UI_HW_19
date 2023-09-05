console.log ("Your index.js file is loaded correctly!");

$("li").hover( 
    function(){
        $(this).addClass("bold");
    }, function () {
        $(this).removeClass("bold");
    }
)

$("button").hover( 
    function(){
        $(this).addClass("buttonHover");
    }, function () {
        $(this).removeClass("buttonHover");
    }
)

$(".logo").hover( 
    function(){
        $(this).addClass("bold");
    }, function () {
        $(this).removeClass("bold");
    }
)

console.log ("The hover features work!")
