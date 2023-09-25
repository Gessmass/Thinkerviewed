const Register = () => {
  return (
    <div id="mainContentRegister">
      <div id="titleRegister">
        <span>Rejoindre la communauté ThinkerViewed</span>
      </div>
      <div id="firstInputDivRegister">
        <input className="inputRegister" placeholder="Adresse e-mail*" />
        <input className="inputRegister" placeholder="Pseudo*" />
      </div>
      <div id="lastInputRegister">
        <input className="inputRegister" placeholder="Mot de Passe*" />
        <input
          className="inputRegister"
          placeholder="Confirmez votre mot de passe*"
        />
      </div>
      <div id="haveToMention">
        <span>Les champs contenant * sont obligatoires</span>
      </div>
      <div id="buttonRegister">
        <button type="button">Inscription</button>
      </div>
    </div>
  )
}

export default Register
