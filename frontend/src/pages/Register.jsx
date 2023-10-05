import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const Register = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [firstPassword, setFirstPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [alreadyExist, setAlreadyExist] = useState(false)
  const [notSamePassword, setNotSamePassword] = useState(false)
  const navigate = useNavigate()

  const checkPasswords = () => {
    if (firstPassword === verifyPassword) {
      createUser()
    } else {
      setNotSamePassword(true)
    }
  }

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
              const token = res.data.token
              Cookies.set("authToken", token, {
                expires: 0.5,
                sameSite: "strict",
              })
              const user = res.data.user
              localStorage.setItem("user", JSON.stringify(user))
              navigate("/Profile")
            })
            .catch((err) => {
              console.error(
                "Problème lors de l'ajout des données de l'utilisateur",
                err
              )
            })
        } else {
          console.error("Pseudo ou adresse mail déjà utilisé")
          setAlreadyExist(true)
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
        <button type="button" onClick={checkPasswords}>
          Inscription
        </button>
        <div
          id={
            notSamePassword === true
              ? "errorPasswordRegister"
              : "noDisplayPassword"
          }
          className="passwordErrorDivRegister"
        >
          <span>Les mots de passe ne correspondent pas</span>
        </div>
      </div>
      <div id="userExist">
        <div
          id={alreadyExist === true ? "errorMessageDiv" : "noDisplayRegister"}
          className="userExistErrorDivRegister"
        >
          <span>
            Un utilisateur utilisant ce pseudo ou cette adresse email existe
            déjà
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
