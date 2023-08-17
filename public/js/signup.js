const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const userInfo = [fname, lname, username, email, password]

fetch('/api/user/signup', {
  method: 'POST',
  body: JSON.stringify(userInfo),
}) .then(response => response.json());