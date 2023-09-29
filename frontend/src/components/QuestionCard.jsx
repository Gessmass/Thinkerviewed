import { useState, useEffect } from "react"
import axios from "axios"

export default function QuestionCard({
  question,
  timestamp,
  badAnswer,
  questionId,
}) {
  const [answers, setAnswers] = useState([])

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

  return (
    <div id="questionCardContent">
      <div id="questionInCard">
        <h3>{question}</h3>
      </div>
      <div id="answerArea">
        <div id="answerTiles">
          {answers.map((answer) => (
            <div key={answer.id} className="tile">
              <p className="answer">{answer.answer_text}</p>
            </div>
          ))}
        </div>
        <div id="badAnswer">
          <p>{badAnswer}</p>
        </div>
        <div id="timeCode">
          <div id="pointRouge"></div>
          {timestamp}
        </div>
      </div>
    </div>
  )
}
