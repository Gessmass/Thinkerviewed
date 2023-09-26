const express = require("express")
const router = express.Router()

const questionnaryRoute = require("./questionnaryRoute")

router.use("/questionnary", questionnaryRoute)

module.exports = router
