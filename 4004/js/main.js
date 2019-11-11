$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.C1').css({
        'transform' : 'translate(-' + wScroll /60 + '%,0)'
    }).css({
        'letter-spacing' :  +  wScroll /10 +'px'
    }).css({
        'font-size' : 200 + wScroll /4  + 'pt'
    }).css({
        'filter' : 'blur(' + wScroll /20 + 'px)'
    });
    $('.intro_discussion p').css({
        'opacity' : 1 - wScroll /3000
    });

	// Parallax for the first section of images
    if (wScroll > ($('.imagebox').offset().top)) {
        $('.parabox').css({
            'transform' : 'translate(0px,-' + wScroll / 1.5 + 'px)'
            
        });
        $('.imagebox').css({
            'padding-top' :  ($('.imagebox').offset().top / 1.5 ) + 'px'
            
        });
        
    } else {    };
    // Parallax for the second section of images
    if (wScroll > ($('.imagebox2').offset().top)) {
        $('.parabox2').css({
            'transform' : 'translate(0px,-' + wScroll / 1.5 + 'px)'
            
        });
        $('.imagebox2').css({
            'padding-top' :  ($('.imagebox2').offset().top /1.5 + 100) + 'px'
            
        });
        
    } else {    };
    // Parallax for the navigation
    if (wScroll > ($('.intro_discussion').offset().top - 100)) {

        $('.topnavigation').each(function(){
            $('.topnavigation').addClass('is-showing');
        });

    } else {

        $('.topnavigation').each(function(){
            $('.topnavigation').removeClass('is-showing');
        });

    };

});