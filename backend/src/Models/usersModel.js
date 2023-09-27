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

module.exports = {
  addUser,
  findUserByUsernameOrEmail,
}
