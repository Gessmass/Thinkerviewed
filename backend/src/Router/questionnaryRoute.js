const express = require("express")
const router = express.Router()
const {
  getAll,
  getQuestionnaryById,
  getQuestionsById,
  getAnswersForQuestions,
} = require("../controllers/questionnaryController")
const argonHelper = require("../helper/argonHelper.js")

router.get("/", getAll)

router.get("/:id", getQuestionnaryById)
router.get("/questions/:id", getQuestionsById)
router.get("/answers/:id", getAnswersForQuestions)
router.use(argonHelper.verifyToken)

module.exports = router
