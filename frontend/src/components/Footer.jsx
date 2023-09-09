import { Link } from "react-router-dom"
import TipeeLogo from "../assets/images/TipeeLogo.png"

function Footer() {
  return (
    <>
      <div className="footerBody">
        <ul>
          <Link to="/About">
            <li>À propos</li>
          </Link>
          <Link to="/Contact">
            <li>Contactez-nous</li>
          </Link>
        </ul>
        <img src={TipeeLogo} alt="logo Tipee" />
      </div>
    </>
  )
}

export default Footer
