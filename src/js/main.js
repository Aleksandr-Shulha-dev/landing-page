// SLIDER

const prev = document.querySelector('.slider__btn--left');
const next = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slider__item');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('slider__item--active');
    }
    slides[n].classList.add('slider__item--active');
}


const prepareCurrentSlide = ind => {
    activeSlide(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2500);