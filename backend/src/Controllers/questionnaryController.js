const { findAll } = require("../Models/questionnaryModel")

const getAll = async (req, res) => {
  try {
    const movies = await findAll()
    res.send(movies)
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = { getAll }
