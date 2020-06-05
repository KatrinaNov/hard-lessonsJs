'use strict';
let num = 266219;

let numProduct = num.toString().split('')
                    .reduce(function(a, b) {
                      return +a * +b;
                    });

console.log( 'Произведение цифр равно ' + numProduct );

let numPower = numProduct ** 3;

console.log(numPower.toString().substr(0, 2));