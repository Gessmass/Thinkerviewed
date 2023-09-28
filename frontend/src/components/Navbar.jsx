import { useEffect, useState } from "react"
import Logo from "../assets/images/Logo.png"
import ConnectionPopup from "./ConnectionPopup"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const idConnectedUser = Cookies.get("userData")

  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [displayPopup, setDisplayPopup] = useState(false)
  const navigate = useNavigate()
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (idConnectedUser) {
      setIsConnected(true)
    }
  }, [trigger])

  const toggleDropdownMenu = () => {
    setIsOpen(!isOpen)
  }

  const closePopup = () => {
    setDisplayPopup(false)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    Cookies.remove("authToken")
    Cookies.remove("userData")
    console.info("Utilisateur déconnecté")
    navigate("/")
  }

  return (
    <div className="navbarBody">
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onClick={toggleDropdownMenu} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <nav>
          {isConnected === true ? (
            <img
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/testUserPic.jpg
            `}
              alt="profilPicture"
              id="profilPictureNavbar"
            />
          ) : (
            <button id="seConnecter" onClick={() => setDisplayPopup(true)}>
              Se Connecter
            </button>
          )}
          <Link className="link" to="/">
            Accueil
          </Link>
          <Link className="link" to="/Categories">
            Catégories
          </Link>
          <Link className="link" to="/Contact">
            Contact
          </Link>
          <Link className="link" to="/About">
            À Propos
          </Link>
          <Link className="link" to="/Register">
            S'inscrire
          </Link>
        </nav>
        {isConnected === true && (
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
      <img src={Logo} alt="logo" id="logoNavbar" />
      {displayPopup && (
        <ConnectionPopup
          closePopup={closePopup}
          onTrigger={() => setTrigger(true)}
        />
      )}
    </div>
  )
}

export default Navbar
