const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes =require('./api')
const bookRoutes = require('./api/bookRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/search', bookRoutes);

module.exports = router