
const username = document.querySelector('#username');
const password = document.querySelector('#password');



fetch('/api/user/login', {
  method: 'POST',
  body: JSON.stringify({
    username: username.value.trim(),
    password: password.value.trim()
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  if (response.ok) {
    return response.json(); // Successful response
  } else {
    throw new Error('Login failed'); // Handle unsuccessful response
  }
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});