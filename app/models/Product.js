const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./Connection');
const { Category } = require('./Category');

class Product extends Model {} // model is a table in the database

Product.init({
  name: DataTypes.STRING,
  price: DataTypes.INTEGER
}, { sequelize, modelName: 'products_test' });

Product.belongsTo(Category);
Category.hasMany(Product);

sequelize.sync();

module.exports = {
  Product
}