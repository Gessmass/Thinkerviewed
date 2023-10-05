const express = require("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({ dest: "public/assets/tmp" })

const usersController = require("../controllers/usersController.js")
const argonHelper = require("../helper/argonHelper.js")

router.post("/login", usersController.verifyUser, argonHelper.verifyPassword)
router.put(
  "/users/:id/upload",
  upload.single("myFile"),
  usersController.updateProfilPictureUser
)
router.post("/createUser", usersController.createUser)
// router.put("/modifyProfile", usersController.updateUser)
router.get("/checkUserExistence", usersController.checkUserExistence)

router.use(argonHelper.verifyToken) // Authentication wall

module.exports = router
