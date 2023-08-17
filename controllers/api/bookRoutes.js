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



module.exports = router