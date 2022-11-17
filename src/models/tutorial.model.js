const Sequelize = require('sequelize');
// const sequelize = require('../database')
// const ivrs = require('./ivrs.model')
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("data",{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

    },
    GENDER: {
      type: Sequelize.STRING
    },
    mobile:{
      type: Sequelize.STRING,
      unique: true,
      primaryKey:true,
      // ignoreDuplicates:true
     
    },
    Name: {
      type: Sequelize.STRING
    },
    Pincode:{
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    AC_Number:{
      type: Sequelize.STRING
    },
    AC_Name:{
      type: Sequelize.STRING
    },
     

  })
  return Tutorial

}

















