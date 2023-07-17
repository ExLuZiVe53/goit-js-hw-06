const formEl = document.querySelector('.login-form');

const email = formEl.email.value;
console.log(email);
const password = formEl.password.value;

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  preventDefalt(evt);
  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
  }
}
