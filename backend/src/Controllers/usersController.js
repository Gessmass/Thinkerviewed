const {
  addUser,
  findUserByUsernameOrEmail,
  verifyUsernameForLogin,
  modifyProfile,
} = require("../models/usersModel.js")

const validateUser = require("../validators/userValidator.js")
const {
  hashPassword,
  giveTokenAfterRegister,
} = require("../helper/argonHelper.js")

const createUser = async (req, res) => {
  try {
    const errors = validateUser(req.body)

    if (errors) {
      return res.status(400).send(errors)
    }

    const hashedPassword = await hashPassword(req.body.password)

    const result = await addUser({ ...req.body, password: hashedPassword })

    if (typeof result.id === "object") {
      const token = giveTokenAfterRegister(result.id)
      res.status(201).send({ token, user: result })
    } else {
      // Si result.id n'est pas un objet, renvoyez une erreur appropriée
      return res.status(500).send("Erreur lors de la création du jeton JWT.")
    }
  } catch (err) {
    res.sendStatus(500)
  }
}

const updateUser = async (req, res) => {
  const user = req.body
  try {
    const result = await modifyProfile(user)
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
      console.info({ userExists: true })
    } else {
      // L'utilisateur n'existe pas
      res.json({ userExists: false })
    }
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: err.message })
  }
}

const verifyUser = (req, res, next) => {
  verifyUsernameForLogin(req.body.username)
    .then(([user]) => {
      if (user != null) {
        req.user = user
        next()
      } else {
        res.sendStatus(401)
      }
    })
    .catch((err) => {
      console.error("Error in verifyUser:", err)
      res.status(500).send("Error retrieving data from the database")
    })
}

module.exports = { createUser, checkUserExistence, verifyUser, updateUser }
