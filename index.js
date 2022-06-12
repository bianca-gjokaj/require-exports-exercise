const chalk = require('chalk');

const {numbers, name, hometown} = require('./data');
console.log(numbers);
console.log (`${name} is from ${hometown}`)

const {addArray} = require('./sum');
console.log(addArray());

const cowsay = require('cowsay');
console.log(cowsay.say({
    text: 'Hello World',
    e: 'OO'
}));

let lodash = require('lodash');
let shuffledArray = lodash.shuffle(numbers);
console.log(shuffledArray);