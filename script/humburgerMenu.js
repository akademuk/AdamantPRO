$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('.burgerMenu').toggleClass('active');
    });
});