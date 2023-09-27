const {
  addUser,
  findUserByUsernameOrEmail,
} = require("../models/usersModel.js")
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

const checkUserExistence = async (req, res) => {
  const { username, email } = req.query

  try {
    // Recherchez un utilisateur par nom d'utilisateur ou adresse e-mail
    const user = await findUserByUsernameOrEmail(username, email)

    if (Array.isArray(user) && user.length > 0) {
      // L'utilisateur existe déjà
      res.json({ userExists: true })
    } else {
      // L'utilisateur n'existe pas
      res.json({ userExists: false })
    }
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = { createUser, checkUserExistence }
