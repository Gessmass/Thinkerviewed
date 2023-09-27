const express = require("express")
const router = express.Router()

const usersController = require("../controllers/usersController.js")

router.post("/createUser", usersController.createUser)
// router.get("/getUsers", usersController.getAllUsers)
router.get("/checkUserExistence", usersController.checkUserExistence)

module.exports = router
