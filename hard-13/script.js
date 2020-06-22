'use strict';

const title = document.querySelector('.color'),
      btn = document.querySelector('.btn'),
      wrapper = document.querySelector('.wrapper');

const chooseColor = function() {
  return '#' + Math.floor(Math.random () * 16777215).toString(16);
};

// в зависимости от цвета высчитывает наиболее контрастный белый или черный
function getContrastYIQ(hexcolor) {
  let r = parseInt(hexcolor.substr(1,2), 16);
  let g = parseInt(hexcolor.substr(3,2), 16);
  let b = parseInt(hexcolor.substr(5,2), 16);
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}


btn.addEventListener('click', function() {
  let currentColor = chooseColor();
  title.textContent = currentColor;
  title.style.color = getContrastYIQ(currentColor);
  wrapper.style.background = currentColor;
  btn.style.color = currentColor;
  btn.style.background = getContrastYIQ(currentColor);
});

