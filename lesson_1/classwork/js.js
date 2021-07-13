// part 1

let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str, typeof num, typeof flag, typeof txt);
console.log('++++++++++++++++++++++++++++++++++++');

// part 2
let a1 = 15 * 2 + 4;        //34
let a2 = (20 - 18) * 6;     //12
let a3 = (99 / 3) * 2;      //66
let a4 = (90 + 90) / 2;     //90
let a5 = 30 * 3 - 3;        //87

console.log (a1,a2,a3,a4,a5);
console.log('++++++++++++++++++++++++++++++++++++');

// part 3

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6,a7,a8,a9,a10);
console.log('++++++++++++++++++++++++++++++++++++');

// part 4
let height = 23;
let width = 10;
let s = (height * width) + ' см';

console.log(s);
console.log('++++++++++++++++++++++++++++++++++++');

//part 5
let heightC = 10;
let dC = 4;
let v = 3.14 * dC * heightC;
console.log(v);
console.log('++++++++++++++++++++++++++++++++++++');

// part 6
let n = 3;
let m = 4;
let k = Math.sqrt( Math.pow(n,2) + Math.pow(m,2))

console.log(k)
console.log('++++++++++++++++++++++++++++++++++++');

// part 8
let pib = 'Kashyrin Dmytro Oleksandrovych';
let age = 35;
let hobby = 'learning';

alert(pib + '\n' + age + '\n' + hobby)

//part 9
let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?'
let concatenation = str1 + str2 + str3;

document.write(concatenation)

// part 13
let x = +prompt('введіть чило х');
let y = +prompt('введіть число у');
alert(`сумма чисел х + у = ${x + y}`);

// part 14
let userName = prompt('Введіть Ваше імя');
let lastName = prompt('Введіть Ваше прізвище');
let userAge = prompt('Введіть Ваш вік');

alert(`Доброго вечора ${userName + ' ' + lastName} мої вітання що Вам ${userAge}`);

// additional task 1

let number1 = +prompt('введіть число');
let number2 = +prompt('введіть число');
let number3 = +prompt('введіть число');

let res1;
let res2;
let res3;

if(number1 > number2){
    if(number1 > number3){
        res3 = number1;
    }else if (number3 > number2){
        res3 = number3
    }
}else if(number2 >number3){
    res3 = number2
}else {
    res3 = number3;
}

if (res3 === number1) {
    if(number2 > number3){
        res2 = number2
        res1 = number3
    }else {
        res2 = number3
        res1 = number2
    }
}
if (res3 === number2) {
    if(number1 > number3){
        res2 = number1
        res1 = number3
    }else {
        res2 = number3
        res1 = number1
    }
}
if (res3 === number3) {
    if(number1 > number2){
        res2 = number1
        res1 = number2
    }else {
        res2 = number2
        res1 = number1
    }
}

alert(`Ваші чиcла в порядку зростання: ${res1 +' '+ res2 +' '+ res3}`)

// additional task 2

let userColor = prompt('Введіть колір світлофору: (green, yellow, red)');
if(userColor === 'green'){
    alert('іди')
}else if (userColor === 'yellow') {
    alert('почекай')
}else if (userColor === 'red') {
    alert('стій')
}else {
   alert('светофор в аварийном режиме! "делай что хочешь"!')
}