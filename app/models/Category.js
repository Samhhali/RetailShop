const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./Connection');

class Category extends Model {} // model is a table in the database

Category.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'categories_test' });

sequelize.sync();

module.exports = {
  Category
}