const express=require("express");
const { findAll, create, deletes, update, findOne } = require("../controller/customer.controller");
const router=express.Router();

router.get("/",findAll);
router.post("/",create);
router.delete("/:id",deletes);
router.patch("/:id",update);
router.get("/:id",findOne);

module.exports=router;