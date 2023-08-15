
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


