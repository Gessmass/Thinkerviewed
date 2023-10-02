import { useState, useEffect } from "react"
import axios from "axios"

export default function QuestionCard({
  question,
  timestamp,
  badAnswer,
  questionId,
}) {
  const [answers, setAnswers] = useState([])
  // const [selectedTile, setSelectedTile] = useState(null)
  // const [answerIsCorrect, setAnswerIsCorrect] = useState(null)

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/questionnary/answers/${questionId}`
      )
      .then((res) => {
        setAnswers(res.data)
      })
      .catch((err) => {
        console.info("Erreur lors de la récupération des réponses", err)
      })
  }, [])

  const handleSelectedAnswer = (isCorrect, event) => {
    const tiles = document.querySelectorAll(".tile")
    tiles.forEach((tile) => tile.classList.remove("selected"))
    event.currentTarget.closest(".tile").classList.add("selected")

    if (isCorrect === 1) {
      event.currentTarget
        .closest("#questionCardContent")
        .classList.add("correct")
    } else {
      event.currentTarget
        .closest("#questionCardContent")
        .classList.add("incorrect")
      document.getElementById("badAnswer").style.display = "block"
    }
  }

  return (
    <div id="questionCardContent">
      <div id="questionInCard">
        <h3>{question}</h3>
      </div>
      <div id="answerArea">
        <div id="answerTiles">
          {answers.map((answer) => (
            <>
              <label key={answer.id} className="tile">
                <input
                  type="radio"
                  name="answer"
                  onChange={(event) =>
                    handleSelectedAnswer(answer.is_correct, event)
                  }
                />
                <p className="answer">{answer.answer_text}</p>
              </label>
            </>
          ))}
        </div>
        <div id="badAnswer">
          <p id="textBadAnswer">{badAnswer}</p>
        </div>
        <div id="timeCode">
          <div id="pointRouge"></div>
          {timestamp}
        </div>
      </div>
    </div>
  )
}
