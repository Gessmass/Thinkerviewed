import axios from "axios"
import { useState } from "react"
import Cookies from "js-cookie"
import Logo from "../assets/images/Logo.png"

export default function ConnectionPopup({ closePopup }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.info("Utilisateur connecté")
          const token = res.data.token
          Cookies.set("authToken", token, { expires: 0.5, sameSite: "strict" })
          Cookies.set("connectedUser", JSON.stringify(res.data.user), {
            sameSite: "strict",
          })
          setUsername("")
          setPassword("")
          closePopup()
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la connexion de l'utilisateur", err)
      })
  }

  return (
    <div id="popupBackground">
      <div id="popupConnectionContent">
        <svg
          onClick={closePopup}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 my-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div id="logoEntete">
          <img src={Logo} alt="logo" />
          <p>Connexion</p>
        </div>
        <div id="inputConnection">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p id="motdepasseoublie">Mot de passe oublié ?</p>
        <div id="buttonConnection">
          <button onClick={handleLogin}>Entrer</button>
        </div>
      </div>
    </div>
  )
}
