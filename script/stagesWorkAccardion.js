$(document).ready(function () {
    if ($(window).width() < 768) {
        $('.accordion-header').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.accordion-content').slideUp();
            } else {
                $('.accordion-header').removeClass('active');
                $('.accordion-content').slideUp();
                $(this).addClass('active');
                $(this).next('.accordion-content').slideDown();
            }
        });
    }
});