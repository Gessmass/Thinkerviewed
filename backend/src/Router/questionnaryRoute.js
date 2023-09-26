const express = require("express")
const router = express.Router()

const { getAll } = require("../Controllers/questionnaryController")

router.get("/", getAll)

module.exports = router
