// const categories = document.querySelector('#categories');

// console.log(
//   `Number of categories ${categories.querySelectorAll('.item').length}`
// );
// const variable = categories.children;

// [...variable].forEach(li => {
//   console.log(`Category : ${li.querySelector('h2').textContent}`);
//   console.log(`Elements : ${li.querySelectorAll('li').length}`);
// });

const categories = document.querySelector('#categories');

console.log(
  `Number of categories ${categories.querySelectorAll('.item').length}`
);
const variable = categories.children;

[...variable].forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
