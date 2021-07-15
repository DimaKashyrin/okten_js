
const arrNumber = [5,7,2,4,9];
const  arrString = ['hello', 'world', 'apple', 'car', 'juice'];
const arrMix = ['hello', 7, true, 4, 'car'];

console.log(arrNumber);
console.log(arrString);
console.log(arrMix);

//======================================================

const arrFruit = [];

arrFruit[0] = 'apple';
arrFruit[1] = 'orange';
arrFruit[2] = 'banana';
arrFruit[3] = 'lemon';
arrFruit[4] = 'plum';

console.log(arrFruit);

//===============================================

for (let i = 0; i < 10; i++) {
    document.write(`<div> block div № ${i + 1} </div>`);
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');

for (let i = 0; i < 10; i++) {
    document.write(`<div> block div index: ${i} </div>`);
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>')

let i = 0;
while (i < 20){

    document.write(`<h1>element h1 № ${i + 1}</h1>`);
    i++;
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');

let j = 0;
while (j < 20){

    document.write(`<h1>element h1 index: ${j}</h1>`);
    j++;
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>')


//============ARRAY========================================================

const arrTest1 = [3,5,1,6,7,0,9,8,9,4];
for (let number of arrTest1) {
    console.log(number);
}

console.log('=========================================')

const arrTest2 = ['hi', 'bye', 'car', 'world', 'age', 'speak', 'red', 'blue', 'lemon', 'js'];
for (let str of arrTest2) {
    console.log(str);
}

console.log('=========================================')

const arrTest3 = ['hi', true, 234, 'world', 12, 'speak', false, 'blue', 47, 'js'];

for (let element of arrTest3) {
    console.log(element);
}

console.log('=========================================')

for (let element of arrTest3) {
    if(typeof element === "boolean"){
        console.log(element);
    }
}

console.log('=========================================')

for (let element of arrTest3) {
    if(typeof element === "number"){
        console.log(element);
    }
}

console.log('=========================================');

for (let element of arrTest3) {
    if(typeof element === "string"){
        console.log(element);
    }
}

console.log('=========================================');

const emptyArr = [];
emptyArr[0] = 'hi';
emptyArr[1] = true;
emptyArr[2] = 123;
emptyArr[3] = null;
emptyArr[4] = false;
emptyArr[5] = 'world';
emptyArr[6] = 'car';
emptyArr[7] = 'bus';
emptyArr[8] = 98;
emptyArr[9] = 5;

for (let emptyArrElement of emptyArr) {
    console.log(emptyArrElement);
}

console.log('=========================================');

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<span>${i} </span>`);
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');
console.log('=========================================');

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<span>${i} </span>`);
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');
console.log('=========================================');

for (let i = 0; i < 200; i+=2) {
    console.log(i);
    document.write(`<span>${i} </span>`);
}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');
console.log('=========================================');

for (let i = 2; i < 202; i+=2) {
    console.log(i);
    document.write(`<span>${i} </span>`);

}

document.write('<div style="background-color: #f1f1f1; height: 10px; margin: 20px 0;"></div>');
console.log('=========================================');

for (let i = 1; i < 201; i+=2) {
    console.log(i);
    document.write(`<span>${i} </span>`);
}

console.log('=========================================');

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let i = 0; i < citiesWithId.length; i++) {
    usersWithId[citiesWithId[i].user_id - 1].address= citiesWithId[i]
}
console.log(usersWithId)
