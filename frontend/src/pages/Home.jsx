import "./Home.scss"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
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
