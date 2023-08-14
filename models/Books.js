const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Books extends Model {}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_cover: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  }
);

module.exports = Books;
