const express = require("express");
// const cors = require("cors");
const db=require("./db.js");
// const dotenv = require("dotenv");

const app = express();
// cors();

// const PORT = process.env.PORT || 8000 ; 


app.use(express.json());
db();
//routes setup
app.use("/api", require("./routes/index.js"))

if("production" == "production"){
    app.use(express.static("./client/build"))
}

app.listen(8000 , (err)=>{
    if(err){
        console.log(error.message);
    }
    console.log("server is running on the port 8000");
})