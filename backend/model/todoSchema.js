const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{timestamps :true});

const Todo = mongoose.model("TodoData" , todoSchema);

module.exports = Todo;