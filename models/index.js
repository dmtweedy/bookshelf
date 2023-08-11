// import models
const Profile = require('./Profile');
const ReadBooks = require('./read-books');
const WantBooks = require('./want-books');
const FavBooks = require('./fav-books');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag(ProductTag), {
  foreignKey: 'tag_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product(ProductTag), {
  foreignKey: 'product_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
