window.addEventListener('DOMContentLoaded', () => {

// Slider
    const slider = tns({
        container: '.feedback__slider',
        items: 1,
        startIndex: 1,
        center: true,
        rewind: true,
        swipeAngle: false,
        autoplay: false,
        nav: false,
        controls: false,
        speed: 700

    });

    document.querySelector('.prev').addEventListener('click', () => {
        slider.goTo('prev');
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        slider.goTo('next');
    });

});


