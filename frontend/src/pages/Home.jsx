import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import QuizCard from "../components/QuizCard"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [quizsToDisplay, setQuizsToDisplay] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/questionnary`)
      .then((res) => {
        setQuizsToDisplay(res.data)
      })
      .catch((err) => {
        console.info("Error when getting Questionnary", err)
      })
  })

  console.info(quizsToDisplay)

  return (
    <div id="homeBody">
      <div id="presentation">
        <p className="p1">
          Thinkerviewed propose de tester vos connaissances des vidéos de la
          chaîne Thinkerview au travers de QCMs.
        </p>
        <p className="p2">
          Choisissez un thème ou un intervenant, et commencez dès maintenant
        </p>
      </div>
      <div id="homepageContent">
        <div id="divSelection">
          <h1 className="sectionTitle">NOTRE SELECTION</h1>
          <div id="carouselSelection">
            <Carousel
              autoPlay={true}
              interval={4000}
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              className="my-carousel"
            >
              <div>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    quizsToDisplay[0].image
                  }`}
                  alt="Slide 1"
                  className="slide"
                />
              </div>
              <div>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    quizsToDisplay[1].image
                  }`}
                  alt="Slide 2"
                  className="slide"
                />
              </div>
              <div>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                    quizsToDisplay[2].image
                  }`}
                  alt="Slide 3"
                  className="slide"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div id="divDerniersQuizz">
          <h1 className="sectionTitle">LES DERNIERS QUIZZ</h1>
          <div id="derniersQuizContent">
            {quizsToDisplay.map((quiz, index) => (
              <QuizCard
                key={index}
                thumbnail={quiz.image}
                title={quiz.title}
                guest={quiz.guest}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
