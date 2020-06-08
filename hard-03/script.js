'use strict';

// task 1
let lang = 'en';
const days = [['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'], 
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];

if (lang === 'ru') {
  console.log ('пн, вт, ср, чт, пт, сб, вс');
} else {
  console.log ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log ('пн, вт, ср, чт, пт, сб, вс');
    break;
  case 'en':
    console.log ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default: 
    console.log('К сожалению, этот язык не поддерживается');
}

lang === 'ru' ? console.log(days[0]) : console.log(days[1]);


// task 2
const namePerson = prompt('Введите ваше имя', '');

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');