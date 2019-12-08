$(document).ready(function(){  
    $("button.menu-item").click(function(){  //clicking on the menu item
		if ($("nav").hasClass("dropdown-size") || $("nav").hasClass("dropdown-size2")){ //this condition selects wich size the navigation is at the moment. It is the close section, i have this logic in reverse
			$(".dropdown-nav").removeClass("visible-dropdown");  //this makes it dissappear and lose opacity
			$("nav").removeClass("dropdown-size");  //this removes both the dropdown sizes to make it normal sized
			$("nav").removeClass("dropdown-size2");  		
		} else {
			$(".dropdown-nav").addClass("visible-dropdown"); // on click anytime when the nav bar is closed, it will only open up the first dropdown class  
			$("nav").addClass("dropdown-size");  			 //i used opacity so i can make it fade in and out easier
		}	
	//this is a section condition and would act as a menu change
		if($("p.menu-item:contains('MENU')").length) {
			$("p.menu-item").text('CLOSE');
		} else {
			$("p.menu-item").text('MENU');
		}
	});

	$(".devices").click(function(){
		if ($("nav").hasClass("dropdown-size2")){
			$(".dropdown-dropdown-nav").removeClass("visible-dropdown");  
			$("nav").removeClass("dropdown-size2");  	
			$(".not-down").removeClass("less-style");  	
		} else {
			$(".dropdown-dropdown-nav").addClass("visible-dropdown");  
			$("nav").addClass("dropdown-size2");  	
			$(".not-down").addeClass("less-style");  	
		}
	});
	
	$(".media-object").click(function (){
		// $(".fullscreenbox").css("visibility", "visible")
		var bg = $(this).css('background-image');//getting the background image
	
		$('.fullscreenbox').css('background-image', bg); //assign it to the tag for your fullscreen div
		$('.fullscreenbox').fadeIn();
	});
	$('.fullscreenbox').click(function(){
		$(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
	});
});  

function navScroll(){
	var sticky = $(".m3");     // Calling the dashboard element and setting as a variable
	var notsticky = $(".m4");     // getting the position value (which is a number) of the dashboard element
	var fixed = $(".s1"); 	// This is the fixed object
	var spot = $("#review").position(); 	// This is where the sticky appears
	var spot2 = $("#review2").position(); // This is where the contents of the sticky changes image
	var spacing = 55;
	var spacing2 = 155;
	$(window).scroll(function() {  //adding a scroll function to the window  
		// a variable that is a number that describes how far you have scrolled
		var wScroll = $(window).scrollTop();
		// the condition for adding the sticky class

		
		if (wScroll >= $(".introduction").position().top - 120) { //intro object moving in number value: 835.4545288085938
			$(".m1").addClass("sticky");
			$(".m2").addClass("show");
			$('.slidein').addClass("introslide"); //sliding in the image of device
		} else {
			$(".m1").removeClass("sticky");
			$(".m2").removeClass("show");
			$('.slidein').removeClass("introslide"); //removing the intro device
		}
		// the moving object
		$('.m1').css({ 
			'transform':'translate('+ wScroll/35 +'vW, 0px)'// the moving of the intro screen
		});
		//chart
		if (wScroll >= $("#review").position().top - 100) { 
			$('.charts-graph').each(function(i){
				setTimeout(function(){
					$('.charts-graph').eq(i).addClass("introslide");	
				}, 150 * (i+1));
			});
			
		}
		if (wScroll >= $(".lesson2").position().top - 430) { 
			$('.points-graph').each(function(i){
				setTimeout(function(){
					$('.points-graph').eq(i).addClass("introslide");	
				}, 150 * (i+1));
			});
			
		}
		//sticky phone screen
		if (wScroll >= spot.top - 140 && wScroll < spot2.top - spacing) { // Sticky Phone Screen
			sticky.addClass("sticky");
			fixed.addClass("fixed");
		} else {
			sticky.removeClass("sticky");	
			fixed.removeClass("fixed");
		}
		if (wScroll > spot2.top - spacing) { // removing the fixed object and making it relative again
			notsticky.addClass("fixed");
		} else {
			notsticky.removeClass("fixed");
			
		}
		// end of sticky phone screen
		if (wScroll >= 500){ 	// change in intro
			$('.m1').addClass('syncingdevice')
		} else {
			$('.m1').removeClass('syncingdevice')
		}
		if (wScroll >= $(".review3").position().top - 100){ 	// change in intro
			$('.s1').addClass('sharedevice')
		} else {
			$('.s1').removeClass('sharedevice')
		}
		//second sticky phone screen
		if (wScroll >= $(".lessons").position().top - 70 && wScroll < $(".lesson3").position().top - spacing2) { // Sticky Phone Screen
			$(".m5").addClass("sticky");
			$(".s2").addClass("fixed");
		} else {
			$(".m5").removeClass("sticky");	
			$(".s2").removeClass("fixed");
		}
		if (wScroll > $(".lesson3").position().top - spacing2) { // removing the fixed object and making it relative again
			$(".m7").addClass("fixed");
		} else {
			$(".m7").removeClass("fixed");
			
		}
		console.log(wScroll);
	});

}

$(window).scroll(function() {
    navScroll();
});

$(document).ready(function() {
    navScroll();
});
