const express = require("express");
const router = express.Router();
const todoController =require("../controller/todoController.js")



router.get("/getdata" ,todoController.getdata);
router.post("/createdata" ,todoController.createdata);
router.put("/updatedata/:id" ,todoController.updatedata);
router.delete("/deletedata/:id" ,todoController.deletedata);

module.exports= router;
