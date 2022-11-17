const Sequelize = require('sequelize')

const sequelize = new Sequelize('mbtest','root','password123',{
    dialect: 'mysql',
    host:'localhost'
})
module.exports = sequelize

