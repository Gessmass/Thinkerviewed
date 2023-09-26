const express = require("express")
const router = express.Router()

const { getAll } = require("../controllers/questionnaryController")

router.get("/", getAll)

module.exports = router
