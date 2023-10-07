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
  onVideoSeek,
  // seekVideo,
}) {
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null)
  const [showBadAnswer, setShowBadAnswer] = useState(false)

  const formatTime = (timestamp) => {
    const hours = Math.floor(timestamp / 3600)
    const minutes = Math.floor((timestamp % 3600) / 60)
    const remainingSeconds = timestamp % 60

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(remainingSeconds).padStart(2, "0")}`
    } else {
      return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`
    }
  }

  const formatedTime = formatTime(timestamp)

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
                onClick={() =>
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
            <div id="timeCode" onClick={() => onVideoSeek(timestamp)}>
              <div id="pointRouge"></div>
              {formatedTime}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
