
const arrTest = ['world', true, 234, 'hi', 'bye', 5432, false, 15, 'car', 8];

const displayArr = function (arr) {
    console.log(arr);
}
displayArr(arrTest);

console.log('============ next step  ===============')

const getMinValue = function (n1, n2, n3) {
    if(n1 < n2 && n1 < n3){
        console.log(n1);
    }else if(n2 < n1 && n2 < n3){
        console.log(n2);
    }else {
        console.log(n3);
    }
}

getMinValue(235, 118, 11);

console.log('============ next step  ===============')

const getMaxValue = function (n1, n2, n3) {
    if(n1 > n2 && n1 > n3){
            console.log(n1);
    }else if(n2 > n1 && n2 > n3){
        console.log(n2);
    }else {
        console.log(n3);
    }
}

getMaxValue(235, 118, 11);

console.log('============ next step  ===============')

const  numbersArr = [3,2,6,7,5,1,4,34,-5, -134, 654, 123];
const getMaxNumberOfArr = function (arr) {
  let res = arr[0];
  for (let arrElement of arr) {
    if(arrElement > res){
      res = arrElement;
    }
  }
  return res;
}
console.log(getMaxNumberOfArr(numbersArr));

console.log('============ next step  ===============');

const getMinNumberOfArr = function (arr) {
  let res = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]){
      res = arr[i];
    }
  }
  return res;
}
console.log(getMinNumberOfArr(numbersArr));

console.log('============ next step  ===============');

const getNumberSumOfArr = function () {
  let res = 0;
  for (let number of numbersArr) {
    res += number;
  }
  return res;
}
console.log(getNumberSumOfArr(numbersArr));

console.log('============ next step  ===============');

const getMiddleNumberOfArr = function (arr) {
  let sum = 0;
  let res;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  res = sum / arr.length;
  return res;
}
console.log(getMiddleNumberOfArr(numbersArr));

console.log('============ next step  ===============');

const getRandomNumbers = function (quantity = 5) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(Math.round(Math.random()*100))
  }
  return getMiddleNumberOfArr(arr);
}
console.log(getRandomNumbers());

console.log('============ next step  ===============');

const arrayOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}, {city:'Kiev'},{user_id: 8, status: true}]
const getKeysOfObjects = function () {
  let keys = [];
  for (let object of arrayOfObjects) {
    for (let key in object){
      if(object.hasOwnProperty(key)){        //ide рекомендує дану перевірку!!!
        keys.push(key);
      }
    }
  }
  console.log(keys)
}
getKeysOfObjects(arrayOfObjects)

console.log('============ next step  ===============');

const getValueOfObjects = function () {
  let values = [];
  for (let object of arrayOfObjects) {
    for (let key in object){
      if(object.hasOwnProperty(key)){        //ide рекомендує дану перевірку!!!
        values.push(object[key]);
      }
    }
  }
  console.log(values)
}

getValueOfObjects()

console.log('============ next step  ===============');

const arr1 = [1,2,3,4];
const arr2 = [2,3,4,5];

const getSumArraysElement = function (arr_1,arr_2) {
  let arrRes = [];
  for (let i = 0; i < arr_1.length; i++) {
    arrRes.push(arr_1[i] + arr_2[i]);
  }
  console.log(arrRes);
}
getSumArraysElement(arr1,arr2);

console.log('============ next step  ===============');

const abcArr = ['a', 'b', 'c'];
let resArr1 = [];
for (let i = 0; i < abcArr.length; i++) {
  resArr1.push(abcArr[i])
}
for (let i = 0; i <abcArr.length; i++) {
  resArr1.push(i + 1)
}
console.log(resArr1);

console.log('============ next step  ===============');

const simpleArr = [1,2,3];
const resArr2 = [];
for (let i = simpleArr.length-1; i >= 0; i--) {
  resArr2.push(simpleArr[i]);
}
console.log(resArr2);

console.log('============ next step  ===============');

const res3 = [];
for (let number of simpleArr) {
  res3.push(number);
}
for (let i = 0; i < simpleArr.length; i++) {
  res3.push(i + 4);
}
console.log(res3);

console.log('============ next step  ===============');

const res4 = [];
for (let number of simpleArr) {
  res4.push(number);
}
for (let i = 0; i < simpleArr.length; i++) {
  res4.unshift(6 - i);
}
console.log(res4);

console.log('============ next step  ===============');

const simple2 = [1, 2, 3, 4, 5];
console.log(simple2)
const res5 = simple2.splice(3,2)
console.log(res5);
const res6 = simple2.splice(0,2)
console.log(res6);

console.log('============ next step  ===============');

const simple3 = [1, 2, 3, 4, 5];
console.log(simple3);
simple3.splice(3,2,'a','b','c');       //ide підказуе, що в массив додаються елементи різних типів!
console.log(simple3);

console.log('============ next step  ===============');

const simple4 = [1,2,3,4,5,6,7,8,9,10];
for (let number of simple4) {
  if(number%2 === 0){
    console.log(number);
  }
}

console.log('============ next step  ===============');

const res7 = [];
for (let number of simple4) {
  res7.push(number);
}
console.log(res7);

console.log('============ next step  ===============');

console.log(abcArr);
let str = ''
for (let string of abcArr) {
  str += string;
}
console.log(str);

console.log('============ next step  ===============');

console.log(abcArr);
let str2 = '';
let i = 0;
while (i < abcArr.length) {
  str2 += abcArr[i];
  i++;
}
console.log(str2)

console.log('============ next step  ===============');

console.log(abcArr);
let str3 = '';
for (let i= 0; i < abcArr.length; i++) {
  str3 += abcArr[i];
}
console.log(str3);
