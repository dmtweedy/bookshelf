const router = require('express').Router()
const { UserBooks } = require('../models');

router.get('/', (req,res) => {
  res.render('search')
})

router.get('/results', (req, res) => {
 res.render('results')
})

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
  res.render('profile', { user, favorites })
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router