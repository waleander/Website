/*
Author: Big Field Digital Ltd.
Author URI: http://bigfielddigital.com/
Version: 1.0
Developed and Designed By: Big Field Digital
*/
 
$(window).load(function() {

    "use strict";

    // Parallax Effect
    (function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $(window).stellar({
                horizontalScrolling: false,
                responsive: true,
            });
        }

    }());


});

$(document).ready(function() {
    // PreLoader
    $("body").queryLoader2({
        // Preloader options
        backgroundColor: "#f9710b",
        barHeight: 4,
        minimumTime: 1000,
        fadeOutTime: 2000,
        percentage: true,
    });

    // Sticky Menu
    $(".header-area").sticky({
        topSpacing: 0
    });

    // Text Rotator
    if ($('#js-rotating').length > 0) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "lightSpeedIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 6000,
            complete: function() {
                // Called after the entrance animation is executed.
            }
        });
    }

    // jQuery Smooth Scroll
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Responsive Menu
    $("ul.nav.navbar-nav li a").click(function() {
        $(".navbar-collapse").removeClass("in");
    });

    // jQuery ScrollSpy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 70
    });

    // Team Carousel 
    $("#team-carousel").owlCarousel({
        // Team Carousel Settings
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        slideSpeed: 1000,
        paginationSpeed: 1000,
        singleItem: true,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
    });


    // Partners Carousel 
    $("#partners-carousel").owlCarousel({
        // Partners Carousel Settings
        navigation: false,
        pagination: false,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        stopOnHover: true,
    });



    // BLog Post Carousel 
    $("#blog-post-carousel").owlCarousel({
        // BLog Post Carousel Settings
        navigation: false,
        slideSpeed: 2000,
        paginationSpeed: 1000,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        stopOnHover: true,
    });

    // Portfolio Gallery

    if ($('#grid').length > 0) {
        // Initialize plugin
        var $grid = $('#grid');
        $(window).load(function() {
            $grid.shuffle({
                itemSelector: '.thumbnails' // The Child Item of the parent #grid
            });
        });

        // Re-Shuffle the gallery
        $('#filter li').on('click', function(e) {
            e.preventDefault();

            // Active class on li
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // Filter item
            var groupName = $(this).attr('data-group');

            // Reshuffle item
            $grid.shuffle('shuffle', groupName);
        });
    }

    // Simple Light Box
    var gallery = $('.thumbnails a').simpleLightbox({
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        closeText: '<i class="fa fa-times"></i>',
    });
    
    
    // Simple Light Box
    var gallery2 = $('.recent_thumbnails a').simpleLightbox({
        navText: ['', ''],
        closeText: '<i class="fa fa-times"></i>',
    });

    // Counter JS
    $('.our-awards-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 7000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

    // Google Map toggle
    var $map = $('.google-map-container');
    var $toggleButton = $('#mapToggle');
    // Hide the map

    $map.hide();

    // we need to load the map once
    // with this variable 
    // we will keep track of that
    var isMapLoaded = false;

    // Show and Toggle It
    $toggleButton.click(function() {
        $map.slideToggle({
            complete: function() {
                // if map is not loaded
                if (!isMapLoaded) {
                    // first load the map

                    // Google Map Options
                    var map;

                    map = new GMaps({
                        el: '#gmap-wrapper',
                        lat: 7.3627956, //Replace Here Location Google Map Lat
                        lng: 3.8650622, //Replace Here Location Google Map Lng
                        scrollwheel: false,
                        zoom: 17,
                        zoomControl: true,
                        panControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        overviewMapControl: false,
                        clickable: true
                    });

                    var image = '';
                    map.addMarker({
                        lat: 7.3627956, //Replace Here Location Google Map Lat
                        lng: 3.8650622, //Replace Here Location Google Map Lat
                        icon: image,
                        animation: google.maps.Animation.DROP,
                        verticalAlign: 'bottom',
                        horizontalAlign: 'center',
                        backgroundColor: '#d9d9d9',
                    });


                    var styles = [

                        {
                            "featureType": "road",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        }, {
                            "featureType": "water",
                            "stylers": [{
                                "color": "#99b3cc"
                            }]
                        }, {
                            "featureType": "landscape",
                            "stylers": [{
                                "color": "#f2efe9"
                            }]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#d3cfcf"
                            }]
                        }, {
                            "featureType": "poi",
                            "stylers": [{
                                "color": "#bfbfbf"
                            }]
                        }, {
                            "elementType": "labels.text",
                            "stylers": [{
                                "saturation": 1
                            }, {
                                "weight": 0.1
                            }, {
                                "color": "#000000"
                            }]
                        }

                    ];

                    map.addStyle({
                        styledMapName: "Styled Map",
                        styles: styles,
                        mapTypeId: "map_style"
                    });

                    map.setStyle("map_style");

                    // then make that variable true
                    isMapLoaded = true;
                }
            }
        });
    });
    
    
    
     
	// Google Fonts
	/*
	WebFontConfig = {
	  google: { families: [ 'Lato:400,700,300:latin' ] }
	};
	(function() {
	  var wf = document.createElement('script');
	  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	  wf.type = 'text/javascript';
	  wf.async = 'true';
	  var s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(wf, s);
	})(); */
	
	// Initialize Share-Buttons
	$.contactButtons({
	  effect  : 'slide-on-scroll',
	  buttons : {
	    'twitter':   { class: 'twitter', use: true, link: 'https://www.twitter.com/bigfielddigital', extras: 'target="_blank"' },
	    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/bigfielddigital', extras: 'target="_blank"' },
	    'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/+Bigfielddigital' , extras: 'target="_blank"'} 
	  }
	});
	 
	 
	 
	 // Load more content
	 /*
	 $(".thumbnails").slice(0, 4).show();
     $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".thumbnails:hidden").slice(0, 4).slideDown();
        if ($(".thumbnails:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 350
        }, 1000);
     });
     
     */

});