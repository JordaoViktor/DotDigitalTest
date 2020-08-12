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

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const upDateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if(targetIndex === 0){
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }else if (targetIndex === slides.length - 1){
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     }else{
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden')
//     }
// }

// prevButton.addEventListener('click', event => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide)
    
//     moveToSlide(track, currentSlide, prevSlide)
//     upDateDots(currentDot,prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);
// })

// nextButton.addEventListener('click', event => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide)

//     moveToSlide(track, currentSlide, nextSlide);
//     upDateDots(currentDot,nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

dotsNav.addEventListener('click', event =>{
    const targetDot = event.target.closest('button');
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    upDateDots(currentDot,targetDot);
    // hideShowArrows(slides, prevButton, nextButton, targetIndex);
})