const mongoose = require("mongoose");

require("dotenv").config();
// all data in env is fed to process object

// function to establish connection
const dbConnect = () =>{
    // process ?
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Connection of database is successfull");
    })
    .catch((error)=>{
        console.log("Error");
        console.log(error);

        // 0 - tells about success (exit status code or return code)
        // 1 - tells about failure that current process it terminated due to any abonormal error
        process.exit(1);
    })
}

module.exports = dbConnect; // just syntax to export