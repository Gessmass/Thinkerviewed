import { useState, useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie"

import Bronze from "../assets/images/Bronze.png"
import Chocolate from "../assets/images/Chocolate.png"
import Diamond from "../assets/images/Diamond.png"
import Iron from "../assets/images/Iron.png"
import Silver from "../assets/images/Silver.png"
import Gold from "../assets/images/Gold.png"

const Profile = () => {
  const [isModifying, setIsModifying] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const user = localStorage.getItem("connectedUser")
  const [connectedUser, setConnectedUser] = useState(
    user !== null ? JSON.parse(user) : null
  )

  const userId = connectedUser.id
  const tokenFromCookie = Cookies.get("authToken")
  const headers = {
    Authorization: `Bearer ${tokenFromCookie}`,
  }

  const updateLocalStorage = (user) => {
    localStorage.setItem("connectedUser", JSON.stringify(user))
  }

  const handlePictureChange = (e) => {
    const picture = e.target.files[0]

    const formData = new FormData()

    formData.append("myFile", picture)

    setImageUrl(URL.createObjectURL(picture))

    updateProfilPictureOnServer(userId, formData)
  }

  const updateProfilPictureOnServer = async (userId, formData) => {
    try {
      const response = await axios
        .put(`http://localhost:4242/user/users/${userId}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${tokenFromCookie}`,
          },
        })
        .then((res) => {
          console.info("update profile picture successfull", res.data)
          updateLocalStorage(connectedUser)
        })
      return response
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de la photo de profil :",
        error
      )
      throw error
    }
  }

  useEffect(() => {
    setImageUrl(
      `${import.meta.env.VITE_BACKEND_URL}/${connectedUser.profil_picture}`
    )
  }, [connectedUser.profil_picture])

  const modifyProfile = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/user/modifyProfile`,
        {
          username: connectedUser.username,
          email: connectedUser.email_adress,
          id: connectedUser.id,
        },
        {
          headers,
        }
      )
      .then((res) => {
        console.info("update user successfull", res.data)
        setIsModifying(false)
        updateLocalStorage(connectedUser)
      })
      .catch((err) => {
        console.error("A problem occurred", err)
      })
  }

  return (
    <div id="mainDivProfile">
      <div id="firstContentDiv">
        <div id="userIDDiv">
          <label htmlFor="buttonPicture">
            {imageUrl !== null ? (
              <img
                src={imageUrl}
                alt="your profile user picture"
                name="myFile"
                className="userPicture"
                id="profilPictureForm"
              />
            ) : (
              <img
                className="userPicture"
                src={`${import.meta.env.VITE_BACKEND_URL}/${
                  connectedUser.profil_picture
                }`}
                alt="your profile user picture"
              />
            )}
          </label>
          <input
            type="file"
            id="buttonPicture"
            accept="image/*"
            onChange={(e) => {
              handlePictureChange(e)
            }}
            style={{ display: "none" }}
          />
        </div>
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
              <input
                type="text"
                placeholder="Pseudo"
                name="username"
                value={connectedUser.username}
                onChange={(e) =>
                  setConnectedUser({
                    ...connectedUser,
                    username: e.target.value,
                  })
                }
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={connectedUser.email_adress}
                onChange={(e) =>
                  setConnectedUser({
                    ...connectedUser,
                    email_adress: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <>
              <span>Pseudo : {connectedUser.username}</span>
              <span>E-mail : {connectedUser.email_adress}</span>
            </>
          )}
        </div>
        <div id="buttonModifyProfileDiv">
          {isModifying === false ? (
            <button type="button" onClick={() => setIsModifying(true)}>
              <span>Modifier</span>
            </button>
          ) : (
            <button type="button" onClick={modifyProfile}>
              <span>Valider</span>
            </button>
          )}
        </div>
        <div id="newPasswordProfileDiv">
          <button type="button">Nouveau mot de passe</button>
        </div>
      </div>
    </div>
  )
}
export default Profile
