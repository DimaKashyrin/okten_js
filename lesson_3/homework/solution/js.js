// homework ===========

const getAreaOfRectangle = function (a, b) {
  console.log(a * b);
}

getAreaOfRectangle(3,6);

console.log('==================  next step  ========================');

const getAreaOfCircle = function (r = 5) {
  console.log(3.14 * (r**2))
}
getAreaOfCircle(4)

console.log('==================  next step  ========================');
//S(повна)=2πR2+2πRH
const getAreaOfCylinder = function (r = 4, h = 9) {
  console.log( ((2*3.14) * (r ** 2) ) + ( (2 * 3.14) * r * h ) );
}

getAreaOfCylinder(2, 5);

console.log('==================  next step  ========================');

const getMaxMinValue = function (...arg) {
  let maxValue = arg[0];
  let minValue = arg[0];
  for (let i = 0; i <arg.length ; i++) {
    if (maxValue < arg[i]){
      maxValue = arg[i];
    }
  }
  for (let i = 0; i <arg.length ; i++) {
    if (minValue > arg[i]){
      minValue = arg[i];
    }
  }
  console.log(maxValue);
  return minValue;
  
}

console.log(getMaxMinValue(8, 3, 5, 9, 4, 2));

//=====================================================================

const hrJs = function (){
  document.write(`<div style="height: 5px; background-color: darkgray"></div>`)
}

let someText = 'Hello world, javaScript!!!'
const getDiv = function (text){
  document.write(`<div>${text}</div>`)
}
getDiv(someText);

hrJs();

//('==================  next step  ========================');

const getBlockUl = function (text) {
  document.write('<ul>')
  for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write('</ul>')
}
getBlockUl('say hi )')

hrJs();

//console.log('==================  next step  ========================');


const getBlockUlNoSize = function (text, quantity) {
  document.write('<ul>');
  for (let i = 0; i < quantity; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write('</ul>');
}
getBlockUlNoSize('say hi )', 7);

hrJs();
//console.log('==================  next step  ========================');

const mixArr = ['car', 345, true, 'red', 'bus', 33, false, null, 456, 123, 'world']
const getList = function (arr) {
  document.write('<ul>');
  for (let i = 0; i < arr.length; i++) {
    document.write(`<li>${arr[i]}</li>`);
  }
  document.write('</ul>');
}
getList(mixArr);