const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const trackGrid = document.querySelector('.carousel-track-grid');
const slidesGrid = Array.from(trackGrid.children);

const slideWidthGrid = slidesGrid[0].getBoundingClientRect().width;
const slideWidth  = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index)=> {
    slide.style.left = slideWidth * index + 'px';
}
const setSlidePositionGrid = (slide, index) => {
    slide.style.left = slideWidthGrid * index + 'px';
}

slides.forEach(setSlidePosition);
slidesGrid.forEach(setSlidePositionGrid);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const moveToSlideGrid = (trackGrid, currentSlide, targetSlide) => {
    targetSlide.classList.add('current-slide-grid');
    trackGrid.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide-grid');
    
}
const upDateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}
console.log(prevButton)

prevButton.addEventListener('click', event =>{
    console.log(event.target)
    const currentSlide = trackGrid.querySelector('.current-slide-grid');
    const prevSlide = currentSlide.previousElementSibling 
    moveToSlideGrid(trackGrid, currentSlide, prevSlide)

})

// const nextHandler = event => {
//     const currentSlide = trackGrid.querySelector('.current-slide-grid');
//     const nextSlide = currentSlide.nextElementSibling;
//     moveToSlideGrid(trackGrid, currentSlide, nextSlide);
// }

nextButton.addEventListener('click', event => {
    const currentSlide = trackGrid.querySelector('.current-slide-grid');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlideGrid(trackGrid, currentSlide, nextSlide);
    
});


dotsNav.addEventListener('click', event =>{
    const targetDot = event.target.closest('button');
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    upDateDots(currentDot,targetDot);
    
})