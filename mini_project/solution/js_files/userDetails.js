
const url = new URL(document.location);
const jsonUser = url.searchParams.get('user');
const user = JSON.parse(jsonUser);

const divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);

const title = document.createElement('h2');
title.classList.add('title');

const informationBox = document.createElement('div')
informationBox.classList.add('information-box');

const addressBox = document.createElement('div');
addressBox.classList.add('address-box','size');

const addressBoxTitle = document.createElement('h3');
addressBoxTitle.innerText = 'ADDRESS';

const nameBox = document.createElement('div');
nameBox.classList.add('name-box', 'size');


const nameBoxTitle = document.createElement('h3');
nameBoxTitle.innerText = 'USER';
nameBox.appendChild(nameBoxTitle);

const companyBox = document.createElement('div');
companyBox.classList.add('company-box', 'size');

const companyTiTle = document.createElement('h3');
companyTiTle.innerText = 'COMPANY';

const buttonBox = document.createElement('div');
buttonBox.classList.add('button-box');

const button = document.createElement('a');
button.classList.add('btn');
buttonBox.appendChild(button);
button.href = '#'
button.innerText = 'post of current user...';






for (let item of Object.keys(user)) {
  if (item === 'id'){
  
    title.innerText = `iD # ${user.id}`;
    
    informationBox.appendChild(nameBox);
    divWrap.appendChild(title);
    divWrap.appendChild(informationBox);
    divWrap.appendChild(buttonBox);
    
    continue;
  }else if(item === 'address') {
    
    addressBox.appendChild(addressBoxTitle);
    
    for (let address of Object.keys( user[item])) {
      if(address === 'geo'){
        
        let geoTitle = document.createElement('div')
        geoTitle.innerHTML = `<strong>geo:</strong>`;
        
        addressBox.appendChild(geoTitle);
        
        for (let geo of Object.keys(user[item][address])) {
          
          let geoElement = document.createElement('div');
          geoElement.classList.add('position-content')
          geoElement.innerHTML = `<span>${geo}:</span> <strong>${user[item][address][geo]}</strong>`;
          
          addressBox.appendChild(geoElement);
        }
        continue;
      }
      
      let addressElement = document.createElement('div');
      addressElement.classList.add('addressElement');
      addressElement.classList.add('position-content')
      addressElement.innerHTML = `<span>${address}:</span> <strong>${user[item][address]}</strong>`;
      addressBox.appendChild(addressElement);
    }
    informationBox.appendChild(addressBox);
    continue;
  }else if(item === 'company'){
    
    companyBox.appendChild(companyTiTle);
    
    for (let key of Object.keys(user[item])) {
      
      let companyElement = document.createElement('div');
      companyElement.classList.add('position-content')
      companyElement.innerHTML = `<span>${key}:</span> <strong>${user[item][key]}</strong>`;
      companyBox.appendChild(companyElement);
    }
    informationBox.appendChild(companyBox);
  continue;
  }
  
  let userElement = document.createElement('div');
  userElement.classList.add('user-element');
  userElement.classList.add('position-content');
  userElement.innerHTML = `${item}: <strong>${user[item]}</strong>`;
  
  nameBox.appendChild(userElement);
}

const wrapPopUp = document.createElement('div');
wrapPopUp.classList.add('wrapPopUp', 'show-box');
divWrap.appendChild(wrapPopUp);



button.onclick = function () {
  wrapPopUp.innerText = '';
  wrapPopUp.classList.toggle('show-box');
  
  fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(value => value.json())
    .then(posts => {
      
      posts.forEach(post => {
        
        let postCard = document.createElement('div');
        postCard.classList.add('post-card');
        
        const titlePostCard = document.createElement('div');
        titlePostCard.classList.add('title-post-card');
        titlePostCard.innerHTML = `${post.title}`;
        
        let buttonPostCard = document.createElement('a');
        buttonPostCard.classList.add('btn-post-card');
        buttonPostCard.innerText = 'MORE...';
        buttonPostCard.href = `post-details.html?post=${JSON.stringify(post)}`;
        
        postCard.append(titlePostCard,buttonPostCard);
        wrapPopUp.appendChild(postCard);
      })
    })
   
}








