const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth  = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index)=> {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// console.log(slideWidth)