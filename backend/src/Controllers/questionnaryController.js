const {
  findAll,
  findQuestionnary,
  findQuestions,
  findAnwsersForQuestions,
} = require("../models/questionnaryModel.js")

const getAll = async (req, res) => {
  try {
    const questionnary = await findAll()
    res.send(questionnary)
  } catch (err) {
    res.sendStatus(500)
  }
}

const getQuestionnaryById = async (req, res) => {
  try {
    const [questionnary] = await findQuestionnary(req.params.id)

    res.send(questionnary)
  } catch (err) {
    res.sendStatus(500)
  }
}

const getQuestionsById = async (req, res) => {
  try {
    const questions = await findQuestions(req.params.id)
    res.send(questions)
  } catch {
    res.sendStatus(500)
  }
}

const getAnswersForQuestions = async (req, res) => {
  try {
    const answers = await findAnwsersForQuestions(req.params.id)
    res.send(answers)
  } catch {
    res.sendStatus(500)
  }
}

module.exports = {
  getAll,
  getQuestionnaryById,
  getQuestionsById,
  getAnswersForQuestions,
}
