import { useState } from "react"
import Logo from "../assets/images/Logo.png"
import ConnectionPopup from "./ConnectionPopup"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const [isConnected, setIsConnected] = useState(false)
  const [displayPopup, setDisplayPopup] = useState(false)

  const toggleDropdownMenu = () => {
    setIsOpen(!isOpen)
  }

  const closePopup = () => {
    setDisplayPopup(false)
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
          {/* {isConnected ? (
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
          )} */}
          <a href="#home">Accueil</a>
          <a href="#services">Catégories</a>
          <a href="#contact">Contact</a>
          <a href="#contact">À Propos</a>
        </nav>
      </div>
      <img src={Logo} alt="logo" id="logoNavbar" />
      {displayPopup && <ConnectionPopup closePopup={closePopup} />}
    </div>
  )
}

export default Navbar
