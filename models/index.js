// import models
const Profile = require('./Profile');
const Books = require('./Books');

Books.belongsToMany(Profile, {
  foreignKey: 'fav_books'
})

Books.belongsToMany(Profile, {
  foreignKey: 'want_books'
})

Books.belongsToMany(Profile, {
  foreignKey: 'read_books'
})

module.exports = {
  Profile,
  Books,
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
