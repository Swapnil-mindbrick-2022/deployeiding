const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate()
.then(() => {
    console.log('connected..')  
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize)
db.users=require("./user.model.js")(sequelize, Sequelize)
db.ivrs=require("./ivrs.model.js")(sequelize, Sequelize)
db.uploadhistory=require("./uploadhistory.model.js")(sequelize, Sequelize)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})
// db.tutorials.hasMany(db.ivrs, {
//   foreignKey: 'id',
//   as: 'IVRS_RESPONSE'
// });
// db.ivrs.belongsTo(db.tutorials, {
//   foreignKey: 'id',
//   as: 'data'
// })
// db.tutorials.hasMany(db.ivrs)
// db.tutorials.hasOne(db.ivrs,{foreignKey: 'id'})  //default
db.tutorials.hasMany(db.ivrs,{foreignKey: 'mobile',sourceKey: "mobile",}) 
db.ivrs.belongsTo(db.tutorials,{foreignKey: 'mobile', targetKey: "mobile",constraints: false,})
module.exports = db;

