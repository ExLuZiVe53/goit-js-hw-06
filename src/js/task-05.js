const inputChange = document.getElementById('name-input');
const spanChange = document.getElementById('name-output');
let anonymus = 'Anonymus';

spanChange.textContent = 'Anonymus';

inputChange.addEventListener('input', onInput);

function onInput(e) {
  // const length = e.target.value;
  spanChange.textContent = e.target.value || anonymus;
}
