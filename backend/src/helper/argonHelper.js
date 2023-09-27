const argon2 = require("argon2")
const jwt = require("jsonwebtoken")

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions)
}

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "12h",
        })
        delete req.user.hashedPassword
        res.send({ token, user: req.user })
      } else {
        res.sendStatus(401)
      }
    })

    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization")
    // const authorizationHeader2 = req.headers
    if (req.url.startsWith("/assets/images")) {
      return next()
    }

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing")
    }

    const [type, token] = authorizationHeader.split(" ")

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type")
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET)

    next()
  } catch (err) {
    console.error(err)

    res.sendStatus(401)
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
}
