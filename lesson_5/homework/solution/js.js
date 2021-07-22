// =========  Homework lesson - 5  ================
// noinspection JSDeprecatedSymbols

const elementIdContent = document.getElementById('content');
console.log(elementIdContent.textContent);

console.log('======================      next step     =====================');

const elementIdRules = document.getElementById('rules');
console.log(elementIdRules.textContent);

console.log('======================      next step     =====================');

elementIdContent.innerHTML = 'change text in paragraph <b>id = \'content\'</b>';

// console.log('======================      next step     =====================');
elementIdRules.innerHTML = 'change text in paragraph <b>id = \'rules\'</b>';

// console.log('======================      next step     =====================');

const ollElements = document.body.children;

const style = document.createElement('style');
style.innerHTML = `
  .text-color-blue {color: blue;}
  .text-color-red {color: red;}
  .bg-red {background: red}
  `;
document.getElementsByTagName('head')[0].appendChild(style);

const changeColor = function (arr) {
  for (let i = 0; i <arr.length-1; i++) {
    arr[i].className = 'text-color-blue bg-red';
  }
}

changeColor(ollElements);

// console.log('======================      next step     =====================');

const getListClasses = elementIdRules.classList;
console.log(getListClasses);

console.log('======================      next step     =====================');

const elementsLiArr = [... document.getElementsByClassName('fc_rules')];

elementsLiArr.forEach(function (item){
    item.addEventListener('click', function() {
        console.log(this.innerText)
      }
    )
    item.addEventListener('click', function() {
      console.log('clicked on the item')
      }
    )
  }
)

// console.log('======================      next step     =====================');

elementsLiArr.forEach(function (item){
  item.classList.toggle('text-color-red');
})

