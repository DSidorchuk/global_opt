window.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.header__menu_mobile');

          hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
          });

    // Slider
    const slider = tns({
        container: '.feedback__slider',
        items: 1,
        startIndex: 1,
        center: true,
        rewind: true, // Переместиться в начало или в конец, когда долистали
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


