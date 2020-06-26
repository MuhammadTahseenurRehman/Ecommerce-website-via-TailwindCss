$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        autoplay:true,
        
        fade:true
    });
    $('.slider2').slick({
        arrows: false,
        dots: true,
        slidesToShow:3,
        slideToScroll:1,
        centerMode:true,
        autoplay:true,
        appendDots: '.slider2-dots'
    });
});

const triggers = document.querySelectorAll('.menu-trigger');

for(var i = 0; i < triggers.length; i++){

    triggers[i].addEventListener('click' , function(e){
        e.preventDefault();
        this.classList.toggle('is-open');
        
    });
} 