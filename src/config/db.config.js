// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "password123",
//     DB: "mbtest",
//     dialect: "mysql",
//     // table:'test',
//     port:"3306",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

//  for connectimg MYSQL databse of PHP MYadmin of godady domain
// module.exports = {
//   HOST: "68.178.228.104",
//   USER: "swapnil12",
//   PASSWORD: "swapnil12",
//   DB: "idingdata",
//   dialect: "mysql",
//   port:"3306",
//   pool: {
//     max: 25,
//     min: 0,
//     acquire: 300000,
//     idle: 100000
//   }
// };

//  for connectimg data base to AWS RDS 
module.exports = {
  HOST: "idingdb-1.ckvsrkgfxdhv.ap-south-1.rds.amazonaws.com",
  USER: "swapnil",
  PASSWORD: "kcjBpPGqkK6xntwct8F0",
  DB: "idingdata",
  dialect: "mysql",
  port:"3306",
  pool: {
    max: 25,
    min: 0,
    acquire: 300000,
    idle: 100000
  }
};
