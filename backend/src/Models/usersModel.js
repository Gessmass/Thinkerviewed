const db = require("./database.js")

const addUser = async (user) => {
  const { username, email, password } = user

  try {
    const [result] = await db.query(
      "INSERT INTO users (username, email_adress, hashed_password, registration_date) VALUES (?,?,?, NOW())",
      [username, email, password]
    )

    return { id: result.insertID, username, email }
  } catch (err) {
    console.error(err)
  }
}
const modifyProfile = async (username, email, id) => {
  // const { username, email, id } = user

  try {
    const [result] = await db.query(
      "UPDATE users (username, email_adress) VALUES (?,?) WHERE users.id = ?",
      [username, email, id]
    )

    return { result }
  } catch (err) {
    console.error(err)
  }
}

const findUserByUsernameOrEmail = async (username, email) => {
  try {
    const [user] = await db.query(
      "SELECT * FROM Users WHERE username = ? OR email_adress = ?",
      [username, email]
    )

    return user
  } catch (err) {
    console.error(err)
    return null
  }
}

const findUserByID = async (id) => {
  try {
    const [user] = await db.query("SELECT * FROM users WHERE user.id = ?"[id])

    return user
  } catch (err) {
    console.error(err)
    return null
  }
}

const verifyUsernameForLogin = async (username) => {
  try {
    const [user] = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ])
    return user
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  addUser,
  findUserByUsernameOrEmail,
  findUserByID,
  verifyUsernameForLogin,
  modifyProfile,
}
