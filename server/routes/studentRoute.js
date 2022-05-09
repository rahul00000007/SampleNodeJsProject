const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const studentController = require("../controller/studentController");
const Details = mongoose.model("Details");
router.get("/", (req, res) => {
  res.send("hello rahul");
});
router.post("/addNewStudent", studentController.addStudent);

router.get("/getStudentDetails/:rollNumber", studentController.getDetails);
router.put("/updateStudentDetails/:rollNumber",studentController.updateDetails);
router.delete("/deleteStudent/:rollNumber",studentController.deleteDetails);

module.exports = router;
