const express = require("express")
const router = express.Router()

const usersController = require("../controllers/usersController.js")

router.post("/createUser", usersController.createUser)

module.exports = router
