const url = new URL(document.location);
const jsonPost = url.searchParams.get('post');
const post = JSON.parse(jsonPost);

const wrap  = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

const postCard = document.createElement('div');
postCard.classList.add('post-card');
wrap.appendChild(postCard)

const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = `${post.title}`;
postCard.appendChild(title);
console.log(title);

const contextPost = document.createElement('div');
contextPost.classList.add('context-post');
contextPost.innerHTML = `${post.body}`;
postCard.appendChild(contextPost);
console.log(contextPost);

const btnBox = document.createElement('div');
btnBox.classList.add('btn-box');
postCard.appendChild(btnBox);

const button = document.createElement('button');
button.classList.add('btn-post');
button.innerText = 'show comments';
btnBox.appendChild(button);

const footer = document.createElement('div');
footer.classList.add('footer-post');
postCard.appendChild(footer);

const userId = document.createElement('div');
userId.classList.add('user-id');
userId.innerHTML = `USER iD # ${post.userId}`;
console.log(userId);

const id = document.createElement('div');
id.classList.add('id');
id.innerHTML = `POST # ${post.id}`;
console.log(id);

footer.append(userId,id);

const popUpBox = document.createElement('div');
popUpBox.classList.add('pop-up-box', 'show');
document.body.appendChild(popUpBox);

button.onclick = function () {
  popUpBox.innerHTML = '';
  popUpBox.classList.toggle('show')
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
      
      comments.forEach((comment) => {
        
        let commentCard = document.createElement('div');
        commentCard.classList.add('comment-card');
        
        let titleComment = document.createElement('div');
        titleComment.classList.add('title-comment');
        titleComment.innerHTML = `${comment.name}`;
  
        let contextComment = document.createElement('div');
        contextComment.classList.add('context-comment');
        contextComment.innerHTML = `${comment.body}`;
  
        let emailComment = document.createElement('div');
        emailComment.classList.add('email-comment');
        emailComment.innerHTML = `${comment.email}`;
        
        let footerComment = document.createElement('div');
        footerComment.classList.add('footer-comment')
        
        let countInformBox = document.createElement('div');
        countInformBox.classList.add('count-box');
        
        let postId = document.createElement('post-id');
        postId.innerHTML = `post # ${comment.postId}`
        
        let commentId = document.createElement('div');
        commentId.innerHTML = `comment # ${comment.id}`;
        
        countInformBox.append(postId,commentId)
        footerComment.append(emailComment,countInformBox);
        commentCard.append(titleComment,contextComment,footerComment);
        popUpBox.appendChild(commentCard);
        
      })
      
    })
}

