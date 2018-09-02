	$(window).on("load", function() {
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });


    //======================================
    //========== Smooth scroll =============
    //======================================
    $('.banner-content a').on('click', function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        var top = $(anchor).offset().top;
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });