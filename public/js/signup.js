const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

fetch('/api/user/signup', {
  method: 'POST',
  body: JSON.stringify({
    fname: fname.value.trim(),
    lname: lname.value.trim(),
    username: username.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  }),
  headers: {
    "Content-Type": "application/json"
  }
}) .then(response => response.json());