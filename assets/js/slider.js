const time = 5000;// Cseréli a képet minden 5 sec-ben

let sliderIndex; // aktuális kép indexe
let slides; // div elemek
let dots; // spam elemek
let sliderMaxIndex; // slides divek max indexe

function showSlide(n) { // Lépkedés a képek között
  sliderIndex = n;

  for (let i = 0; i < slides.length; i += 1) { // Amit éppen nem használok, az ne jelenjen meg
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[sliderIndex].style.display = 'block'; // Amit éppen megjelenik
  dots[sliderIndex].className += ' active';
}

function nextSlide() { // Következő kép
  if (sliderIndex < sliderMaxIndex) sliderIndex += 1;
  else sliderIndex = 0;
  showSlide(sliderIndex);
}

function previousSlide() { // Előző kép
  if (sliderIndex > 0) sliderIndex -= 1;
  else sliderIndex = sliderMaxIndex;
  showSlide(sliderIndex);
}

function runSlider() { // Folyamatos léptetés
  nextSlide();
  setTimeout(runSlider, time);
}

function initSlider() { // Indításkor
  slides = document.querySelectorAll('.slide');
  sliderMaxIndex = slides.length - 1;

  dots = document.querySelectorAll('.dot'); // események hozzárendelése
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].addEventListener('click', () => showSlide(i));
  }

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', previousSlide);

  sliderIndex = -1; // -1, mert a nextSlide növelni fogja majd +1-el

  runSlider();
}

export {
  initSlider, previousSlide, nextSlide, showSlide,
};
