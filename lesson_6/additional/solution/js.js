//================    additional lesson - 6     ==================

const divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(value => value.json())
  .then(value => {
    console.log(value);
    value.forEach(item => {
  
      let userCard = document.createElement('div');
      userCard.classList.add('card');
      let usAddressBox = document.createElement('div');
      usAddressBox.classList.add('addressBox');
      let addGeoBox = document.createElement('div');
      addGeoBox.classList.add('geoBox');
      let usCompanyBox = document.createElement('div');
      usCompanyBox.classList.add('companyBox');
      
      let btn = document.createElement('button');
      btn.innerText = 'show user posts';
      btn.id = 'btnPosts';
  
      let popUpWrap = document.createElement('div');
      popUpWrap.classList.add('popUpBox');
      popUpWrap.classList.toggle('pop-up');
      
      btn.onclick = function (){
        
        popUpWrap.innerText = '';
        popUpWrap.classList.toggle('pop-up');
        
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(value => value.json())
          .then(value => {
            
            for (let post of value) {
              if (post.userId === item.id) {
                let id = document.createElement('div');
                let title = document.createElement('h2');
                let text = document.createElement('p');
                let userId = document.createElement('span');
                let button = document.createElement('button');
                let footerPost = document.createElement('div');
                let popUp = document.createElement('div');
                let postCard = document.createElement('div');
    
                id.classList.add('id-class');
                title.classList.add('title');
                text.classList.add('context');
                userId.classList.add('user-post');
                button.classList.add('btn');
                footerPost.classList.add('footer');
                popUp.classList.add('pop-up');
                popUp.classList.add('position-elements')
                postCard.classList.add('post-card')
    
                id.innerHTML = `post # ${post.id}`;
                title.innerHTML = `${post.title}`;
                text.innerHTML = `${post.body}`;
                userId.innerHTML = `user # ${post.userId}`;
                button.innerHTML = 'show comments';
    
                button.onclick = function () {
                  
                  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                      
                      popUp.innerHTML = '';
                      
                      comments.forEach(comment => {
                        popUp.innerHTML += `
                        <h3>${comment.name}</h3>
                        <h5>${comment.email}</h5>
                        <p>${comment.body}</p>
                        <h5>POST # ${comment.postId} --- Comment # ${comment.id} </h5>
                        <hr>
                        `;
                      })
                      
                      postCard.append(popUp);
                      popUp.classList.toggle('pop-up');
                      
                    })
                  }
                  
                footerPost.append(userId, button);
                postCard.append(id, title, text, footerPost);
                popUpWrap.appendChild(postCard);
    
              }
            }
          })
        
        
      }
      
  
      for (let user in item) {
        
        let usAddress = document.createElement('div');
        
        if (user === 'address') {
          
          usAddressBox.innerHTML = `<div>${user}: </div>`
          
          for (let address in item[user]) {
            
            if(address === 'geo'){

              addGeoBox.innerHTML = `<div>${address}: </div>`

              for (let geo in item[user][address]) {

                let geoElement = document.createElement('div');
                geoElement.innerHTML = `${geo}: <strong>${item[user][address][geo]}</strong>`
                addGeoBox.appendChild(geoElement);

              }
              continue;
            }
            
            let addressElement = document.createElement('div');
            addressElement.innerHTML = `${address}: <strong>${item[user][address]}</strong>`;
            if (addressElement.innerHTML.length === 0){
              console.log(addressElement.innerHTML)
            }
            // console.log(addressElement.innerHTML.length)
            usAddressBox.appendChild(addressElement);
           
          }
          continue;
          
        }else if(user === 'company'){
          
          usCompanyBox.innerHTML = `<div>${user}: </div>`;
          
          for (let company in item[user]) {
            let companyElement = document.createElement('div');
            companyElement.innerHTML = `${company}: <strong>${item[user][company]}</strong>`;
            usCompanyBox.appendChild(companyElement);
          }
          continue;
        }
        
        usAddressBox.appendChild(usAddress);
        let userElement = document.createElement('div');
        userElement.innerHTML = `${user}: <strong>${item[user]}</strong>`;
        userCard.append(userElement);
        
      }
      
      usAddressBox.appendChild(addGeoBox);
      userCard.append(usAddressBox,usCompanyBox,btn,popUpWrap);
      divWrap.appendChild(userCard);
    })
  })
// setTimeout(function () {
//   console.log(count);
// },2000)

