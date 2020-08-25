const track = document.querySelector('.carousel-track');
const trackGrid = document.querySelector('.carousel-track-grid');
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');

const slides = Array.from(track.children);
const dots = Array.from(dotsNav.children);
const slidesGrid = Array.from(trackGrid.children);

const slideWidthGrid = slidesGrid[0].getBoundingClientRect().width;
const slideWidth = slides[0].getBoundingClientRect().width;

const mediaQuery = 1180;
const threeCards = 3;
const sizeOfmissWidth = 1.979;
const radialParse = 10;

const setSlidePosition = (slide, index) => {
  const positionSlide = slide;
  positionSlide.style.left = `${slideWidth * index}px`;
};
const setSlidePositionGrid = (slide, index) => {
  const positionSlideGrid = slide;
  positionSlideGrid.style.left = `${slideWidthGrid * index}px`;
};

slides.forEach(setSlidePosition);
slidesGrid.forEach(setSlidePositionGrid);

const moveToSlide = (trackSlide, currentSlide, targetSlide) => {
  const moveTrack = trackSlide;
  const moveCurrentSlide = currentSlide;
  const moveTargetslide = targetSlide;

  moveTargetslide.classList.add('current-slide');
  moveTrack.style.transform = `translateX(-${parseInt(moveTargetslide.style.left, radialParse)}px)`;
  moveCurrentSlide.classList.remove('current-slide');
};

const moveToSlideGrid = (trackSlide, currentSlide, targetSlide) => {
  const trackWidth = trackGrid.offsetWidth;
  const trackSlideGrid = trackSlide;
  const targetSlideGrid = targetSlide;
  const translateTargetSlide = parseInt(targetSlideGrid.style.left, radialParse);
  const shouldReturnFalse = translateTargetSlide <= slideWidthGrid * 2 + !trackWidth;

  targetSlideGrid.classList.add('current-slide-grid');

  if (trackWidth < mediaQuery) {
    trackSlideGrid.style.transform = `translateX(-${translateTargetSlide}px)`;
  }
  if (trackWidth >= mediaQuery) {
    trackSlideGrid.style.transform = `translateX(-${translateTargetSlide * threeCards}px)`;
    if (!shouldReturnFalse) {
      trackSlideGrid.style.transform = `translateX(-${parseInt(trackWidth * sizeOfmissWidth, radialParse)}px)`;
      return false;
    }
  }
  currentSlide.classList.remove('current-slide-grid');
};

const upDateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

prevButton.addEventListener('click', () => {
  const currentSlide = trackGrid.querySelector('.current-slide-grid');
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlideGrid(trackGrid, currentSlide, prevSlide);
});

nextButton.addEventListener('click', () => {
  const currentSlide = trackGrid.querySelector('.current-slide-grid');
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlideGrid(trackGrid, currentSlide, nextSlide);
});

dotsNav.addEventListener('click', (event) => {
  const targetDot = event.target.closest('button');
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  upDateDots(currentDot, targetDot);
});
