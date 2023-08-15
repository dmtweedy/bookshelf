// import models
const Profile = require('./Profile');
const Books = require('./Books');
const UserBooks = require('./UserBooks')

Books.belongsToMany(Profile, {
  through: UserBooks,
  foreignKey: "book_id"
})

Profile.belongsToMany(Books, {
  through: UserBooks,
  foreignKey: "user_id"
})

// Books.belongsToMany(Profile, {
//   foreignKey: 'want_books'
// })

// Books.belongsToMany(Profile, {
//   foreignKey: 'read_books'
// })

module.exports = {
  Profile,
  Books,
  UserBooks
};


/*
  Profile = users = can read multiple books 
  Book = can be read by multiple users 

  ProfileBook
  profile_id 
  book_id
  is_favorite   1
  has_read      1
  wants_to_buy  0





*/
