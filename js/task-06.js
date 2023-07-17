const inputChange = document.querySelector('#validation-input');
console.log(inputChange);

inputChange.addEventListener('blur', onBlur);

function onBlur(e) {
  const InputDatalength = Number(inputChange.dataset.length);
  const InputValueLength = Number(inputChange.value.trim().length);
  if (InputValueLength === InputDatalength) {
    inputChange.classList.add('valid');
    inputChange.classList.remove('invalid');
  } else {
    inputChange.classList.add('invalid');
    inputChange.classList.remove('valid');
  }
}
