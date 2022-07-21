const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/todo-app"

const connectToMongo = ()=>{
    mongoose.connect(url , ()=>{
        console.log("connected to mongoose successfully")
    })
}

module.exports = connectToMongo;