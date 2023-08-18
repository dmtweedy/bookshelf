const router = require('express').Router()
const { Books, UserBooks } = require("../../models");


// GET a book
router.get('/:isbn', (req, res) => {
  Books.findOne(
    {
      where: { 
        isbn: req.params.isbn 
      },
    }
  ).then((bookData) => {
    res.json(bookData);
  });
});

router.post('/favorite/:bookid', (req, res) => {
  UserBooks.create({
    user_id: req.session.user_id, 
    book_id: req.params.bookid,
    favorite: true
  })
});

router.post('/read/:bookid', (req, res) => {
  UserBooks.create({
    user_id: req.session.user_id, 
    book_id: req.params.bookid,
    read: true
  })
});

router.post('/want', (req, res) => {
  UserBooks.create({
    user_id: req.session.user_id, 
    book_id: req.params.bookid,
    want: true
  })
});

module.exports = router 