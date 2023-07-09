const containerValue = document.querySelector('#counter');

const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');

btnDown.addEventListener('click', () => {
  console.log('Button Down was clicked');
});

btnUp.addEventListener('click', () => {
  console.log('Button Up was clicked');
});

console.dir(btnDown);
