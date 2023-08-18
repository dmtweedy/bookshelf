const bookimage = document.querySelector("#bookinfo-book-img");
const title = document.querySelector("#bookinfo-title");
const desc = document.querySelector("#bookinfo-description");
const fav = document.querySelector("#bookinfo-fav-btn");
const com = document.querySelector("#bookinfo-com-btn");
const wish = document.querySelector("#bookinfo-wish-btn");

// Get the book ID from the hidden element
const bookid = document.querySelector(".bookinfo-book-id").textContent;

// Retrieve stored book data from localStorage
const storedBookData = JSON.parse(localStorage.getItem('bookData'));

// Define a function to update the UI with book details
function updateUI(bookDetails) {
    title.textContent = bookDetails.volumeInfo.title;

    // Remove <br> tags from description and set it
    desc.innerHTML = bookDetails.volumeInfo.description.replace(/<br\s*\/?>/g, '');

    bookimage.src = bookDetails.volumeInfo.imageLinks.thumbnail;
}

// Update the UI with the stored book data
updateUI(storedBookData);

// Add event listeners to buttons
fav.addEventListener('click', function() {
    this.classList.add("true");
});

com.addEventListener('click', function() {
    this.classList.add("true");
});

wish.addEventListener('click', function() {
    this.classList.add("true");
});