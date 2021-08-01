
const form = document.forms.formId;
const img = document.getElementById('imgId');

const productsInLs = localStorage.getItem('products');
const productsArr = JSON.parse(productsInLs);
const products  = productsArr || [];

form.onsubmit = function(e) {
  e.preventDefault();
  let objProd = {};
  objProd[e.target.productName.name] = e.target.productName.value;
  objProd[e.target.quantity.name] = e.target.quantity.value;
  objProd[e.target.price.name] = e.target.price.value;
  objProd.image = img.src;
  products.push(objProd)
  localStorage.setItem('products',JSON.stringify(products))
}