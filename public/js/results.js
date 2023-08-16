var memoryArr =  JSON.parse(localStorage.getItem('key')) || []

function getStorage(){
  for (let i = 0; i < memoryArr.length; i++) {
    // console.log(memoryArr)
    // const book_name = $("<h5>").addClass("card-title").text(``);
    // const description = $("<p>").addClass("card-text").text(``) ;
    const card = `<div class="card-body">
    <h5 class="card-title">${memoryArr[i].key}</h5>
    <p class="card-text">${memoryArr[i].val}</p>
    <a href="#" class="btn btn-primary">See More</a>
  </div>`
    $(".card").append(card);
  }

}

getStorage()