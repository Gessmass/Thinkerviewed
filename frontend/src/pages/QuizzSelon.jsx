import QuestionCard from "../components/QuestionCard"
import { useState, useEffect } from "react"
import axios from "axios"

const QuizzSelon = () => {
  const [questionnaryData, setQuestionnaryData] = useState([])
  const [questions, setQuestions] = useState([])
  // const [answers, setAnswers] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/questionnary/2`)
      .then((res) => {
        setQuestionnaryData(res.data)

        const questionnaryId = res.data.id
        axios
          .get(
            `${
              import.meta.env.VITE_BACKEND_URL
            }/questionnary/questions/${questionnaryId}`
          )
          .then((res) => {
            setQuestions(res.data)
            //   axios
            //     .get(
            //       `${
            //         import.meta.env.VITE_BACKEND_URL
            //       }/questionnary/answers/${questionId}`
            //     )
            //     .then((res) => {
            //       setAnswers(res.data)
            //       console.log("answers :", res.data)
            //     })
            //     .catch((err) => {
            //       console.info("Erreur lors de la récupération des réponses", err)
            //     })
          })
          .catch((err) => {
            console.info(
              "Erreur lors de la récupération des questions du questionnaire",
              err
            )
          })
      })
      .catch((err) => {
        console.info("Erreur lors de la récupération du questionnaire", err)
      })
  }, [])

  return (
    <div id="quizSelonContent">
      <div id="selonDiv">
        <p>SELON...</p>
      </div>
      <div id="videoBackground">
        <h3>
          {questionnaryData.protagonist}: <br></br>
          {questionnaryData.title}
        </h3>
        <div id="youtubeEmbed">
          <iframe
            src={questionnaryData.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div id="questionsContent">
        {questions.map((question, i) => (
          <QuestionCard
            key={i}
            questionId={question.id}
            question={question.question_text}
            timestamp={question.timestamp_answer}
            badAnswer={question.text_bad_answer}
            // answers={answers}
          />
        ))}
      </div>
    </div>
  )
}

export default QuizzSelon
