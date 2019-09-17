
// Random Colour on Hover
$(document).ready(function(){

    $(".item").mouseenter(function(){
        // Hovering on item - random color
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 80);
        var b = Math.floor(Math.random() * 255);
        var color = "rgb("+r+","+g+","+b+")"
        $(this).css("color", color);
    }).mouseleave(function() {      
        //if not hovering on item
        var main = "rgb(0,0,0,0.5)"
        $(this).css("color", main);
        //end if
    });    
});
// ////////////////////////////////////////////////
// Initial Fade In
// Copied from Froda, honestly a bit confused
$(document).ready(function fadein() {
    // Ping Succesful Run
    console.log("Intial Loading Function: Run.");
    // Engage Loading Cursor + Set Flex Elements to Opacity 0.
    $(".ass").css("opacity", "0");
    setTimeout(function(loadanimation) {
        // Chain animation for Menu blocks.
        $(".ass").each(function(chain) {
            $(this).delay(100 * chain).animate({
                opacity: 1
            });
        });
    }, 300);
});
// $(".ass").fadeIn().removeClass("ass");

// Random squares cause it's cool (doesnt work for some reason)

// function pickColor(){
//         // Hovering on page - random color
//         var r = Math.floor(Math.random() * 80);
//         var g = Math.floor(Math.random() * 255);
//         var b = Math.floor(Math.random() * 80);
//         var color = "rgb("+r+","+g+","+b+")"
//         return color;
// }

// function pickPos(){
//     return Math.floor((Math.random()*100));
// }
// function pickSize(){
//     return Math.floor((Math.random()*300)+100) + "px";
// }
// function addSquare(){
//     var div = document.createElement("div");
//     div.innerHTML = "HELP"
//     div.style.background = pickColor();
//     div.style.left=pickPos() + "%";
//     div.style.top=pickPos() + "%";
//     div.style.width=pickSize();
//     div.style.height=pickSize();
//     div.setAttribute("class", "fancy");

//     document.body.appendChild(div);;
    
// }
// // $(".item").mousemove(addSquare())

// $(".main-content").mousemove(

//     console.log(addSquare),
//     addSquare
// );

// Button JS
//Get the button
var mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}