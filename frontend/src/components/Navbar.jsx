import { useState } from "react"
import Logo from "../assets/images/Logo.png"
import ConnectionPopup from "./ConnectionPopup"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const [displayPopup, setDisplayPopup] = useState(false)
  const navigate = useNavigate()
  // const [trigger, setTrigger] = useState(false)
  // const { connectedUser, setConnectedUser } = useContext(UserContext)

  const user = localStorage.getItem("connectedUser")
  const connectedUser = user ? JSON.parse(user) : null

  const toggleDropdownMenu = () => {
    setIsOpen(!isOpen)
  }

  const closePopup = () => {
    setDisplayPopup(false)
    setIsOpen(false)
  }

  const handleDisconnect = () => {
    // setConnectedUser(false)
    localStorage.removeItem("connectedUser")
    Cookies.remove("authToken")
    // console.info("Utilisateur déconnecté")
    navigate("/")
    setIsOpen(false)
  }

  return (
    <div className="navbarBody">
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isOpen === true}
          onClick={toggleDropdownMenu}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <nav>
          {connectedUser ? (
            <>
              <Link to="/Profile">
                <p id="usernameMenu">{connectedUser.username}</p>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    connectedUser.profil_picture
                  }
            `}
                  alt="profilPicture"
                  id="profilPictureNavbar"
                />
              </Link>
            </>
          ) : (
            <button id="seConnecter" onClick={() => setDisplayPopup(true)}>
              Se Connecter
            </button>
          )}
          <Link className="link" to="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link
            className="link"
            to="/Categories"
            onClick={() => setIsOpen(false)}
          >
            Catégories
          </Link>
          <Link className="link" to="/Contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link className="link" to="/About" onClick={() => setIsOpen(false)}>
            À Propos
          </Link>
          <Link
            className="link"
            to={connectedUser ? "/Profile" : "/Register"}
            onClick={() => setIsOpen(false)}
          >
            {connectedUser ? "Mon profil" : "S'enregistrer"}
          </Link>
        </nav>
        {connectedUser && (
          <button id="disconnect" onClick={handleDisconnect}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
            Déconnexion
          </button>
        )}
      </div>
      <Link to="/">
        <img src={Logo} alt="logo" id="logoNavbar" />
      </Link>
      {displayPopup && (
        <ConnectionPopup
          closePopup={closePopup}
          // onTrigger={() => setTrigger(true)}
          // onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  )
}

export default Navbar
