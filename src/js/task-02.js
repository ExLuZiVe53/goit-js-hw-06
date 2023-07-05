const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const potatoes = document.createElement('li');
potatoes.textContent = 'Potatoes';
potatoes.classList.add('item');
// list.append('potatoes');

console.log(potatoes);

const mushrooms = document.createElement('li');
mushrooms.textContent = 'Mushrooms';
mushrooms.classList.add('item');
// list.append('mushrooms');

console.log(mushrooms);

const garlic = document.createElement('li');
garlic.textContent = 'Garlic';
garlic.classList.add('item');
// list.append('garlic');

console.log(garlic);

const tomatos = document.createElement('li');
tomatos.textContent = 'Tomatos';
tomatos.classList.add('item');
// list.append('tomatos');

console.log(tomatos);

const herbs = document.createElement('li');
herbs.textContent = 'Herbs';
herbs.classList.add('item');
// list.append('herbs');

console.log(herbs);

const condiments = document.createElement('li');
condiments.textContent = 'Condiments';
condiments.classList.add('item');
// list.append('condiments');

console.log(condiments);

list.append('potatoes, mushrooms, garlic, tomatos, herbs, condiments');
