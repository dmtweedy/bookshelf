const sequelize = require('../config/connection');
const { Profile, Books } = require('../models')

const seed = async () => {
  await sequelize.sync({ force: true })

  await Profile.bulkCreate([
    {
      user_fname: "Katy",
      user_lname: "Vincent",
      email: "kvincent@instructors.2u.com",
      password: "password"
    },
    {
      user_fname: "Dizzy",
      user_lname: "Vincent",
      email: "dizzy@instructors.2u.com",
      password: "password"
    }
  ])

  process.exit()
}

seed()