var memoryArr =  JSON.parse(localStorage.getItem('key')) || []

function getStorage(){
  for (let i = 0; i < memoryArr.length; i++) {
    // console.log(memoryArr)
    var book_name = $("<h5>").addClass("card-title").text(`${memoryArr[i].key}`)
    var description = $("<p>").addClass("card-text").text(`${memoryArr[i].val}`) ;
    
    $(".card-body").append(book_name.append(description));
  }

}

getStorage()