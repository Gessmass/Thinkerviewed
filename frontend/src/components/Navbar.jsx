import { useState } from "react"
import Logo from "../assets/images/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdownMenu = () => {
    setIsOpen(!isOpen)
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
          <a href="#home">Accueil</a>
          <a href="#services">Catégories</a>
          <a href="#contact">Contact</a>
          <a href="#contact">À Propos</a>
        </nav>
      </div>
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default Navbar
