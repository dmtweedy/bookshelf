const router = require('express').Router();
const { Profile, Books } = require('../../models');

router.get('/', async (req, res) => {
  const userData = await Profile.findAll({ include: Books })
  res.json(userData)
})

router.post('/signup', async (req, res) => {
  try {
    const userData = await Profile.create(req.body);
    const user = userData.get({plain: true})
    console.log(user)
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;


    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Profile.findOne({ where: { email: req.body.email } });

    const user = userData.get({plain: true})

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
    });
    res.json({ user, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
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
