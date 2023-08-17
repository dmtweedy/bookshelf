const sequelize = require('../config/connection');
const { Profile, Books, UserBooks } = require('../models');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });

  await Profile.bulkCreate([
    {
      user_fname: "Katy",
      user_lname: "Vincent",
      username: "KatyVincent",
      email: "kvincent@instructors.2u.com",
      password: "password"
    },
    {
      user_fname: "Dizzy",
      user_lname: "Vincent",
      username: "DizzyVincent",
      email: "dizzy@instructors.2u.com",
      password: "password1"
    }
  ])

  await Books.bulkCreate([
    {
      isbn: "1234567890",
      book_name: 'Katy MVP',
      author: "Austin Slater"
    },
    {
      isbn: "9876543210",
      book_name: 'Katy is the best',
      author: "Gary Almes"
    }
  ])

  await UserBooks.bulkCreate([
    {
      user_id: 1,
      book_id: 1,
      favorite: true
    },
    {
      user_id: 1,
      book_id: 2,
      want: true
    }
  ])

    console.log('Seed completed successfully.');
  } catch (error) {
    console.error('Seed failed:', error);
  } finally {
    process.exit();
  }
};

seed();