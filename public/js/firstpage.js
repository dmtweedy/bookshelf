var apiKey = "AIzaSyBVe3t75GHMwNyhJyj-rCCGMYGddqhDlZs"
var userInput;
var bookDesc = [];
var bookTitle = [];
let currentPage = 1;

var memoryArr = JSON.parse(localStorage.getItem('books')) || [];

// Function to toggle CSS classes
function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

// Function to move pages
function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if (page == currentPage - 1) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

// Function to send user to SignUp page
function sendtoSignUp() {
  window.location.replace('/signup');
}

// Function to send user to Login page
function sendtoLogin() {
  window.location.replace('/login');
}

// Function to send user to Home page
function sendtoHome() {
  window.location.replace('/');
}

// Function to log in the user
function login(username, password) {
  const loginData = { email: username, password };

  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (response.ok) {
        // User is logged in, set a flag to indicate the user is logged in
        localStorage.setItem("isLoggedIn", "true");
        return true;
      } else {
        // Invalid credentials or other error, return false
        return false;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
}

// Function to check if the user is logged in
function isLoggedIn() {
  // Check if the "isLoggedIn" flag is set to "true" in localStorage
  const loggedIn = localStorage.getItem("isLoggedIn");
  return loggedIn === "true";
}

// Example usage when the user submits a login form
function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  login(username, password)
    .then((isLoggedIn) => {
      if (isLoggedIn) {
        // User is logged in, update the header
        toggleNavigationItems(true);
        // Redirect to the home page or any other desired page
        window.location.replace('/');
      } else {
        // Display an error message or handle unsuccessful login
        alert("Incorrect email or password. Please try again.");
      }
    });
}

// Function to toggle navigation items based on login status
function toggleNavigationItems(isLoggedIn) {
  const searchNavItem = document.getElementById("searchNavItem");
  const favoritesNavItem = document.getElementById("favoritesNavItem");
  const profileNavItem = document.getElementById("profileNavItem");
  const myShelfNavItem = document.getElementById("myShelfNavItem");
  const loginNavItem = document.getElementById("loginNavItem");
  const signupNavItem = document.getElementById("signupNavItem");
  const logoutNavItem = document.getElementById("logoutNavItem");

  if (isLoggedIn) {
    // User is logged in, show relevant navigation items
    searchNavItem.style.display = "block";
    favoritesNavItem.style.display = "block";
    profileNavItem.style.display = "block";
    myShelfNavItem.style.display = "block";
    loginNavItem.style.display = "none";
    signupNavItem.style.display = "none";
    logoutNavItem.style.display = "block";
  } else {
    // User is not logged in, hide relevant navigation items
    searchNavItem.style.display = "none";
    favoritesNavItem.style.display = "none";
    profileNavItem.style.display = "none";
    myShelfNavItem.style.display = "none";
    loginNavItem.style.display = "block";
    signupNavItem.style.display = "block";
    logoutNavItem.style.display = "none";
  }
}

// Call the toggleNavigationItems function when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Check the user's login status and toggle the navigation items accordingly
  toggleNavigationItems(isLoggedIn());
});

// Your existing search function
var search = function () {
  var userInput = document.querySelector(".searchbar").value;
  var queryURL = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${apiKey}`;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.items.length; i++) {
        const desc = data.items[i].volumeInfo.description;
        const title = data.items[i].volumeInfo.title;
        const id = data.items[i].id;
        const image = data.items[i].volumeInfo.imageLinks;
        var store = {
          key: desc,
          val: title,
          id: id,
          image: image
        };
        memoryArr.push(store);
      }
      localStorage.setItem('books', JSON.stringify(memoryArr));
      window.location.replace('/results');
    });
};