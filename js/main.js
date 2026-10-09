(function ($) {
    "use strict";

    // =========================================================
    // LOADER
    // =========================================================
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 300);
    };

    loader();


    // =========================================================
    // WOW.JS
    // =========================================================
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }


    // =========================================================
    // BACK TO TOP BUTTON
    // =========================================================
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').on('click', function () {
        $('html, body').animate(
            {
                scrollTop: 0
            },
            1200,
            'easeInOutExpo'
        );

        return false;
    });


    // =========================================================
    // STICKY NAVBAR
    // =========================================================
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // =========================================================
    // SMOOTH SCROLLING
    // =========================================================
    $(".navbar-nav a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var target = $(this.hash);

            if (target.length) {
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top - 70
                    },
                    1000,
                    'easeInOutExpo'
                );
            }

            $('.navbar-nav .active').removeClass('active');
            $(this).addClass('active');

            // Close mobile navbar after clicking a link
            if ($('.navbar-toggler').is(':visible')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });


    // =========================================================
    // TYPED.JS - HERO TEXT
    // =========================================================
    if ($('.hero .typed-text').length && typeof Typed !== 'undefined') {

        new Typed('.hero .typed-text', {

            strings: [
                "Frontend Developer",
                "React & Next.js Developer",
                "Full-Stack Developer",
                "Backend & API Developer",
                "Mobile Application Developer"
            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1800,
            startDelay: 500,
            loop: true,
            smartBackspace: true
        });
    }


    // =========================================================
    // SKILLS BAR ANIMATION
    // =========================================================
    if ($('.skills').length && typeof $.fn.waypoint !== 'undefined') {

        $('.skills').waypoint(function () {

            $('.progress .progress-bar').each(function () {

                var value = $(this).attr('aria-valuenow');

                $(this).css(
                    'width',
                    value + '%'
                );

            });

        }, {
            offset: '80%'
        });
    }


    // =========================================================
    // TESTIMONIAL CAROUSEL
    // =========================================================
    if ($(".testimonials-carousel").length && typeof $.fn.owlCarousel !== 'undefined') {

        $(".testimonials-carousel").owlCarousel({

            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,

            dots: true,
            loop: true,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }

        });
    }


    // =========================================================
    // PORTFOLIO FILTER
    // =========================================================
    if ($('.portfolio-container').length && typeof $.fn.isotope !== 'undefined') {

        var portfolioIsotope = $('.portfolio-container').isotope({

            itemSelector: '.portfolio-item',

            layoutMode: 'fitRows',

            transitionDuration: '0.6s'

        });


        $('#portfolio-filter li').on('click', function () {

            var filterValue = $(this).attr('data-filter');

            $('#portfolio-filter li')
                .removeClass('filter-active');

            $(this)
                .addClass('filter-active');

            portfolioIsotope.isotope({
                filter: filterValue
            });

        });
    }


    // =========================================================
    // ACTIVE NAVIGATION WHILE SCROLLING
    // =========================================================
    var sections = [];

    $('.navbar-nav a[href^="#"]').each(function () {

        var sectionId = $(this).attr('href');

        if (
            sectionId !== '#' &&
            $(sectionId).length
        ) {
            sections.push({
                id: sectionId,
                link: this
            });
        }

    });


    $(window).on('scroll', function () {

        var scrollPosition = $(window).scrollTop() + 120;

        sections.forEach(function (section) {

            var sectionElement = $(section.id);

            if (!sectionElement.length) {
                return;
            }

            var sectionTop = sectionElement.offset().top;
            var sectionBottom = sectionTop + sectionElement.outerHeight();

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                $('.navbar-nav a')
                    .removeClass('active');

                $(section.link)
                    .addClass('active');
            }

        });

    });


    // =========================================================
    // INITIAL NAVBAR STATE
    // =========================================================
    if ($(window).scrollTop() > 30) {
        $('.navbar').addClass('nav-sticky');
    }


})(jQuery);