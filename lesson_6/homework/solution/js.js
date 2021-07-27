//====================      homework      ======================

const div = document.createElement('div');
div.classList.add('wrap');
document.body.append(div);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(value => value.json())
  .then(posts => {
    for (let post of posts) {
     let cardDiv = document.createElement('div');
     let h2 = document.createElement('h2');
     let p = document.createElement('p');
     let h3 = document.createElement('h3');
     h2.innerHTML = `${post.title}`;
     p.innerHTML = `${post.body}`;
     h3.innerHTML = `${post.id}`
     cardDiv.append(h3,h2,p);
     let wrap = document.body.getElementsByClassName('wrap')[0];
     wrap.append(cardDiv)
    }
    let hr = document.createElement('hr');
    let wrap = document.getElementsByClassName('wrap')[0];
    wrap.append(hr)
  }
);

fetch('https://jsonplaceholder.typicode.com/comments')
  .then(value => value.json())
  .then(value => {
    for (let valueElement of value) {
      let cardDiv = document.createElement('div');
      let title = document.createElement('h2');
      let email = document.createElement('h5');
      let context = document.createElement('p');
      let postId = document.createElement('p');
      let id = document.createElement('p');
      let hr = document.createElement('hr');
      title.innerHTML = `${valueElement.name}`;
      email.innerHTML = `${valueElement.email}`;
      context.innerHTML = `${valueElement.body}`;
      postId.innerHTML = `post #${valueElement.postId}`;
      id.innerHTML = `comment #${valueElement.id}`;
      
      cardDiv.append( title,id, email, context, postId);
      
      let wrap = document.getElementsByClassName('wrap')[0];
      wrap.append(cardDiv, hr);
      
      
    }
  }
)
