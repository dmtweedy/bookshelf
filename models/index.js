// import models
const Profile = require('./Profile');
const Books = require('./Books');

Profile.hasMany(Books, {
  foreignKey: 'id',
});

Books.belongsToMany(Profile, {
  foreignKey: 'id'
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
