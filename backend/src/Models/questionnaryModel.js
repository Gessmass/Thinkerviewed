const db = require("./database.js")

const findAll = async () => {
  try {
    const [questionnary] = await db.query("SELECT * FROM Questionnary")
    return questionnary
  } catch (err) {
    console.info(err)
  }
}

const findQuestionnary = async (id) => {
  try {
    const [questionnary] = await db.query(
      "SELECT * FROM Questionnary WHERE id = ?",
      [id]
    )
    return questionnary
  } catch (err) {
    console.info(err)
  }
}

const findQuestions = async (id) => {
  try {
    const [questions] = await db.query(
      "SELECT * FROM Questions WHERE Questionnary_id = ?",
      [id]
    )
    return questions
  } catch (err) {
    console.info(err)
  }
}

const findAnwsersForQuestions = async (id) => {
  try {
    const [answers] = await db.query(
      "SELECT * FROM Answers WHERE Questions_id = ?",
      [id]
    )
    return answers
  } catch (err) {
    console.info(err)
  }
}

module.exports = {
  findAll,
  findQuestionnary,
  findQuestions,
  findAnwsersForQuestions,
}
