const mongoose = require("mongoose");
const Details = mongoose.model("Details");

exports.addStudent = (req, res) => {
  const { studentName, age, address, rollNumber } = req.body;

  if (!studentName || !age || !address || !rollNumber) {
    return res.send("Fields should not be empty");
  }
  Details.findOne({ rollNumber: rollNumber }).then((savedDeatils) => {
    if (savedDeatils) {
      return res.send("User already exists");
    } else {
      const newStudentDetails = new Details({
        studentName: studentName,
        age: age,
        address: address,
        rollNumber: rollNumber,
      });
      newStudentDetails
        .save()
        .then((details) => {
          return res.json({ message: "Details saved succesfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

exports.getDetails = (req, res) => {
  Details.find({ rollNumber: req.params.rollNumber }).then((details) => {
    if (details.length > 0) {
      res.json(details);
    } else {
      res.status(404).send("No records found");
    }
  });
};

exports.updateDetails = (req, res) => {
  const query = req.params.rollNumber;
  const replacement = {
    studentName: req.body.studentName,
    age: req.body.age,
    address: req.body.address,
    rollNumber: req.body.rollNumber,
  };

  const options = { returnNewDocument: false };
  Details.findOneAndReplace({ rollNumber: query }, replacement, options).then(
    (result) => {
      if (result) {
        res.send(`Document updated successfully":${result}`);
      } else {
        res.status(404).send("No document matches the provided query.");
      }
    }
  );
};

exports.deleteDetails = (req, res) => {
  const query = req.params.rollNumber;
  Details.find({ rollNumber: query }).then((response) => {
    if (response.length > 0) {
      Details.deleteOne({ rollNumber: query }).then((result) => {
        console.log(result);
        if (result) {
          return res.send("document deleted succesfully");
        } else {
          res.send("no doc deleted");
        }
      });
    } else {
      res.send("No records found");
    }
  });
};
