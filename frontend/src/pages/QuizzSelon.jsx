import QuestionCard from "../components/QuestionCard"
import ScorePopup from "../components/ScorePopup"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const QuizzSelon = () => {
  const [questionnaryData, setQuestionnaryData] = useState([])
  const [questions, setQuestions] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showPopup, setShowPopup] = useState(true)
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill("")
  )

  // const [answers, setAnswers] = useState([])
  const { id } = useParams()
  const totalQuestions = questions.length

  const handleAnswerCorrect = () => {
    setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1)
  }

  const handleAnswerWrong = () => {
    setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1)
  }

  const handleOnClose = () => {
    setShowPopup(false)
  }
  const scorePercentage = (correctAnswers / totalQuestions) * 100
  const totalAnswers = correctAnswers + wrongAnswers
  const showPopupScore = totalAnswers === totalQuestions

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/questionnary/${id}`)
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
            const initialUserAnswers = new Array(res.data.length).fill("")
            setUserAnswers(initialUserAnswers)
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

  const tag = document.createElement("script")
  tag.src = "https://www.youtube.com/iframe_api"
  const firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  let player

  // OBLIGER DE COMMENTER LES DEUX FONCTIONS SUIVANTES PCK YT IS NOT DFINED DONC JPEUX PAS COMMIT SINON

  // window.onYouTubeIframeAPIReady = function () {
  //   player = new YT.Player("videoYoutube", {
  //     events: {
  //       onReady: onPlayerReady,
  //     },
  //   })
  // }

  // function onPlayerReady(event) {
  //   // console.log("Player is ready!", player);
  // }

  function seekVideo(event) {
    const seconds = parseInt(event.target.getAttribute("data-timestamp"))
    // console.log("ca marche", seconds, player)

    if (player && typeof player.seekTo === "function") {
      player.seekTo(seconds)
    } else {
      console.error(
        "Player is not initialized or seekTo method is not available"
      )
    }
  }

  return (
    <div id="quizSelonContent">
      {showPopupScore && showPopup === true && (
        <div id="popupScoreContainer">
          <ScorePopup
            scorePercentage={scorePercentage}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            handleOnClose={handleOnClose}
          />
        </div>
      )}
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
            id="videoYoutube"
            src={questionnaryData.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div id="questionCircles">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`circle ${
                userAnswers[index] !== "" ? "answered" : ""
              }`}
            ></div>
          ))}
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
            onAnswerCorrect={handleAnswerCorrect}
            onAnswerWrong={handleAnswerWrong}
            seekVideo={seekVideo}
            setUserAnswer={(answer) => {
              const updatedUserAnswers = [...userAnswers]
              updatedUserAnswers[i] = answer
              setUserAnswers(updatedUserAnswers)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default QuizzSelon
