const mongoose = require("mongoose");
const Todo = require("../model/todoSchema.js")

// get the data 
module.exports.getdata = async (req , res)=>{
    try {
        const todos =  await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// create the data 

module.exports.createdata = async (req , res)=>{
    try {
         const todo =await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({error:error.message})
    }
}

//update the data
module.exports.updatedata = async(req , res)=>{
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
               title : req.body.title,
               content : req.body.content
        },{
            new:true,
            runValidators :true
        });        
        res.send(todo);
    } catch (error) {
        console.log(error.message)
    }
}

//delete the data
module.exports.deletedata = async (req , res)=>{
    try {
         await Todo.findByIdAndDelete(req.params.id);
        res.send('todo has deleted sucessfully')
    } catch (error) {
        console.log(error.message)
    }
}