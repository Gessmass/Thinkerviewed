const express = require("express")
const router = express.Router()

const usersController = require("../controllers/usersController.js")
const argonHelper = require("../helper/argonHelper.js")

router.post(
  "/login",
  usersController.checkUserExistence,
  argonHelper.verifyPassword
)

router.post("/createUser", usersController.createUser)
router.get("/checkUserExistence", usersController.checkUserExistence)

router.use(argonHelper.verifyToken) // Authentication wall

module.exports = router
