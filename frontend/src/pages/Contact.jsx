

const Contact = () => {
  return (
    <div id="mainDivContactUs">
      <div id="topDivContactUs">
        <h1>Contactez-nous</h1>
      </div>
      <div id="mainContentDivContactUs">
        <div id="divTopContent">
          <p>
            Une question ? Une remarque ? Vous avez une suggestion ? Vous avez
            repéré une erreur dans un quizz ? Ou tout simplement vous voulez
            faire un petit coucou ? Alors n’hésitez pas à nous contacter en
            tapant votre message ci-dessous.
          </p>
        </div>
        <div id="divMiddleContent">
          <textarea
            id="userMessage"
            placeholder="Votre message ici..."
          ></textarea>
        </div>
        <div id="divBottomContent">
          <button type="button" id="sendMessageButton">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
