//===========================      Additional ( lesson - 5 )     ======================

const form = document.createElement('form');
form.id = 'firstForm';
form.action = 'pages/index2.html'

const input = document.createElement('input');
input.type = 'text';
input.name = 'userName';
input.placeholder = 'Name';


const btn = document.createElement('button');
btn.type = 'submit';
btn.innerText = 'send'

form.onsubmit = function () {
  localStorage.setItem(input.name,JSON.stringify(input.value))
}

document.body.appendChild(form);
form.append(input,btn);


