const { Op } = require('sequelize');
const router = require('express').Router();
const Books = require('../../models/Books');

async function searchBooks(query) {
  try {
    const searchResults = await Books.findAll({
      where: {
        book_name: {
          [Op.like]: `%${query}%`
        }
      }
    });

    return searchResults;
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
}

router.get('/search', async (req, res) => {
  try {
    const searchQuery = req.query.query;
    const searchResults = await searchBooks(searchQuery);

    res.render('results', { searchResults });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

module.exports = router;