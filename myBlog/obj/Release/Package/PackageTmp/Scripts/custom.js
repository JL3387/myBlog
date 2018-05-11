$(function() {
"use strict";
    
    /***************** Top Slidingber ******************/
    var megaDrop = $('.top-slidingbar-trigger');
    var megaContainer = $('.top-slidingbar');
    $(megaDrop).click(function(e) {
        $(megaContainer).slideToggle(300, function () {
            if ($(this).is(":hidden"))
                $(megaDrop).html("+");
            else
                $(megaDrop).html("x");
        });
    });


    /***************** Header Search ******************/
    $('.search').click(function(e) {
        if ($('.search-btn').hasClass('fa-search')) {
            $('.search-open').fadeIn(500);
            $(".search-btn").removeClass("fa-search").addClass("fa-times");
        } else {
            $('.search-open').fadeOut(500);
            $(".search-btn").removeClass("fa-times").addClass("fa-search");
        }
    });


    /*============================================
     MagnificPopup Bar
     ==============================================*/
    $('.mp-lightbox').magnificPopup({
        removalDelay: 300,
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });

    /*============================================
     Tooltip
     ==============================================*/
    $('[data-toggle="tooltip"]').tooltip();

    /*============================================
     Progress Bar
     ==============================================*/
    if ($('.progress-bars').length) {
        $(window).bind('scroll', function (e) {
            var hT = $('.progress-bars').offset().top,
                    hH = $('.progress-bars').outerHeight(),
                    wH = $(window).height(),
                    wS = $(this).scrollTop();
            if (wS > (hT + hH - wH)) {
                $(function () {

                    $(".progress-bars > .progress > .progress-bar").each(function () {
                        var width = $(this).attr("aria-valuenow");
                        $(this).css("width", width + '%');
                    });

                });
            }
        });
    }

    /*============================================
     Accordion
     ==============================================*/
    function toggleIcon(e) {
        $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').click('hidden.bs.collapse', toggleIcon);
    $('.panel-group').click('shown.bs.collapse', toggleIcon);

    /*============================================
     Counter
     ==============================================*/
    if ($('.count').length)
    {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    }


    /***************** Owl Carousel Testimonials ******************/

    $('#owl-testi').owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

    });

    /***************** Owl Carousel Blog ******************/
    $('#owl-blog').owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

    });


    /***************** Owl Carousel Testimonials ******************/
    $('#owl-testimonials').owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

    });
    $('#owl-testimonials-style-3').owlCarousel({
        autoPlay: true,
        itemsCustom: [[320, 1], [480, 1], [600, 1], [768, 1], [992, 2], [1199, 2]],
        lazyLoad: true,
        navigation: false,
        rewindNav: true,
        autoHeight: true,
        pagination: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        scrollPerPage: true,
    });


    /***************** home-blog-style1 ******************/
    $('#home-blog-style').owlCarousel({
        autoPlay: false,
        itemsCustom: [[320, 1], [480, 1], [600, 1], [768, 1], [992, 1], [1199, 2]],
        lazyLoad: true,
        navigation: false,
        rewindNav: true,
        autoHeight: true,
        pagination: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        scrollPerPage: true,
    });



    /***************** related-product-style1 ******************/
    $('#related-product').owlCarousel({
        autoPlay: false,
        itemsCustom: [[320, 1], [480, 2], [600, 2], [768, 3], [992, 4], [1199, 4]],
        lazyLoad: true,
        navigation: false,
        rewindNav: true,
        autoHeight: true,
        pagination: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        scrollPerPage: true,
    });



    /***************** related-product-left-style1 ******************/
    $('#related-product-left').owlCarousel({
        autoPlay: false,
        itemsCustom: [[320, 1], [480, 1], [600, 2], [768, 2], [992, 3], [1199, 3]],
        lazyLoad: true,
        navigation: false,
        rewindNav: true,
        autoHeight: true,
        pagination: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        scrollPerPage: true,
    });
    
      /***************** related-product-left-style1 ******************/
    $('#recent-work').owlCarousel({
        autoPlay: false,
        itemsCustom: [[320, 1], [480, 1], [600, 2], [768, 2], [992, 2], [1199, 3]],
        lazyLoad: true,
        navigation: false,
        rewindNav: true,
        autoHeight: true,
        pagination: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        scrollPerPage: true,
    });
    
    
      /***************** Banner ******************/

    $('#left-banner-block').owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 500,
        singleItem: true,
        autoPlay: true,
       pagination: false,

    });
    /* ---------------------------------------------------------------- */
    /* Flexslider
     /* ---------------------------------------------------------------- */
    $('#main_slider').flexslider({
        animation: 'slide',
        useCSS: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#main_thumbs'
    });

    $('#main_thumbs').flexslider({
        animation: 'slide',
        useCSS: false,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        minItems: 3,
        maxItems: 4,
        itemWidth: 103.75,
        itemMargin: 10,
        asNavFor: '#main_slider'
    });

    $('.cd-lightbox-image').magnificPopup({
        removalDelay: 300,
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });

});