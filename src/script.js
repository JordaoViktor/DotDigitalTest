const track = document.querySelector('.carousel-track');
const trackGrid = document.querySelector('.carousel-track-grid');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slidesGrid = Array.from(trackGrid.children);

const slideWidthGrid = slidesGrid[0].getBoundingClientRect().width;
const slideWidth  = slides[0].getBoundingClientRect().width;

const trackWidth = trackGrid.offsetWidth;

const mediaQuery =  1180
const threeCards = 3
const sizeOfmissWidth = 1.979

const setSlidePosition = (slide, index)=> {
    slide.style.left = slideWidth * index + 'px';
}
const setSlidePositionGrid = (slide, index ) => {
    slide.style.left =  slideWidthGrid  * index + 'px';
    slide.style.left = slideWidthGrid * index + 'px';
}

slides.forEach(setSlidePosition);
slidesGrid.forEach(setSlidePositionGrid);

const moveToSlide = (track, currentSlide, targetSlide) => {
    targetSlide.classList.add('current-slide');
    track.style.transform = `translateX(-${parseInt(targetSlide.style.left)}px)`;
    currentSlide.classList.remove('current-slide');
}

const moveToSlideGrid = (trackGrid, currentSlide, targetSlide) => {
    const trueOrFalse = parseInt(targetSlide.style.left) <= slideWidthGrid * 2 + !trackWidth
    targetSlide.classList.add('current-slide-grid');
    console.log(trueOrFalse) 
    if(trackWidth >= mediaQuery){
        trackGrid.style.transform = `translateX(-${parseInt(targetSlide.style.left) * threeCards}px)`;  
    }
    if(trackWidth < mediaQuery){
        trackGrid.style.transform = `translateX(-${parseInt(targetSlide.style.left)}px)`
    }
    if(trueOrFalse === false){
        trackGrid.style.transform = `translateX(-${parseInt(trackWidth * sizeOfmissWidth) }px)`
        return false
    }
    currentSlide.classList.remove('current-slide-grid')
}

const upDateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', event =>{
    const currentSlide = trackGrid.querySelector('.current-slide-grid');
    const prevSlide = currentSlide.previousElementSibling 
    moveToSlideGrid(trackGrid, currentSlide, prevSlide)
    if(moveToSlideGrid(trackGrid, currentSlide, prevSlide) === null){
        return false
    }
})

nextButton.addEventListener('click', event => {
    const currentSlide = trackGrid.querySelector('.current-slide-grid');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlideGrid(trackGrid, currentSlide, nextSlide)    
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