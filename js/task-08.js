const formEl = document.querySelector('.login-form');
// const { email, password } = evt.target.elements;

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  preventDefalt(evt);
  const email = formEl.elements.email.value.trim();
  console.log(email);
  const password = formEl.elements.password.value;
  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
  }
}

// const userData = { name: email.value, password: password.value };
