const db = require("./database.js")

const addUser = async (user) => {
  const { username, email, password } = user

  try {
    const result = await db.query(
      "INSERT INTO users (username, email_adress, hashed_password, registration_date) VALUES (?,?,?, NOW())",
      [username, email, password]
    )
    const userId = result[0].insertId

    // Effectuez une autre requête pour obtenir les données de la nouvelle ligne
    const userData = await db.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ])

    // Assurez-vous que la requête a renvoyé au moins une ligne
    if (userData && userData[0] && userData[0][0]) {
      return userData[0][0] // Renvoie la première ligne de données
    } else {
      throw new Error(
        "Erreur lors de la récupération des données de l'utilisateur"
      )
    }
  } catch (err) {
    console.error(err)
    throw new Error("Erreur lors de la création de l'utilisateur")
  }
}

const modifyProfile = async (user) => {
  // const { username, email, id } = user

  try {
    const [result] = await db.query(
      "UPDATE users SET username = ?, email_adress = ?  WHERE id = ?",
      [user.username, user.email, user.id]
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
