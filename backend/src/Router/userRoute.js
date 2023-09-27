const express = require("express")
const router = express.Router()

const usersController = require("../controllers/usersController.js")
const argonHelper = require("../helper/argonHelper.js")

router.post(
  "/login",
  usersController.getUserByUsernameAndPassToNext,
  argonHelper.verifyPassword
)
router.post("/createUser", usersController.createUser)

module.exports = router
