// ======================    homework   ====================

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const testArr1 = [];
const getFiveNumbersInArray = function () {
  for (let i = 0; i < 5; i++) {
    testArr1.push(Math.floor( Math.random()*100));
  }
}
getFiveNumbersInArray();
console.log(testArr1);

console.log('====================       next step       ====================')
//- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const testArr2 = [];
const getNumbersArray = function (quantity) {
  for (let i = 0; i < quantity; i++) {
    testArr2.push(Math.floor( Math.random()*100));
  }
}
getNumbersArray(10);
console.log(testArr2);

console.log('====================       next step       ====================')
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let resultSort = testArr2.slice().sort((a,b) => a - b) ;

console.log(resultSort);

console.log('====================       next step       ====================');
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let resultFilter = testArr2.filter(item => item % 2 === 0);
console.log(resultFilter);

console.log('====================       next step       ====================');
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let resultMap = testArr2.map(element => String(element));
console.log(resultMap);

console.log('====================       next step       ====================');
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,name,surname,email,phone){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

const usersArr = [
  new User(1,'max','marshy','max@i.ua','+374342332'),
  new User(2,'kolya', 'kook','koka@i.ua','+344832020'),
  new User(3, 'viva', 'votive', 'vovoasa@i.ua', '+495123412'),
  new User(4, 'hora', 'bleakly', 'blas@i.ua', '+269674749' ),
  new User(5,'vasya', 'berg', 'berigdf@i.ua', '+5674446769'),
  new User(6,'olya', 'qwerty', 'qwertysd@i.ua', '+843567231' ),
  new User(7,'ira', 'nabobs', 'mabor@i.ua', '+6584843899'),
  new User(8, 'yana', 'donna', 'danuna@i.ua','+5648383002'),
  new User(9,'katya','caterpillar','kat-2323@i.ua', '+3425343234'),
  new User(10,'lesya', 'shiitake', 'les99@i.ua', '+13485896434'),
]
console.log(usersArr);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let res = usersArr.filter(element => element.id % 2 === 0).sort((item,nextItem) => nextItem.id - item.id);
console.log(res);