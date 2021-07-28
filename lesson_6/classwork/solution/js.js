//=================     classwork      ===================
const div = document.createElement('div')
div.classList.add('wrap')
document.body.appendChild(div);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(value => value.json())
  .then(value => {
    
    let wrap = document.getElementsByClassName('wrap')[0];
    let id = document.createElement('div');
    let title = document.createElement('h2');
    let text = document.createElement('p');
    let userId = document.createElement('span');
    let button = document.createElement('button');
    let footerPost = document.createElement('div');
    let popUp = document.createElement('div');
    
    id.classList.add('id-class');
    title.classList.add('title');
    text.classList.add('context');
    userId.classList.add('user-post');
    button.classList.add('btn');
    footerPost.classList.add('footer');
    popUp.classList.add('pop-up')
    
    
    
      for (let post of value) {
        let postCard = document.createElement('div');
        postCard.classList.add('post-card')
        id.innerHTML = `post # ${post.id}`;
        title.innerHTML = `${post.title}`;
        text.innerHTML = `${post.body}`;
        userId.innerHTML = `user # ${post.userId}`;
        button.innerHTML = 'more...';
        button.onclick = function () {
          console.log('test')
        }
        footerPost.append(userId,button)
        postCard.append(id, title, text,footerPost);
        
        wrap.appendChild(postCard.cloneNode(true));
       
      }
    
    
  })