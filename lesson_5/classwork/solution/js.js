//=============    Classwork  lesson - 5    ==========

//=======================      step a      =========================

const header = document.getElementById('main_header');
header.classList.add('text-color-header');
header.innerHTML = `June-2021-incubator`;

//=======================      step b      =========================

const  ul = document.getElementsByTagName('ul');
ul[0].classList.add('ul-width');

//=======================      step c      =========================

const liArr = [... document.getElementsByClassName('linkList')];
console.log(liArr);
liArr.forEach(function (item) {
  item.classList.add('li-width');
})

//=======================      step d      =========================

const textLi2 = document.getElementsByClassName('listElement2')
console.log(textLi2[0].innerText)

//=======================      step e      =========================

liArr.forEach(function (item) {
  item.classList.add('bg-li');
})

//=======================      step f      =========================

const aElementArr = [... document.getElementsByTagName('a')];
 aElementArr.forEach(function (item){
   item.classList.add('anchor');
 })

//=======================      step g      =========================

aElementArr.forEach(function (item) {
  if(item.innerText === 'link3') {
    item.classList.add('font-size40')
  }
})

//=======================      step h      =========================

aElementArr.forEach(function (item) {
  item.classList.add(`element_${item.innerText}`)
})

//=======================      step i      =========================

const getColor = +prompt('enter color: 1, 2, 3')
const subHeaderArr = [... document.getElementsByClassName('sub-header')]
subHeaderArr.forEach(function (item) {
  if(getColor === 1){
    item.classList.toggle('bg-sub-1')
  }else if(getColor === 2){
    item.classList.toggle('bg-sub-2')
  }else if(getColor === 3){
    item.classList.toggle('bg-sub-3')
  }else {
    alert('Ви ввели не вірно! Введіть одну цифру від 1 - 3 ......')
  }
})

//=======================      step j      =========================

const getColor2 = +prompt('enter color: 1, 2, 3')
subHeaderArr.forEach(function (item) {
   if( item.innerText === 'content 2 segment'){
     if(getColor2 === 1){
       item.classList.add('bg-sub-1')
     }else if(getColor2 === 2){
       item.classList.add('bg-sub-2')
     }else if(getColor2 === 3){
       item.classList.add('bg-sub-3')
    }
   }
})

//=======================      step k      =========================

const someText = prompt('enter some text')
subHeaderArr[0].innerText = someText;

//=======================      step l      =========================

const pArr = [... document.getElementsByTagName('p')];
pArr.forEach(function (item) {
  item.classList.add('padding20')
})

//=======================      step l      =========================

const text2 = document.getElementsByClassName('text2');
text2[0].innerHTML = 'June-2021-incubator';