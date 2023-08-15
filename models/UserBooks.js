const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserBooks extends Model {}

UserBooks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        foreignKey: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profile',
        foreignKey: 'id'
      }
    },
    favorite: {
      type: DataTypes.BOOLEAN
    },
    read: {
      type: DataTypes.BOOLEAN
    },
    want: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_books',
  }
);

module.exports = UserBooks;