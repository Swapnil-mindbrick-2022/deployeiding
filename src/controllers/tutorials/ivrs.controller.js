
const CsvParser = require("json2csv").Parser;
const db=require('../../models')
const Uploadhistory = db.uploadhistory;
const IVRS = db.ivrs;
const readXlsxFile = require("read-excel-file/node");

const excel = require("exceljs")
// const { response } = require("express");
const fs = require("fs");
const reader = require('xlsx')

// const upload = async (req, res) => {
//   try {
//     if (req.file == undefined) {
//       return res.status(400).send("Please upload an excel file!");
//     }
//     let path =
//       __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    
//       //  row is an array of row . 
//       // each row is aray of an cells .
//     readXlsxFile(path).then((rows) => {
      

//       // skip header
//       rows.shift();
//       let ivrss = [];
//       // Parse Excel file to data objects
//       console.log(rows)
//       rows.forEach((row) => {
     

//         let ivrs = {
//           // userID: row[0],
//           mobile: row[1],
//           Response:row[2],
//         //   Response2:row[3]
        
//         }
        
//         ivrss.push(ivrs);
//       });
      
//       IVRS.bulkCreate(ivrss)
//         .then(() => {
//           fs.unlink(path, (err) => {
//             if (err) {
//                 throw err;
//             }
        
//             console.log("File is deleted.");
//         });
//           // res.status(200).send({
//           //   message: "Uploaded the file successfully: " + req.file.originalname,
//           // });
//           res.send(ivrss)
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "Fail to import data into database!",
//             error: error.message,
//           });
//         });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// };


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 */


const uploadivrs =async (req, res, next) => {
  const message =[];
  const data =[]
  const mydate = req.body.date
  for (let file of req.files) {
    let path =
    __basedir + "/resources/static/assets/uploads/" + file.filename;
    try{
  
      let rows = reader.read(path,{type:'file'})
      const sheetNames= rows.SheetNames
      
      // row is an aray of rows
      // each rows being an array of cells
      // console.log(rows);

      // rows.shift()
      let ivrsdata = sheetNames.length;

     
//Nested loop for checking whether data existes oir not -------
// //after if yes----- i++ else--- append that row---------
    
      // console.log(rows.length)

      for (let i = 0; i < ivrsdata; i++) {
        const arr= reader.utils.sheet_to_json(
          

          rows.Sheets[rows.SheetNames[0]]

        )

      arr.forEach((res)=>{
          let cust ={
            id: res.id,
            mobile: res.mobile,
            Response: res.Response,
            UploadDate: req.body.date,
           
          }
          data.push(cust);
        })
}
       uploadResults= IVRS.bulkCreate(data,{
        fields:['id','mobile','Response','UploadDate'],
        raw:true,
        benchmark:true,
        returning:false

       }
        ).then(
        fs.unlink(path, (err) => {
        if (err) {
        throw err;
      }else{
        console.log("File is deleted.");
      }

  
}))

  ;

      //  console.log(uploadResults)
      //  it will now wait for above promise to be fullfiled 
      // and show the proper details 

      if(!uploadResults){
        const result ={
          status:'fail',
          filename:file.originalname,
          message:'upload Failed'
        }
        message.push(result)
      }else{
        const myname = req.user.fullname
        const uploadhistory = new Uploadhistory({
          Name:myname,
          filename:file.originalname +'(ivrs)',
          // uploadtime: date.now(),
        })
        uploadhistory.save()
        const result ={
          status:'ok',
          filename:file.originalname,
          message:'file upload successfully'
        }
        message.push(result)

      }


    }catch(error){
    
      
      const result ={
        status:'fail',
        filename:file.originalname,
        message:"Error ->" + error.message
    }

    message.push(result)
    
  }
  }




  

  return res.json(message)

}





module.exports = {
  uploadivrs

};

