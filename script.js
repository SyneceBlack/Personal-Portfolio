function scrollToSection(sectionId) {
  var element= document.getElementById(sectionId);
  element.scrollIntoView({ behavior: 'smooth' });
}


const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;

function updateCarousel() {
  const size = carouselItems[0].clientWidth;
  carouselSlide.style.transition = 'none';
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

window.addEventListener('resize', updateCarousel);
updateCarousel();

nextBtn.addEventListener('click', () => {
  if (counter >= carouselItems.length - 1) {
    counter = -1;
  }

  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  counter++;

  const size = carouselItems[0].clientWidth;

  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = carouselItems.length;
  }

  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  counter--;

  const size = carouselItems[0].clientWidth;

  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});