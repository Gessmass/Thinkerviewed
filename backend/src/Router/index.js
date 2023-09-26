const express = require("express")
const router = express.Router()

const userRoute = require("./userRoute.js")
const questionnaryRoute = require("./questionnaryRoute")

router.get("/", (req, res) => {
  res.status(200).send("On /api from router")
})

router.use("/user", userRoute)
router.use("/questionnary", questionnaryRoute)

module.exports = router
