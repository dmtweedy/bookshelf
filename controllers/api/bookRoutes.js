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

router.get('/favorite', (req, res) => {
  UserBooks.findAll(
    {
      where: { 
        favorite: true,
        user_id: req.session.user_id
      },
    }
  ).then((favBookData) => {
    res.json(favBookData);
  });
});

router.get('/read', (req, res) => {
  UserBooks.findAll(
    {
      where: { 
        read: true,
        user_id: req.session.user_id
      },
    }
  ).then((ReadBookData) => {
    res.json(ReadBookData);
  });
});

router.get('/want', (req, res) => {
  UserBooks.findAll(
    {
      where: { 
        want: true,
        user_id: req.session.user_id
      },
    }
  ).then((WantBookData) => {
    res.json(WantBookData);
  });
});

module.exports = router