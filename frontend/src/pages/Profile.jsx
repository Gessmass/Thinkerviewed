import { useState } from "react"
// import axios from "axios"
// , useEffect

import Bronze from "../assets/images/Bronze.png"
import Chocolate from "../assets/images/Chocolate.png"
import Diamond from "../assets/images/Diamond.png"
import Iron from "../assets/images/Iron.png"
import Silver from "../assets/images/Silver.png"
import Gold from "../assets/images/Gold.png"

const Profile = () => {
  //   const [user, setUser] = useState([])
  const [isModifying, setIsModifying] = useState(false)

  return (
    <div id="mainDivProfile">
      <div id="firstContentDiv">
        <div id="userIDDiv"></div>
      </div>
      <div id="secondContentDiv">
        <div id="titleProgressDiv">
          <span>PROGRESSION</span>
        </div>
        <div className="progressBar">
          <span>fonction des quizz terminés</span>
        </div>
        <div className="progressBar">
          <span>fonction du taux de bonnes réponses</span>
        </div>
        <div className="progressBar">
          <span>fonction du score</span>
        </div>
      </div>
      <div id="thirdContentDiv">
        <div id="titleMedalsDiv">
          <span>MEDAILLES</span>
        </div>
        <div id="medalsRackDiv">
          <div id="medalsImagesContainer">
            <img src={Diamond} alt="Medaille Diamant" />
            <img src={Gold} alt="Medaille d'or" />
            <img src={Silver} alt="Medaille d'argent" />
            <img src={Bronze} alt="Medaille de Bronze" />
            <img src={Iron} alt="Medaille en fer" />
            <img src={Chocolate} alt="Medaille en chocolat" />
          </div>
          <div id="medalsNumberContainer">
            <div className="medalsNumberDisplay">
              <span>x1</span>
            </div>
            <div className="medalsNumberDisplay">
              <span>x12</span>
            </div>
            <div className="medalsNumberDisplay">
              <span>x11</span>
            </div>
            <div className="medalsNumberDisplay">
              <span>x15</span>
            </div>
            <div className="medalsNumberDisplay">
              <span>x12</span>
            </div>
            <div className="medalsNumberDisplay">
              <span>x14</span>
            </div>
          </div>
        </div>
      </div>
      <div id="lastContentDiv">
        <div id="titleLastDivProfile">
          <span>INFOS COMPTE</span>
        </div>
        <div id="inputDisplayInfo">
          {isModifying === true ? (
            <>
              <input type="text" placeholder="Pseudo" />
              <input type="email" placeholder="E-mail" />
            </>
          ) : (
            <>
              <span>Pseudo : userPseudo</span>
              <span>E-mail : userEmail</span>
            </>
          )}
        </div>
        <div id="buttonModifyProfileDiv">
          <button type="button" onClick={() => setIsModifying(!isModifying)}>
            {isModifying === false ? "Modifier" : "Valider"}
          </button>
        </div>
        <div id="newPasswordProfileDiv">
          <button type="button">Nouveau mot de passe</button>
        </div>
      </div>
    </div>
  )
}
export default Profile
