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

async function getRoutine() {
  const routineDay = await routine(7);
  console.log(routineDay);
  
  const wakeUpTime = await wakeUp();
  console.log(wakeUpTime);
  
  const exerciseTime = await exercise();
  console.log(exerciseTime);
  
  const breakfastTime = await breakfast();
  console.log(breakfastTime)
  
  const goToWorkTime = await goToWork();
  console.log(goToWorkTime);
  
  const workTime = await work();
  console.log(workTime);
  
  const lunchTime = await lunch();
  console.log(lunchTime);
  
  const workPart2Time = await workPart2();
  console.log(workPart2Time);
  
  const goToHomeTime = await goToHome();
  console.log(goToHomeTime);
  
  const dinnerTime = await dinner();
  console.log(dinnerTime);
  
  const restTime = await rest();
  console.log(restTime);
  
  const learningTime = await learning();
  console.log(learningTime);
  
  const sleepTime = await sleep();
  console.log(sleepTime);
  
}

getRoutine().then()