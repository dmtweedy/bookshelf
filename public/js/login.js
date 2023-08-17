
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const signinBtn = document.querySelector('#signinBtn')

fetch('/api/user/login', {
  method: 'POST',
  body: JSON.stringify({
    username: username.value.trim(),
    password: password.value.trim()
  }),
  headers: {
    "Content-Type": "application/json"
  }
}) .then(response => response.json());

signinBtn.addEventListener('click', function () {
  window.location.replace('/profile')
})
