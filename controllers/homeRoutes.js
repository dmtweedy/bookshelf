const router = require('express').Router()
const { UserBooks } = require('../models');

router.get('/', (req,res) => {
  res.render('search')
})

router.get('/results', (req, res) => {
 res.render('results')
})

router.get('/bookinfo/:bookid', async (req, res) => {
  try {
    // Retrieve the book ID from the request parameters
    const bookId = req.params.bookid;

    // Construct the URL to fetch book details
    const queryURL = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

    // Fetch book details from the API
    const response = await fetch(queryURL);
    const bookDetails = await response.json();

    res.render('bookinfo', { bookDetails, isBookInfoPage: true });
  } catch (error) {
    console.error('Error fetching book details:', error);
    res.status(500).send('Error fetching book details');
  }
});

router.get('/profile', async (req, res) => {
  console.log(req.session)

  const favoriteBooks = await UserBooks.findAll(
    {
      where: { 
        favorite: true,
        user_id: req.session.user_id
      },
    }
  )
  const favorites = favoriteBooks.map(fav => fav.get({plain: true}))
  console.log(favorites)

  const readBooks = await UserBooks.findAll(
    {
      where: { 
        read: true,
        user_id: req.session.user_id
      },
    }
  ) 
  const reads = readBooks.map(read => read.get({plain: true}))
  console.log(reads);

  const wantedBooks = await UserBooks.findAll(
    {
      where: { 
        want: true,
        user_id: req.session.user_id
      },
    }
  )
  const wants = wantedBooks.map(want => want.get({plain: true}))
  console.log(wants);

  res.render('profile', { user, favorites, reads, wants })
})

router.get('/userpage', (req, res) => {
  res.render('userpage')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router