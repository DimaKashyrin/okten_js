
const arrTest = ['world', true, 234, 'hi', 'bye', 5432, false, 15, 'car', 'red'];

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

getMinValue(235, 118, 111);

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

getMaxValue(235, 118, 111)

console.log('============ next step  ===============')

let someArr = [2, 5, 6, 4, 3, 8, 9]

const getMaxNumberOfArr = function (arr) {
    let resArr = [];
    // let resArr = [];
    // for (let arrElement of arr) {
    //     if (typeof arrElement === 'number'){
    //         tempArr.push(arrElement);
    //     }
    // }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                resArr.push(arr[i])
            }else {
                resArr.unshift(arr[i])
            }
        }

    }
    console.log(resArr)

    // for (let i = 0; i < tempArr.length-1; i++) {
    //     if(tempArr[i] > tempArr[i + 1]){
    //         resArr.push(tempArr[i])
    //     }
    // }

}
// getMaxNumberOfArr(arrTest)
getMaxNumberOfArr(someArr)