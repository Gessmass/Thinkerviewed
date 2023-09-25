// import { Carousel } from "react-responsive-carousel"

const Home = () => {
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
        </div>
        <div id="divDerniersQuizz">
          <h1 className="sectionTitle">LES DERNIERS QUIZZ</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
