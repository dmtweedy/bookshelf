// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Profile extends Model {}

// set up fields and rules for Product model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    fav_books: {
      type: DataTypes.INTEGER,
      references: {
        model: 'fav_books',
        key: 'id'
      }
    },
    read_books: {
      type: DataTypes.INTEGER,
      references: {
        model: 'read_books',
        key: 'id'
      }
    },
    want_books: {
      type: DataTypes.INTEGER,
      references: {
        model: 'want_books',
        key: 'id'
      }
    },
    reviews: {
      type: DataTypes.INTEGER,
      references: {
        model: 'fav_books',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;
