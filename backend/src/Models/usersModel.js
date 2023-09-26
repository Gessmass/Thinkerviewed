const db = require("./database.js")

const addUser = async (user) => {
  const { username, email, password } = user

  try {
    const [result] = await db.query(
      "insert into 'users' (username, email_adress, hashed_password) values (?,?,?)",
      [username, email, password]
    )
    return { id: result.insertID, username, email }
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  addUser,
}
