$('.reviewsSlider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    centerMode:true,
    variableWidth: true,
    prevArrow: $('.reviewsPrev'),
    nextArrow: $('.reviewsNext'),
    appendDots: $('.reviewsDots'),
});
      