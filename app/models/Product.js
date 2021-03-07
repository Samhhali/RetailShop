const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('./Connection');
const Category  = require('./Category');


(async ()=> {
  
const Product = sequelize.define('products_test',{
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
 
 
  Product.belongsTo(Category);
  Category.hasMany(Product);
  
  await sequelize.sync({ force: true });
  
})();