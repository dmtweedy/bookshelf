const bookimage = document.querySelector("#book-img")
const bookid = document.querySelector("#book-id")
const title = document.querySelector("#title")
const desc = document.querySelector("#description")
const fav = document.querySelector("#fav-btn")
const com = document.querySelector("#com-btn")
const wish = document.querySelector("#wish-btn")

const setTrue = function(){
    this.classList.add(true)
}

fav.addEventListener('click', setTrue())
com.addEventListener('click', setTrue())
wish.addEventListener('click', setTrue())
