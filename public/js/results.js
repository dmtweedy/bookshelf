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

function searchthis(userInput) {

  
  var queryURL = ` https://www.googleapis.com/books/v1/volumes/${userInput}`

  fetch(queryURL)
  .then(function(response){
      return response.json()
  })
  .then(function(data){
    console.log(data)
  })
}  

getStorage()

