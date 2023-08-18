const bookimage = document.querySelector("#bookinfo-book-img");
const title = document.querySelector("#bookinfo-title");
const desc = document.querySelector("#bookinfo-description");
const fav = document.querySelector("#bookinfo-fav-btn");
const com = document.querySelector("#bookinfo-com-btn");
const wish = document.querySelector("#bookinfo-wish-btn");
const addReviewBtn = document.querySelector(".bookinfo-review-btn");
const reviewSuccessMessage = document.querySelector(".review-success-message");
const userReview = document.querySelector(".user-review");

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

window.addEventListener('load', function() {
    const storedReview = localStorage.getItem('userReview');
    if (storedReview) {
        userReview.innerHTML = `"${storedReview}"`;
        userReview.style.display = "block";
    }
});

addReviewBtn.addEventListener('click', function() {
    const reviewText = document.querySelector(".bookinfo-review-text").value;

    // Save the review to local storage
    localStorage.setItem('userReview', reviewText);

    // Show success message
    reviewSuccessMessage.textContent = "You've successfully added a review!";
    reviewSuccessMessage.style.display = "block";
    userReview.innerHTML = `"${reviewText}"`;
    userReview.style.display = "block";

    // Automatically remove the success message after 3 seconds
    setTimeout(function() {
        reviewSuccessMessage.style.display = "none";
    }, 3000);
});

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