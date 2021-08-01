//=======================     task - 3   =========================

let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
  name: 'max',
  age: 30,
  status: true,
  address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
  name: 'max',
  age: 31,
  status: true,
  address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// //- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
const addressUsers = [];

users.forEach( (user )=> {
  addressUsers.push(user.address)
})
console.log(addressUsers);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let counter = 0;
users.forEach( (user )=> {

  let div = document.createElement('div');
  for (let key in user){

    if(key === "address"){

      for (const address in addressUsers[counter]) {

         div.innerText += ` ${addressUsers[counter][address]}  `
      }
      counter++;
      continue;
    }

    div.innerText += ` ${user[key]}` ;
  }
  document.body.appendChild(div);
})

const nextPart = document.createElement('div');
nextPart.style.height='20px';
nextPart.style.backgroundColor='#efece6';
nextPart.style.margin = '20px';
nextPart.innerText = '....  next part    .....';
nextPart.style.textAlign = 'center';
document.body.appendChild(nextPart);


//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let counter2 = 0;
users.forEach( (user )=> {

  let divCard = document.createElement('div');
  divCard.style.border = '1px solid silver';
  divCard.style.marginBottom = '10px';
  let divName = document.createElement('div');
  let divAge = document.createElement('div');
  let divStatus = document.createElement('div');
  let divAddress = document.createElement('div');
  divAddress.style.border = '1px dashed brown';

  for (let key in user){

    if(key === "address"){

      for (const address in addressUsers[counter2]) {

        divAddress.innerText += `\u00A0 ${address}: ${addressUsers[counter2][address]}  \u00A0 \u00A0`
      }
      counter2++;
      continue;
    }

    divName.innerText = `\u00A0 name: ${user.name}`;
    divAge.innerText = `\u00A0 age: ${user.age}`;
    divStatus.innerText = `\u00A0 status: ${user.status}`;
    
    divCard.append(divName,divAge,divStatus,divAddress);

  }
  document.body.appendChild(divCard);
})

const nextPartClone = nextPart.cloneNode(true);
document.body.appendChild(nextPartClone);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let counter3 = 0;
users.forEach( (user )=> {
  
  let divCard = document.createElement('div');
  divCard.style.border = '1px solid silver';
  divCard.style.marginBottom = '10px';
  let divName = document.createElement('div');
  let divAge = document.createElement('div');
  let divStatus = document.createElement('div');
  let divAddress = document.createElement('div');
  divAddress.style.border = '1px dashed brown';
  let city = document.createElement('div');
  let country = document.createElement('div');
  let street = document.createElement('div');
  let houseNumber = document.createElement('div');
  
  
  for (let key in user){
    
    if(key === "address"){
      
      for (const address in addressUsers[counter3]) {
        if(address === 'city'){
          city.innerText =`\u00A0 ${address} : ${addressUsers[counter3][address]}`;
        }else if(address === 'country'){
          country.innerText =`\u00A0 ${address} : ${addressUsers[counter3][address]}`;
        }else if(address === 'street'){
          street.innerText =`\u00A0 ${ address} : ${addressUsers[counter3][address]}`;
        }else if(address === 'houseNumber'){
          houseNumber.innerText =`\u00A0 ${ address} : ${addressUsers[counter3][address]}`;
        }
      }
      counter3++;
      continue;
    }
    
    divName.innerText = `\u00A0 name: ${user.name}`;
    divAge.innerText = `\u00A0 age: ${user.age}`;
    divStatus.innerText = `\u00A0 status: ${user.status}`;
    
    divAddress.append(city,country,street,houseNumber);
    
    divCard.append(divName,divAge,divStatus,divAddress);
    
  }
  document.body.appendChild(divCard);
})