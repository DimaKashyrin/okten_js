const div = document.createElement('div');
div.classList.add('wrap');
document.body.appendChild(div);
const productsInLs = localStorage.getItem('products');
const productsArr = JSON.parse(productsInLs);
console.log(productsArr);
let i = 0;

for (let product of productsArr) {
  
  let productCard = document.createElement('div');
  productCard.classList.add('card-product');
  
  let prodImg = document.createElement('img');
  prodImg.src = product.image;
  prodImg.classList.add('img-style');
  
  let prodName = document.createElement('h2');
  prodName.innerText = product.productName;
  
  let prodPrice = document.createElement('div');
  prodPrice.innerHTML = `
    <span>Ціна:</span>
    <srong>${product.price}</srong>
     <span>грн/кг</span>
  `;
  
  let prodQuantity = document.createElement('div');
  prodQuantity.innerHTML = `
    <span>Кількість:</span>
    <srong>${product.quantity}</srong>
    <span>кг.</span>
  `;
  
  let btn = document.createElement('button');
  btn.innerText = 'Видалити';
  let count = i;
  
  btn.onclick = function () {
    productsArr.splice(count, 1);
    console.log(productsArr);
    localStorage.setItem('products',JSON.stringify(productsArr));
    location.reload();
  }
  
  productCard.append(prodImg,prodName,prodPrice,prodQuantity,btn);
  div.appendChild(productCard);
  i++;
}
