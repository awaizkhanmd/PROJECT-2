const  mongoose  = require("mongoose");
const  express  = require("express");
const CollegeController = require("../controller/collegeController");
const InternController = require("../controller/internController");
const router = express.Router();


router.post("/functionup/colleges",CollegeController.createCollege)
router.post("/functionup/intern",InternController.createInterns)

module.exports = router