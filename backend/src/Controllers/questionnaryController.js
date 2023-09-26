const { findAll } = require("../models/questionnaryModel.js")

const getAll = async (req, res) => {
  try {
    const questionnary = await findAll()
    res.send(questionnary)
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = { getAll }
