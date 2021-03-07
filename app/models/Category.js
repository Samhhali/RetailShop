const { Model, DataTypes } = require('sequelize');
const  {sequelize}  = require('./Connection');

(async ()=> {

const Category= sequelize.define("category_test", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

  await sequelize.sync({ force: true });
})();