import "./Navbar.scss"
import Logo from "../assets/images/Logo.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbarBody">
      <img src={Logo} alt="logo" />
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/Categories">
              <li>CATEGORIES</li>
            </Link>
            <Link to="/Contact">
              <li>CONTACT</li>
            </Link>
            <Link to="/About">
              <li>À PROPOS</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
