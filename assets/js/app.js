// ESLint-nek nem tetszik a js kiterjesztés, de csak így működik
import { initSlider } from './slider.js';
import images from './images.js';

function generateSliderFromImageList(pictures) {
  const size = pictures.length;
  document.querySelector('#mySlider').innerHTML = `
<div class="slider">
${pictures.map((image, index) => `<div class="slide fade">
    <div class="numbertext">${index + 1} / ${size}</div>
    <img src="${image.img}">
    <div class="text">${image.text}</div>
    </div>`).join('')}
<a class="prev">❮</a>
<a class="next">❯</a>
</div>
<div class="dots">
${pictures.map(() => '<span class="dot">⬤</span>').join('')}
</div>`;
}

generateSliderFromImageList(images); // Dinamikus tartalom generálása külső adatokból
initSlider(); // Slider elindítása
