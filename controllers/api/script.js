var apiKey = "AIzaSyBVe3t75GHMwNyhJyj-rCCGMYGddqhDlZs"
var userInput;
var search = function(){
    var userInput = document.querySelector("#userInput");
    var queryURL = ` https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${apiKey}`
    fetch(queryURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}