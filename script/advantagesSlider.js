$slickGreen = false;
function greenSlider(){    
    if($(window).width() < 576){
        if(!$slickGreen){
          $('.advantagesSlider').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
            appendDots: $('.advantagesDots'),
            });
            $slickGreen = true;
        }
    } else if($(window).width() > 577){
        if($slickGreen){
            $('.greenSlider').slick('unslick');
            $slickGreen = false;
        }
    }
};

$(document).ready(function(){
    greenSlider();
});
$(window).on('resize', function(){
     greenSlider();
});