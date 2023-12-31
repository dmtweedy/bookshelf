const router = require('express').Router()
const userRoutes = require('./userRoutes')
const bookRoutes =require('./bookRoutes')

router.use('/user', userRoutes);
router.use('/book', bookRoutes);

module.exports = router