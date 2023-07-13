// const form = document.getElementById(""form"");

// form.elements.pass.addEventListener(""blur"", onBlur);

// function onBlur(e) {
//   const length = e.target.value.length;
//   if (length >= 8 && length <= 15) {
//     form.classList.add(""correct"");
//     form.classList.remove(""wrong"");
//   } else {
//     form.classList.add(""wrong"");
//     form.classList.remove(""correct"");
//   }
// }

const inputChange = document.getElementById('name-input');
const spanChange = document.getElementById('name-output');
console.log(inputChange);

inputChange.addEventListener('input', onInput);

function onInput(e) {
  const length = e.target.value;
  output.textContent = event.currentTarget.value;
}
