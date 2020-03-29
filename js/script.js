/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Rashmi Jadhav */
$(document).ready(function () {
    $(document).scroll(function () {
        var $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $('#down-arrow').click(function (event) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 150);
        return false;
    });
    AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true
    }); // initialize animate on scroll library
});