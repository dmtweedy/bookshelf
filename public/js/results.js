var apiKey = "AIzaSyBVe3t75GHMwNyhJyj-rCCGMYGddqhDlZs"
var userInput;

//var memoryArr =  JSON.parse(localStorage.getItem('books')) || []

function getStorage(){
  var memoryArr =  JSON.parse(localStorage.getItem('books')) || []
  console.log(memoryArr)
  for (let i = 0; i < memoryArr.length; i++) {
    if (memoryArr[i].key ) {
      console.log(memoryArr[i])
    const card = `<div class="card-body">
    <h5 class="card-title">${memoryArr[i].val}</h5>
    <p class="card-text">${memoryArr[i].key}</p>
    <button id="button" class="btn btn-primary btn-book" data-id="${memoryArr[i].id}">See More!!</button>

  </div>`
    $(".card").append(card);
  }
  }
}

//     <a id = "button" class="btn btn-primary">See More</a>

const button = $(".btn-book")
$("body").on("click", ".btn-book", function() {

  console.log($(this))
  var userInput = $(this).attr("data-id")
  console.log(userInput)
  searchthis(userInput)
})

// This function fetches book details and redirects to the bookinfo page
function searchthis(userInput) {
  var queryURL = `https://www.googleapis.com/books/v1/volumes/${userInput}`;

  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Store the fetched book data in localStorage
      localStorage.setItem('bookData', JSON.stringify(data));

      // Redirect to the bookinfo page with the book ID
      window.location.replace(`/bookinfo/${userInput}`);
    })
    .catch(function(error) {
      console.error("Error fetching book details:", error);
    });
}

getStorage()

