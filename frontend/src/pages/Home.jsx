import { useState } from "react"
import "./Home.scss"
import Navbar from "../components/Navbar"
import HomeButtons from "../components/HomeButtons"

const Home = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/q-rVcT0tpj0",
    "https://www.youtube.com/embed/TeW5tlALx_I",
    "https://www.youtube.com/embed/VwP9Ikznkgw",
  ]
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("")

  const handleVideoChange = (videoUrl) => {
    setSelectedVideoUrl(videoUrl)
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
            src={selectedVideoUrl}
            title="Selected Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="carrouselButtons">
          <HomeButtons
            videos={videoUrls}
            selectedVideoUrl={selectedVideoUrl}
            onChange={handleVideoChange}
          />
        </div>
      </div>
      <h1 className="sectionTitle">LES DERNIERS QUIZZ</h1>
    </div>
  )
}

export default Home
