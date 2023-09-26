import Logo from "../assets/images/Logo.png"

function Navbar() {
  return (
    <nav>
      <div className="navbarBody">
        <img src={Logo} alt="logo" />
        <label htmlFor="touch">
          <span>titre</span>
        </label>
        <input type="checkbox" id="touch" />

        <ul className="slide">
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
