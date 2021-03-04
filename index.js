const {Product} = require('./app/models/Product');
const {Category} = require('./app/models/Category');

(async () => {
  const food_category = await Category.create({ name: "Food" });
  const product = await Product.create({ name: "Milk", price: 10, Category: food_category });


  const products = await Product.findAll();
  console.log("All the products in the DB: ", products);
})();