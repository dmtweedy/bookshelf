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

router.post('/favorite', (req, res) => {
  Books.create([{ through: UserBooks, as: 'favorite' }],
  {
    where: {
      user_id: req.session.user_id,
      favorite: true,
    }
  })}
);

router.post('/read', (req, res) => {
  Books.create([{ through: UserBooks, as: 'read' }],
  {
    where: {
      user_id: req.session.user_id,
      read: true,
    }
  })}
);

router.post('/want', (req, res) => {
  Books.create([{ through: UserBooks, as: 'want' }],
  {
    where: {
      user_id: req.session.user_id,
      want: true,
    }
  })}
);

module.exports = router