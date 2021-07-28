//=================     classwork      ===================
const div = document.createElement('div')
div.classList.add('wrap')
document.body.appendChild(div);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(value => value.json())
  .then(value => {
    
    for (let post of value) {
      
      let wrap = document.getElementsByClassName('wrap')[0];
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
      postCard.classList.add('post-card')
      
      id.innerHTML = `post # ${post.id}`;
      title.innerHTML = `${post.title}`;
      text.innerHTML = `${post.body}`;
      userId.innerHTML = `user # ${post.userId}`;
      button.innerHTML = 'more...';
      
      button.onclick = function (){
        popUp.innerHTML = '';
        for (let searchPost of value) {
          if(searchPost.userId === post.userId){
            popUp.innerHTML += `
              <div>${searchPost.id}</div>
              <h3>${searchPost.title}</h3>
              <p>${searchPost.body}</p>
              <hr>
            `;
          }
        }
        postCard.append(popUp);
        popUp.classList.toggle('pop-up');
      }
      
      footerPost.append(userId,button);
      postCard.append(id, title, text,footerPost);
      wrap.appendChild(postCard);
      
    }
  })