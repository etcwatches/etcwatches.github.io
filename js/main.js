'use strict';

jQuery(document).ready(function($) {

    var htmlBody = $('html, body');
    var body = $('body');
    var socialLink = $('.social a');
    var explore = $('header .explore a');
    var openMenu = $('.open-menu');
    var overlayNav = $('.overlay nav');
    var aboutSection = $(".about-home");
    var testimonialsComments = $('.testimonials .comments');
    var toTop = $('.to-top');
    var topBar = document.querySelector('.top-bar');
    var stickyTopBar  = new Headroom(topBar);

    // After Typeing, Load Elements
    function loaded(){
        $('body').addClass('loaded');
    }

    Typed.new('#typed', {
        stringsElement: document.getElementById('type'),
        typeSpeed: 16,
        startDelay: 0,
        callback: function(){
            loaded();
        }
    });

    // Sticky Top Bar
    stickyTopBar.init();

    // Explore Button (Go to About Section)
    explore.on('click', function ( e ) {

      htmlBody.animate({
        scrollTop: aboutSection.offset().top
      }, 500);

      return false;
      e.preventDefault();

    });

    // Open Menu / Overlay
    openMenu.on('click', function ( e ) {
      openMenu.toggleClass('is-active');
      body.toggleClass('menu-opened');
      overlayNav.toggleClass('show');
    });

    // Go to Top
    toTop.on('click', function( e ) {
      htmlBody.animate({
          scrollTop: 0
      }, 600);
      return false;
    });

    // Testimonials Slider
    testimonialsComments.slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4600,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: true,
                centerMode: true,
                adaptiveHeight: true,
                centerPadding: '0',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: true,
                centerMode: true,
                adaptiveHeight: true,
                centerPadding: '0',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: true,
                adaptiveHeight: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
                }
        }
        ]
    });


});
