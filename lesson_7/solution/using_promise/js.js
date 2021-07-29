//========================    Promise     =======================

function wakeUp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Добре, встаю... Сьогодні точно ляжу спати раніше!');
    }, 2000);
  }) ;
}
const bathroom = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Мені потрібно до ванної кімнати!');
    }, 500)
  })
}
const exercise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Час зарядки! Да знаю, але треба(');
    }, 1000)
  })
}
const breakfast = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Сніданок вже готовий, Сер...');
    }, 600)
  })
}
const goToWork = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Іду на роботу, пішки? так....');
    }, 1500)
  })
}
const work = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('працю на роботі...');
    }, 3000)
  })
}
const lunch = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('ура обід!!!');
    }, 700)
  })
}
const workPart2 = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('працю на роботі... Друга половина дня');
    }, 3000)
  })
}
const goToHome = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Іду додому...');
    }, 1500)
  })
}
const dinner = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Вечеря');
    }, 500)
  })
}
const rest = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Відпочинок.......)))');
    }, 1000)
  })
}
const learning = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Навчання!');
    }, 2000)
  })
}
const sleep = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ('Сон...  game over');
    }, 3000)
  })
}

function routine(time) {
  return new Promise((resolve,reject) => {
    console.log('Виконується перевірка чи час прокидатися......')
    setTimeout(() => {
      if (time < 7){
        console.log('Я сплю....');
        reject('мені ще рано прокидатися )))');
      } else {
        console.log('Alarm!!!');
        resolve('Пора вставати!!!')
      }
    },2000)
    
  })
}

routine(7)
  .then((value) => {
    console.log(value);
    return wakeUp();
  })
  .then((value) => {
    console.log(value)
    return bathroom();
  })
  .then((value) => {
    console.log(value);
    return exercise();
  })
  .then((value) => {
    console.log(value);
    return breakfast();
  })
  .then((value) => {
    console.log(value);
    return goToWork();
    
  })
  .then((value) => {
    console.log(value);
    return work();
  })
  .then((value) => {
    console.log(value);
    return lunch();
  })
  .then((value) => {
    console.log(value);
    return workPart2()
  })
  .then((value) => {
    console.log(value);
    return goToHome();
  })
  .then((value) => {
    console.log(value);
    return dinner();
  })
  .then((value) => {
    console.log(value);
    return rest();
  })
  .then((value) => {
    console.log(value);
    return learning()
  })
  .then((value) => {
    console.log(value);
    return sleep();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value)
  })

