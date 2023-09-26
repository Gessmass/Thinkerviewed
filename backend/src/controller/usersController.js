const { addUser } = require("../models/usersModel.js")
const validateUser = require("../validators/userValidator.js")
const { hashPassword } = require("../helper/argonHelper.js")

const createUser = async (req, res) => {
  // const { username, email, password } = req.body
  // console.log(req.body)

  try {
    const errors = validateUser(req.body)
    if (errors) {
      return res.status(401).send(errors)
    }

    const hashedPassword = await hashPassword(req.body.password)

    const result = await addUser({ ...req.body, password: hashedPassword })
    res.status(201).send(result)
  } catch (err) {
    res.sendStatus(500)
  }
}

module.exports = { createUser }
