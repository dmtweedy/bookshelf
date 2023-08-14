var apiKey = "AIzaSyBVe3t75GHMwNyhJyj-rCCGMYGddqhDlZs"
var userInput;
var search = function(){
    var userInput = document.querySelector(".searchbar").value;
    var queryURL = ` https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${apiKey}`
    fetch(queryURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (var i = data.items.length - 1; i >= 0; i--) {
            console.log(data.items[i].volumeInfo.title)
            console.log(data.items[i].volumeInfo.description)
          }
        
    })
}
