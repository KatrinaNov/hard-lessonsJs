'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let date = new Date();

week.forEach(function(day, i) {
  let days = document.createElement('div');
  days.innerHTML = day;
  document.body.appendChild(days);

  if (i === 5 || i === 6) {
      days.style.fontStyle = 'italic';
  }
  let currentDay = date.getDay();
  // так как неделя у Date начинается с воскресенья
  if (currentDay === 0) {
      currentDay = 7;
  }
  if (i === (currentDay - 1)) {
      days.style.fontWeight = 'bold';
  }
});