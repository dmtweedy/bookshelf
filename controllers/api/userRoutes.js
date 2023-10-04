const router = require('express').Router();
const { Profile, Books } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const userData = await Profile.findAll({ include: Books })
  res.json(userData)
})

router.post('/signup', async (req, res) => {
  try {
    const userData = await Profile.create(req.body);
    const user = userData.get({ plain: true });

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
    });

    // Redirect the user to the userpage (change the URL as needed)
    res.redirect('/userpage');
  } catch (err) {
    res.status(400).json({ message: 'Signup failed. Please try again.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Profile.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

    const user = userData.get({ plain: true });

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
    });

    // Redirect the user to the userpage (change the URL as needed)
    res.redirect('/userpage');
  } catch (err) {
    res.status(400).json({ message: 'Login failed. Please try again.' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
