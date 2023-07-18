const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return console.log('Всі поля повинні бути заповнені!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
