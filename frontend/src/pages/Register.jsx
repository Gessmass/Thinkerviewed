import { useState } from "react"
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [firstPassword, setFirstPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")

  const createUser = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/checkUserExistence`, {
        params: { username, email },
      })
      .then((response) => {
        const { userExists } = response.data

        if (!userExists) {
          axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/user/createUser`, {
              username,
              email,
              password: firstPassword,
            })
            .then((res) => {
              console.info("Utilisateur créé avec succès !", res.data)
            })
            .catch((err) => {
              console.error(
                "Problème lors de l'ajout des données de l'utilisateur",
                err
              )
            })
        } else {
          console.error("Pseudo ou adresse mail déjà utilisé")
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la vérification de l'utilisateur", err)
      })
  }

  return (
    <div id="mainContentRegister">
      <div id="titleRegister">
        <span>Rejoindre la communauté ThinkerViewed</span>
      </div>
      <div id="firstInputDivRegister">
        <input
          className="inputRegister"
          type="email"
          required
          placeholder="Adresse e-mail*"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputRegister"
          type="text"
          required
          placeholder="Pseudo*"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div id="lastInputRegister">
        <input
          className="inputRegister"
          type="password"
          placeholder="Mot de Passe*"
          name="firstPassword"
          onChange={(e) => setFirstPassword(e.target.value)}
        />
        <input
          className="inputRegister"
          placeholder="Confirmez votre mot de passe*"
          type="password"
          name="verifyPassword"
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
      </div>
      <div id="haveToMention">
        <span>Les champs contenant * sont obligatoires</span>
      </div>
      <div id="buttonRegister">
        <button
          type="button"
          onClick={firstPassword === verifyPassword ? createUser : ""}
        >
          Inscription
        </button>
      </div>
    </div>
  )
}

export default Register
