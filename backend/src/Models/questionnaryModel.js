const db = require("./database.js")

const findAll = async () => {
  try {
    const [questionnary] = await db.query("SELECT * FROM Questionnary")
    return questionnary
  } catch (err) {
    console.info(err)
  }
}

module.exports = { findAll }
