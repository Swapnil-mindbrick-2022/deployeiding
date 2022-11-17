const Sequelize = require("sequelize");
const nodeify = require('nodeify');
const CsvParser = require("json2csv").Parser;
const db = require("../../models");
const Tutorial = db.tutorials;
const IVRS = db.ivrs;
const Uploadhistory = db.uploadhistory;
// const XLSX = require("read-excel-file/node");
// const ivrs = require("../../models/ivrs.model");
const excel = require('fast-xlsx-reader');
const reader = require('xlsx');


// for pagination
const Op = db.Sequelize.Op;


// const excel = require("exceljs")
// const { response } = require("express");
const fs = require("fs");
const { raw } = require('body-parser');



const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    
      //  row is an array of row . 
      // each row is aray of an cells

    readXlsxFile(path).then((rows) => {
      

      // skip header
      rows.shift();
      let tutorials = [];
      // Parse Excel file to data objects--------
      rows.forEach((row) => {
        

        let tutorial = {
          userID: row[0],
          GENDER: row[1],
          mobile: row[2],
          Name: row[3],
          Pincode: row[4],
          state: row[5],
          AC_Number:row[6],
          AC_Name:row[7],

        }
        tutorials.push(tutorial);

      });
      
      Tutorial.bulkCreate(tutorials)
        .then(() => {
          fs.unlink(path, (err) => {
            if (err) {
                throw err;
            }
        
            console.log("File is deleted.");
        });
          // res.status(200).send({
          //   message: "Uploaded the file successfully: " + req.file.originalname,
          // });
          res.send(tutorials)
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 */

const uploadmuliplefiles = async (req, res, next) => {
  const message =[];
  const data =[]
  for (const file of req.files) {
    try{
      let path =
      __basedir + "/resources/static/assets/uploads/" + file.filename;
      let rows = reader.read(path,{type:'file'})
      const sheetNames= rows.SheetNames

      // const timeStart = Date.now();

    

      

     
      // console.log(file.filename)
      // row is an aray of rows
      // each rows being an array of cells
      // rows.shift()

   
//Nested loop for checking whether data existes oir not -------
// //after if yes----- i++ else--- append that row---------
 
      let ivrsdata = sheetNames.length;
      

      for (let i = 0; i < ivrsdata; i++) {

        const arr= reader.utils.sheet_to_json(
          

          rows.Sheets[rows.SheetNames[0]]

        )
        arr.forEach((res)=>{
          let cust ={
            userID: res.userID,
            GENDER: res.GENDER || null,
            mobile: res.mobile || null,
            Name: res.Name || null,
            Pincode: res.Pincode || null,
            state: res.state || res.State || null,
            AC_Number: res.AC_Number || null,
            AC_Name: res.AC_Name || null
          }
          data.push(cust);
        })
       }
       uploadResults=  Tutorial.bulkCreate(data,{
        fields:["id","GENDER", "mobile",'Name', 'Pincode', 'state', 'AC_Number','AC_Name'],
        updateOnDuplicate: ["mobile"] ,
        // individualHooks: true,
        raw:true,
        benchmark:true,
        returning:false
       })
      .then(
        fs.unlink(path, (err) => {
        if (err) {
        throw err;
      }else{
        console.log("File is deleted.");

      }

  
}))

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
          filename:file.originalname +'(data)',
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
// const getTutorials = async (req, res) => {
//   // let data = {
//   //   data : "RAW QUERY"
//   // }
//   let data = await Tutorial.findAll({
//     // attributes:["GENDER","mobile",],
//     include:[{
//       model:IVRS,
//       attributes:['Response']
//     }],

//     // where:{mobile:9586103424}
//   })
//   // res.status(200).json(data)
//   console.log(data)
//   res.render('alldata.ejs',{'data': data});
  
// };

//  find IVRS 


// const download = (req, res) => {
//   Tutorial.findAll().then((objs) => {
//     let tutorials = [];
//     objs.forEach((obj) => {
//       const { userID, GENDER,mobile,Name,Pincode,state,AC_Number,AC_Name  } = obj;
//       tutorials.push({  userID, GENDER,mobile,Name,Pincode,state,AC_Number,AC_Name   });
//     });
//     const csvFields = ["userID", "GENDER", "mobile", "Name", "Pincode", "state", "AC_Number", "AC_Name"];
//     const csvParser = new CsvParser({ csvFields });
//     const csvData = csvParser.parse(tutorials);
//     res.setHeader("Content-Type", "text/csv");
//     res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");
//     res.status(200).end(csvData);
//   });
// };
// const update= (req, res) => {

// }
const download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      tutorials.push({
        userID: obj.userID,
        GENDER: obj.GENDER,
        mobile: obj.mobile,
        Name: obj.Name,
        Pincode: obj.Pincode,
        state: obj.state || obj.State,
        AC_Number: obj.AC_Number,
        AC_Name: obj.AC_Name
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");

    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "GENDER", key: "GENDER", width: 10 },
      { header: "mobile", key: "mobile", width: 15 },
      { header: "Name", key: "Name", width: 25 },
      { header: "Pincode", key: "Pincode", width: 10 },
      { header: "state", key: "state", width: 10 },
      { header: "AC_Number", key: "AC_Number", width: 10 },
      { header: "AC_Name", key: "AC_Name", width: 10 },

    ];

    // Add Array Rows
    worksheet.addRows(tutorials)
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "MBDATA.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
}

// const getPagination = (page, size) => {
//   const limit = size
  
//   const offset = page ? page * limit : 50;

//   return { limit, offset };
// };

// const getPagingData = (data, page, limit) => {
//   const { count: totalItems, rows: tutorials } = data;
//   const currentPage = page ? +page : 1;
//   const totalPages = Math.ceil(totalItems / limit);

//   return { totalItems, tutorials, totalPages, currentPage };
// };
const findAll = async(req, res) => {
  
  // const { page, size, title } = req.query;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  // const { limit, offset } = getPagination(page, size);
  // Tutorial.findAndCountAll({ where: condition, limit, offset })

  //   .then(data => {
  //     IVRS.findAndCountAll({where:condition,limit,offset}).then(ivrsdata =>{

  //       const getresponse = getPagingData(ivrsdata,page,limit)
  //       console.log(getresponse)
 
  //       const response = getPagingData(data, page, limit);
  //       res.render('alldata',{'data':response.tutorials});
  //       // res.send(response);

  //     })
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);
  

  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
    page = pageAsNumber;
  }

  let size = 500;

  if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
    size = sizeAsNumber;
  }
 

  

    const data =  await Tutorial.findAndCountAll({ 
      limit:size,
      offset: page * size,
       attributes:["id","GENDER", "mobile",'Name', 'Pincode', 'state', 'AC_Number','AC_Name'],
    include:[{
      model:IVRS,
      attributes:['Response'],
      required:true,

     
    }],

    where:{
      mobile:Sequelize.col('data.mobile'),
      // mobile:'8401085343'
    }
    })
     
   let uniquedates;
   IVRS.findAll().then((obj)=>{
    const dates= obj.map((date)=>{
      return date.UploadDate
    })

    uniquedates = [...new Set(dates)]
    console.log(uniquedates)



   
    
    // console.log(data.count)
    // res.send(data)
    res.render('alldata',{'data':data.rows,
      content: data.rows,
      current:  page,
      limit:size,



      Pages:JSON.stringify( Math.ceil(data.count / Number.parseInt(size))), 'dates':uniquedates
    });


  })
};
const findAllPublished = (req, res) => {
  
  // const { page, size } = req.query;
  // const { limit, offset } = getPagination(page, size);

  // Tutorial.findAndCountAll({ where: { state: true }, limit, offset })
  //   .then(data => {
      
  //     const response = getPagingData(data, page, limit);
  //     res.send(response);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
};


module.exports = {
  upload,
  // getTutorials,
  download,
  uploadmuliplefiles,
  findAll,
  findAllPublished
};

