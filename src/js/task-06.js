const inputChange = document.getElementById('validation-input');
console.log(inputChange);

inputChange.addEventListener('blur', onBlur);

function onBlur(e) {
  const length = e.target.value.length;
  if (length >= 6 && length <= 15) {
    inputChange.classList.add('#validation-input.valid');
    inputChange.classList.remove('#validation-input.invalid');
  } else {
    inputChange.classList.add('#validation-input.invalid');
    inputChange.classList.remove('#validation-input.valid');
  }
}
