var wind = $(window);
wind.on('load',function(){
    //nav
    wind.on('scroll', function(){
        var Y = wind.scrollTop();
        if(Y > 300){
            $('nav').addClass('nav-scroll');
        }
        else{
            $('nav').removeClass('nav-scroll');
        }
    })
    //stellar
    wind.stellar();
    //skollr
    var s = skrollr.init({
        edgeStrategy: 'set',
        constants: {
            myconst: 300,
            my500: function() {
                return 500;
            }
        },
        easing: {
            half1: function() {
                return 0.5
            }
        }
    });

    $('.nav-link').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    })


    //scrollIt
    $.scrollIt();

    //isotope
    $('.gallery').isotope({
        itemSelector: '.col',
        layoutMode: 'fitRows'
    });
    // quote owlCarousel
    $('.quote-slide .owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        responsiveClass:true,
        items: 1,
        responsive:{
            0:{
                items:1
            }
        }
    });
    // brand owlCarousel
    $('.section-brand .owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 100,
        mouseDrag: true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
})