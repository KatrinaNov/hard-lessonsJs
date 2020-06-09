'use strict';

const trimString = function(str) {
  if (typeof(str) !== 'string') {
    return alert('Введена не строка!');
  }
  str = str.trim();
  if (str.length > 30 ) {
    str = str.substr(0, 30) + '...';
  }
  return str;
};

console.log(trimString(true));