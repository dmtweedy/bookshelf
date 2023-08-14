
var apiKey = "AIzaSyBVe3t75GHMwNyhJyj-rCCGMYGddqhDlZs"
var userInput;
var bookDesc = [];
var bookTitle = [];

var search = function(){

    var userInput = document.querySelector(".searchbar").value;
    var queryURL = ` https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${apiKey}`

    fetch(queryURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for (var i = data.items.length - 1; i >= 0; i--) {
            console.log(bookDesc);
            console.log(bookTitle);
            bookDesc.push(data.items[i].volumeInfo.description);
            bookTitle.push(data.items[i].volumeInfo.title);
            showData(bookDesc, bookTitle);
        }
        
    })

}


function showData(bookDesc, bookTitle){

    var newCard = `
    <div class="card-body">
    <h5 class="card-title">${bookTitle}</h5>
    <p class="card-text">${bookDesc}</p>
    <a href="#" class="btn btn-primary">See More</a>
    </div>
 `
    $('.card').append(newCard);
    console.log('hello');
}