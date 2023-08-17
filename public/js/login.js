
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const userInfo = [ username, password ]

fetch('/api/user/login', {
  method: 'POST',
  body: JSON.stringify(userInfo),
});