
const url = new URL(document.location);
const jsonPost = url.searchParams.get('post');
const post = JSON.parse(jsonPost);

console.log(post);