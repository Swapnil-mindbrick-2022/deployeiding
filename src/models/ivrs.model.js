// const tutorials = require('./tutorial.model')
const Sequelize = require('sequelize')
module.exports = (sequelize, Sequelize) => {
  
    const IVRS = sequelize.define("IVRS_RESPONSE",{
    
  
  
      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

      },  
       mobile:{
        type: Sequelize.STRING,
        // unique: true,
        primaryKey:true,
        
       
      },
      Response: {
        type: Sequelize.STRING
      },

      UploadDate:{

        type: Sequelize.STRING
      },
     
      
      // Response2: {
      //   type: Sequelize.STRING
      // },
      
   
})

return IVRS


}


    
  
  
    