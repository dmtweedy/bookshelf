const router = require('express').Router()

router.get('/results', (req, res) => {
  res.render('results')
})

module.exports = router