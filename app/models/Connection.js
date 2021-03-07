const { Sequelize } = require('sequelize');

module.exports = {
  sequelize: new Sequelize('testmydb', 'root', '', {  dialect: 'mysql' })
} 