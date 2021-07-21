// ================     Classwork     =====================

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

const clientsArr = [
  new Client(1,'max','marshy','max@i.ua','+374342332',['blueberry','apple','watermelon']),
  new Client(2,'kolya', 'kook','koka@i.ua','+344832020',['grapes','lime','lemon','cherry']),
  new Client(3, 'viva', 'votive', 'vovoasa@i.ua', '+495123412',['grapes','lime','apple','watermelon']),
  new Client(4, 'hora', 'bleakly', 'blas@i.ua', '+269674749',['grapes','lime','banana','apple','watermelon'] ),
  new Client(5,'vasya', 'berg', 'berigdf@i.ua', '+5674446769',['grapes','apple']),
  new Client(6,'olya', 'qwerty', 'qwertysd@i.ua', '+843567231',['lime','lemon','blueberry','apple','watermelon'] ),
  new Client(7,'ira', 'nabobs', 'mabor@i.ua', '+6584843899',['blueberry','banana']),
  new Client(8, 'yana', 'donna', 'danuna@i.ua','+5648383002',['grapes','lime','lemon','cherry','watermelon','orange']),
  new Client(9,'katya','caterpillar','kat-2323@i.ua', '+3425343234',['grapes','cherry','blueberry','banana','apple']),
  new Client(10,'lesya', 'shiitake', 'les99@i.ua', '+13485896434',['grapes','lemon','cherry','apple','watermelon']),
]

const sorByOrder = clientsArr.slice().sort((a,b) => a.order.length - b.order.length);

console.log(clientsArr);
console.log(sorByOrder);

console.log('===================     next step     ========================');


//створення об'єкта через ф-цію коструктор

const driver = {
  name: 'vasya',
  age:30,
  experience: 5,
  salary: 700,
}

// function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity){
//   this.model = model;
//   this.manufacturer = manufacturer;
//   this.yearOfManufacture = yearOfManufacture;
//   this.maxSpeed = maxSpeed;
//   this.engineCapacity = engineCapacity;
//   this.drive = function (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//   }
//   this.info = function (){
//     for (let carKey in this) {
//       if (typeof this[carKey] !== 'function'){
//         console.log(`${carKey} - ${this[carKey]}`);
//       }
//
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//       this.maxSpeed = newSpeed;
//     }
//     this.changeYear  = function (newValue){
//       this.yearOfManufacture = newValue;
//     }
//     this.addDriver = function (obj){
//       this.driver = obj;
//     }
//   }
// }
//
// const bmw = new Car('x5','BMW',2017,220,3.5)
//
// // console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(250);
// bmw.changeYear(2020);
// bmw.addDriver(driver);
// console.log(bmw);


//створення об'єкта через class

class Car {
  constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
  }
  drive(){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
  }
  info(){
    for (let carKey in this) {
      console.log(`${carKey} - ${this[carKey]}`);
    }
  }
  increaseMaxSpeed(newSpeed){
    this.maxSpeed = newSpeed;
  }
  changeYear(newValue){
    this.yearOfManufacture = newValue;
  }
  addDriver(driver){
    this.driver = driver;
  }
}

const bmw = new Car('x5','Bayerische Motoren Werke AG',2017,220,3.5)
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(250);
bmw.changeYear(2020);
bmw.addDriver(driver);
console.log(bmw);

console.log('===================     next step     ========================');

class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

const cinderellasArr = [
  new Cinderella('olya',18,35),
  new Cinderella('ira',20,30),
  new Cinderella('katya',21,37),
  new Cinderella('lisa',26,39),
  new Cinderella('tanya',33,36),
  new Cinderella('gala',15,33),
  new Cinderella('nataliya',29,40),
  new Cinderella('sofia',23,31),
  new Cinderella('maryna',16,41),
  new Cinderella('sasha',30,32)
]

console.log(cinderellasArr);

class Prince {
  constructor(name, age, shoeWasFound) {
    this.name = name;
    this.age = age;
    this.shoeWasFound = shoeWasFound;
  }
  checkFootSize(arr){
    for (let cinderella of arr) {
      if(cinderella.footSize === this.shoeWasFound){
        console.log(cinderella);
      }
    }
  }
  findCinderella(arr){
    console.log(arr.find(item => item.footSize === this.shoeWasFound))
  }
}

const princeIvan = new Prince('Ivan', 25, 33);
const princeStepan = new Prince('Stepan', 30,40);
const princeBogdan = new Prince('Bogdan', 22, 35);
const princeAnton = new Prince('Anton', 29, 39);


princeIvan.checkFootSize(cinderellasArr);
princeStepan.checkFootSize(cinderellasArr);
princeBogdan.findCinderella(cinderellasArr);
princeAnton.findCinderella(cinderellasArr);