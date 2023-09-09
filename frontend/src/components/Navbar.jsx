import SlideinMenu from "./SlideinMenu"

import Logo from "../assets/images/Logo.png"

function Navbar() {
  return (
    <div className="navbarBody">
      <img src={Logo} alt="logo" />
      <SlideinMenu />
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar
