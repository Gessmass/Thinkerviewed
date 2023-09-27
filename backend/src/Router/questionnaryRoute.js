const express = require("express")
const router = express.Router()
const { getAll } = require("../controllers/questionnaryController")
const argonHelper = require("../helper/argonHelper.js")

router.get("/", getAll)
router.use(argonHelper.verifyToken)

module.exports = router
