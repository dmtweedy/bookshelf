// import models
const Profile = require('./Profile');
const ReadBooks = require('./read-books');
const WantBooks = require('./want-books');
const Books = require('./Books');


// Product.belongsTo(Category, {
//   foreignKey: 'category_id'
// });

Profile.hasMany(FavBooks, {
  foreignKey: 'fav_books',
});

Profile.hasMany(ReadBooks, {
  foreignKey: 'read_books',
});

Profile.hasMany(WantBooks, {
  foreignKey: 'want_books',
});


Profile.belongsToMany(ProfileBook, {
    foreignKey: book_id
})

Book.belongsToMany(ProfileBook, {
  foreignKey: profille_id
})






module.exports = {
  Profile,
  ReadBooks,
  WantBooks,
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
