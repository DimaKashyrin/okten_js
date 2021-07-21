//=======   additional  ===============

//=======  task - 1    =================

const testArr = [9,8,0,4];
console.log(testArr)

const  changePlace = function (arr, n) {
  let copyArr = arr.slice();
  copyArr.splice(n,2,copyArr[n+1],copyArr[n]);
  console.log(copyArr);
}

changePlace(testArr,0);
changePlace(testArr,1);
changePlace(testArr,2);

console.log('===========   next task  ============');

let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

const killSpace = function (str) {
  let tempArrValue = str.trim().split(' ');
  let res = `${tempArrValue[0]} ${tempArrValue[tempArrValue.length-1]} `;
  console.log(res)
}
killSpace(n1);
killSpace(n2);
killSpace(n3);

console.log('===========   next task  ============');

const  testArr2 = [1,0,6,0,3];
const testArr3 = [0,1,2,3,4];
const testArr4 = [0,0,1,0];

const moveZeros = function (arr) {
  let valueArr = [];
  let zeroArr = [];

  for (let arrElement of arr) {
    if(arrElement !== 0) {
      valueArr.push(arrElement);
    }else {
      zeroArr.push(arrElement);
    }
  }

  for (let zeroArrElement of zeroArr) {
    valueArr.push(zeroArrElement);
  }

  console.log(valueArr);

}

moveZeros(testArr2);
moveZeros(testArr3);
moveZeros(testArr4);