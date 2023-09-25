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
      <h1 className="sectionTitle">NOTRE SELECTION</h1>
      <h1 className="sectionTitle">LES DERNIERS QUIZZ</h1>
      <Footer />
    </div>
  )
}

export default Home
