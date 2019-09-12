
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

    



