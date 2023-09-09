import { Link } from "react-router-dom"

export default function SlideinMenu() {
  return (
    <div id="slideinMenuDiv">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">À Propos</Link>
        </li>
      </ul>
    </div>
  )
}
