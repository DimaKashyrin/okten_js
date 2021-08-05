
const  divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(value => value.json())
  .then(user => {
    user.forEach(user => {
      
      let userCard = document.createElement('div');
      userCard.classList.add('user-box');
      
      let userId = document.createElement('div');
      userId.innerHTML = `ID # <strong>${user.id}</strong>`;
      userId.classList.add('user-id-box');
      
      let userName = document.createElement('div');
      userName.innerHTML = `NAME: <strong>${user.name}</strong>`;
      userName.classList.add('user-name-box');
      
      let linkBox = document.createElement('div');
      linkBox.classList.add('link-box');
      
      let a = document.createElement('a');
      a.classList.add('btn-link');
      a.innerHTML = `MORE...`;
      a.href = `../../mini_project/solution/pages/user-details.html?user=${JSON.stringify(user)}`;
      linkBox.appendChild(a);
      
      userCard.append(userId,userName,linkBox);
      divWrap.appendChild(userCard);
      
    })
    
    
  })