const { Sequelize } = require('sequelize');

module.exports = {
  sequelize: new Sequelize('mydb', 'root', '', {  dialect: 'mysql' })
} 