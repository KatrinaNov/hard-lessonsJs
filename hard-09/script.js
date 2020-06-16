'use strict';


// добавляем ноль, чтобы время состояло не менее чем из 2 цифр всегда. Не 4, а 04
const addZero = function(num) {
  if (num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
};
// меняем окончание слова в зависимости от числа
const transformText = function (n, textForms) {  
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

// формат a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  
const formatDate1 = function(date) {
  let hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      hourText = transformText(hours, ['час', 'часа', 'часов']),
      minutesText = transformText(minutes, ['минута', 'минуты', 'минут']),
      secondsText = transformText(seconds, ['секунда', 'секунды', 'секунд']);

  const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long', 
  }; 
  return 'Сегодня ' + date.toLocaleString("ru", options) + ' ' + date.getFullYear() + ' года, ' + hours + ' ' + hourText + ' ' + minutes + ' ' + minutesText + ' ' + seconds + ' ' + secondsText;
};

// формат б) '04.02.2020 - 21:05:33'
const formatDate2 = function(date) {
  let formatterDays = new Intl.DateTimeFormat("ru"),
  formatterHours = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  return formatterDays.format(date) + ' - ' + formatterHours.format(date);
};

let time = document.querySelectorAll('.time');

setInterval(() => {
  const date = new Date();  
  time[0].innerHTML = formatDate1(date);
  time[1].innerHTML = formatDate2(date);
}, 1000);