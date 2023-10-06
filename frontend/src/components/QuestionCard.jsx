import { useState, useEffect } from "react"
import axios from "axios"

export default function QuestionCard({
  question,
  timestamp,
  badAnswer,
  questionId,
  onAnswerCorrect,
  onAnswerWrong,
  setUserAnswer,
  seekVideo,
}) {
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null)
  const [showBadAnswer, setShowBadAnswer] = useState(false)

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

  const handleSelectedAnswer = (isCorrect, answerId, answerIndex) => {
    if (selectedAnswer !== null) {
      return
    }
    setUserAnswer(answerIndex, isCorrect)
    setSelectedAnswer(answerId)

    if (isCorrect === 1) {
      setAnswerIsCorrect(true)
      onAnswerCorrect(true)
      // console.log("réponse correcte");
    } else {
      setAnswerIsCorrect(false)
      setShowBadAnswer(true)
      onAnswerWrong(true)
      // console.log("réponse fausse");
    }
  }

  // console.log(showBadAnswer)

  return (
    <div
      id="questionCardContent"
      className={
        answerIsCorrect === true
          ? "correct"
          : answerIsCorrect === false
          ? "incorrect"
          : ""
      }
    >
      <div id="questionInCard">
        <h3>{question}</h3>
      </div>
      <div id="answerArea">
        <div id="answerTiles">
          {answers.map((answer, index) => (
            <label
              key={answer.id}
              className={`tile ${
                selectedAnswer === answer.id ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="answer"
                onChange={() =>
                  handleSelectedAnswer(answer.is_correct, answer.id, index)
                }
                disabled={selectedAnswer !== null}
              />
              <p className="answer">{answer.answer_text}</p>
            </label>
          ))}
        </div>
        {showBadAnswer && (
          <div id="badAnswer">
            <p id="textBadAnswer">{badAnswer}</p>
            <div
              id="timeCode"
              data-timestamp="30"
              onClick={(e) => seekVideo(e)}
            >
              <div id="pointRouge"></div>
              {timestamp}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
