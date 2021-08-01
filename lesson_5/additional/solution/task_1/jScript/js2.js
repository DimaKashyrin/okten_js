const div = document.createElement('div');
const localValue = localStorage.getItem('userName')
const prepareStr = localValue.slice(1,localValue.length - 1);
div.innerText = prepareStr;
document.body.appendChild(div);
