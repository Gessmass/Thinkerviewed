import { Link } from "react-router-dom"
import { useEffect } from "react"

import Bronze from "../assets/images/Bronze.png"
import Chocolate from "../assets/images/Chocolate.png"
import Diamond from "../assets/images/Diamond.png"
import Iron from "../assets/images/Iron.png"
import Silver from "../assets/images/Silver.png"
import Gold from "../assets/images/Gold.png"
import ClosingCross from "../assets/images/ClosingCross.png"

export default function QuestionCard({
  scorePercentage,
  correctAnswers,
  totalQuestions,
  handleOnClose,
}) {
  const handleKeyPressEscape = (event) => {
    if (event.key === "Escape") {
      handleOnClose()
    }
  }

  const getColorForScore = (scorePercentage) => {
    if (scorePercentage === 100) {
      return "#D0FFED"
    } else if (scorePercentage > 85) {
      return "#ffd700"
    } else if (scorePercentage > 70) {
      return "#c0c0c0"
    } else if (scorePercentage > 50) {
      return "#cd7f32"
    } else if (scorePercentage > 30) {
      return "#706f6f"
    } else {
      return "#8b5a2b"
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressEscape)
    return () => {
      document.removeEventListener("keydown", handleKeyPressEscape)
    }
  }, [])

  return (
    <div id="mainDivScore">
      <img
        src={ClosingCross}
        id="closePopupScore"
        alt="closing Cross"
        onClick={handleOnClose}
      />
      <div id="imageMedal">
        {scorePercentage <= 30 && <img src={Chocolate} alt="Chocolate" />}
        {scorePercentage > 30 && scorePercentage <= 50 && (
          <img src={Iron} alt="Iron" />
        )}
        {scorePercentage > 50 && scorePercentage <= 70 && (
          <img src={Bronze} alt="Bronze" />
        )}
        {scorePercentage > 70 && scorePercentage <= 85 && (
          <img src={Silver} alt="Silver" />
        )}
        {scorePercentage > 85 && scorePercentage < 100 && (
          <img src={Gold} alt="Gold" />
        )}
        {scorePercentage === 100 && <img src={Diamond} alt="Diamond" />}
      </div>
      <div id="scoreDetails">
        <p>Taux de bonnes réponses :</p>
        <h1 style={{ color: getColorForScore(scorePercentage) }}>
          {scorePercentage}%
        </h1>
        <span style={{ color: getColorForScore(scorePercentage) }}>
          {correctAnswers}/{totalQuestions}
        </span>
      </div>
      <div id="scoreText">
        {scorePercentage <= 30 && (
          <p>
            Merci d'avoir participé ! Ton score{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>
              Chocolat
            </span>{" "}
            montre que tu as commencé à explorer l'interview, mais il y a encore
            beaucoup à apprendre. Ne t'inquiète pas, chaque expérience est une
            occasion d'apprendre et de s'améliorer. Continue de t'investir, et
            qui sait, la prochaine fois, tu pourrais grimper dans le classement
            !
          </p>
        )}
        {scorePercentage > 30 && scorePercentage <= 50 && (
          <p>
            Pas mal, tu obtient un score{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>
              Fer
            </span>
            . Bien que certains détails aient été un peu échappés, tu as tout de
            même saisi des aspects importants de l'interview. Avec un peu plus
            d'effort et d'attention, tu peux progresser encore davantage pour
            obtenir un meilleur résultat la prochaine fois.
          </p>
        )}
        {scorePercentage > 50 && scorePercentage <= 70 && (
          <p>
            Bravo ! Tu as obtenu un score{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>
              Bronze
            </span>
            , montrant une solide compréhension de l'interview. Bien que
            quelques points aient échappé à ta mémoire, tu as saisi les grands
            principes de l'interview. Sois encore plus attentif lors de tes
            visionnages pour obtenir encore un meilleur score.
          </p>
        )}
        {scorePercentage > 70 && scorePercentage <= 85 && (
          <p>
            Félicitation ! Tu as réussi à obtenir un score{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>
              Argent
            </span>
            , Quelque confusions ci et là, mais tu as compris et retenu
            l'essentiel de l'interview. Continue de t'améliorer, et qui sait, la
            prochaine fois, tu pourrais décrocher l'Or ! .
          </p>
        )}
        {scorePercentage > 85 && scorePercentage < 100 && (
          <p>
            Brillant travail ! Tu as réussi à obtenir un score{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>Or</span>
            , tu es proche du sans faute . Tu as compris et retenu la
            quasi-intégralité de l'interview. Encore un petit effort et le
            prochain invité, ça sera peut-être toi !
          </p>
        )}
        {scorePercentage === 100 && (
          <p>
            Incroyable ! Tu as accompli l’objectif ultime, faire un sans faute
            et obtenir le{" "}
            <span style={{ color: getColorForScore(scorePercentage) }}>
              Diamond Swan
            </span>
            . Tu as compris et retenu l'intégralité de l'interview. Le prochain
            invité, ça sera peut-être toi !
          </p>
        )}
      </div>
      <div id="goDeeper">
        <p>APPROFONDIR</p>
      </div>
      <div id="randomQuizz"></div>
      <div id="buttonDivScore">
        <button type="button">+ DE THÈMES</button>
        <Link className="link" to="/">
          <button type="button">RETOUR À L’ACCUEIL</button>
        </Link>
      </div>
    </div>
  )
}
