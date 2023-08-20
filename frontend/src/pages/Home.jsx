import { useState } from "react"
import "./Home.scss"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CarrouselVideos from "../components/CarrouselVideos"
import LatestQuizz from "../components/LatestQuizz"

const Home = () => {
  const videos = {
    "video 1": "https://www.youtube.com/embed/q-rVcT0tpj0",
    "video 2": "https://www.youtube.com/embed/TeW5tlALx_I",
    "video 3": "https://www.youtube.com/embed/VwP9Ikznkgw",
    "video 4": "https://www.youtube.com/embed/FkiMqLD3_YQ",
    "video 5": "https://www.youtube.com/embed/_x8lmFjSB0A",
  }

  const [selectedVideo, setSelectedVideo] = useState("")

  const handleVideoChange = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className="homeBody">
      <Navbar />
      <div className="presentation">
        <p className="p1">
          Thinkerviewed propose de tester vos connaissances des vidéos de la
          chaîne Thinkerview au travers de QCMs.
        </p>
        <p className="p2">
          Choisissez un thème ou un intervenant, et commencez dès maintenant
        </p>
      </div>
      <h1 className="sectionTitle">NOTRE SELECTION</h1>
      <div className="carrousel">
        <div className="videos">
          <iframe
            width="343"
            height="200"
            src={videos[selectedVideo]}
            title="Selected Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="carrouselButtons">
          <CarrouselVideos
            videos={videos}
            selectedVideo={selectedVideo}
            onChange={handleVideoChange}
          />
        </div>
      </div>
      <h1 className="sectionTitle">LES DERNIERS QUIZZ</h1>
      <LatestQuizz />
      <div className="selection">
        <h2>NOTRE SELECTION</h2>
      </div>
      <div className="derniersQuiz">
        <h2>DERNIERS QUIZ</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home
