const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/index");

router.get("/", StudentController.getAllStudents);

// router.get("/:id", StudentController.getSingleStudent);

router.post("/", StudentController.createStudent);

router
  .route("/:id")
  .get(StudentController.getSingleStudent)
  .patch(StudentController.updateStudent)
  .delete(StudentController.deleteStudent);

module.exports = router;
