document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 576) {
        if ($(".next_img").length) {
            document.querySelector('.next_img').src = './img/arrow-width.svg';
        }
        if ($('.carousel-navigation.container').length) {
            document.querySelector('.carousel-navigation.container').style.display = 'none';
        }


        document.querySelectorAll(".more").forEach((item) => {

            item.src = "./img/more-mobile.svg";
        });
        document.querySelectorAll(".template__img").forEach((item) => {
            item.src = "./img/subcribe-btn.svg";
        });
        if ($('.services__item').length){
          const items = document.querySelectorAll('.services__item__title');
               items[0].src='./img/sites-red.svg';
               items[1].src='./img/presentation-red.svg';
               items[2].src='./img/firm-red.svg';



        }
    }
    if (window.innerWidth > 576) {
        document.querySelectorAll(".more").forEach((item) => {
            item.src = "./img/more.svg";
        });
    }
// Carousel iteration
    if ($('.carousel-navigation_iterator').length, $('.next').length, $('carousel-iterator').length) {
        const button = document.querySelector('.next'),
            screens = document.querySelectorAll('.carousel-iterator'),
            iterators = document.querySelectorAll('.carousel-navigation_iterator');

        class Counter {
            constructor() {
                this.count = 0;
            }

            increment() {
                this.count++;
                if (this.count === 4) {
                    this.count = 0;
                }
            }
        }

        function hideScreens() {
            screens.forEach(item => {
                item.style.display = 'none';
            });
            screens[0].style.display = 'block';
        }

        const counter = new Counter();

        button.addEventListener('click', () => {

            screens[counter.count].style.display = 'none';
            iterators[counter.count].classList.remove('active_iterator');
            counter.increment();
            screens[counter.count].style.display = 'block';
            iterators[counter.count].classList.add('active_iterator');
        });

        hideScreens();

    }


});
