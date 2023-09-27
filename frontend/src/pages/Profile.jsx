// import { useState, useEffect } from "react"
// import axios from "axios"

const Profile = () => {
  //   const [user, setUser] = useState([])
  //   const [switchInput, setSwitchInput] = useState(false)

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
          picture 1 picture 2 picture 3 picture 4 picture 5 picture 6
        </div>
      </div>
      <div id="lastContentDiv">
        <div id="inputDisplayInfo">
          <span>Pseudo : userPseudo</span>
          <span>E-mail : userEmail</span>
        </div>
        <div id="buttonModifyProfileDiv">
          <button type="button">Modifier</button>
        </div>
        <div id="newPasswordProfileDiv">
          <button type="button">Nouveau mot de passe</button>
        </div>
      </div>
    </div>
  )
}
export default Profile
