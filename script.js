`use strict`;

const numbers = document.getElementById(`numbers`);
const previousText = document.getElementById(`first`);
const result = document.getElementById(`second`);
const operations = document.getElementById(`operations`);
const addBtn = document.getElementById(`+`);
const subBtn = document.getElementById(`-`);
const divBtn = document.getElementById(`/`);
const multBtn = document.getElementById(`*`);
const equBtn = document.getElementById(`=`);
const clearBtn = document.getElementById(`clear`);

let currentValue = [];
let valueOne;
let valueTwo;
let selector;
let secondSelector;
let answer;
let selectorSymbol;
const substract = function (x, y) {
  answer = x - y;
};
const divide = function (x, y) {
  answer = x / y;
};
const multiply = function (x, y) {
  answer = x * y;
};

const add = function (x, y) {
  answer = x + y;
};

const defineSelector = function () {
  if (selector == `divide`) {
    selector = divide;
    selectorSymbol = `/`;
  } else if (selector == `add`) {
    selector = add;
    selectorSymbol = `+`;
  } else if (selector == `substract`) {
    selector = substract;
    selectorSymbol = `-`;
  } else if (selector == `multiply`) {
    selector = multiply;
    selectorSymbol = `*`;
  } else selector = undefined;
};
let textPrevious;
const textEdit = function () {
  if (isNaN(valueOne)) result.textContent = currentValue.join(``);
  else if (!isNaN(valueOne) && isNaN(valueTwo)) {
    result.textContent = `${valueOne}${selectorSymbol}${currentValue.join(``)}`;
  }
};

const nrSelect = function () {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  currentValue.push(event.target.id);
  console.log(currentValue);
  textEdit();
};

const opSelect = function () {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  // on click, check if valueOne is a number and if selector is defined
  // if not define it

  if (isNaN(valueOne) || typeof selector == `undefined`) {
    valueOne = Number(currentValue.join(``));
    currentValue = [];
    selector = event.target.id;
    defineSelector(selector);
  } else if (typeof secondSelector == `undefined` || isNaN(valueTwo)) {
    secondSelector = event.target.id;
    valueTwo = Number(currentValue.join(``));
    currentValue = [];
    console.log(valueTwo);
    textPrevious = `${valueOne}${selectorSymbol}${valueTwo}`;
    first.textContent = textPrevious;
    console.log(secondSelector);

    selector(valueOne, valueTwo);
    console.log(answer);
    valueOne = answer;
    valueTwo = undefined;
    selector = secondSelector;
    secondSelector = undefined;
    defineSelector(selector);
  }
  textEdit();
};

const getResult = function () {
  opSelect();
  console.log(answer);
  result.textContent = answer;
  valueOne = answer;
};

const clear = function () {
  valueOne = undefined;
  valueTwo = undefined;
  answer = 0;
  textPrevious = undefined;
  first.textContent = `-`;
  result.textContent = `0`;
  currentValue = [];
};
operations.addEventListener(`click`, opSelect);
numbers.addEventListener(`click`, nrSelect);
equBtn.addEventListener(`click`, getResult);
clearBtn.addEventListener(`click`, clear);
